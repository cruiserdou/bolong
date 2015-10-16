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

@Controller
@RequestMapping("/export_corp_info")
public class ExportCorpinfo {
    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpServletRequest request,
            @RequestParam(value = "id", required = false) Integer id
    ) throws Exception {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        DataShop dataShop = new DataShop();
        List list = new ArrayList();

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
//            String projectPath_template= request.getSession().getServletContext().getRealPath("/WEB-INF/static/export_template/");

            File xlsFile =new File(projectPath_target + "/" + "copr.xls");
            FileInputStream fin=new FileInputStream(xlsFile);
            HSSFWorkbook workbook=new HSSFWorkbook(fin);
            HSSFSheet sheet=workbook.getSheetAt(0);


            String sql = "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                    "     corp_government.*,corp_service.*,corp_investors.*," +
                    "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                    "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                    "     inner join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
//                    "     inner join work.tb_corp_shareholder corp_shareholder on corp.id=corp_shareholder.gd_corp_id " +
                    "     inner join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                    "     inner join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                    "     inner join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                    "     inner join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                    "     inner join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                    "     inner join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id where id="+id;

            rs = stmt.executeQuery(sql);


            //遍历数据，填充表格
            while (rs.next()) {

                HSSFCell cell_buslicno = sheet.getRow(3).getCell(1);
                cell_buslicno.setCellValue(rs.getString("buslicno"));

                HSSFCell cell_name = sheet.getRow(3).getCell(3);
                cell_name.setCellValue(rs.getString( "name" ));


                HSSFCell cell_unit = sheet.getRow(4).getCell(1);
                cell_unit.setCellValue(rs.getString( "unit" ));

                HSSFCell cell_legrep = sheet.getRow(4).getCell(3);
                cell_legrep.setCellValue(rs.getString( "legrep" ));

                HSSFCell cell_email = sheet.getRow(5).getCell(1);
                cell_email.setCellValue(rs.getString("province")+rs.getString("city")+rs.getString("county"));


                HSSFCell cell_nos = sheet.getRow(5).getCell(3);
                cell_nos.setCellValue(rs.getString( "nos" ));

                HSSFCell cell_postal = sheet.getRow(6).getCell(1);
                cell_postal.setCellValue(rs.getString( "postal" ));

                HSSFCell cell_nature = sheet.getRow(6).getCell(3);
                cell_nature.setCellValue(rs.getString( "nature" ));

                HSSFCell cell_regcap = sheet.getRow(7).getCell(1);
                cell_regcap.setCellValue(rs.getString("regcap"));


                HSSFCell cell_regdt = sheet.getRow(7).getCell(3);

                if(rs.getDate("regdt") == null){
                    cell_regdt.setCellValue("");
                }else{
                    cell_regdt.setCellValue(rs.getDate("regdt"));
                }




                HSSFCell cell_mtphone = sheet.getRow(8).getCell(1);

                if(rs.getDate("bustermfdt") == null){
                    cell_mtphone.setCellValue("");
                }else{
                    cell_mtphone.setCellValue(rs.getDate("bustermfdt"));
                }


                HSSFCell cell_address = sheet.getRow(8).getCell(3);
                if(rs.getDate("bustremtdt") == null){
                    cell_address.setCellValue("");
                }else{
                    cell_address.setCellValue(rs.getDate("bustremtdt"));
                }



                HSSFCell cell_list_area = sheet.getRow(9).getCell(1);
                cell_list_area.setCellValue(rs.getString( "list_area" ));

                HSSFCell cell_company = sheet.getRow(9).getCell(3);
                if(rs.getDate("listdt") == null){
                    cell_company.setCellValue("");
                }else{
                    cell_company.setCellValue(rs.getDate( "listdt" ));
                }


                HSSFCell cell_listcode = sheet.getRow(10).getCell(1);
                cell_listcode.setCellValue(rs.getString( "listcode"));

                HSSFCell cell_listprice = sheet.getRow(10).getCell(3);
                cell_listprice.setCellValue(rs.getString( "listprice" ));

                HSSFCell cell_webchat = sheet.getRow(11).getCell(1);
                cell_webchat.setCellValue(rs.getString( "webchat"));

                HSSFCell cell_channels = sheet.getRow(11).getCell(3);
                cell_channels.setCellValue(rs.getString( "channels" ));

                HSSFCell cell_regist_organ = sheet.getRow(12).getCell(1);
                cell_regist_organ.setCellValue(rs.getString( "regist_organ"));

                HSSFCell cell_staffnum = sheet.getRow(12).getCell(3);
                cell_staffnum.setCellValue(rs.getString( "staffnum" ));


                HSSFCell cell_regaddr = sheet.getRow(13).getCell(1);
                cell_regaddr.setCellValue(rs.getString( "regaddr" ));

                HSSFCell cell_offaddr = sheet.getRow(14).getCell(1);
                cell_offaddr.setCellValue(rs.getString( "offaddr" ));

                HSSFCell cell_scope = sheet.getRow(15).getCell(1);
                cell_scope.setCellValue(rs.getString( "scope"));


                HSSFCell cell_mbus = sheet.getRow(16).getCell(1);
                cell_mbus.setCellValue(rs.getString( "mbus" ));

                HSSFCell cell_eprofile = sheet.getRow(17).getCell(1);
                cell_eprofile.setCellValue(rs.getString( "eprofile" ));

                HSSFCell cell_remark = sheet.getRow(18).getCell(1);
                cell_remark.setCellValue(rs.getString( "remark" ));
//
//                HSSFCell cell_loanremark = sheet.getRow(21).getCell(1);
//                cell_loanremark.setCellValue(rs.getString( "loanremark" ));
//
//                HSSFCell cell_owners = sheet.getRow(23).getCell(1);
//                cell_owners.setCellValue(rs.getString( "vehicleowners" ));
//
//                HSSFCell cell_payment = sheet.getRow(23).getCell(4);
//                cell_payment.setCellValue(rs.getString( "vehiclepayment"));
//
//                HSSFCell cell_model = sheet.getRow(24).getCell(1);
//                cell_model.setCellValue(rs.getString( "vehiclemodel" ));
//
//                HSSFCell cell_plate = sheet.getRow(24).getCell(4);
//                cell_plate.setCellValue(rs.getString( "vehicleplate"));
//
//                HSSFCell cell_purchdt = sheet.getRow(25).getCell(1);
//                cell_purchdt.setCellValue(rs.getString( "vehiclepurchdt" ));
//
//                HSSFCell cell_amount = sheet.getRow(25).getCell(4);
//                cell_amount.setCellValue(rs.getString( "vehicleamount"));
//
//                HSSFCell cell_course = sheet.getRow(26).getCell(1);
//                cell_course.setCellValue(rs.getString( "vehiclecourse" ));
//
//                HSSFCell cell_insure = sheet.getRow(26).getCell(4);
//                cell_insure.setCellValue(rs.getString( "vehicleinsure"));
//
//                HSSFCell cell_des = sheet.getRow(27).getCell(1);
//                cell_des.setCellValue(rs.getString( "vehicledes" ));
//
//
//
//                HSSFCell cell_creditor = sheet.getRow(29).getCell(1);
//                cell_creditor.setCellValue(rs.getString( "vehiclecreditor" ));
//
//                HSSFCell cell_formalt = sheet.getRow(29).getCell(4);
//                cell_formalt.setCellValue(rs.getString( "vehicleformalt"));
//
//                HSSFCell cell_downpay = sheet.getRow(30).getCell(1);
//                cell_downpay.setCellValue(rs.getString( "vehicledownpay" ));
//
//                HSSFCell cell_paymentdt = sheet.getRow(30).getCell(4);
//                cell_paymentdt.setCellValue(rs.getString( "vehiclepaymentdt"));
//
//                HSSFCell cell_stages = sheet.getRow(31).getCell(1);
//                cell_stages.setCellValue(rs.getString( "vehiclestages" ));
//
//                HSSFCell cell_periods = sheet.getRow(31).getCell(4);
//                cell_periods.setCellValue(rs.getString( "vehicleperiods"));
//
//                HSSFCell cell_repayment = sheet.getRow(32).getCell(1);
//                cell_repayment.setCellValue(rs.getString( "vehiclerepayment" ));
//
//                HSSFCell cell_principal = sheet.getRow(32).getCell(4);
//                cell_principal.setCellValue(rs.getString( "vehicleprincipal"));
//
//                HSSFCell cell_vehicleremark = sheet.getRow(33).getCell(1);
//                cell_vehicleremark.setCellValue(rs.getString( "vehicleremark"));
//
//                HSSFCell cell_credit = sheet.getRow(35).getCell(1);
//                cell_credit.setCellValue(rs.getString( "creditcredit" ));
//
//                HSSFCell cell_debt = sheet.getRow(36).getCell(1);
//                cell_debt.setCellValue(rs.getString( "creditdebt" ));
//
//                HSSFCell cell_survey = sheet.getRow(37).getCell(1);
//                cell_survey.setCellValue(rs.getString( "creditsurvey" ));
//
//                HSSFCell cell_vehicle = sheet.getRow(38).getCell(1);
//                cell_vehicle.setCellValue(rs.getString( "creditvehicle" ));
//
//                HSSFCell cell_house = sheet.getRow(39).getCell(1);
//                cell_house.setCellValue(rs.getString( "credithouse" ));
//
//                HSSFCell cell_other = sheet.getRow(40).getCell(1);
//                cell_other.setCellValue(rs.getString( "creditother" ));
//
//                HSSFCell cell_creditremark = sheet.getRow(41).getCell(1);
//                cell_creditremark.setCellValue(rs.getString( "creditremark" ));


                HSSFCell cell_retra_mode = sheet.getRow(95).getCell(1);
                cell_retra_mode.setCellValue(rs.getString("retra_mode"));


                HSSFCell cell_retra_dt = sheet.getRow(96).getCell(1);
                if(rs.getDate("retra_dt") == null){
                    cell_retra_dt.setCellValue("");
                }else{
                    cell_retra_dt.setCellValue(rs.getString("retra_dt"));
                }


                HSSFCell cell_retra_acc_cost = sheet.getRow(96).getCell(3);
                cell_retra_acc_cost.setCellValue(rs.getString( "retra_acc_cost" ));

                HSSFCell cell_retra_content = sheet.getRow(97).getCell(1);
                cell_retra_content.setCellValue(rs.getString("retra_content"));

                HSSFCell cell_retra_requests = sheet.getRow(98).getCell(1);
                cell_retra_requests.setCellValue(rs.getString("retra_requests"));

                HSSFCell cell_rehr_post = sheet.getRow(101).getCell(1);
                cell_rehr_post.setCellValue(rs.getString("rehr_post"));

                HSSFCell cell_rehr_num= sheet.getRow(101).getCell(3);
                cell_rehr_num.setCellValue(rs.getString( "rehr_num" ));

                HSSFCell cell_rehr_salary = sheet.getRow(102).getCell(1);
                cell_rehr_salary.setCellValue(rs.getString("rehr_salary"));

                HSSFCell cell_rehr_sex_req = sheet.getRow(102).getCell(3);
                cell_rehr_sex_req.setCellValue(rs.getString( "rehr_sex_req" ));

                HSSFCell cell_rehr_age_req = sheet.getRow(103).getCell(1);
                cell_rehr_age_req.setCellValue(rs.getString("rehr_age_req"));

                HSSFCell cell_rehr_requests = sheet.getRow(103).getCell(3);
                cell_rehr_requests.setCellValue(rs.getString( "rehr_requests" ));







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
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                System.out.print(e.getMessage());
            }
        }
        dataShop.setSuccess(true);
        dataShop.setList(list);

        return dataShop;
    }
}