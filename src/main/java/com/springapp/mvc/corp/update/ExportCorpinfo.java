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

         new ExportCorpfinanceinfo().exportCorpfinanceinfo(request, id);
         new ExportCorpGDinfo().exportCorpshareholderinfo(request, id);

        try {
            conn = DriverManager.getConnection(url, user, password);
            stmt = conn.createStatement();
            String projectPath_target = request.getSession().getServletContext().getRealPath("/static/upload/");
//            String projectPath_template= request.getSession().getServletContext().getRealPath("/WEB-INF/static/export_template/");

            File xlsFile =new File(projectPath_target + "/" + "coprinfo.xls");
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

                HSSFCell cell_buslicno = sheet.getRow(1).getCell(3);
                cell_buslicno.setCellValue(rs.getString("buslicno"));

                HSSFCell cell_name = sheet.getRow(1).getCell(10);
                cell_name.setCellValue(rs.getString("name"));

                HSSFCell cell_unit = sheet.getRow(2).getCell(3);
                cell_unit.setCellValue(rs.getString("unit"));

                HSSFCell cell_legrep = sheet.getRow(2).getCell(10);
                cell_legrep.setCellValue(rs.getString("legrep"));

                HSSFCell cell_email = sheet.getRow(3).getCell(3);
                cell_email.setCellValue(rs.getString("province")+rs.getString("city")+rs.getString("county"));


                HSSFCell cell_nos = sheet.getRow(3).getCell(10);
                cell_nos.setCellValue(rs.getString("nos"));

                HSSFCell cell_postal = sheet.getRow(4).getCell(3);
                cell_postal.setCellValue(rs.getString("postal"));

                HSSFCell cell_nature = sheet.getRow(4).getCell(10);
                cell_nature.setCellValue(rs.getString("nature"));

                HSSFCell cell_regcap = sheet.getRow(5).getCell(3);
                cell_regcap.setCellValue(rs.getString("regcap"));

                HSSFCell cell_regdt = sheet.getRow(5).getCell(10);
                if(rs.getDate("regdt") == null){
                    cell_regdt.setCellValue("");
                }else{
                    cell_regdt.setCellValue(rs.getDate("regdt"));
                }

                HSSFCell cell_mtphone = sheet.getRow(6).getCell(3);
                if(rs.getDate("bustermfdt") == null){
                    cell_mtphone.setCellValue("");
                }else{
                    cell_mtphone.setCellValue(rs.getDate("bustermfdt"));
                }

                HSSFCell cell_address = sheet.getRow(6).getCell(10);
                if(rs.getDate("bustremtdt") == null){
                    cell_address.setCellValue("");
                }else{
                    cell_address.setCellValue(rs.getDate("bustremtdt"));
                }

                HSSFCell cell_list_area = sheet.getRow(7).getCell(3);
                cell_list_area.setCellValue(rs.getString("list_area"));

                HSSFCell cell_company = sheet.getRow(7).getCell(10);
                if(rs.getDate("listdt") == null){
                    cell_company.setCellValue("");
                }else{
                    cell_company.setCellValue(rs.getDate( "listdt"));
                }

                HSSFCell cell_listcode = sheet.getRow(8).getCell(3);
                cell_listcode.setCellValue(rs.getString("listcode"));

                HSSFCell cell_listprice = sheet.getRow(8).getCell(10);
                cell_listprice.setCellValue(rs.getString("listprice"));

                HSSFCell cell_webchat = sheet.getRow(9).getCell(3);
                cell_webchat.setCellValue(rs.getString("webchat"));

                HSSFCell cell_channels = sheet.getRow(9).getCell(10);
                cell_channels.setCellValue(rs.getString("channels"));

                HSSFCell cell_regist_organ = sheet.getRow(10).getCell(3);
                cell_regist_organ.setCellValue(rs.getString("regist_organ"));

                HSSFCell cell_staffnum = sheet.getRow(10).getCell(10);
                cell_staffnum.setCellValue(rs.getString("staffnum"));

                HSSFCell cell_regaddr = sheet.getRow(11).getCell(3);
                cell_regaddr.setCellValue(rs.getString("regaddr"));

                HSSFCell cell_offaddr = sheet.getRow(12).getCell(3);
                cell_offaddr.setCellValue(rs.getString("offaddr"));

                HSSFCell cell_scope = sheet.getRow(13).getCell(3);
                cell_scope.setCellValue(rs.getString("scope"));


                HSSFCell cell_mbus = sheet.getRow(14).getCell(3);
                cell_mbus.setCellValue(rs.getString("mbus"));

                HSSFCell cell_eprofile = sheet.getRow(15).getCell(3);
                cell_eprofile.setCellValue(rs.getString("eprofile"));

                HSSFCell cell_remark = sheet.getRow(16).getCell(3);
                cell_remark.setCellValue(rs.getString("remark"));

                HSSFCell cell_cont_name = sheet.getRow(19).getCell(3);
                cell_cont_name.setCellValue(rs.getString("cont_name"));

                HSSFCell cell_cont_edoctype = sheet.getRow(19).getCell(10);
                cell_cont_edoctype.setCellValue(rs.getString("cont_edoctype"));

                HSSFCell cell_cont_psotion = sheet.getRow(20).getCell(3);
                cell_cont_psotion.setCellValue(rs.getString("cont_psotion"));

                HSSFCell cell_cont_edocnum = sheet.getRow(20).getCell(10);
                cell_cont_edocnum.setCellValue(rs.getString("cont_edocnum"));

                HSSFCell cell_cont_ephone = sheet.getRow(21).getCell(3);
                cell_cont_ephone.setCellValue(rs.getString("cont_ephone"));

                HSSFCell cell_cont_efax = sheet.getRow(21).getCell(10);
                cell_cont_efax.setCellValue(rs.getString("cont_efax"));

                HSSFCell cell_cont_eemail = sheet.getRow(22).getCell(3);
                cell_cont_eemail.setCellValue(rs.getString("cont_eemail"));

                HSSFCell cell_cont_eqq = sheet.getRow(22).getCell(10);
                cell_cont_eqq.setCellValue(rs.getString("cont_eqq"));

                HSSFCell cell_cont_webchat = sheet.getRow(23).getCell(3);
                cell_cont_webchat.setCellValue(rs.getString("cont_webchat"));

                HSSFCell cell_cont_tel = sheet.getRow(23).getCell(10);
                cell_cont_tel.setCellValue(rs.getString("cont_tel"));

                HSSFCell cell_cont_bz = sheet.getRow(24).getCell(3);
                cell_cont_bz.setCellValue(rs.getString("cont_bz"));

                HSSFCell cell_indclass1 = sheet.getRow(27).getCell(3);
                cell_indclass1.setCellValue(rs.getString("indclass1"));

                HSSFCell cell_indclass2 = sheet.getRow(27).getCell(10);
                cell_indclass2.setCellValue(rs.getString("indclass2"));

                HSSFCell cell_indclass3 = sheet.getRow(28).getCell(3);
                cell_indclass3.setCellValue(rs.getString("indclass3"));

                HSSFCell cell_indclass4 = sheet.getRow(28).getCell(10);
                cell_indclass4.setCellValue(rs.getString("indclass4"));

                HSSFCell cell_csrc_type1 = sheet.getRow(31).getCell(3);
                cell_csrc_type1.setCellValue(rs.getString("csrc_type1"));

                HSSFCell cell_csrc_type2 = sheet.getRow(31).getCell(10);
                cell_csrc_type2.setCellValue(rs.getString("csrc_type2"));


                HSSFCell cell_mai_changer_dt = sheet.getRow(34).getCell(3);
                if(rs.getDate("mai_changer_dt") == null){
                    cell_mai_changer_dt.setCellValue("");
                }else{
                    cell_mai_changer_dt.setCellValue(rs.getString("mai_changer_dt"));
                }


                HSSFCell cell_mai_changer_id = sheet.getRow(34).getCell(10);
                cell_mai_changer_id.setCellValue(rs.getString("mai_changer_id"));

                HSSFCell cell_mai_changer_dept = sheet.getRow(35).getCell(3);
                cell_mai_changer_dept.setCellValue(rs.getString("mai_changer_dept"));

                HSSFCell cell_mai_recomdt = sheet.getRow(35).getCell(10);
                if(rs.getDate("mai_recomdt") == null){
                    cell_mai_recomdt.setCellValue("");
                }else{
                    cell_mai_recomdt.setCellValue(rs.getString("mai_recomdt"));
                }

                HSSFCell cell_mai_trusteeship = sheet.getRow(36).getCell(3);
                cell_mai_trusteeship.setCellValue(rs.getString("mai_trusteeship"));

                HSSFCell cell_mai_listst = sheet.getRow(36).getCell(10);
                cell_mai_listst.setCellValue(rs.getString("mai_listst"));

                HSSFCell cell_mai_eclass = sheet.getRow(37).getCell(3);
                cell_mai_eclass.setCellValue(rs.getString("mai_eclass"));

                HSSFCell cell_mai_maintain = sheet.getRow(37).getCell(10);
                cell_mai_maintain.setCellValue(rs.getString("mai_maintain"));

                HSSFCell cell_mai_reserve = sheet.getRow(38).getCell(3);
                cell_mai_reserve.setCellValue(rs.getString("mai_reserve"));

                HSSFCell cell_mai_emaint = sheet.getRow(38).getCell(10);
                cell_mai_emaint.setCellValue(rs.getString("mai_emaint"));

                HSSFCell cell_mai_dept = sheet.getRow(39).getCell(3);
                cell_mai_dept.setCellValue(rs.getString("mai_dept"));

                HSSFCell cell_mai_post = sheet.getRow(39).getCell(10);
                cell_mai_post.setCellValue(rs.getString("mai_post"));

                HSSFCell cell_mai_tel = sheet.getRow(40).getCell(3);
                cell_mai_tel.setCellValue(rs.getString("mai_tel"));

                HSSFCell cell_mai_phone = sheet.getRow(40).getCell(10);
                cell_mai_phone.setCellValue(rs.getString("mai_phone"));

                HSSFCell cell_mai_fax = sheet.getRow(41).getCell(3);
                cell_mai_fax.setCellValue(rs.getString("mai_fax"));

                HSSFCell cell_mai_email = sheet.getRow(41).getCell(10);
                cell_mai_email.setCellValue(rs.getString("mai_email"));

                HSSFCell cell_mai_qq = sheet.getRow(42).getCell(3);
                cell_mai_qq.setCellValue(rs.getString("mai_qq"));

                HSSFCell cell_mai_webchat = sheet.getRow(42).getCell(10);
                cell_mai_webchat.setCellValue(rs.getString("mai_webchat"));

                HSSFCell cell_mai_bz = sheet.getRow(43).getCell(3);
                cell_mai_bz.setCellValue(rs.getString("mai_bz"));

                HSSFCell cell_srv_name = sheet.getRow(46).getCell(3);
                cell_srv_name.setCellValue(rs.getString("srv_name"));

                HSSFCell cell_srv_type = sheet.getRow(46).getCell(10);
                cell_srv_type.setCellValue(rs.getString("srv_type"));

                HSSFCell cell_srv_content = sheet.getRow(47).getCell(3);
                cell_srv_content.setCellValue(rs.getString("srv_content"));

                HSSFCell cell_srv_levels = sheet.getRow(47).getCell(10);
                cell_srv_levels.setCellValue(rs.getString("srv_levels"));

                HSSFCell cell_srv_penalty = sheet.getRow(48).getCell(3);
                cell_srv_penalty.setCellValue(rs.getString("srv_penalty"));

                HSSFCell cell_srv_domain = sheet.getRow(48).getCell(10);
                cell_srv_domain.setCellValue(rs.getString("srv_domain"));

                HSSFCell cell_srv_examiner = sheet.getRow(49).getCell(3);
                cell_srv_examiner.setCellValue(rs.getString("srv_examiner"));

                HSSFCell cell_srv_post = sheet.getRow(49).getCell(10);
                cell_srv_post.setCellValue(rs.getString("srv_post"));

                HSSFCell cell_srv_descs = sheet.getRow(50).getCell(3);
                cell_srv_descs.setCellValue(rs.getString("srv_descs"));

                HSSFCell cell_srv_remark = sheet.getRow(51).getCell(3);
                cell_srv_remark.setCellValue(rs.getString("srv_remark"));

                HSSFCell cell_inv_domain = sheet.getRow(54).getCell(3);
                cell_inv_domain.setCellValue(rs.getString("inv_domain"));

                HSSFCell cell_inv_csrc_type1 = sheet.getRow(55).getCell(3);
                cell_inv_csrc_type1.setCellValue(rs.getString("inv_csrc_type1"));

                HSSFCell cell_inv_csrc_type2 = sheet.getRow(55).getCell(10);
                cell_inv_csrc_type2.setCellValue(rs.getString("inv_csrc_type2"));

                HSSFCell cell_inv_csrc_type3 = sheet.getRow(56).getCell(3);
                cell_inv_csrc_type3.setCellValue(rs.getString("inv_csrc_type3"));

                HSSFCell cell_inv_csrc_type4 = sheet.getRow(56).getCell(10);
                cell_inv_csrc_type4.setCellValue(rs.getString("inv_csrc_type4"));

                HSSFCell cell_inv_indclass1 = sheet.getRow(57).getCell(3);
                cell_inv_indclass1.setCellValue(rs.getString("inv_indclass1"));

                HSSFCell cell_inv_indclass2 = sheet.getRow(57).getCell(10);
                cell_inv_indclass2.setCellValue(rs.getString("inv_indclass2"));

                HSSFCell cell_inv_contact = sheet.getRow(58).getCell(3);
                cell_inv_contact.setCellValue(rs.getString("inv_contact"));

                HSSFCell cell_inv_doctype = sheet.getRow(58).getCell(10);
                cell_inv_doctype.setCellValue(rs.getString("inv_doctype"));


                HSSFCell cell_inv_psotion = sheet.getRow(59).getCell(3);
                cell_inv_psotion.setCellValue(rs.getString("inv_psotion"));

                HSSFCell cell_inv_docnum = sheet.getRow(59).getCell(10);
                cell_inv_docnum.setCellValue(rs.getString("inv_docnum"));

                HSSFCell cell_inv_phone = sheet.getRow(60).getCell(3);
                cell_inv_phone.setCellValue(rs.getString("inv_phone"));

                HSSFCell cell_inv_fax = sheet.getRow(60).getCell(10);
                cell_inv_fax.setCellValue(rs.getString("inv_fax"));

                HSSFCell cell_inv_email = sheet.getRow(61).getCell(3);
                cell_inv_email.setCellValue(rs.getString("inv_email"));

                HSSFCell cell_inv_qq = sheet.getRow(61).getCell(10);
                cell_inv_qq.setCellValue(rs.getString("inv_qq"));

                HSSFCell cell_inv_webchat = sheet.getRow(62).getCell(3);
                cell_inv_webchat.setCellValue(rs.getString("inv_webchat"));

                HSSFCell cell_inv_tel = sheet.getRow(62).getCell(10);
                cell_inv_tel.setCellValue(rs.getString("inv_tel"));

                HSSFCell cell_inv_remark = sheet.getRow(63).getCell(3);
                cell_inv_remark.setCellValue(rs.getString("inv_remark"));


                HSSFCell cell_gov_domain = sheet.getRow(66).getCell(3);
                cell_gov_domain.setCellValue(rs.getString("gov_domain"));

                HSSFCell cell_gov_office = sheet.getRow(66).getCell(10);
                cell_gov_office.setCellValue(rs.getString("gov_office"));

                HSSFCell cell_gov_desc = sheet.getRow(67).getCell(3);
                cell_gov_desc.setCellValue(rs.getString("gov_desc"));

                HSSFCell cell_gov_contact = sheet.getRow(68).getCell(3);
                cell_gov_contact.setCellValue(rs.getString("gov_contact"));

                HSSFCell cell_gov_doctype = sheet.getRow(68).getCell(10);
                cell_gov_doctype.setCellValue(rs.getString("gov_doctype"));

                HSSFCell cell_gov_psotion = sheet.getRow(69).getCell(3);
                cell_gov_psotion.setCellValue(rs.getString("gov_psotion"));

                HSSFCell cell_gov_docnum = sheet.getRow(69).getCell(10);
                cell_gov_docnum.setCellValue(rs.getString("gov_docnum"));

                HSSFCell cell_gov_phone = sheet.getRow(70).getCell(3);
                cell_gov_phone.setCellValue(rs.getString("gov_phone"));

                HSSFCell cell_gov_fax = sheet.getRow(70).getCell(10);
                cell_gov_fax.setCellValue(rs.getString("gov_fax"));

                HSSFCell cell_gov_email = sheet.getRow(71).getCell(3);
                cell_gov_email.setCellValue(rs.getString("gov_email"));

                HSSFCell cell_gov_qq = sheet.getRow(71).getCell(10);
                cell_gov_qq.setCellValue(rs.getString("gov_qq"));

                HSSFCell cell_gov_webchat = sheet.getRow(72).getCell(3);
                cell_gov_webchat.setCellValue(rs.getString("gov_webchat"));

                HSSFCell cell_gov_tel = sheet.getRow(72).getCell(10);
                cell_gov_tel.setCellValue(rs.getString("gov_tel"));

                HSSFCell cell_gov_remark = sheet.getRow(73).getCell(3);
                cell_gov_remark.setCellValue(rs.getString("gov_remark"));

                HSSFCell cell_refi_amounts = sheet.getRow(76).getCell(3);
                cell_refi_amounts.setCellValue(rs.getString("refi_amounts"));

                HSSFCell cell_refi_use = sheet.getRow(76).getCell(10);
                cell_refi_use.setCellValue(rs.getString("refi_use"));

                HSSFCell cell_refi_financ = sheet.getRow(77).getCell(3);
                cell_refi_financ.setCellValue(rs.getString("refi_financ"));

                HSSFCell cell_refi_security = sheet.getRow(77).getCell(10);
                cell_refi_security.setCellValue(rs.getString("refi_security"));

                HSSFCell cell_refi_acc_cost = sheet.getRow(78).getCell(3);
                cell_refi_acc_cost.setCellValue(rs.getString("refi_acc_cost"));

                HSSFCell cell_refi_deadline = sheet.getRow(78).getCell(10);
                if(rs.getDate("refi_deadline") == null){
                    cell_refi_deadline.setCellValue("");
                }else{
                    cell_refi_deadline.setCellValue(rs.getString("retra_dt"));
                }

                HSSFCell cell_refi_desc = sheet.getRow(79).getCell(10);
                cell_refi_desc.setCellValue(rs.getString("refi_desc"));


                HSSFCell cell_retra_mode = sheet.getRow(82).getCell(3);
                cell_retra_mode.setCellValue(rs.getString("retra_mode"));

                HSSFCell cell_retra_dt = sheet.getRow(83).getCell(3);
                if(rs.getDate("retra_dt") == null){
                    cell_retra_dt.setCellValue("");
                }else{
                    cell_retra_dt.setCellValue(rs.getString("retra_dt"));
                }

                HSSFCell cell_retra_acc_cost = sheet.getRow(83).getCell(10);
                cell_retra_acc_cost.setCellValue(rs.getString("retra_acc_cost"));

                HSSFCell cell_retra_content = sheet.getRow(84).getCell(3);
                cell_retra_content.setCellValue(rs.getString("retra_content"));

                HSSFCell cell_retra_requests = sheet.getRow(85).getCell(3);
                cell_retra_requests.setCellValue(rs.getString("retra_requests"));

                HSSFCell cell_rehr_post = sheet.getRow(88).getCell(3);
                cell_rehr_post.setCellValue(rs.getString("rehr_post"));

                HSSFCell cell_rehr_num= sheet.getRow(88).getCell(10);
                cell_rehr_num.setCellValue(rs.getString("rehr_num"));

                HSSFCell cell_rehr_salary = sheet.getRow(89).getCell(3);
                cell_rehr_salary.setCellValue(rs.getString("rehr_salary"));

                HSSFCell cell_rehr_sex_req = sheet.getRow(89).getCell(10);
                cell_rehr_sex_req.setCellValue(rs.getString("rehr_sex_req"));

                HSSFCell cell_rehr_age_req = sheet.getRow(90).getCell(3);
                cell_rehr_age_req.setCellValue(rs.getString("rehr_age_req"));

                HSSFCell cell_rehr_requests = sheet.getRow(90).getCell(10);
                cell_rehr_requests.setCellValue(rs.getString("rehr_requests"));
                
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