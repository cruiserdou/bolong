package com.springapp.mvc.corp.dao;

import com.springapp.mvc.corp.pojo.*;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by dou on 15-9-3.
 */
@Repository
public interface CorpDao {
    @SelectProvider(type = CorpDaoEmberSql.class, method = "listCorp")
    List<Corp> list(
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode,
            @Param(value = "start") String start,
            @Param(value = "limit") String limit,
            @Param(value = "search_val") String search_val
    );

    @SelectProvider(type = CorpDaoEmberSql.class, method = "countCorp")
    int getCorpCount(
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode,
            @Param(value = "start") String start,
            @Param(value = "limit") String limit
    );

    class CorpDaoEmberSql {
        public String listCorp(Map<String, Object> para) {
            String where = "";
            if (!para.get("search_val").equals("no"))
                where += " and name like '%" + para.get("search_val").toString() + "%' ";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";

            return "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                    "     corp_government.*,corp_service.*,corp_investors.*," +
                    "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                    "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                    "     left outer join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
                    "     left join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                    "     left join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                    "     left join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                    "     left join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                    "     left join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                    "     left join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id" +
                    " WHERE 1 = 1  " +
                    where +
                    " limit " + para.get("limit").toString() + " offset " + para.get("start").toString();
        }

        public String countCorp(Map<String, Object> para) {
            String where = "";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";

            return " SELECT count(id) " +
                    " FROM work.tb_corp " +
                    " WHERE 1 = 1  " +
                    where;
        }
    }


    @Delete("DELETE FROM work.tb_corp_shareholder " +
            " WHERE gd_corp_id=#{corp_id};")
    void delShareHolder(@Param(value = "corp_id") int corp_id);

    //通过公司ID获取公司股东信息
    @Select("  SELECT gd_id, gd_corp_id, gd_shtype, gd_shname, gd_shdoctype, gd_shdocnum, " +
            "       gd_shareholdnum, gd_currencynum, gd_freezenum, gd_psotion, gd_doctype, " +
            "       gd_docnum, gd_phone, gd_fax, gd_email, gd_qq, gd_webchat, gd_tel, " +
            "       gd_remark " +
            "  FROM work.tb_corp_shareholder " +
            "  WHERE gd_corp_id = #{corp_id};")
    List<CorpShareHolder> getShareHoderByCorpID(
            @Param(value = "corp_id") int corp_id
    );

    @SelectProvider(type = CorpGovDaoEmberSql.class, method = "listGovCorp")
    List<Corp> listGov(
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode,
            @Param(value = "search_val") String search_val
    );

    class CorpGovDaoEmberSql {
        public String listGovCorp(Map<String, Object> para) {
            String where = "";
            if (!para.get("search_val").equals("no"))
                where += " and name like '%" + para.get("search_val").toString() + "%' ";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";

            where += " ;";
            return "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                    "     corp_government.*,corp_service.*,corp_investors.*," +
                    "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                    "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                    "     left outer join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
                    "     left join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                    "     left join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                    "     left join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                    "     left join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                    "     left join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                    "     left join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id" +
                    " WHERE type_govermt=TRUE " + where;
        }
    }

    @SelectProvider(type = CorpInvDaoEmberSql.class, method = "listInvCorp")
    List<Corp> listInv(
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode,
            @Param(value = "search_val") String search_val
    );

    class CorpInvDaoEmberSql {
        public String listInvCorp(Map<String, Object> para) {
            String where = "";
            if (!para.get("search_val").equals("no"))
                where += " and name like '%" + para.get("search_val").toString() + "%' ";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";

            where += " ;";
            return "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                    "     corp_government.*,corp_service.*,corp_investors.*," +
                    "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                    "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                    "     left outer join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
//                    "      left outer join work.tb_corp_shareholder corp_shareholder on corp.id=corp_shareholder.gd_corp_id " +
                    "     left join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                    "     left join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                    "     left join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                    "     left join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                    "     left join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                    "     left join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id" +
                    " WHERE type_investors=TRUE " + where;
        }
    }

    @SelectProvider(type = CorpRefiDaoEmberSql.class, method = "listRefiCorp")
    List<Corp> listRefi(
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode
    );

    class CorpRefiDaoEmberSql {
        public String listRefiCorp(Map<String, Object> para) {
            String where = "";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";

            where += " ;";
            return "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                    "     corp_government.*,corp_service.*,corp_investors.*," +
                    "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                    "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                    "     left outer join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
//                    "      left outer join work.tb_corp_shareholder corp_shareholder on corp.id=corp_shareholder.gd_corp_id " +
                    "     left join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                    "     left join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                    "     left join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                    "     left join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                    "     left join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                    "     left join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id" +
                    " WHERE demand_rz=TRUE " + where;
        }
    }


    @SelectProvider(type = CorpRehrDaoEmberSql.class, method = "listRehrCorp")
    List<Corp> listRehr(
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode
    );

    class CorpRehrDaoEmberSql {
        public String listRehrCorp(Map<String, Object> para) {
            String where = "";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";

            where += " ;";


            return "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                    "     corp_government.*,corp_service.*,corp_investors.*," +
                    "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                    "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                    "     left outer join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
//                    "      left outer join work.tb_corp_shareholder corp_shareholder on corp.id=corp_shareholder.gd_corp_id " +
                    "     left join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                    "     left join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                    "     left join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                    "     left join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                    "     left join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                    "     left join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id" +
                    "     where corp.demand_rl=TRUE " + where;
        }
    }


    @SelectProvider(type = CorpRetrDaoEmberSql.class, method = "listRetrCorp")
    List<Corp> listRetr(
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode
    );

    class CorpRetrDaoEmberSql {
        public String listRetrCorp(Map<String, Object> para) {
            String where = "";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";

            where += " ;";
            return "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                    "     corp_government.*,corp_service.*,corp_investors.*," +
                    "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                    "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                    "     left outer join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
//                    "      left outer join work.tb_corp_shareholder corp_shareholder on corp.id=corp_shareholder.gd_corp_id " +
                    "     left join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                    "     left join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                    "     left join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                    "     left join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                    "     left join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                    "     left join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id" +
                    " WHERE demand_px=TRUE " + where;
        }
    }

    @SelectProvider(type = CorpServerDaoEmberSql.class, method = "listServerCorp")
    List<Corp> listServer(
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode
    );

    class CorpServerDaoEmberSql {
        public String listServerCorp(Map<String, Object> para) {
            String where = "";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";

            where += " ;";
            return "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                    "     corp_government.*,corp_service.*,corp_investors.*," +
                    "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                    "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                    "     left outer join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
//                    "      left outer join work.tb_corp_shareholder corp_shareholder on corp.id=corp_shareholder.gd_corp_id " +
                    "     left join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                    "     left join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                    "     left join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                    "     left join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                    "     left join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                    "     left join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id" +
                    " WHERE type_server=TRUE " + where;
        }
    }

    @Delete(" BEGIN;" +

            " delete from work.tb_corp where id  = #{id};" +

            " delete from work.tb_corp_contact where cont_corp_id = #{id};" +

            " delete from work.tb_corp_finance where fin_corp_id = #{id};" +

            " delete from work.tb_corp_government where gov_corp_id = #{id};" +

            " delete from work.tb_corp_investors where inv_corp_id = #{id};" +

            " delete from work.tb_corp_maintain where mai_corp_id = #{id};" +

            " delete from work.tb_corp_refinancing where refi_corp_id = #{id};" +

            " delete from work.tb_corp_rehr where rehr_corp_id = #{id};" +

            " delete from work.tb_corp_retrain where retra_corp_id = #{id};" +

            " delete from work.tb_corp_service where srv_corp_id = #{id};" +

            " delete from work.tb_corp_shareholder where gd_corp_id = #{id};" +

            " COMMIT;")
    void delete(@Param(value = "id") Integer id);

    @Insert("begin;" +
            "INSERT INTO work.tb_corp( " +
            "            buslicno, name, unit, legrep, province, city, county, nos, " +
            "            postal, nature, regcap, bustermfdt, bustremtdt, regdt, list_area, " +
            "            listcode, listprice, listdt, channels, webchat, staffnum, regist_organ, " +
            "            regaddr, offaddr, scope, mbus, eprofile, phoinf, remark, indclass1, " +
            "            indclass2, indclass3, indclass4, csrc_type1, csrc_type2 " +
            "            )" +
            "    VALUES (#{corpBase.buslicno}, #{corpBase.name}, #{corpBase.unit}, #{corpBase.legrep}, #{corpBase.province}, #{corpBase.city}, #{corpBase.county}, #{corpBase.nos}, " +
            "            #{corpBase.postal}, #{corpBase.nature}, #{corpBase.regcap}, #{corpBase.bustermfdt}, #{corpBase.bustremtdt},#{corpBase.regdt}, #{corpBase.list_area}, " +
            "            #{corpBase.listcode}, #{corpBase.listprice}, #{corpBase.listdt}, #{corpBase.channels}, #{corpBase.webchat}, #{corpBase.staffnum}, #{corpBase.regist_organ}, " +
            "            #{corpBase.regaddr}, #{corpBase.offaddr}, #{corpBase.scope}, #{corpBase.mbus}, #{corpBase.eprofile}, #{corpBase.phoinf}, #{corpBase.remark}, #{corpBase.indclass1}, " +
            "            #{corpBase.indclass2}, #{corpBase.indclass3}, #{corpBase.indclass4}, #{corpBase.csrc_type1}, #{corpBase.csrc_type2} " +
            "            );" +

            " INSERT INTO work.tb_corp_finance( " +
            "            fin_corp_id, start_time, end_time, st_money_fund, end_money_fund,  " +
            "            st_jyxjr_assets, end_jyxjr_assets, st_ys_bill, end_ys_bill, st_ys_account,  " +
            "            end_ys_account, st_yf_money, end_yf_money, st_ys_interest, end_ys_interest,  " +
            "            st_ys_dividends, end_ys_dividends, st_other_ys_money, end_other_ys_money,  " +
            "            st_inventory, end_inventory, st_ynndq_no_assets, end_ynndq_no_assets,  " +
            "            st_other_assets, end_other_assets, st_hj_assets, end_hj_assets,  " +
            "            st_kgcs_assets, end_kgcs_assets, st_cyzdq_investment, end_cyzdq_investment,  " +
            "            st_long_ys_money, end_long_ys_money, st_long_gq_investment, end_long_gq_investment,  " +
            "            st_invest_house, end_invest_house, st_gd_assets, end_gd_assets,  " +
            "            st_accu_deprec, end_accu_deprec, st_gd_assets_jz, end_gd_assets_jz,  " +
            "            st_gd_assets_ready, end_gd_assets_ready, st_gd_assets_je, end_gd_assets_je,  " +
            "            st_now_project, end_now_project, st_project_material, end_project_material,  " +
            "            st_gd_assets_ql, end_gd_assets_ql, st_scx_investment, end_scx_investment,  " +
            "            st_wx_assets, end_wx_assets, st_goodwill, end_goodwill, st_cqdt_cost,  " +
            "            end_cqdt_cost, st_dysds_assets, end_dysds_assets, st_other_no_assets,  " +
            "            end_other_no_assets, st_hj_no_asset, end_hj_no_asset, st_hj_total_asset,  " +
            "            end_hj_total_asset, st_short_borrow, end_short_borrow, st_jyx_finance_fz,  " +
            "            end_jyx_finance_fz, st_yf_bill, end_yf_bill, st_yf_account, end_yf_account,  " +
            "            st_ys_money, end_ys_money, st_yf_staff_pay, end_yf_staff_pay,  " +
            "            st_yj_tax, end_yj_tax, st_yf_interest, end_yf_interest, st_yf_dividends,  " +
            "            end_yf_dividends, st_other_yf_money, end_other_yf_money, st_ynndq_no_fz,  " +
            "            end_ynndq_no_fz, st_other_fz, end_other_fz, st_hj_fz, end_hj_fz,  " +
            "            st_long_borrow, end_long_borrow, st_yf_bond, end_yf_bond, st_long_yf_money,  " +
            "            end_long_yf_money, st_zx_yf_money, end_zx_yf_money, st_yj_fz,  " +
            "            end_yj_fz, st_dysds_fz, end_dysds_fz, st_other_no_fz, end_other_no_fz,  " +
            "            st_hj_no_fz, end_hj_no_fz, st_hj_total_fz, end_hj_total_fz, st_paid_assets,  " +
            "            end_paid_assets, st_zb_reserve, end_zb_reserve, st_kc_stock,  " +
            "            end_kc_stock, st_zx_reserve, end_zx_reserve, st_yy_reserve, end_yy_reserve,  " +
            "            st_wfp_profit, end_wfp_profit, st_hj_owner_right, end_hj_owner_right,  " +
            "            st_hj_fz_owner_right, end_hj_fz_owner_right) " +
            "    VALUES (  #{corpFinance.fin_corp_id}, #{corpFinance.start_time}, #{corpFinance.end_time}, #{corpFinance.st_money_fund}, #{corpFinance.end_money_fund}, #{corpFinance. " +
            "            st_jyxjr_assets}, #{corpFinance.end_jyxjr_assets}, #{corpFinance.st_ys_bill}, #{corpFinance.end_ys_bill}, #{corpFinance.st_ys_account}, #{corpFinance. " +
            "            end_ys_account}, #{corpFinance.st_yf_money}, #{corpFinance.end_yf_money}, #{corpFinance.st_ys_interest}, #{corpFinance.end_ys_interest}, #{corpFinance. " +
            "            st_ys_dividends}, #{corpFinance.end_ys_dividends}, #{corpFinance.st_other_ys_money}, #{corpFinance.end_other_ys_money}, #{corpFinance. " +
            "            st_inventory}, #{corpFinance.end_inventory}, #{corpFinance.st_ynndq_no_assets}, #{corpFinance.end_ynndq_no_assets}, #{corpFinance. " +
            "            st_other_assets}, #{corpFinance.end_other_assets}, #{corpFinance.st_hj_assets}, #{corpFinance.end_hj_assets}, #{corpFinance. " +
            "            st_kgcs_assets}, #{corpFinance.end_kgcs_assets}, #{corpFinance.st_cyzdq_investment}, #{corpFinance.end_cyzdq_investment}, #{corpFinance. " +
            "            st_long_ys_money}, #{corpFinance.end_long_ys_money}, #{corpFinance.st_long_gq_investment}, #{corpFinance.end_long_gq_investment}, #{corpFinance. " +
            "            st_invest_house}, #{corpFinance.end_invest_house}, #{corpFinance.st_gd_assets}, #{corpFinance.end_gd_assets}, #{corpFinance. " +
            "            st_accu_deprec}, #{corpFinance.end_accu_deprec}, #{corpFinance.st_gd_assets_jz}, #{corpFinance.end_gd_assets_jz}, #{corpFinance. " +
            "            st_gd_assets_ready}, #{corpFinance.end_gd_assets_ready}, #{corpFinance.st_gd_assets_je}, #{corpFinance.end_gd_assets_je}, #{corpFinance. " +
            "            st_now_project}, #{corpFinance.end_now_project}, #{corpFinance.st_project_material}, #{corpFinance.end_project_material}, #{corpFinance. " +
            "            st_gd_assets_ql}, #{corpFinance.end_gd_assets_ql}, #{corpFinance.st_scx_investment}, #{corpFinance.end_scx_investment}, #{corpFinance. " +
            "            st_wx_assets}, #{corpFinance.end_wx_assets}, #{corpFinance.st_goodwill}, #{corpFinance.end_goodwill}, #{corpFinance.st_cqdt_cost}, #{corpFinance. " +
            "            end_cqdt_cost}, #{corpFinance.st_dysds_assets}, #{corpFinance.end_dysds_assets}, #{corpFinance.st_other_no_assets}, #{corpFinance. " +
            "            end_other_no_assets}, #{corpFinance.st_hj_no_asset}, #{corpFinance.end_hj_no_asset}, #{corpFinance.st_hj_total_asset}, #{corpFinance. " +
            "            end_hj_total_asset}, #{corpFinance.st_short_borrow}, #{corpFinance.end_short_borrow}, #{corpFinance.st_jyx_finance_fz}, #{corpFinance. " +
            "            end_jyx_finance_fz}, #{corpFinance.st_yf_bill}, #{corpFinance.end_yf_bill}, #{corpFinance.st_yf_account}, #{corpFinance.end_yf_account}, #{corpFinance. " +
            "            st_ys_money}, #{corpFinance.end_ys_money}, #{corpFinance.st_yf_staff_pay}, #{corpFinance.end_yf_staff_pay}, #{corpFinance. " +
            "            st_yj_tax}, #{corpFinance.end_yj_tax}, #{corpFinance.st_yf_interest}, #{corpFinance.end_yf_interest}, #{corpFinance.st_yf_dividends}, #{corpFinance. " +
            "            end_yf_dividends}, #{corpFinance.st_other_yf_money}, #{corpFinance.end_other_yf_money}, #{corpFinance.st_ynndq_no_fz}, #{corpFinance. " +
            "            end_ynndq_no_fz}, #{corpFinance.st_other_fz}, #{corpFinance.end_other_fz}, #{corpFinance.st_hj_fz}, #{corpFinance.end_hj_fz}, #{corpFinance. " +
            "            st_long_borrow}, #{corpFinance.end_long_borrow}, #{corpFinance.st_yf_bond}, #{corpFinance.end_yf_bond}, #{corpFinance.st_long_yf_money}, #{corpFinance. " +
            "            end_long_yf_money}, #{corpFinance.st_zx_yf_money}, #{corpFinance.end_zx_yf_money}, #{corpFinance.st_yj_fz}, #{corpFinance. " +
            "            end_yj_fz}, #{corpFinance.st_dysds_fz}, #{corpFinance.end_dysds_fz}, #{corpFinance.st_other_no_fz}, #{corpFinance.end_other_no_fz}, #{corpFinance. " +
            "            st_hj_no_fz}, #{corpFinance.end_hj_no_fz}, #{corpFinance.st_hj_total_fz}, #{corpFinance.end_hj_total_fz}, #{corpFinance.st_paid_assets}, #{corpFinance. " +
            "            end_paid_assets}, #{corpFinance.st_zb_reserve}, #{corpFinance.end_zb_reserve}, #{corpFinance.st_kc_stock}, #{corpFinance. " +
            "            end_kc_stock}, #{corpFinance.st_zx_reserve}, #{corpFinance.end_zx_reserve}, #{corpFinance.st_yy_reserve}, #{corpFinance.end_yy_reserve}, #{corpFinance. " +
            "            st_wfp_profit}, #{corpFinance.end_wfp_profit}, #{corpFinance.st_hj_owner_right}, #{corpFinance.end_hj_owner_right}, #{corpFinance. " +
            "            st_hj_fz_owner_right}, #{corpFinance.end_hj_fz_owner_right} );"+
            
            " INSERT INTO work.tb_corp_contact( " +
            "            cont_corp_id, cont_name, cont_psotion, cont_edoctype,  " +
            "            cont_edocnum, cont_ephone, cont_efax, cont_eemail, cont_eqq,  " +
            "            cont_webchat, cont_tel, cont_bz) " +
            "   VALUES (#{corpContact.cont_corp_id}, #{corpContact.cont_name}, #{corpContact.cont_psotion}, #{corpContact.cont_edoctype}," +
            "           #{corpContact.cont_edocnum}, #{corpContact.cont_ephone}, #{corpContact.cont_efax},  #{corpContact.cont_eemail}, " +
            "           #{corpContact.cont_eqq}, #{corpContact.cont_webchat}, #{corpContact.cont_tel},  #{corpContact.cont_bz} );" +

            " INSERT INTO work.tb_corp_government( " +
            "            gov_corp_id, gov_domain, gov_office, gov_desc, gov_contact,  " +
            "            gov_psotion, gov_doctype, gov_docnum, gov_phone, gov_fax, gov_email,  " +
            "            gov_qq, gov_webchat, gov_tel, gov_remark) " +
            "   VALUES (#{corpGov.gov_corp_id}, #{corpGov.gov_domain}, #{corpGov.gov_office}, #{corpGov.gov_desc},  " +
            "           #{corpGov.gov_contact}, #{corpGov.gov_psotion}, #{corpGov.gov_doctype}, #{corpGov.gov_docnum}, " +
            "           #{corpGov.gov_phone}, #{corpGov.gov_fax}, #{corpGov.gov_email}, #{corpGov.gov_qq},  " +
            "           #{corpGov.gov_webchat}, #{corpGov.gov_tel}, #{corpGov.gov_remark} ); "+

            " INSERT INTO work.tb_corp_investors( " +
            "            inv_corp_id, inv_domain, inv_csrc_type1, inv_csrc_type2,  " +
            "            inv_csrc_type3, inv_csrc_type4, inv_indclass1, inv_indclass2,  " +
            "            inv_contact, inv_psotion, inv_doctype,  inv_docnum,  " +
            "            inv_phone, inv_fax, inv_email, inv_qq, inv_webchat,  " +
            "            inv_tel, inv_remark) " +
            "   VALUES (#{corpInvestor.inv_corp_id}, #{corpInvestor.inv_domain}, #{corpInvestor.inv_csrc_type1}, #{corpInvestor.inv_csrc_type2},  " +
            "           #{corpInvestor.inv_csrc_type3}, #{corpInvestor.inv_csrc_type4}, #{corpInvestor.inv_indclass1}, #{corpInvestor.inv_indclass2}, " +
            "           #{corpInvestor.inv_contact}, #{corpInvestor.inv_psotion}, #{corpInvestor.inv_doctype}, #{corpInvestor.inv_docnum}, " +
            "           #{corpInvestor.inv_phone}, #{corpInvestor.inv_fax}, #{corpInvestor.inv_email}, #{corpInvestor.inv_qq}, " +
            "           #{corpInvestor.inv_webchat}, #{corpInvestor.inv_tel}, #{corpInvestor.inv_remark} ); "+

            " INSERT INTO work.tb_corp_refinancing( " +
            "            refi_corp_id, refi_amounts, refi_use, refi_financ, refi_security,  " +
            "            refi_acc_cost, refi_deadline, refi_desc) " +
            "    VALUES (#{corpReFinancing.refi_corp_id}, #{corpReFinancing.refi_amounts}, #{corpReFinancing.refi_use}, #{corpReFinancing.refi_financ},  " +
            "             #{corpReFinancing.refi_security}, #{corpReFinancing.refi_acc_cost}, #{corpReFinancing.refi_deadline}, #{corpReFinancing.refi_desc}); "+

            " INSERT INTO work.tb_corp_rehr( " +
            "            rehr_corp_id, rehr_post, rehr_num, rehr_salary, rehr_sex_req,  " +
            "            rehr_age_req, rehr_requests) " +
            "   VALUES (#{corpReHr.rehr_corp_id}, #{corpReHr.rehr_post}, #{corpReHr.rehr_num}, #{corpReHr.rehr_salary},  " +
            "           #{corpReHr.rehr_sex_req}, #{corpReHr.rehr_age_req}, #{corpReHr.rehr_requests}); "+

            " INSERT INTO work.tb_corp_retrain( " +
            "            retra_corp_id, retra_mode, retra_content, retra_acc_cost, " +
            "            retra_dt, retra_requests) " +
            "   VALUES (#{corpReTrain.retra_corp_id}, #{corpReTrain.retra_mode}, #{corpReTrain.retra_content}, #{corpReTrain.retra_acc_cost},  " +
            "           #{corpReTrain.retra_dt}, #{corpReTrain.retra_requests}); "+


            " INSERT INTO work.tb_corp_service( " +
            "            ssrv_corp_id, srv_name, srv_type, srv_content, srv_levels, srv_domain, " +
            "             srv_penalty, srv_examiner, srv_post, srv_descs, srv_remark) " +
            "   VALUES (#{corpServicePojo.ssrv_corp_id}, #{corpServicePojo.srv_name}, #{corpServicePojo.srv_type}, #{corpServicePojo.srv_content},  " +
            "           #{corpServicePojo.srv_levels}, #{corpServicePojo.srv_domain}, #{corpServicePojo.srv_penalty},  #{corpServicePojo.srv_examiner},   " +
            "           #{corpServicePojo.srv_post}, #{corpServicePojo.srv_descs}, #{corpServicePojo.srv_remark});" +
 
            "end;")
    void insertCorp(
            @Param(value = "corpBase") CorpBase corpBase,
            @Param(value = "corpContact") CorpContact corpContact,
            @Param(value = "corpFinance") CorpFinance corpFinance,
            @Param(value = "corpGov") CorpGov corpGov,
            @Param(value = "corpInvestor") CorpInvestor corpInvestor,
            @Param(value = "corpReFinancing") CorpReFinancing corpReFinancing,
            @Param(value = "corpReHr") CorpReHr corpReHr,
            @Param(value = "corpReTrain") CorpReTrain corpReTrain,
            @Param(value = "corpServicePojo") CorpServicePojo corpServicePojo
    );
}
