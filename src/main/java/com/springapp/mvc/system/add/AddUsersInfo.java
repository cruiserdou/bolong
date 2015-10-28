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
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.SimpleDateFormat;

@Controller
@RequestMapping("/add_users_info")
public class AddUsersInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam("account") String account,
            @RequestParam("password") String pwd,
            @RequestParam("sex") String sex,
            @RequestParam("phone") String phone,
            @RequestParam("address") String address,
            @RequestParam("name") String name,
            @RequestParam("remark") String remark,
            @RequestParam(value = "img", required = false) MultipartFile file,
            HttpServletRequest request

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
        String  max_id = null;
        String  file_type = null;

        try {
            conn = DriverManager.getConnection(url, user, password);

            if (!file.isEmpty()) {


                String projectPath = request.getSession().getServletContext().getRealPath("/static/upload/annex/");

                file.transferTo(new File(projectPath + "/" + file.getOriginalFilename()));

                filename = file.getOriginalFilename();

            }else{
                filename = "per.png";
            }

            String sql = "INSERT INTO work.users(\n" +
                    "            account, password, sex, phone, address,   remark, name,   img)\n" +
                    "    VALUES (  ?, ?, ?, ?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setString(1, account);
            pst.setString(2, pwd);
            pst.setString(3, sex);
            pst.setString(4, phone);
            pst.setString(5, address);
            pst.setString(6, remark);
            pst.setString(7, name);
            pst.setString(8, filename);
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