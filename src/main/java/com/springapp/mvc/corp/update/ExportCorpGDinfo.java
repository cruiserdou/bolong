package com.springapp.mvc.corp.update;

/**
 * Created by xwq on 14-4-15.
 */

import common.util.DBInfo;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRichTextString;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.sql.*;


public class ExportCorpGDinfo {

    public  void exportCorpshareholderinfo(HttpServletRequest request,Integer id)   throws Exception {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        try {
            Class.forName("org.postgresql.Driver").newInstance();
        } catch (Exception e) {
            System.out.print(e.getMessage());
        }
        DBInfo connstr = new DBInfo();
        String url = connstr.getUrl();
        String user = connstr.getUser();
        String password = connstr.getPassword();
        try {
            conn = DriverManager.getConnection(url, user, password);
            stmt = conn.createStatement();
            String projectPath_target = request.getSession().getServletContext().getRealPath("/static/upload/");
            File xlsFile =new File(projectPath_target + "/" + "coprinfo.xls");
            FileInputStream fin=new FileInputStream(xlsFile);
            HSSFWorkbook workbook=new HSSFWorkbook(fin);
            HSSFSheet sheet=workbook.getSheetAt(0);

            String sql = "select *   from work.tb_corp_shareholder   where gd_corp_id="+id;

            rs = stmt.executeQuery(sql);

            ResultSetMetaData smdata=rs.getMetaData();
            int nColum=smdata.getColumnCount();
            //遍历数据，填充表格
            int intRow=134;
            while(rs.next()){
                HSSFCell cell_gd_shtype = sheet.getRow(intRow).getCell(0);
                cell_gd_shtype.setCellValue(rs.getString("gd_shtype"));
                HSSFCell cell_gd_shname = sheet.getRow(intRow).getCell(1);
                cell_gd_shname.setCellValue(rs.getString("gd_shname"));
                HSSFCell cell_gd_shdoctype = sheet.getRow(intRow).getCell(2);
                cell_gd_shdoctype.setCellValue(rs.getString("gd_shdoctype"));
                HSSFCell cell_gd_shdocnum = sheet.getRow(intRow).getCell(3);
                cell_gd_shdocnum.setCellValue(rs.getString("gd_shdocnum"));
                HSSFCell cell_gd_shareholdnum = sheet.getRow(intRow).getCell(4);
                cell_gd_shareholdnum.setCellValue(rs.getString("gd_shareholdnum"));
                HSSFCell cell_gd_currencynum = sheet.getRow(intRow).getCell(5);
                cell_gd_currencynum.setCellValue(rs.getString("gd_currencynum"));
                HSSFCell cell_gd_freezenum = sheet.getRow(intRow).getCell(6);
                cell_gd_freezenum.setCellValue(rs.getString("gd_freezenum"));
                HSSFCell cell_gd_psotion = sheet.getRow(intRow).getCell(7);
                cell_gd_psotion.setCellValue(rs.getString("gd_psotion"));
                HSSFCell cell_gd_phone = sheet.getRow(intRow).getCell(8);
                cell_gd_phone.setCellValue(rs.getString("gd_phone"));
                HSSFCell cell_gd_fax = sheet.getRow(intRow).getCell(9);
                cell_gd_fax.setCellValue(rs.getString("gd_fax"));
                HSSFCell cell_gd_email = sheet.getRow(intRow).getCell(10);
                cell_gd_email.setCellValue(rs.getString("gd_email"));
                HSSFCell cell_gd_qq = sheet.getRow(intRow).getCell(11);
                cell_gd_qq.setCellValue(rs.getString("gd_qq"));
                HSSFCell cell_gd_webchat = sheet.getRow(intRow).getCell(12);
                cell_gd_webchat.setCellValue(rs.getString("gd_webchat"));
                HSSFCell cell_gd_tel = sheet.getRow(intRow).getCell(13);
                cell_gd_tel.setCellValue(rs.getString("gd_tel"));

                intRow++;
            }
           
            FileOutputStream fOut = new FileOutputStream(projectPath_target + "/" +"coprinfo.xls");


            //把相应的Excel工作薄存盘
            workbook.write(fOut);
            fOut.flush();
            fOut.close();

        } catch (SQLException e) {
            System.out.print(e.getMessage());
        } finally {
            try {
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                System.out.print(e.getMessage());
            }
        }

    }
}