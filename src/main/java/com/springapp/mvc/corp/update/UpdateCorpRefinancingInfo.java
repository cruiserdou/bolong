package com.springapp.mvc.corp.update;

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
@RequestMapping("/update_corp_refinancing_info")
public class UpdateCorpRefinancingInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam(value = "refi_id", required = false) Integer  refi_id,
//            @RequestParam(value = "refi_corp_id", required = false) Integer  refi_corp_id,
            @RequestParam(value = "refi_amounts", required = false) String refi_amounts,
            @RequestParam(value = "refi_use", required = false) String refi_use,
            @RequestParam(value = "refi_financ", required = false) String refi_financ,
            @RequestParam(value = "refi_security", required = false) String refi_security,
            @RequestParam(value = "refi_acc_cost", required = false) String refi_acc_cost,
            @RequestParam(value = "refi_deadline", required = false) String refi_deadline,
            @RequestParam(value = "refi_desc", required = false) String refi_desc

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

            String sql = "UPDATE work.tb_corp_refinancing\n" +
                    "   SET  refi_amounts=?, refi_use=?, refi_financ=?, \n" +
                    "       refi_security=?, refi_acc_cost=?, refi_deadline=?, refi_desc=? " +
                    "  where refi_id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, refi_amounts);
            pst.setString(2, refi_use);
            pst.setString(3, refi_financ);
            pst.setString(4, refi_security);
            pst.setString(5, refi_acc_cost);
            java.sql.Date d_refi_deadline = null;
            if (refi_deadline != null && refi_deadline.length() > 2)
                d_refi_deadline = java.sql.Date.valueOf(refi_deadline);
            pst.setDate(6, d_refi_deadline);
            pst.setString(7, refi_desc);
            pst.setInt(8, refi_id);
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