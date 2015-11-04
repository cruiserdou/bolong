package com.springapp.mvc.system.update;

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
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.sql.*;
import java.text.SimpleDateFormat;

@Controller
@RequestMapping("/update_users_info")
public class UpdateUsersInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam("id") Integer id,
            @RequestParam("account") String account,
            @RequestParam("password") String pwd,
            @RequestParam("sex") String sex,
            @RequestParam("phone") String phone,
            @RequestParam("address") String address,
            @RequestParam("name") String name,
            @RequestParam("remark") String remark,
            @RequestParam(value = "img", required = false) MultipartFile file ,
            HttpServletRequest request,
            HttpSession session

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

        java.util.Date time = new java.util.Date();
        SimpleDateFormat formats = new SimpleDateFormat("yyyyMMdd");
        String today = formats.format(time).toString();
        String filename = null;
        String projectPath = request.getSession().getServletContext().getRealPath("/static/upload/annex/");

        try {
            conn = DriverManager.getConnection(url, user, password);

            String sql_photo = "select img from work.users where account = '" + session.getAttribute("account").toString() + "'";

            pst = conn.prepareStatement(sql_photo);
            ResultSet rs = pst.executeQuery();
            String photo_name = "";
            while (rs.next()) {
                photo_name = rs.getString(1);
            }
            if (photo_name != null && (photo_name.length() > 0)) {
                File annexfile = new File(projectPath + "/" + account + ".jpg");
                if (!file.isEmpty()) {
                    if (annexfile.exists()) {
                        annexfile.delete();
                    }
                    file.transferTo(new File(projectPath + "/" + account + ".jpg"));
                }
                filename = file.getOriginalFilename();
            } else {
                if (!file.isEmpty()) {
                    file.transferTo(new File(projectPath + "/" + account + ".jpg"));
                    filename = file.getOriginalFilename();
                } else {
                    filename = "per.png";
                }
            }

                String sql_insert = "update work.users set " +
                        "account=?, password=?, sex=?, phone=?, address=?, " +
                        "    remark=?, name =?, img=? " +
                        " where id = ?";
                pst = conn.prepareStatement(sql_insert);
                pst.setString(1, account);
                pst.setString(2, pwd);
                pst.setString(3, sex);
                pst.setString(4, phone);
                pst.setString(5, address);
                pst.setString(6, remark);
                pst.setString(7, name);
                pst.setString(8, filename);
                pst.setInt(9, id);
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