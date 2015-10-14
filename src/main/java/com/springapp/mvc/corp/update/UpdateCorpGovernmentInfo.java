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

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@Controller
@RequestMapping("/update_corp_government_info")
public class UpdateCorpGovernmentInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam(value = "gov_id", required = false) Integer  gov_id,
//            @RequestParam(value = "gov_corp_id", required = false) Integer  gov_corp_id,
            @RequestParam(value = "gov_domain", required = false) String gov_domain,
            @RequestParam(value = "gov_office", required = false) String gov_office,
            @RequestParam(value = "gov_desc", required = false) String gov_desc,
            @RequestParam(value = "gov_contact", required = false) String gov_contact,
            @RequestParam(value = "gov_psotion", required = false) String gov_psotion,
            @RequestParam(value = "gov_doctype", required = false) String gov_doctype,
            @RequestParam(value = "gov_docnum", required = false) String gov_docnum,
            @RequestParam(value = "gov_phone", required = false) String gov_phone,
            @RequestParam(value = "gov_fax", required = false) String gov_fax,
            @RequestParam(value = "gov_email", required = false) String gov_email,
            @RequestParam(value = "gov_qq", required = false) String gov_qq,
            @RequestParam(value = "gov_webchat", required = false) String gov_webchat,
            @RequestParam(value = "gov_tel", required = false) String gov_tel,
            @RequestParam(value = "gov_remark", required = false) String gov_remark

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

            String sql = "UPDATE work.tb_corp_government\n" +
                    "   SET  gov_domain=?, gov_office=?, gov_desc=?, \n" +
                    "       gov_contact=?, gov_psotion=?, gov_doctype=?, gov_docnum=?, gov_phone=?, \n" +
                    "       gov_fax=?, gov_email=?, gov_qq=?, gov_webchat=?, gov_tel=?, gov_remark=? " +
                    "  where gov_id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, gov_domain);
            pst.setString(2, gov_office);
            pst.setString(3, gov_desc);
            pst.setString(4, gov_contact);
            pst.setString(5, gov_psotion);
            pst.setString(6, gov_doctype);
            pst.setString(7, gov_docnum);
            pst.setString(8, gov_phone);
            pst.setString(9, gov_fax);
            pst.setString(10, gov_email);
            pst.setString(11, gov_qq);
            pst.setString(12, gov_webchat);
            pst.setString(13, gov_tel);
            pst.setString(14, gov_remark);
            pst.setInt(15, gov_id);
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