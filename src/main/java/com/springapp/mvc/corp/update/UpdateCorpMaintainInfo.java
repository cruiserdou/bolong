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

@Controller
@RequestMapping("/update_corp_maintain_info")
public class UpdateCorpMaintainInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
            @RequestParam(value = "mai_id", required = false) Integer  mai_id,
//            @RequestParam(value = "mai_corp_id", required = false) Integer  mai_corp_id,
            @RequestParam(value = "mai_changer_id", required = false) Integer mai_changer_id,
            @RequestParam(value = "mai_changer_dt", required = false) String mai_changer_dt,
            @RequestParam(value = "mai_changer_dept", required = false) String mai_changer_dept,
            @RequestParam(value = "mai_recomdt", required = false) String mai_recomdt,
            @RequestParam(value = "mai_trusteeship", required = false) String mai_trusteeship,
            @RequestParam(value = "mai_listst", required = false) String mai_listst,
            @RequestParam(value = "mai_eclass", required = false) String mai_eclass,
            @RequestParam(value = "mai_maintain", required = false) String mai_maintain,
            @RequestParam(value = "mai_reserve", required = false) String mai_reserve,
            @RequestParam(value = "mai_emaint", required = false) String mai_emaint,
            @RequestParam(value = "mai_dept", required = false) String mai_dept,
            @RequestParam(value = "mai_post", required = false) String mai_post,
            @RequestParam(value = "mai_tel", required = false) String mai_tel,
            @RequestParam(value = "mai_phone", required = false) String mai_phone,
            @RequestParam(value = "mai_fax", required = false) String mai_fax,
            @RequestParam(value = "mai_email", required = false) String mai_email,
            @RequestParam(value = "mai_qq", required = false) String mai_qq,
            @RequestParam(value = "mai_webchat", required = false) String mai_webchat,
            @RequestParam(value = "mai_bz", required = false) String mai_bz

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

            String sql = "UPDATE work.tb_corp_maintain\n" +
                    "   SET  mai_changer_id=?, mai_changer_dt=?, \n" +
                    "       mai_changer_dept=?, mai_recomdt=?, mai_trusteeship=?, mai_listst=?, \n" +
                    "       mai_eclass=?, mai_maintain=?, mai_reserve=?, mai_emaint=?, mai_dept=?, \n" +
                    "       mai_post=?, mai_tel=?, mai_phone=?, mai_fax=?, mai_email=?, mai_qq=?, \n" +
                    "       mai_webchat=?, mai_bz=? " +
                    "  where mai_id = ?";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, Integer.parseInt(session.getAttribute("id").toString()));
            pst.setTimestamp(2, timestamp);
            pst.setString(3, mai_changer_dept);
            Date d_recomdt = null;
            if (mai_recomdt != null && mai_recomdt.length() > 2)
                d_recomdt = Date.valueOf(mai_recomdt);
            pst.setDate(4, d_recomdt);
            pst.setString(5, mai_trusteeship);
            pst.setString(6, mai_listst);
            pst.setString(7, mai_eclass);
            pst.setString(8, mai_maintain);
            pst.setString(9, mai_reserve);
            pst.setString(10, mai_emaint);
            pst.setString(11, mai_dept);
            pst.setString(12, mai_post);
            pst.setString(13, mai_tel);
            pst.setString(14, mai_phone);
            pst.setString(15, mai_fax);
            pst.setString(16, mai_email);
            pst.setString(17, mai_qq);
            pst.setString(18, mai_webchat);
            pst.setString(19, mai_bz);
            pst.setInt(20, mai_id);
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