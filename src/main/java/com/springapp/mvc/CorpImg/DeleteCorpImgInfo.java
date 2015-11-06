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

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.sql.*;

@Controller
@RequestMapping("/delete_corp_img_info")
public class DeleteCorpImgInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam("id") Integer id,
            HttpServletRequest request
            ) throws Exception{
        DataShop dataShop = new DataShop();
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
        String projectPath = request.getSession().getServletContext().getRealPath("/static/upload/annex/");

        try {
            conn = DriverManager.getConnection(url, user, password);
            String sql_img = "select img_name from work.tb_corp_img where id = " +id;
            pst = conn.prepareStatement(sql_img);
            ResultSet rs = pst.executeQuery();
            String img_name = "";
            while (rs.next()) {
                img_name = rs.getString(1);
            }
            if (img_name != null && (img_name.length() > 0)) {
                File annexfile = new File(projectPath + "/" + img_name);
                if (annexfile.exists()) {
                    annexfile.delete();
                }
            }
            String sql = "delete from work.tb_corp_img where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, id);
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