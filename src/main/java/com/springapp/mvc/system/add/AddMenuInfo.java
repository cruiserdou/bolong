package com.springapp.mvc.system.add;

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
@RequestMapping("/add_menu_info")
public class AddMenuInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam("id") Integer id,
            @RequestParam("text") String text,
            @RequestParam("leaf") Boolean leaf,
            @RequestParam("parent_id") Integer parent_id,
            @RequestParam("itype") String itype,
            @RequestParam("root") Integer root,
            @RequestParam("iconcls") String iconcls,
            @RequestParam("remark") String remark

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

            String sql = "insert into work.menu" +
                    "(id, text, leaf, parent_id, itype, root,iconcls, remark) " +
                    " values(?, ?, ?, ?, ?, ?, ?, ?)";


            pst = conn.prepareStatement(sql);
            pst.setInt(1, id);
            pst.setString(2, text);
            pst.setBoolean(3, leaf);
            pst.setInt(4, parent_id);
            pst.setString(5, itype);
            pst.setInt(6, root);
            pst.setString(7, iconcls);
            pst.setString(8, remark);
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