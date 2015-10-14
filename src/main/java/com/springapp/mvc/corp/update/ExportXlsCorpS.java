package com.springapp.mvc.corp.update;

import common.util.DBInfo;
import common.util.DataShop;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.hssf.util.Region;
import org.apache.poi.hwpf.HWPFDocument;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.io.FileOutputStream;
import java.sql.*;
import java.util.HashMap;
import java.util.Map;


@Controller
@RequestMapping("/import_corp_s")
public class ExportXlsCorpS {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpServletRequest request,
            @RequestParam(value = "fileName", required = false) String fileName,
            @RequestParam("id_list") String id_list
    ) throws Exception{
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;


        HWPFDocument document = null;
            DataShop dataShop = new DataShop();

        Map<String, String> map=new HashMap<String, String>();
        try{
            Class.forName("org.postgresql.Driver").newInstance();
        }catch (Exception e){
            System.out.print(e.getMessage());
        }
        DBInfo connstr = new DBInfo();
        String url = connstr.getUrl();
        String user = connstr.getUser();
        String password = connstr.getPassword();
        try{
            conn = DriverManager.getConnection(url, user, password);
            stmt = conn.createStatement();
            String projectPath_target = request.getSession().getServletContext().getRealPath("/static/upload/");

            id_list=id_list.substring(1);
            System.out.println(id_list);

            String sql = "select RANK() OVER(ORDER BY id) as 序号,buslicno as 营业执照号码,name as 企业名称,unit as 单位类别,legrep as  法定代表人," +
                    " nos as 公司简称,postal as 邮政编码,nature as 企业性质,regcap as 注册资本（万元）,regdt as 注册日期,remark as 备注 " +
                    " from work.tb_corp  where id in("+id_list+")";
            System.out.print(sql);
            rs = stmt.executeQuery(sql);

            //创建新的Excel工作薄
//            XSSFWorkbook workbook = new XSSFWorkbook(new FileInputStream(projectPath_template + "/" + "s_data.xlsx"));
            HSSFWorkbook workbook=new HSSFWorkbook();
            HSSFSheet sheet=workbook.createSheet("企业信息");

            HSSFCellStyle style0 = workbook.createCellStyle();
            HSSFFont font0 = workbook.createFont();
            font0.setBoldweight((short) 16);
            font0.setFontHeightInPoints((short) 16);
//            font0.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
            style0.setFont(font0);
            style0.setAlignment(HSSFCellStyle.ALIGN_CENTER);
            style0.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);


            HSSFCellStyle style1 = workbook.createCellStyle();
            style1.setBorderBottom(HSSFCellStyle.BORDER_THIN);
            style1.setBorderLeft(HSSFCellStyle.BORDER_THIN);
            style1.setBorderRight(HSSFCellStyle.BORDER_THIN);
            style1.setBorderTop(HSSFCellStyle.BORDER_THIN);
            HSSFFont font1 = workbook.createFont();
            font1.setBoldweight((short) 11);
            font1.setFontHeightInPoints((short) 11);
            style1.setFont(font1);
            style1.setWrapText(true);
            style1.setAlignment(HSSFCellStyle.ALIGN_CENTER);
            style1.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);


            HSSFCellStyle style2 = workbook.createCellStyle();
            style2.setBorderBottom(HSSFCellStyle.BORDER_THIN);
            style2.setBorderLeft(HSSFCellStyle.BORDER_THIN);
            style2.setBorderRight(HSSFCellStyle.BORDER_THIN);
            style2.setBorderTop(HSSFCellStyle.BORDER_THIN);
            HSSFFont font2 = workbook.createFont();
            font2.setBoldweight((short) 10);
            font2.setFontHeightInPoints((short) 10);
            style2.setFont(font2);
            style2.setAlignment(HSSFCellStyle.ALIGN_CENTER);
            style2.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);

            HSSFRow row1 = sheet.createRow((short) 0);
            sheet.addMergedRegion(new Region(0, (short) 0, 0, (short) 10));
            HSSFCell ce = row1.createCell((short) 0);

            ce.setCellValue(new HSSFRichTextString("企业信息"));
            ce.setCellStyle(style0);
            row1.setHeight((short) 600);

            HSSFRow row=sheet.createRow(1);
            sheet.setColumnWidth(0,1500);
            sheet.setColumnWidth(1,3000);
            sheet.setColumnWidth(2,5000);
            sheet.setColumnWidth(3,3000);
            sheet.setColumnWidth(4,4000);
            sheet.setColumnWidth(5,3000);
            sheet.setColumnWidth(6,3000);
            sheet.setColumnWidth(7,5000);
            sheet.setColumnWidth(8,3000);
            sheet.setColumnWidth(9,3000);
            sheet.setColumnWidth(10,3000);
            row.setHeight((short) 550);

            HSSFCell cell ;

            ResultSetMetaData smdata=rs.getMetaData();
            int nColum=smdata.getColumnCount();
            for(int i=1;i<=nColum;i++) {
                cell = row.createCell(i - 1);
                cell.setCellType(HSSFCell.CELL_TYPE_STRING);
                cell.setCellValue(new HSSFRichTextString(smdata.getColumnLabel(i)));
                cell.setCellStyle(style1);
            }

            int intRow=2;
            while(rs.next()){
                row=sheet.createRow(intRow);
                row.setHeight((short) 350);
                for(int j=1;j<=nColum;j++){
                    cell=row.createCell(j-1);
                    cell.setCellType(HSSFCell.CELL_TYPE_STRING);
                    String result="";
                    Object obj=rs.getObject(j);
                    if(obj!=null){
                        result=obj.toString();
                    }
                    cell.setCellValue(new HSSFRichTextString(result));
                    cell.setCellStyle(style2);
                }
                intRow++;
            }
            FileOutputStream fout=new FileOutputStream(projectPath_target+ "/" +fileName);
            workbook.write(fout);
            fout.flush();
            fout.close();

            dataShop.setSuccess(true);

        }catch (SQLException e){
            System.out.print(e.getMessage());
        }finally {
            try{
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            }catch (SQLException e){
                System.out.print(e.getMessage());
            }
        }
        return dataShop;
    }

}
