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
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.sql.*;
import java.text.SimpleDateFormat;

@Controller
@RequestMapping("/add_corp_img_info")
public class AddCorpImgInfo {


    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpServletRequest request,
            @RequestParam("img_corp_id") Integer img_corp_id,
            @RequestParam(value = "file", required = false) MultipartFile file,
            HttpSession session
    ) throws Exception {


        DataShop dataShop = new DataShop();
        dataShop.setSuccess(true);
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;
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
        Integer max_id = 0;
        String file_type = null;
        String file_name = null;
        int mul_dot = file.getOriginalFilename().lastIndexOf('.');
        if ((mul_dot > -1) && (mul_dot < (file.getOriginalFilename().length() - 1))) {
            file_type = file.getOriginalFilename().substring(mul_dot + 1);
        }


        try {
            conn = DriverManager.getConnection(url, user, password);

//            String sql_id = "select nextval('work.corp_id_seq'::regclass) as corp_id";
//            pst = conn.prepareStatement(sql_id);
//            ResultSet rs_id = pst.executeQuery();
//            int img_corp_id=1 ;
//            while (rs_id.next()) {
//                img_corp_id = rs_id.getInt("corp_id");
//            }

            String sql_max_id = "select count(1) as max_id from work.tb_corp_img where img_corp_id ="+img_corp_id;

            pst = conn.prepareStatement(sql_max_id);
            rs = pst.executeQuery();
            while (rs.next()) {
                max_id = rs.getInt("max_id");
                if (max_id!=0) {
                    max_id =max_id+1  ;
                } else {
                    max_id = 1;
                }
            }

            file_name = "F-" +img_corp_id+"-" + max_id;
            if (!file.isEmpty()) {
                String projectPath = request.getSession().getServletContext().getRealPath("/static/upload/annex/");

                file.transferTo(new File(projectPath + "/" + file_name + "." + file_type));
            }

            String sql = "INSERT INTO work.tb_corp_img(\n" +
                    "            img_corp_id, img_name)\n" +
                    "    VALUES (?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, img_corp_id);
            pst.setString(2, file_name + "." + file_type);
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