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

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@Controller
@RequestMapping("/add_corp_investors_info")
public class AddCorpInvestorsInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @RequestParam(value = "inv_id", required = false) Integer  inv_id,
            @RequestParam(value = "inv_corp_id", required = false) Integer  inv_corp_id,
            @RequestParam(value = "inv_domain", required = false) String inv_domain,
            @RequestParam(value = "inv_csrc_type1", required = false) String inv_csrc_type1,
            @RequestParam(value = "inv_csrc_type2", required = false) String inv_csrc_type2,
            @RequestParam(value = "inv_csrc_type3", required = false) String inv_csrc_type3,
            @RequestParam(value = "inv_csrc_type4", required = false) String inv_csrc_type4,
            @RequestParam(value = "inv_indclass1", required = false) String inv_indclass1,
            @RequestParam(value = "inv_indclass2", required = false) String inv_indclass2,
            @RequestParam(value = "inv_indclass3", required = false) String inv_indclass3,
            @RequestParam(value = "inv_indclass4", required = false) String inv_indclass4,
            @RequestParam(value = "inv_contact", required = false) String inv_contact,
            @RequestParam(value = "inv_psotion", required = false) String inv_psotion,
            @RequestParam(value = "inv_doctype", required = false) String inv_doctype,
            @RequestParam(value = "inv_docnum", required = false) String inv_docnum,
            @RequestParam(value = "inv_phone", required = false) String inv_phone,
            @RequestParam(value = "inv_fax", required = false) String inv_fax,
            @RequestParam(value = "inv_email", required = false) String inv_email,
            @RequestParam(value = "inv_qq", required = false) String inv_qq,
            @RequestParam(value = "inv_webchat", required = false) String inv_webchat,
            @RequestParam(value = "inv_tel", required = false) String inv_tel,
            @RequestParam(value = "inv_remark", required = false) String inv_remark

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

            String sql = "INSERT INTO work.tb_corp_investors(\n" +
                    "             inv_corp_id, inv_domain, inv_csrc_type1, inv_csrc_type2, \n" +
                    "            inv_csrc_type3, inv_csrc_type4, inv_indclass1, inv_indclass2, \n" +
                    "            inv_indclass3, inv_indclass4, inv_contact, inv_psotion, inv_doctype, \n" +
                    "            inv_docnum, inv_phone, inv_fax, inv_email, inv_qq, inv_webchat, \n" +
                    "            inv_tel, inv_remark)\n" +
                    "    VALUES ( ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, ?, \n" +
                    "            ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, inv_corp_id);
            pst.setString(2, inv_domain);
            pst.setString(3, inv_csrc_type1);
            pst.setString(4, inv_csrc_type2);
            pst.setString(5, inv_csrc_type3);
            pst.setString(6, inv_csrc_type4);
            pst.setString(7, inv_indclass1);
            pst.setString(8, inv_indclass2);
            pst.setString(9, inv_indclass3);
            pst.setString(10, inv_indclass4);
            pst.setString(11, inv_contact);
            pst.setString(12, inv_psotion);
            pst.setString(13, inv_doctype);
            pst.setString(14, inv_docnum);
            pst.setString(15, inv_phone);
            pst.setString(16, inv_fax);
            pst.setString(17, inv_email);
            pst.setString(18, inv_qq);
            pst.setString(19, inv_webchat);
            pst.setString(20, inv_tel);
            pst.setString(21, inv_remark);
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