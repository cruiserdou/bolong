package com.springapp.mvc.corp.update;

/**
 * Created by xwq on 14-4-15.
 */

import common.util.DBInfo;
import common.util.DataShop;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.sql.*;

@Controller
@RequestMapping("/checked_corp_id_info")
public class CheckCorpIdInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(HttpSession session
//                           @RequestParam(value = "id", required = true) String id
    ) throws Exception {
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
            String sql_max_id = "select nextval('work.corp_id_seq'::regclass) as corp_id";
            pst = conn.prepareStatement(sql_max_id);
            ResultSet rs = pst.executeQuery();
            int max_id=1 ;
            while (rs.next()) {
                max_id = rs.getInt("corp_id");
            }

            dataShop.setSuccess(true);
            dataShop.setName(String.valueOf(max_id));


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