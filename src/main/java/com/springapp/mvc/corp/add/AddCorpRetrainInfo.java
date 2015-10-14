package com.springapp.mvc.corp.add;

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

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@Controller
@RequestMapping("/add_corp_retrain_info")
public class AddCorpRetrainInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @RequestParam(value = "retra_id", required = false) Integer  retra_id,
            @RequestParam(value = "retra_corp_id", required = false) Integer  retra_corp_id,
            @RequestParam(value = "retra_mode", required = false) String  retra_mode,
            @RequestParam(value = "retra_content", required = false) String  retra_content,
            @RequestParam(value = "retra_acc_cost", required = false) BigDecimal  retra_acc_cost,
            @RequestParam(value = "retra_dt", required = false) String  retra_dt,
            @RequestParam(value = "retra_requests", required = false) String  retra_requests

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

        try {
            conn = DriverManager.getConnection(url, user, password);

            String sql = "INSERT INTO work.tb_corp_retrain(\n" +
                    "              retra_corp_id, retra_mode, retra_content, retra_acc_cost, \n" +
                    "            retra_dt, retra_requests)\n" +
                    "    VALUES ( ?, ?, ?, ?, \n" +
                    "            ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, retra_corp_id);
            pst.setString(2,  retra_mode);
            pst.setString(3, retra_content);
            pst.setBigDecimal(4,  retra_acc_cost);
            java.sql.Date d_retra_dt = null;
            if ( retra_dt != null &&  retra_dt.length() > 2)
                d_retra_dt = java.sql.Date.valueOf( retra_dt);
            pst.setDate(5, d_retra_dt);
            pst.setString(6,  retra_requests);
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