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
@RequestMapping("/add_msg_info")
public class AddMsgInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
            @RequestParam(value = "ruser_id", required = false) Integer ruser_id,
            @RequestParam(value = "type", required = false) String type,
            @RequestParam(value = "stat", required = false) String stat,
            @RequestParam(value = "deadline", required = false) String deadline,
            @RequestParam(value = "content", required = false) String content,
            @RequestParam(value = "remark", required = false) String remark

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




            String sql = "INSERT INTO work.tb_msg(\n" +
                    "              user_id, ruser_id, deadline, content, stat, type, rtdate, \n" +
                    "            remark)\n" +
                    "    VALUES (?, ?, ?, ?, ?, ?, ?,?)";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, Integer.parseInt(session.getAttribute("id").toString()));
            pst.setInt(2, ruser_id);
            Timestamp f_deadline = Timestamp.valueOf(deadline);
            pst.setTimestamp(3, f_deadline);
            pst.setString(4, content);
            pst.setString(5, stat);
            pst.setString(6, type);
            java.util.Date date = new java.util.Date();
            Timestamp timestamp = new Timestamp(date.getTime());
            pst.setTimestamp(7, timestamp);
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