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
@RequestMapping("/add_refi_mos_info")
public class AddRefiMosInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
            @RequestParam("mos_corp_id") Integer mos_corp_id,
            @RequestParam("mos_cots") String mos_cots,
            @RequestParam("mos_amounts") String mos_amounts,
            @RequestParam("mos_mop") String mos_mop,
            @RequestParam("mos_rop") String mos_rop



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

            String sql = "INSERT INTO work.tb_refi_mos(\n" +
                    "             mos_corp_id, mos_cots, mos_amounts, mos_mop, mos_rop, inputdt,inputid)\n" +
                    "    VALUES (?, ?, ?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, mos_corp_id);
            pst.setString(2, mos_cots);
            pst.setString(3, mos_amounts);
            pst.setString(4, mos_mop);
            pst.setString(5, mos_rop);
            pst.setTimestamp(6, timestamp);
            pst.setInt(7, Integer.parseInt(session.getAttribute("id").toString()));
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