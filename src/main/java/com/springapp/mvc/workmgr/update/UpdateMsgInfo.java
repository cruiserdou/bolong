package com.springapp.mvc.workmgr.update;

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
@RequestMapping("/update_msg_info")
public class UpdateMsgInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
            @RequestParam("id") Integer id,
            @RequestParam("ruser_id") Integer ruser_id,
            @RequestParam("type") String type,
            @RequestParam("stat") String stat,
            @RequestParam("deadline") String deadline,
            @RequestParam("content") String content,
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
        System.out.print("kais");

        DBInfo connstr = new DBInfo();
        String url = connstr.getUrl();
        String user = connstr.getUser();
        String password = connstr.getPassword();

        try {
            conn = DriverManager.getConnection(url, user, password);

            String sql = "UPDATE work.tb_msg\n" +
                    "   SET    ruser_id=?, deadline=?, content=?, type=? ,  remark=?  \n" +
                    " where id = ?";
            System.out.print(sql);
            pst = conn.prepareStatement(sql);
            pst.setInt(1, ruser_id);
            Timestamp f_deadline = Timestamp.valueOf(deadline);
            pst.setTimestamp(2, f_deadline);
            pst.setString(3, content);
            pst.setString(4, type);
            pst.setString(5, remark);
            pst.setInt(6, id);
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