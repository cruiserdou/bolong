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
@RequestMapping("/update_refi_rop_info")
public class UpdateRefiRopInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
            @RequestParam("rop_id") Integer  rop_id,
            @RequestParam("rop_mos_id") Integer  rop_mos_id,
            @RequestParam("rop_items") String  rop_items,
            @RequestParam("rop_desc") String  rop_desc,
            @RequestParam("rop_endt") String  rop_endt,
            @RequestParam("rop_crb") String  rop_crb,
            @RequestParam("rop_stat") String  rop_stat,
            @RequestParam("rop_remark") String  rop_remark

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

            String sql = "UPDATE work.tb_refi_rop\n" +
                    "   SET  rop_mos_id=?, rop_items=?, rop_desc=?, rop_endt=?, \n" +
                    "       rop_crb=?, rop_stat=?, rop_remark=? " +
                    " where rop_id = ?";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, rop_mos_id);
            pst.setString(2, rop_items);
            pst.setString(3, rop_desc);
            Timestamp t_rop_endt = Timestamp.valueOf(rop_endt);
            pst.setTimestamp(4, t_rop_endt);
            pst.setString(5, rop_crb);
            pst.setString(6, rop_stat);
            pst.setString(7, rop_remark);
            pst.setInt(8, rop_id);
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