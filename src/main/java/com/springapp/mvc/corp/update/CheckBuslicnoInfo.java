package com.springapp.mvc.corp.update;

/**
 * Created by xwq on 14-4-15.
 */

import common.util.DBInfo;
import common.util.DataShop;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping("/check_buslicno_info")
public class CheckBuslicnoInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam("buslicno") String buslicno,
            @RequestParam("id") Integer id,
            HttpSession session
    ) throws Exception{
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        DataShop dataShop = new DataShop();
        List list = new ArrayList();
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
        try {
            conn = DriverManager.getConnection(url, user, password);
            stmt = conn.createStatement();
            int i_num_tj = 0;
            String sql = "";
            if (id == 0) {
                sql = "select  count(1) as num_tj " +
                        " from work.tb_corp WHERE buslicno='" + buslicno + "'";
            } else {
                sql = "select  count(1) as num_tj " +
                        " from work.tb_corp WHERE buslicno='" + buslicno + "' and id !=" + id;
            }


            rs = stmt.executeQuery(sql);
            while (rs.next()) {
                i_num_tj = rs.getInt(1);
                if (i_num_tj == 0 || rs.getString(1) == null) {
                    dataShop.setSuccess(true);
                } else {
                    dataShop.setSuccess(false);
                }

            }


        }catch (SQLException e){
            System.out.print(e.getMessage());
        }finally {
            try {
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                System.out.print(e.getMessage());
            }
        }

        return dataShop;
    }
}