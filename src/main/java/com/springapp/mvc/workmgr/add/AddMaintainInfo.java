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
@RequestMapping("/add_maintain_info")
public class AddMaintainInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
            @RequestParam("mi_mp_id") Integer mi_mp_id,
//            @RequestParam("mi_corp_id") Integer mi_corp_id,
//            @RequestParam("mi_listcode") String mi_listcode,
//            @RequestParam("mi_province") String mi_province,
//            @RequestParam("mi_city") String mi_city,
//            @RequestParam("mi_county") String mi_county,
            @RequestParam("mi_mt_date") String mi_mt_date,
            @RequestParam("mi_cust_type") String mi_cust_type,
            @RequestParam("mi_next_date") String mi_next_date,
            @RequestParam("mi_next_plan") String mi_next_plan,
            @RequestParam("mi_remark") String mi_remark
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

            String sql = "INSERT INTO work.tb_maintain_info(\n" +
                    "             mi_corp_id, mi_listcode, mi_province, mi_city, mi_county, \n" +
                    "            mi_mt_date, mi_cust_type, mi_next_date, mi_next_plan, mi_remark, inputdt,inputid,mi_mp_id)\n" +
                    "    VALUES (?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, ?, ?,?)";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, 0);
            pst.setString(2, "");
            pst.setString(3, "");
            pst.setString(4, "");
            pst.setString(5, "");
            Date d_mi_mt_date = null;
            if (mi_mt_date != null && mi_mt_date.length() > 2)
                d_mi_mt_date = Date.valueOf(mi_mt_date);
            pst.setDate(6, d_mi_mt_date);
            pst.setString(7, mi_cust_type);
            Date d_mi_next_date = null;
            if (mi_next_date != null && mi_next_date.length() > 2)
                d_mi_next_date = Date.valueOf(mi_next_date);
            pst.setDate(8, d_mi_next_date);
            pst.setString(9, mi_next_plan);
            pst.setString(10, mi_remark);
            pst.setTimestamp(11, timestamp);
            pst.setInt(12, Integer.parseInt(session.getAttribute("id").toString()));
            pst.setInt(13, mi_mp_id);
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