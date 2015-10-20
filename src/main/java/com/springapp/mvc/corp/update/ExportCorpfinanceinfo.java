package com.springapp.mvc.corp.update;

/**
 * Created by xwq on 14-4-15.
 */

import common.util.DBInfo;
import common.util.DataShop;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;


public class ExportCorpfinanceinfo {

    public  void exportCorpfinanceinfo(HttpServletRequest request,Integer id)   throws Exception {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs_fi = null;

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
            stmt = conn.createStatement();
            String projectPath_target = request.getSession().getServletContext().getRealPath("/static/upload/");
            File xlsFile =new File(projectPath_target + "/" + "copr.xls");
            FileInputStream fin=new FileInputStream(xlsFile);
            HSSFWorkbook workbook=new HSSFWorkbook(fin);
            HSSFSheet sheet=workbook.getSheetAt(0);

            String sql = "select corp_finance.*   from work.tb_corp corp   " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id   where id="+id;

            rs_fi = stmt.executeQuery(sql);


            //遍历数据，填充表格
            while (rs_fi.next()) {
                HSSFCell cell_start_time = sheet.getRow(93).getCell(3);
                if(rs_fi.getDate("start_time") == null){
                    cell_start_time.setCellValue("");
                }else{
                    cell_start_time.setCellValue(rs_fi.getString("start_time"));
                }

                HSSFCell cell_end_time = sheet.getRow(93).getCell(10);
                if(rs_fi.getDate("end_time") == null){
                    cell_end_time.setCellValue("");
                }else{
                    cell_end_time.setCellValue(rs_fi.getString("end_time"));
                }

                HSSFCell cell_st_money_fund = sheet.getRow(96).getCell(3);
                cell_st_money_fund.setCellValue(rs_fi.getString("st_money_fund"));

                HSSFCell cell_end_money_fund = sheet.getRow(96).getCell(5);
                cell_end_money_fund.setCellValue(rs_fi.getString("end_money_fund"));

                HSSFCell cell_st_short_borrow = sheet.getRow(96).getCell(10);
                cell_st_short_borrow.setCellValue(rs_fi.getString("st_short_borrow"));

                HSSFCell cell_end_short_borrow = sheet.getRow(96).getCell(12);
                cell_end_short_borrow.setCellValue(rs_fi.getString("end_short_borrow"));

                HSSFCell cell_st_jyxjr_assets = sheet.getRow(97).getCell(3);
                cell_st_jyxjr_assets.setCellValue(rs_fi.getString("st_jyxjr_assets"));

                HSSFCell cell_end_jyxjr_assets = sheet.getRow(97).getCell(5);
                cell_end_jyxjr_assets.setCellValue(rs_fi.getString("end_jyxjr_assets"));

                HSSFCell cell_st_jyx_finance_fz = sheet.getRow(97).getCell(10);
                cell_st_jyx_finance_fz.setCellValue(rs_fi.getString("st_jyx_finance_fz"));

                HSSFCell cell_end_jyx_finance_fz = sheet.getRow(97).getCell(12);
                cell_end_jyx_finance_fz.setCellValue(rs_fi.getString("end_jyx_finance_fz"));

                HSSFCell cell_st_ys_bill = sheet.getRow(98).getCell(3);
                cell_st_ys_bill.setCellValue(rs_fi.getString("st_ys_bill"));

                HSSFCell cell_end_ys_bill = sheet.getRow(98).getCell(5);
                cell_end_ys_bill.setCellValue(rs_fi.getString("end_ys_bill"));

                HSSFCell cell_st_yf_bill = sheet.getRow(98).getCell(10);
                cell_st_yf_bill.setCellValue(rs_fi.getString("st_yf_bill"));

                HSSFCell cell_end_yf_bill = sheet.getRow(98).getCell(12);
                cell_end_yf_bill.setCellValue(rs_fi.getString("end_yf_bill"));

                HSSFCell cell_st_ys_account = sheet.getRow(99).getCell(3);
                cell_st_ys_account.setCellValue(rs_fi.getString("st_ys_account"));

                HSSFCell cell_end_ys_account = sheet.getRow(99).getCell(5);
                cell_end_ys_account.setCellValue(rs_fi.getString("end_ys_account"));

                HSSFCell cell_st_yf_account = sheet.getRow(99).getCell(10);
                cell_st_yf_account.setCellValue(rs_fi.getString("st_yf_account"));

                HSSFCell cell_end_yf_account = sheet.getRow(99).getCell(12);
                cell_end_yf_account.setCellValue(rs_fi.getString("end_yf_account"));

                HSSFCell cell_st_yf_money = sheet.getRow(100).getCell(3);
                cell_st_yf_money.setCellValue(rs_fi.getString("st_yf_money"));

                HSSFCell cell_end_yf_money = sheet.getRow(100).getCell(5);
                cell_end_yf_money.setCellValue(rs_fi.getString("end_yf_money"));

                HSSFCell cell_st_ys_money = sheet.getRow(100).getCell(10);
                cell_st_ys_money.setCellValue(rs_fi.getString("st_ys_money"));

                HSSFCell cell_end_ys_money = sheet.getRow(100).getCell(12);
                cell_end_ys_money.setCellValue(rs_fi.getString("end_ys_money"));

                HSSFCell cell_st_ys_interest = sheet.getRow(101).getCell(3);
                cell_st_ys_interest.setCellValue(rs_fi.getString("st_ys_interest"));

                HSSFCell cell_end_ys_interest = sheet.getRow(101).getCell(5);
                cell_end_ys_interest.setCellValue(rs_fi.getString("end_ys_interest"));

                HSSFCell cell_st_yf_staff_pay = sheet.getRow(101).getCell(10);
                cell_st_yf_staff_pay.setCellValue(rs_fi.getString("st_yf_staff_pay"));

                HSSFCell cell_end_yf_staff_pay = sheet.getRow(101).getCell(12);
                cell_end_yf_staff_pay.setCellValue(rs_fi.getString("end_yf_staff_pay"));

                HSSFCell cell_st_ys_dividends = sheet.getRow(102).getCell(3);
                cell_st_ys_dividends.setCellValue(rs_fi.getString("st_ys_dividends"));

                HSSFCell cell_end_ys_dividends = sheet.getRow(102).getCell(5);
                cell_end_ys_dividends.setCellValue(rs_fi.getString("end_ys_dividends"));

                HSSFCell cell_st_yj_tax = sheet.getRow(102).getCell(10);
                cell_st_yj_tax.setCellValue(rs_fi.getString("st_yj_tax"));

                HSSFCell cell_end_yj_tax = sheet.getRow(102).getCell(12);
                cell_end_yj_tax.setCellValue(rs_fi.getString("end_yj_tax"));

                HSSFCell cell_st_other_ys_money = sheet.getRow(103).getCell(3);
                cell_st_other_ys_money.setCellValue(rs_fi.getString("st_other_ys_money"));

                HSSFCell cell_end_other_ys_money = sheet.getRow(103).getCell(5);
                cell_end_other_ys_money.setCellValue(rs_fi.getString("end_other_ys_money"));

                HSSFCell cell_st_yf_interest = sheet.getRow(103).getCell(10);
                cell_st_yf_interest.setCellValue(rs_fi.getString("st_yf_interest"));

                HSSFCell cell_end_yf_interest = sheet.getRow(103).getCell(12);
                cell_end_yf_interest.setCellValue(rs_fi.getString("end_yf_interest"));

                HSSFCell cell_st_inventory = sheet.getRow(104).getCell(3);
                cell_st_inventory.setCellValue(rs_fi.getString("st_inventory"));

                HSSFCell cell_end_inventory = sheet.getRow(104).getCell(5);
                cell_end_inventory.setCellValue(rs_fi.getString("end_inventory"));

                HSSFCell cell_st_yf_dividends = sheet.getRow(104).getCell(10);
                cell_st_yf_dividends.setCellValue(rs_fi.getString("st_yf_dividends"));

                HSSFCell cell_end_yf_dividends = sheet.getRow(104).getCell(12);
                cell_end_yf_dividends.setCellValue(rs_fi.getString("end_yf_dividends"));

                HSSFCell cell_st_ynndq_no_assets = sheet.getRow(105).getCell(3);
                cell_st_ynndq_no_assets.setCellValue(rs_fi.getString("st_ynndq_no_assets"));

                HSSFCell cell_end_ynndq_no_assets = sheet.getRow(105).getCell(5);
                cell_end_ynndq_no_assets.setCellValue(rs_fi.getString("end_ynndq_no_assets"));

                HSSFCell cell_st_other_yf_money = sheet.getRow(105).getCell(10);
                cell_st_other_yf_money.setCellValue(rs_fi.getString("st_other_yf_money"));

                HSSFCell cell_end_other_yf_money = sheet.getRow(105).getCell(12);
                cell_end_other_yf_money.setCellValue(rs_fi.getString("end_other_yf_money"));

                HSSFCell cell_st_other_assets = sheet.getRow(106).getCell(3);
                cell_st_other_assets.setCellValue(rs_fi.getString("st_other_assets"));

                HSSFCell cell_end_other_assets = sheet.getRow(106).getCell(5);
                cell_end_other_assets.setCellValue(rs_fi.getString("end_other_assets"));

                HSSFCell cell_st_ynndq_no_fz = sheet.getRow(106).getCell(10);
                cell_st_ynndq_no_fz.setCellValue(rs_fi.getString("st_ynndq_no_fz"));

                HSSFCell cell_end_ynndq_no_fz = sheet.getRow(106).getCell(12);
                cell_end_ynndq_no_fz.setCellValue(rs_fi.getString("end_ynndq_no_fz"));

                HSSFCell cell_st_other_fz = sheet.getRow(107).getCell(10);
                cell_st_other_fz.setCellValue(rs_fi.getString("st_other_fz"));

                HSSFCell cell_end_other_fz = sheet.getRow(107).getCell(12);
                cell_end_other_fz.setCellValue(rs_fi.getString("end_other_fz"));

                HSSFCell cell_st_hj_assets = sheet.getRow(108).getCell(3);
                cell_st_hj_assets.setCellValue(rs_fi.getString("st_hj_assets"));

                HSSFCell cell_end_hj_assets = sheet.getRow(108).getCell(5);
                cell_end_hj_assets.setCellValue(rs_fi.getString("end_hj_assets"));

                HSSFCell cell_st_hj_fz = sheet.getRow(108).getCell(10);
                cell_st_hj_fz.setCellValue(rs_fi.getString("st_hj_fz"));

                HSSFCell cell_end_hj_fz = sheet.getRow(108).getCell(12);
                cell_end_hj_fz.setCellValue(rs_fi.getString("end_hj_fz"));

                HSSFCell cell_st_kgcs_assets = sheet.getRow(110).getCell(3);
                cell_st_kgcs_assets.setCellValue(rs_fi.getString("st_kgcs_assets"));

                HSSFCell cell_end_kgcs_assets = sheet.getRow(110).getCell(5);
                cell_end_kgcs_assets.setCellValue(rs_fi.getString("end_kgcs_assets"));

                HSSFCell cell_st_long_borrow = sheet.getRow(110).getCell(10);
                cell_st_long_borrow.setCellValue(rs_fi.getString("st_long_borrow"));

                HSSFCell cell_end_long_borrow = sheet.getRow(110).getCell(12);
                cell_end_long_borrow.setCellValue(rs_fi.getString("end_long_borrow"));

                HSSFCell cell_st_cyzdq_investment = sheet.getRow(111).getCell(3);
                cell_st_cyzdq_investment.setCellValue(rs_fi.getString("st_cyzdq_investment"));

                HSSFCell cell_end_cyzdq_investment = sheet.getRow(111).getCell(5);
                cell_end_cyzdq_investment.setCellValue(rs_fi.getString("end_cyzdq_investment"));

                HSSFCell cell_st_yf_bond = sheet.getRow(111).getCell(10);
                cell_st_yf_bond.setCellValue(rs_fi.getString("st_yf_bond"));

                HSSFCell cell_end_yf_bond = sheet.getRow(111).getCell(12);
                cell_end_yf_bond.setCellValue(rs_fi.getString("end_yf_bond"));

                HSSFCell cell_st_long_ys_money = sheet.getRow(112).getCell(3);
                cell_st_long_ys_money.setCellValue(rs_fi.getString("st_long_ys_money"));

                HSSFCell cell_end_long_ys_money = sheet.getRow(112).getCell(5);
                cell_end_long_ys_money.setCellValue(rs_fi.getString("end_long_ys_money"));

                HSSFCell cell_st_long_yf_money = sheet.getRow(112).getCell(10);
                cell_st_long_yf_money.setCellValue(rs_fi.getString("st_long_yf_money"));

                HSSFCell cell_end_long_yf_money = sheet.getRow(112).getCell(12);
                cell_end_long_yf_money.setCellValue(rs_fi.getString("end_long_yf_money"));

                HSSFCell cell_st_long_gq_investment = sheet.getRow(113).getCell(3);
                cell_st_long_gq_investment.setCellValue(rs_fi.getString("st_long_gq_investment"));

                HSSFCell cell_end_long_gq_investment = sheet.getRow(113).getCell(5);
                cell_end_long_gq_investment.setCellValue(rs_fi.getString("end_long_gq_investment"));

                HSSFCell cell_st_zx_yf_money = sheet.getRow(113).getCell(10);
                cell_st_zx_yf_money.setCellValue(rs_fi.getString("st_zx_yf_money"));

                HSSFCell cell_end_zx_yf_money = sheet.getRow(113).getCell(12);
                cell_end_zx_yf_money.setCellValue(rs_fi.getString("end_zx_yf_money"));

                HSSFCell cell_st_invest_house = sheet.getRow(114).getCell(3);
                cell_st_invest_house.setCellValue(rs_fi.getString("st_invest_house"));

                HSSFCell cell_end_invest_house = sheet.getRow(114).getCell(5);
                cell_end_invest_house.setCellValue(rs_fi.getString("end_invest_house"));

                HSSFCell cell_st_yj_fz = sheet.getRow(114).getCell(10);
                cell_st_yj_fz.setCellValue(rs_fi.getString("st_yj_fz"));

                HSSFCell cell_end_yj_fz = sheet.getRow(114).getCell(12);
                cell_end_yj_fz.setCellValue(rs_fi.getString("end_yj_fz"));

                HSSFCell cell_st_gd_assets = sheet.getRow(115).getCell(3);
                cell_st_gd_assets.setCellValue(rs_fi.getString("st_gd_assets"));

                HSSFCell cell_end_gd_assets = sheet.getRow(115).getCell(5);
                cell_end_gd_assets.setCellValue(rs_fi.getString("end_gd_assets"));

                HSSFCell cell_st_dysds_fz = sheet.getRow(115).getCell(10);
                cell_st_dysds_fz.setCellValue(rs_fi.getString("st_dysds_fz"));

                HSSFCell cell_end_dysds_fz = sheet.getRow(115).getCell(12);
                cell_end_dysds_fz.setCellValue(rs_fi.getString("end_dysds_fz"));

                HSSFCell cell_st_accu_deprec = sheet.getRow(116).getCell(3);
                cell_st_accu_deprec.setCellValue(rs_fi.getString("st_accu_deprec"));

                HSSFCell cell_end_accu_deprec = sheet.getRow(116).getCell(5);
                cell_end_accu_deprec.setCellValue(rs_fi.getString("end_accu_deprec"));

                HSSFCell cell_st_other_no_fz = sheet.getRow(116).getCell(10);
                cell_st_other_no_fz.setCellValue(rs_fi.getString("st_other_no_fz"));

                HSSFCell cell_end_other_no_fz = sheet.getRow(116).getCell(12);
                cell_end_other_no_fz.setCellValue(rs_fi.getString("end_other_no_fz"));

                HSSFCell cell_st_gd_assets_jz = sheet.getRow(117).getCell(3);
                cell_st_gd_assets_jz.setCellValue(rs_fi.getString("st_gd_assets_jz"));

                HSSFCell cell_end_gd_assets_jz = sheet.getRow(117).getCell(5);
                cell_end_gd_assets_jz.setCellValue(rs_fi.getString("end_gd_assets_jz"));

                HSSFCell cell_st_hj_no_fz = sheet.getRow(117).getCell(10);
                cell_st_hj_no_fz.setCellValue(rs_fi.getString("st_hj_no_fz"));

                HSSFCell cell_end_hj_no_fz = sheet.getRow(117).getCell(12);
                cell_end_hj_no_fz.setCellValue(rs_fi.getString("end_hj_no_fz"));

                HSSFCell cell_st_gd_assets_ready = sheet.getRow(118).getCell(3);
                cell_st_gd_assets_ready.setCellValue(rs_fi.getString("st_gd_assets_ready"));

                HSSFCell cell_end_gd_assets_ready = sheet.getRow(118).getCell(5);
                cell_end_gd_assets_ready.setCellValue(rs_fi.getString("end_gd_assets_ready"));

                HSSFCell cell_st_hj_total_fz = sheet.getRow(118).getCell(10);
                cell_st_hj_total_fz.setCellValue(rs_fi.getString("st_hj_total_fz"));

                HSSFCell cell_end_hj_total_fz = sheet.getRow(118).getCell(12);
                cell_end_hj_total_fz.setCellValue(rs_fi.getString("end_hj_total_fz"));

                HSSFCell cell_st_gd_assets_je = sheet.getRow(119).getCell(3);
                cell_st_gd_assets_je.setCellValue(rs_fi.getString("st_gd_assets_je"));

                HSSFCell cell_end_gd_assets_je = sheet.getRow(119).getCell(5);
                cell_end_gd_assets_je.setCellValue(rs_fi.getString("end_gd_assets_je"));

                HSSFCell cell_st_now_project = sheet.getRow(120).getCell(3);
                cell_st_now_project.setCellValue(rs_fi.getString("st_now_project"));

                HSSFCell cell_end_now_project = sheet.getRow(120).getCell(5);
                cell_end_now_project.setCellValue(rs_fi.getString("end_now_project"));

                HSSFCell cell_st_project_material = sheet.getRow(121).getCell(3);
                cell_st_project_material.setCellValue(rs_fi.getString("st_project_material"));

                HSSFCell cell_end_project_material = sheet.getRow(121).getCell(5);
                cell_end_project_material.setCellValue(rs_fi.getString("end_project_material"));

                HSSFCell cell_st_paid_assets = sheet.getRow(121).getCell(10);
                cell_st_paid_assets.setCellValue(rs_fi.getString("st_paid_assets"));

                HSSFCell cell_end_paid_assets = sheet.getRow(121).getCell(12);
                cell_end_paid_assets.setCellValue(rs_fi.getString("end_paid_assets"));

                HSSFCell cell_st_gd_assets_ql = sheet.getRow(122).getCell(3);
                cell_st_gd_assets_ql.setCellValue(rs_fi.getString("st_gd_assets_ql"));

                HSSFCell cell_end_gd_assets_ql = sheet.getRow(122).getCell(5);
                cell_end_gd_assets_ql.setCellValue(rs_fi.getString("end_gd_assets_ql"));

                HSSFCell cell_st_zb_reserve = sheet.getRow(122).getCell(10);
                cell_st_zb_reserve.setCellValue(rs_fi.getString("st_zb_reserve"));

                HSSFCell cell_end_zb_reserve = sheet.getRow(122).getCell(12);
                cell_end_zb_reserve.setCellValue(rs_fi.getString("end_zb_reserve"));

                HSSFCell cell_st_scx_investment = sheet.getRow(123).getCell(3);
                cell_st_scx_investment.setCellValue(rs_fi.getString("st_scx_investment"));

                HSSFCell cell_end_scx_investment = sheet.getRow(123).getCell(5);
                cell_end_scx_investment.setCellValue(rs_fi.getString("end_scx_investment"));

                HSSFCell cell_st_kc_stock = sheet.getRow(123).getCell(10);
                cell_st_kc_stock.setCellValue(rs_fi.getString("st_kc_stock"));

                HSSFCell cell_end_kc_stock = sheet.getRow(123).getCell(12);
                cell_end_kc_stock.setCellValue(rs_fi.getString("end_kc_stock"));

                HSSFCell cell_st_wx_assets = sheet.getRow(124).getCell(3);
                cell_st_wx_assets.setCellValue(rs_fi.getString("st_wx_assets"));

                HSSFCell cell_end_wx_assets = sheet.getRow(124).getCell(5);
                cell_end_wx_assets.setCellValue(rs_fi.getString("end_wx_assets"));

                HSSFCell cell_st_zx_reserve = sheet.getRow(124).getCell(10);
                cell_st_zx_reserve.setCellValue(rs_fi.getString("st_zx_reserve"));

                HSSFCell cell_end_zx_reserve= sheet.getRow(124).getCell(12);
                cell_end_zx_reserve.setCellValue(rs_fi.getString("end_zx_reserve"));

                HSSFCell cell_st_goodwill = sheet.getRow(125).getCell(3);
                cell_st_goodwill.setCellValue(rs_fi.getString("st_goodwill"));

                HSSFCell cell_end_goodwill = sheet.getRow(125).getCell(5);
                cell_end_goodwill.setCellValue(rs_fi.getString("end_goodwill"));

                HSSFCell cell_st_yy_reserve = sheet.getRow(125).getCell(10);
                cell_st_yy_reserve.setCellValue(rs_fi.getString("st_yy_reserve"));

                HSSFCell cell_end_yy_reserve = sheet.getRow(125).getCell(12);
                cell_end_yy_reserve.setCellValue(rs_fi.getString("end_yy_reserve"));


                HSSFCell cell_st_cqdt_cost = sheet.getRow(126).getCell(3);
                cell_st_cqdt_cost.setCellValue(rs_fi.getString("st_cqdt_cost"));

                HSSFCell cell_end_cqdt_cost = sheet.getRow(126).getCell(5);
                cell_end_cqdt_cost.setCellValue(rs_fi.getString("end_cqdt_cost"));

                HSSFCell cell_st_wfp_profit = sheet.getRow(126).getCell(10);
                cell_st_wfp_profit.setCellValue(rs_fi.getString("st_wfp_profit"));

                HSSFCell cell_end_wfp_profit = sheet.getRow(126).getCell(12);
                cell_end_wfp_profit.setCellValue(rs_fi.getString("end_wfp_profit"));


                HSSFCell cell_st_dysds_assets = sheet.getRow(127).getCell(3);
                cell_st_dysds_assets.setCellValue(rs_fi.getString("st_dysds_assets"));

                HSSFCell cell_end_dysds_assets = sheet.getRow(127).getCell(5);
                cell_end_dysds_assets.setCellValue(rs_fi.getString("end_dysds_assets"));

                HSSFCell cell_st_hj_owner_right = sheet.getRow(127).getCell(10);
                cell_st_hj_owner_right.setCellValue(rs_fi.getString("st_hj_owner_right"));

                HSSFCell cell_end_hj_owner_right = sheet.getRow(127).getCell(12);
                cell_end_hj_owner_right.setCellValue(rs_fi.getString("end_hj_owner_right"));

                HSSFCell cell_st_other_no_assets = sheet.getRow(128).getCell(3);
                cell_st_other_no_assets.setCellValue(rs_fi.getString("st_other_no_assets"));

                HSSFCell cell_end_other_no_assets = sheet.getRow(128).getCell(5);
                cell_end_other_no_assets.setCellValue(rs_fi.getString("end_other_no_assets"));


                HSSFCell cell_st_hj_no_asset = sheet.getRow(129).getCell(3);
                cell_st_hj_no_asset.setCellValue(rs_fi.getString("st_hj_no_asset"));

                HSSFCell cell_end_hj_no_asset = sheet.getRow(129).getCell(5);
                cell_end_hj_no_asset.setCellValue(rs_fi.getString("end_hj_no_asset"));


                HSSFCell cell_st_hj_total_asset = sheet.getRow(130).getCell(3);
                cell_st_hj_total_asset.setCellValue(rs_fi.getString("st_hj_total_asset"));

                HSSFCell cell_end_hj_total_asset = sheet.getRow(130).getCell(5);
                cell_end_hj_total_asset.setCellValue(rs_fi.getString("end_hj_total_asset"));

                HSSFCell cell_st_hj_fz_owner_right = sheet.getRow(130).getCell(10);
                cell_st_hj_fz_owner_right.setCellValue(rs_fi.getString("st_hj_fz_owner_right"));

                HSSFCell cell_end_hj_fz_owner_right = sheet.getRow(130).getCell(12);
                cell_end_hj_fz_owner_right.setCellValue(rs_fi.getString("end_hj_fz_owner_right"));


            }


            FileOutputStream fOut = new FileOutputStream(projectPath_target + "/" +"coprinfo.xls");


            //把相应的Excel工作薄存盘
            workbook.write(fOut);
            fOut.flush();
            fOut.close();

        } catch (SQLException e) {
            System.out.print(e.getMessage());
        } finally {
            try {
                if (rs_fi != null) rs_fi.close();
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                System.out.print(e.getMessage());
            }
        }

    }
}