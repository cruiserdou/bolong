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
        String  max_id = null;
        String  file_type = null;

        try {
            conn = DriverManager.getConnection(url, user, password);

            String sql = "select img from work.users  where nos = '"+session.getAttribute("nos").toString()+"'";
            pst = conn.prepareStatement(sql);
            ResultSet rs = pst.executeQuery();
            while (rs.next()) {

                filename = rs.getString(1);

                if (filename != null && (filename.length() > 0)) {
                    int dot = filename.lastIndexOf('.');

                    if ((dot >-1) && (dot < (filename.length()- 1))) {
                        file_type= filename.substring(dot + 1);
                    }
                    if ((dot > -1) && (dot < (filename.length()))) {
                        filename = filename.substring(0, dot);
                    }
                }
            }

            if (!file.isEmpty()) {

                int mul_dot = file.getOriginalFilename().lastIndexOf('.');
                if ((mul_dot >-1) && (mul_dot < (file.getOriginalFilename().length() - 1))) {
                    file_type= file.getOriginalFilename().substring(mul_dot + 1);
                }
                String projectPath = request.getSession().getServletContext().getRealPath("/static/upload/annex/");





                projectPath=projectPath+"/"+filename;
                File annexfile = new File(projectPath);
                if(annexfile.exists()){
                    annexfile.delete();
                }

                String projectPaths = request.getSession().getServletContext().getRealPath("/static/upload/annex/");
                file.transferTo(new File(projectPaths + "/" + filename+"."+file_type));
            }
            if (filename != null && (filename.length() > 0) ){
                filename=filename+"."+file_type;
            }else{
                filename="";
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