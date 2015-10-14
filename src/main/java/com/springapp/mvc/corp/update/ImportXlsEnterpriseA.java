package com.springapp.mvc.corp.update;

/**
 * Created by xwq on 14-4-15.
 */

import common.util.DBInfo;
import common.util.DataShop;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.*;

@Controller
@RequestMapping("/import_corp_xlsa")
public class ImportXlsEnterpriseA {
    private static final int BUFFER_SIZE = 16 * 1024;

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpServletRequest request,
                           @RequestParam(value = "file", required = false) MultipartFile file
    ) throws Exception {
        DataShop dataShop = new DataShop();


        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        PreparedStatement pst = null;
        String projectPath = request.getSession().getServletContext().getRealPath("/static/upload/");
        String src_file = null;
        if (!file.isEmpty()) {

            file.transferTo(new File(projectPath + "/" + file.getOriginalFilename()));
        }
       src_file=projectPath+'/'+file.getOriginalFilename();
        try {
            Class.forName("org.postgresql.Driver").newInstance();
        } catch (Exception e) {
            System.out.print(e.getMessage());
        }

        DBInfo connstr = new DBInfo();
        String url = connstr.getUrl();
        String user = connstr.getUser();
        String password = connstr.getPassword();

        try{
            FileInputStream fin=new FileInputStream(src_file);
            HSSFWorkbook workbook=new HSSFWorkbook(fin);
            HSSFSheet sheet=workbook.getSheetAt(0);
            HSSFRow row=null;
            HSSFCell cell=null;

            int totalRow=sheet.getLastRowNum();

            String buslicno = "";
            String name = "";
            String unit = "";
            String legrep = "";
            String province = "";
            String city = "";
            String county = "";

            String nos = "";
            String postal = "";
            String nature = "";
            String regcap = "";

            String bustermfdt = "";
            String bustremtdt = "";
            String regdt = "";

            String list_area = "";
            String listcode = "";
            String listprice = "";
            String listdt = "";

            String channels = "";
            String webchat = "";
            String staffnum = "";
            String regist_organ = "";
            String regaddr = "";
            String offaddr = "";
            String scope = "";
            String mbus = "";
            String phoinf = "";

            String remark = "";

            conn = DriverManager.getConnection(url, user, password);
            stmt = conn.createStatement();



            java.util.Date date = new java.util.Date();
            Timestamp timestamp = new Timestamp(date.getTime());

            for(int i=1;i<=totalRow;i++){
                row = sheet.getRow(i);
                cell = row.getCell(0);
                buslicno=cell.getRichStringCellValue().toString();
                cell = row.getCell(1);
                name=cell.getRichStringCellValue().toString();
                cell = row.getCell(2);
                unit = cell.getRichStringCellValue().toString();
                cell = row.getCell(3);
                legrep = cell.getRichStringCellValue().toString();
                cell = row.getCell(4);
                province = cell.getRichStringCellValue().toString();
                cell = row.getCell(5);
                city = cell.getRichStringCellValue().toString();
                cell = row.getCell(6);
                county = cell.getRichStringCellValue().toString();
                cell = row.getCell(7);
                nos = cell.getRichStringCellValue().toString();
                cell = row.getCell(8);
                postal = cell.getRichStringCellValue().toString();
                cell = row.getCell(9);
                nature =  cell.getRichStringCellValue().toString();
                cell = row.getCell(10);
                regcap = cell.getRichStringCellValue().toString();
                cell = row.getCell(11);
                bustermfdt = cell.getRichStringCellValue().toString();
                cell = row.getCell(12);
                bustremtdt =  cell.getRichStringCellValue().toString();
                cell = row.getCell(13);
                regdt = cell.getRichStringCellValue().toString();
                cell = row.getCell(14);
                list_area = cell.getRichStringCellValue().toString();
                cell = row.getCell(15);
                listcode = cell.getRichStringCellValue().toString();
                cell = row.getCell(16);
                listprice =  cell.getRichStringCellValue().toString();
                cell = row.getCell(17);
                listdt = cell.getRichStringCellValue().toString();

                cell = row.getCell(18);
                channels = cell.getRichStringCellValue().toString();
                cell = row.getCell(19);
                webchat =  cell.getRichStringCellValue().toString();
                cell = row.getCell(20);
                staffnum = cell.getRichStringCellValue().toString();
                cell = row.getCell(21);
                regist_organ = cell.getRichStringCellValue().toString();
                cell = row.getCell(22);
                regaddr =  cell.getRichStringCellValue().toString();
                cell = row.getCell(23);
                offaddr = cell.getRichStringCellValue().toString();
                cell = row.getCell(24);
                scope = cell.getRichStringCellValue().toString();
                cell = row.getCell(25);
                mbus =  cell.getRichStringCellValue().toString();
                cell = row.getCell(26);
                phoinf = cell.getRichStringCellValue().toString();

                cell = row.getCell(27);
                remark=cell.getRichStringCellValue().toString();

                String sql_max_id = "select nextval('work.corp_id_seq'::regclass) as corp_id";
                pst = conn.prepareStatement(sql_max_id);
                rs = pst.executeQuery();
                int max_id=1 ;
                while (rs.next()) {
                    max_id = rs.getInt("corp_id");
                }

                String sql = "INSERT INTO work.tb_corp(id,buslicno, name, unit, legrep, province, city, county, nos, \n" +
                        "            postal, nature, regcap, bustermfdt, bustremtdt, regdt, list_area, \n" +
                        "            listcode, listprice, listdt, channels, webchat, staffnum, regist_organ, " +
                        "           regaddr, offaddr, scope, mbus,   phoinf, remark,inputdt )"+
                        " values(?,?,?,?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                pst=conn.prepareStatement(sql);
                pst.setInt(1, max_id);
                pst.setString(2, buslicno);
                pst.setString(3,name);
                pst.setString(4,unit);
                pst.setString(5,legrep);
                pst.setString(6,province);
                pst.setString(7,city);
                pst.setString(8,county);
                pst.setString(9,nos);
                pst.setString(10,postal);
                pst.setString(11,nature);
                pst.setString(12,regcap);
                Date d_bustermfdt = null;
                if (bustermfdt != null && bustermfdt.length() > 2)
                    d_bustermfdt = Date.valueOf(bustermfdt);
                pst.setDate(13, d_bustermfdt);
                Date d_bustremtdt = null;
                if (bustremtdt != null && bustremtdt.length() > 2)
                    d_bustremtdt = Date.valueOf(bustremtdt);
                pst.setDate(14, d_bustremtdt);
                Date d_regdt = null;
                if (regdt != null && regdt.length() > 2)
                    d_regdt = Date.valueOf(regdt);
                pst.setDate(15, d_regdt);
                pst.setString(16, list_area);
                pst.setString(17, listcode);
                pst.setString(18, listprice);
                Date d_listdt = null;
                if (listdt != null && listdt.length() > 2)
                    d_listdt = Date.valueOf(listdt);
                pst.setDate(19, d_listdt);
                pst.setString(20, channels);
                pst.setString(21, webchat);
                pst.setString(22, staffnum);
                pst.setString(23, regist_organ);
                pst.setString(24, regaddr);
                pst.setString(25, offaddr);
                pst.setString(26, scope);
                pst.setString(27, mbus);
                pst.setString(28, phoinf);
                pst.setString(29, remark);
                pst.setTimestamp(30, timestamp);

                pst.executeUpdate();


                String sql_corp_contact = "INSERT INTO work.tb_corp_contact(cont_corp_id) VALUES (?) ";
                pst = conn.prepareStatement(sql_corp_contact);
                pst.setInt(1, max_id);
                pst.executeUpdate();


                String sql_corp_finance = "INSERT INTO work.tb_corp_finance(fin_corp_id) VALUES (?)";
                pst = conn.prepareStatement(sql_corp_finance);
                pst.setInt(1, max_id);
                pst.executeUpdate();


                String sql_corp_government = "INSERT INTO work.tb_corp_government(gov_corp_id) VALUES (?)";
                pst = conn.prepareStatement(sql_corp_government);
                pst.setInt(1, max_id);
                pst.executeUpdate();


                String sql_corp_investors = "INSERT INTO work.tb_corp_investors(inv_corp_id) VALUES (?) ";
                pst = conn.prepareStatement(sql_corp_investors);
                pst.setInt(1, max_id);
                pst.executeUpdate();


                String sql_corp_maintain = "INSERT INTO work.tb_corp_maintain(mai_corp_id) VALUES (?)";
                pst = conn.prepareStatement(sql_corp_maintain);
                pst.setInt(1, max_id);
                pst.executeUpdate();


                String sql_corp_refinancing = "INSERT INTO work.tb_corp_refinancing(refi_corp_id) VALUES (?)";
                pst = conn.prepareStatement(sql_corp_refinancing);
                pst.setInt(1, max_id);
                pst.executeUpdate();


                String sql_corp_rehr = "INSERT INTO work.tb_corp_rehr(rehr_corp_id) VALUES (?)";
                pst = conn.prepareStatement(sql_corp_rehr);
                pst.setInt(1, max_id);
                pst.executeUpdate();


                String sql_corp_retrain = "INSERT INTO work.tb_corp_retrain(retra_corp_id) VALUES (?)";
                pst = conn.prepareStatement(sql_corp_retrain);
                pst.setInt(1, max_id);
                pst.executeUpdate();


                String sql_corp_service = "INSERT INTO work.tb_corp_service(srv_corp_id) VALUES (?)";
                pst = conn.prepareStatement(sql_corp_service);
                pst.setInt(1, max_id);
                pst.executeUpdate();


                String sql_corp_shareholder = "INSERT INTO work.tb_corp_shareholder(gd_corp_id) VALUES (?)";
                pst = conn.prepareStatement(sql_corp_shareholder);
                pst.setInt(1, max_id);
                pst.executeUpdate();

            }
            dataShop.setSuccess(true);

        } catch (FileNotFoundException e) {
            System.out.println("1"+e);
            e.printStackTrace();
        } catch(IOException ex){
            System.out.println("2"+ex);
            ex.printStackTrace();
        } catch(SQLException exx){
            System.out.println("3"+exx);
            exx.printStackTrace();
        } finally{
            try {
                if (pst != null) pst.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                System.out.println("4"+e);
                e.printStackTrace();
            }
        }

        return dataShop;
    }
}
