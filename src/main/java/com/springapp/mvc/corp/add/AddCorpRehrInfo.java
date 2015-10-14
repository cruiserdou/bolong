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
@RequestMapping("/add_corp_rehr_info")
public class AddCorpRehrInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @RequestParam(value = "rehr_id", required = false) Integer  rehr_id,
            @RequestParam(value = "rehr_corp_id", required = false) Integer  rehr_corp_id,
            @RequestParam(value = "rehr_post", required = false) String rehr_post,
            @RequestParam(value = "rehr_num", required = false) String rehr_num,
            @RequestParam(value = "rehr_salary", required = false) BigDecimal rehr_salary,
            @RequestParam(value = "rehr_sex_req", required = false) String rehr_sex_req,
            @RequestParam(value = "rehr_age_req", required = false) String rehr_age_req,
            @RequestParam(value = "rehr_requests", required = false) String rehr_requests



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

            String sql = "INSERT INTO work.tb_corp_rehr(\n" +
                    "              rehr_corp_id, rehr_post, rehr_num, rehr_salary, rehr_sex_req, \n" +
                    "            rehr_age_req, rehr_requests)\n" +
                    "    VALUES (?, ?, ?, ?, ?, \n" +
                    "            ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, rehr_corp_id);
            pst.setString(2, rehr_post);
            pst.setString(3, rehr_num);
            pst.setBigDecimal(4, rehr_salary);
            pst.setString(5, rehr_sex_req);
            pst.setString(6, rehr_age_req);
            pst.setString(7, rehr_requests);
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