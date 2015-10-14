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
@RequestMapping("/update_corp_contact_info")
public class UpdateCorpContactInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam(value = "cont_id", required = false) Integer  cont_id,
//            @RequestParam(value = "cont_corp_id", required = false) Integer  cont_corp_id,
            @RequestParam(value = "cont_name", required = false) String cont_name,
            @RequestParam(value = "cont_psotion", required = false) String cont_psotion,
            @RequestParam(value = "cont_edoctype", required = false) String cont_edoctype,
            @RequestParam(value = "cont_edocnum", required = false) String cont_edocnum,
            @RequestParam(value = "cont_ephone", required = false) String cont_ephone,
            @RequestParam(value = "cont_efax", required = false) String cont_efax,
            @RequestParam(value = "cont_eemail", required = false) String cont_eemail,
            @RequestParam(value = "cont_eqq", required = false) String cont_eqq,
            @RequestParam(value = "cont_webchat", required = false) String cont_webchat,
            @RequestParam(value = "cont_tel", required = false) String cont_tel,
            @RequestParam(value = "cont_bz", required = false) String cont_bz

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

            String sql = "UPDATE work.tb_corp_contact\n" +
                    "   SET  cont_name=?, cont_psotion=?, cont_edoctype=?, \n" +
                    "       cont_edocnum=?, cont_ephone=?, cont_efax=?, cont_eemail=?, cont_eqq=?, \n" +
                    "       cont_webchat=?, cont_tel=?, cont_bz=? " +
                    "  where cont_id=?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, cont_name);
            pst.setString(2, cont_psotion);
            pst.setString(3, cont_edoctype);
            pst.setString(4, cont_edocnum);
            pst.setString(5, cont_ephone);
            pst.setString(6, cont_efax);
            pst.setString(7, cont_eemail);
            pst.setString(8, cont_eqq);
            pst.setString(9, cont_webchat);
            pst.setString(10, cont_tel);
            pst.setString(11, cont_bz);;
            pst.setInt(11, cont_id);
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