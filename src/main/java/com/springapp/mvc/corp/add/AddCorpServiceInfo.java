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
@RequestMapping("/add_corp_service_info")
public class AddCorpServiceInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @RequestParam(value = "srv_id", required = false) Integer srv_id,
            @RequestParam(value = "srv_corp_id", required = false) Integer srv_corp_id,
            @RequestParam(value = "srv_name", required = false) String srv_name,
            @RequestParam(value = "srv_type", required = false) String srv_type,
            @RequestParam(value = "srv_content", required = false) String srv_content,
            @RequestParam(value = "srv_levels", required = false) String srv_levels,
            @RequestParam(value = "srv_domain", required = false) String srv_domain,
            @RequestParam(value = "srv_penalty", required = false) String srv_penalty,
            @RequestParam(value = "srv_examiner", required = false) String srv_examiner,
            @RequestParam(value = "srv_post", required = false) String srv_post,
            @RequestParam(value = "srv_descs", required = false) String srv_descs,
            @RequestParam(value = "srv_remark", required = false) String srv_remark



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

            String sql = "INSERT INTO work.tb_corp_service(\n" +
                    "             srv_corp_id, srv_name, srv_type, srv_content, srv_levels, \n" +
                    "            srv_domain, srv_penalty, srv_examiner, srv_post, srv_descs, srv_remark)\n" +
                    "    VALUES ( ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, srv_corp_id);
            pst.setString(2, srv_name);
            pst.setString(3, srv_type);
            pst.setString(4, srv_content);
            pst.setString(5, srv_levels);
            pst.setString(6, srv_domain);
            pst.setString(7, srv_penalty);
            pst.setString(8, srv_examiner);
            pst.setString(9, srv_post);
            pst.setString(10, srv_descs);
            pst.setString(11, srv_remark);
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