package com.springapp.mvc.CorpImg;

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
import java.sql.*;
import java.text.SimpleDateFormat;

@Controller
@RequestMapping("/upload_corp_img")
public class UploadCorpImg {
    private static final int BUFFER_SIZE = 16 * 1024;

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(HttpServletRequest request,
                           @RequestParam("file") MultipartFile file,
                           @RequestParam("corp_id") Integer corp_id
    ) throws Exception {
        DataShop dataShop = new DataShop();

        String projectPath = request.getSession().getServletContext().getRealPath("/static/upload/annex/");

        dataShop.setMessage(file.getOriginalFilename());

        Connection conn = null;
        PreparedStatement pst = null;
        ResultSet rs = null;
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

            String  max_img_name = null;

            String sql_max_img_name = "select max(img_name) as max_img_name from work.tb_corp_img where img_name  like 'F"+corp_id+"-"+"%'";
            pst = conn.prepareStatement(sql_max_img_name);
            rs = pst.executeQuery();
            while (rs.next()){
                max_img_name = rs.getString("max_img_name");
                if(max_img_name != null && (max_img_name.length() > 0) ){
                    int dot_i = max_img_name.lastIndexOf('-');
                    int dot_ii = max_img_name.lastIndexOf('.');

                    if ((dot_ii >-1) && (dot_ii < (max_img_name.length()))) {
                        max_img_name = max_img_name.substring(dot_i+1, dot_ii);

                    }
                    if(String.valueOf(Integer.parseInt(max_img_name)+1).length()==1){
                        max_img_name="000"+String.valueOf(Integer.parseInt(max_img_name)+1);
                    }else if(String.valueOf(Integer.parseInt(max_img_name)+1).length()==2) {
                        max_img_name = "00" + String.valueOf(Integer.parseInt(max_img_name) + 1);
                    } else if(String.valueOf(Integer.parseInt(max_img_name)+1).length()==3) {
                        max_img_name="0"+String.valueOf(Integer.parseInt(max_img_name)+1);}
                    else {
                        max_img_name=String.valueOf(Integer.parseInt(max_img_name)+1);
                    }
                }else{
                    max_img_name="0001";
                }
            }
            if(max_img_name==""){
                max_img_name="0001";
            }
            max_img_name="F"+corp_id+"-"+max_img_name;

            if (!file.isEmpty()) {
                file.transferTo(new File(projectPath + "/" + max_img_name+".jpg"));

                String sql = "INSERT INTO work.tb_corp_img (img_corp_id, img_name) VALUES(?, ?)";

                pst = conn.prepareStatement(sql);
                pst.setInt(1, corp_id);
                pst.setString(2, max_img_name+".jpg");
                pst.executeUpdate();
            }
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
