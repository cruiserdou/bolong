package com.springapp.mvc.workmgr.add;

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

@Controller
@RequestMapping("/add_maintain_plan_info")
public class AddMaintainPlanInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
//            @RequestParam("mp_id") Integer mp_id,
            @RequestParam("mp_corp_id") Integer mp_corp_id,
            @RequestParam("mp_listcode") String mp_listcode,
            @RequestParam("mp_province") String mp_province,
            @RequestParam("mp_city") String mp_city,
            @RequestParam("mp_county") String mp_county,
            @RequestParam("mp_last_date") String mp_last_date,
            @RequestParam("mp_content") String mp_content,
            @RequestParam("mp_result") String mp_result,
            @RequestParam("mp_hisdesc") String mp_hisdesc,
            @RequestParam("mp_remark") String mp_remark





            ) throws Exception{
        DataShop dataShop = new DataShop();
        dataShop.setSuccess(true);
        Connection conn = null;
        PreparedStatement pst = null;
        try {
            Class.forName("org.postgresql.Driver").newInstance();
        } catch (Exception e) {
            System.out.print(e.getMessage());
        }

        DBInfo connstr = new DBInfo();
        String url = connstr.getUrl();
        String user = connstr.getUser();
        String password = connstr.getPassword();
        java.util.Date date = new java.util.Date();
        Timestamp timestamp = new Timestamp(date.getTime());
        try {
            conn = DriverManager.getConnection(url, user, password);

            String sql = "INSERT INTO work.tb_maintain_plan(\n" +
                    "            mp_corp_id, mp_listcode, mp_province, mp_city, mp_county, \n" +
                    "            mp_last_date, mp_content, mp_result, mp_hisdesc, mp_remark, inputdt,inputid)\n" +
                    "    VALUES (?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, mp_corp_id);
            pst.setString(2, mp_listcode);
            pst.setString(3, mp_province);
            pst.setString(4, mp_city);
            pst.setString(5, mp_county);
//            java.sql.Date d_mp_last_date = null;
//            if (mp_last_date != null && mp_last_date.length() > 2)
//                d_mp_last_date = java.sql.Date.valueOf(mp_last_date);
//            pst.setDate(6, d_mp_last_date);
            Timestamp sql_senddate = Timestamp.valueOf(mp_last_date);
            pst.setTimestamp(6,sql_senddate);
            pst.setString(7, mp_content);
            pst.setString(8, mp_result);
            pst.setString(9, mp_hisdesc);
            pst.setString(10, mp_remark);
            pst.setTimestamp(11, timestamp);
            pst.setInt(12, Integer.parseInt(session.getAttribute("id").toString()));
            pst.executeUpdate();



            dataShop.setSuccess(true);

        } catch (SQLException e) {
            System.out.print(e.getMessage());
        } finally {
            try {
                if (pst != null) pst.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                System.out.print(e.getMessage());
            }
        }

        return dataShop;
    }
}