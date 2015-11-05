package com.springapp.mvc.corp;

import common.util.DBInfo;
import common.util.DataShop;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/img_view")
public class img_view {
    @RequestMapping(method = RequestMethod.GET)
    public String printWelcome(ModelMap model,
          @RequestParam(value = "corp_id", required = true) Integer corp_id
    ) {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        List listX = new ArrayList();

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

            String sql = "SELECT   img_name   FROM work.tb_corp_img where img_corp_id= "+corp_id;

            rs = stmt.executeQuery(sql);

            ResultSetMetaData md_list = rs.getMetaData();
            int columnCount_list = md_list.getColumnCount();

            while(rs.next()) {
                Map rowDataList = new HashMap<String, String>();
                for (int j = 1; j <= columnCount_list; j++) {
                    rowDataList.put(md_list.getColumnName(j), rs.getString(j));
                }
                listX.add(rowDataList);
            }
            model.addAttribute("img_name", listX);

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
        return "img_view";
    }
}