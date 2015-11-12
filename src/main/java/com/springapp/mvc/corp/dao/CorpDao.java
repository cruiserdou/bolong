package com.springapp.mvc.corp.dao;

import com.springapp.mvc.corp.pojo.*;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
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
                    "ORDER BY corp.inputdt  DESC  limit " + para.get("limit").toString() + " offset " + para.get("start").toString();
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

            where += " ORDER BY corp.inputdt  DESC;";
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

            where += "  ORDER BY corp.inputdt  DESC;";
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

            where += " ORDER BY corp.inputdt  DESC;";
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

            where += " ORDER BY corp.inputdt  DESC;";


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

            where += "  ORDER BY inputdt  DESC;";
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

            where += " ORDER BY inputdt  DESC;";
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
            "            id, buslicno, name, unit, legrep, province, city, county, nos, " +
            "            postal, nature, regcap, bustermfdt, bustremtdt, regdt, list_area, " +
            "            listcode, listprice, listdt, channels, webchat, staffnum, regist_organ, " +
            "            regaddr, offaddr, scope, mbus, eprofile, phoinf, remark, indclass1, " +
            "            indclass2, indclass3, indclass4, csrc_type1, csrc_type2,inputid ,inputdt," +
            "            type_server, type_investors, type_govermt,demand_rz, demand_px, demand_rl " +
            "            )" +
            "    VALUES (#{corpId}, #{corpBase.buslicno}, #{corpBase.name}, #{corpBase.unit}, #{corpBase.legrep}, #{corpBase.province}, #{corpBase.city}, #{corpBase.county}, #{corpBase.nos}, " +
            "            #{corpBase.postal}, #{corpBase.nature}, #{corpBase.regcap}, #{corpBase.bustermfdt}, #{corpBase.bustremtdt},#{corpBase.regdt}, #{corpBase.list_area}, " +
            "            #{corpBase.listcode}, #{corpBase.listprice}, #{corpBase.listdt}, #{corpBase.channels}, #{corpBase.webchat}, #{corpBase.staffnum}, #{corpBase.regist_organ}, " +
            "            #{corpBase.regaddr}, #{corpBase.offaddr}, #{corpBase.scope}, #{corpBase.mbus}, #{corpBase.eprofile}, #{corpBase.phoinf}, #{corpBase.remark}, #{corpBase.indclass1}, " +
            "            #{corpBase.indclass2}, #{corpBase.indclass3}, #{corpBase.indclass4}, #{corpBase.csrc_type1}, #{corpBase.csrc_type2},#{inputid},#{currentTime}," +
            "            #{corpBase.type_server}, #{corpBase.type_investors}, #{corpBase.type_govermt}, #{corpBase.demand_rz}, #{corpBase.demand_px}, #{corpBase.demand_rl}     " +
            "            );" +

            " INSERT INTO work.tb_corp_finance( " +
            "            fin_corp_id, start_time,end_time , st_money_fund, end_money_fund,  " +
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
            "    VALUES ( #{corpId},  #{corpFinance.start_time}, #{corpFinance.end_time},  #{corpFinance.st_money_fund}, #{corpFinance.end_money_fund}, #{corpFinance.st_jyxjr_assets}, #{corpFinance.end_jyxjr_assets}," +
            "            #{corpFinance.st_ys_bill}, #{corpFinance.end_ys_bill}, #{corpFinance.st_ys_account}, #{corpFinance.end_ys_account}, " +
            "            #{corpFinance.st_yf_money}, #{corpFinance.end_yf_money}, #{corpFinance.st_ys_interest}, #{corpFinance.end_ys_interest}, #{corpFinance.st_ys_dividends}, " +
            "            #{corpFinance.end_ys_dividends}, #{corpFinance.st_other_ys_money}, #{corpFinance.end_other_ys_money}, " +
            "            #{corpFinance.st_inventory}, #{corpFinance.end_inventory}, #{corpFinance.st_ynndq_no_assets}, #{corpFinance.end_ynndq_no_assets}, " +
            "            #{corpFinance.st_other_assets}, #{corpFinance.end_other_assets}, #{corpFinance.st_hj_assets}, #{corpFinance.end_hj_assets}, " +
            "            #{corpFinance.st_kgcs_assets}, #{corpFinance.end_kgcs_assets}, #{corpFinance.st_cyzdq_investment}, #{corpFinance.end_cyzdq_investment}, " +
            "            #{corpFinance.st_long_ys_money}, #{corpFinance.end_long_ys_money}, #{corpFinance.st_long_gq_investment}, #{corpFinance.end_long_gq_investment}, " +
            "            #{corpFinance.st_invest_house}, #{corpFinance.end_invest_house}, #{corpFinance.st_gd_assets}, #{corpFinance.end_gd_assets}, " +
            "            #{corpFinance.st_accu_deprec}, #{corpFinance.end_accu_deprec}, #{corpFinance.st_gd_assets_jz}, #{corpFinance.end_gd_assets_jz}, " +
            "            #{corpFinance.st_gd_assets_ready}, #{corpFinance.end_gd_assets_ready}, #{corpFinance.st_gd_assets_je}, #{corpFinance.end_gd_assets_je}, " +
            "            #{corpFinance.st_now_project}, #{corpFinance.end_now_project}, #{corpFinance.st_project_material}, #{corpFinance.end_project_material}," +
            "            #{corpFinance.st_gd_assets_ql}, #{corpFinance.end_gd_assets_ql}, #{corpFinance.st_scx_investment}, #{corpFinance.end_scx_investment}, " +
            "            #{corpFinance.st_wx_assets}, #{corpFinance.end_wx_assets}, #{corpFinance.st_goodwill}, #{corpFinance.end_goodwill}, " +
            "            #{corpFinance.st_cqdt_cost}, #{corpFinance.end_cqdt_cost}, #{corpFinance.st_dysds_assets}, #{corpFinance.end_dysds_assets}, " +
            "            #{corpFinance.st_other_no_assets}, #{corpFinance.end_other_no_assets}, #{corpFinance.st_hj_no_asset}, #{corpFinance.end_hj_no_asset},  " +
            "            #{corpFinance.st_hj_total_asset}, #{corpFinance.end_hj_total_asset}, #{corpFinance.st_short_borrow}, #{corpFinance.end_short_borrow},  " +
            "            #{corpFinance.st_jyx_finance_fz}, #{corpFinance.end_jyx_finance_fz}, #{corpFinance.st_yf_bill}, #{corpFinance.end_yf_bill},  " +
            "            #{corpFinance.st_yf_account}, #{corpFinance.end_yf_account}, #{corpFinance.st_ys_money}, #{corpFinance.end_ys_money},  " +
            "            #{corpFinance.st_yf_staff_pay}, #{corpFinance.end_yf_staff_pay}, #{corpFinance.st_yj_tax}, #{corpFinance.end_yj_tax},  " +
            "            #{corpFinance.st_yf_interest}, #{corpFinance.end_yf_interest}, #{corpFinance.st_yf_dividends}, #{corpFinance.end_yf_dividends},  " +
            "            #{corpFinance.st_other_yf_money}, #{corpFinance.end_other_yf_money}, #{corpFinance.st_ynndq_no_fz}, #{corpFinance.end_ynndq_no_fz},  " +
            "            #{corpFinance.st_other_fz}, #{corpFinance.end_other_fz}, #{corpFinance.st_hj_fz}, #{corpFinance.end_hj_fz}, #{corpFinance.st_long_borrow}, " +
            "            #{corpFinance.end_long_borrow}, #{corpFinance.st_yf_bond}, #{corpFinance.end_yf_bond}, #{corpFinance.st_long_yf_money}, #{corpFinance.end_long_yf_money}, " +
            "            #{corpFinance.st_zx_yf_money}, #{corpFinance.end_zx_yf_money}, #{corpFinance.st_yj_fz},  " +
            "            #{corpFinance.end_yj_fz}, #{corpFinance.st_dysds_fz}, #{corpFinance.end_dysds_fz}, #{corpFinance.st_other_no_fz}, #{corpFinance.end_other_no_fz},  " +
            "            #{corpFinance.st_hj_no_fz}, #{corpFinance.end_hj_no_fz}, #{corpFinance.st_hj_total_fz}, #{corpFinance.end_hj_total_fz},  " +
            "            #{corpFinance.st_paid_assets}, #{corpFinance.end_paid_assets}, #{corpFinance.st_zb_reserve}, #{corpFinance.end_zb_reserve},  " +
            "            #{corpFinance.st_kc_stock}, #{corpFinance.end_kc_stock}, #{corpFinance.st_zx_reserve}, #{corpFinance.end_zx_reserve},  " +
            "            #{corpFinance.st_yy_reserve}, #{corpFinance.end_yy_reserve}, #{corpFinance.st_wfp_profit}, #{corpFinance.end_wfp_profit},  " +
            "            #{corpFinance.st_hj_owner_right}, #{corpFinance.end_hj_owner_right}, #{corpFinance.st_hj_fz_owner_right}, #{corpFinance.end_hj_fz_owner_right} );"+

            " INSERT INTO work.tb_corp_contact( " +
            "            cont_corp_id, cont_name, cont_psotion, cont_edoctype,  " +
            "            cont_edocnum, cont_ephone, cont_efax, cont_eemail, cont_eqq,  " +
            "            cont_webchat, cont_tel, cont_bz) " +
            "   VALUES (#{corpId}, #{corpContact.cont_name}, #{corpContact.cont_psotion}, #{corpContact.cont_edoctype}," +
            "           #{corpContact.cont_edocnum}, #{corpContact.cont_ephone}, #{corpContact.cont_efax},  #{corpContact.cont_eemail}, " +
            "           #{corpContact.cont_eqq}, #{corpContact.cont_webchat}, #{corpContact.cont_tel},  #{corpContact.cont_bz} );" +

            " INSERT INTO work.tb_corp_government( " +
            "            gov_corp_id, gov_domain, gov_office, gov_desc, gov_contact,  " +
            "            gov_psotion, gov_doctype, gov_docnum, gov_phone, gov_fax, gov_email,  " +
            "            gov_qq, gov_webchat, gov_tel, gov_remark) " +
            "   VALUES (#{corpId},  #{corpGov.gov_domain}, #{corpGov.gov_office}, #{corpGov.gov_desc},  " +
            "           #{corpGov.gov_contact}, #{corpGov.gov_psotion}, #{corpGov.gov_doctype}, #{corpGov.gov_docnum}, " +
            "           #{corpGov.gov_phone}, #{corpGov.gov_fax}, #{corpGov.gov_email}, #{corpGov.gov_qq},  " +
            "           #{corpGov.gov_webchat}, #{corpGov.gov_tel}, #{corpGov.gov_remark} ); "+

            " INSERT INTO work.tb_corp_investors( " +
            "            inv_corp_id, inv_domain, inv_csrc_type1, inv_csrc_type2,  " +
            "            inv_csrc_type3, inv_csrc_type4, inv_indclass1, inv_indclass2,  " +
            "            inv_contact, inv_psotion, inv_doctype,  inv_docnum,  " +
            "            inv_phone, inv_fax, inv_email, inv_qq, inv_webchat,  " +
            "            inv_tel, inv_remark) " +
            "   VALUES (#{corpId},  #{corpInvestor.inv_domain}, #{corpInvestor.inv_csrc_type1}, #{corpInvestor.inv_csrc_type2},  " +
            "           #{corpInvestor.inv_csrc_type3}, #{corpInvestor.inv_csrc_type4}, #{corpInvestor.inv_indclass1}, #{corpInvestor.inv_indclass2}, " +
            "           #{corpInvestor.inv_contact}, #{corpInvestor.inv_psotion}, #{corpInvestor.inv_doctype}, #{corpInvestor.inv_docnum}, " +
            "           #{corpInvestor.inv_phone}, #{corpInvestor.inv_fax}, #{corpInvestor.inv_email}, #{corpInvestor.inv_qq}, " +
            "           #{corpInvestor.inv_webchat}, #{corpInvestor.inv_tel}, #{corpInvestor.inv_remark} ); "+

            " INSERT INTO work.tb_corp_refinancing( " +
            "            refi_corp_id, refi_amounts, refi_use, refi_financ, refi_security,  " +
            "            refi_acc_cost, refi_deadline, refi_desc) " +
            "    VALUES (#{corpId},  #{corpReFinancing.refi_amounts}, #{corpReFinancing.refi_use}, #{corpReFinancing.refi_financ},  " +
            "             #{corpReFinancing.refi_security}, #{corpReFinancing.refi_acc_cost}, #{corpReFinancing.refi_deadline}, #{corpReFinancing.refi_desc}); "+

            " INSERT INTO work.tb_corp_rehr( " +
            "            rehr_corp_id, rehr_post, rehr_num, rehr_salary, rehr_sex_req,  " +
            "            rehr_age_req, rehr_requests) " +
            "   VALUES (#{corpId}, #{corpReHr.rehr_post}, #{corpReHr.rehr_num}, #{corpReHr.rehr_salary},  " +
            "           #{corpReHr.rehr_sex_req}, #{corpReHr.rehr_age_req}, #{corpReHr.rehr_requests}); "+

            " INSERT INTO work.tb_corp_retrain( " +
            "            retra_corp_id, retra_mode, retra_content, retra_acc_cost, " +
            "            retra_dt, retra_requests) " +
            "   VALUES (#{corpId}, #{corpReTrain.retra_mode}, #{corpReTrain.retra_content}, #{corpReTrain.retra_acc_cost},  " +
            "           #{corpReTrain.retra_dt}, #{corpReTrain.retra_requests}); "+


            " INSERT INTO work.tb_corp_service( " +
            "            srv_corp_id, srv_name, srv_type, srv_content, srv_levels, srv_domain, " +
            "             srv_penalty, srv_examiner, srv_post, srv_descs, srv_remark) " +
            "   VALUES (#{corpId},  #{corpServicePojo.srv_name}, #{corpServicePojo.srv_type}, #{corpServicePojo.srv_content},  " +
            "           #{corpServicePojo.srv_levels}, #{corpServicePojo.srv_domain}, #{corpServicePojo.srv_penalty},  #{corpServicePojo.srv_examiner},   " +
            "           #{corpServicePojo.srv_post}, #{corpServicePojo.srv_descs}, #{corpServicePojo.srv_remark});" +

            " INSERT INTO work.tb_corp_maintain( " +
            "             mai_corp_id,  mai_changer_id,  mai_changer_dt,   " +
            "            mai_recomdt, mai_trusteeship, mai_listst, mai_eclass, mai_maintain,  " +
            "            mai_reserve, mai_emaint, mai_dept, mai_post, mai_tel, mai_phone,  " +
            "            mai_fax, mai_email, mai_qq, mai_webchat, mai_bz) " +
            "    VALUES (#{corpId},  #{inputid}, #{currentTime} ,   " +
            "            #{corpMaintain.mai_recomdt},  #{corpMaintain.mai_trusteeship},  #{corpMaintain.mai_listst},  #{corpMaintain.mai_eclass},   " +
            "            #{corpMaintain.mai_maintain},  #{corpMaintain.mai_reserve},  #{corpMaintain.mai_emaint},  #{corpMaintain.mai_dept},   " +
            "            #{corpMaintain.mai_post},  #{corpMaintain.mai_tel},  #{corpMaintain.mai_phone},  #{corpMaintain.mai_fax},   " +
            "            #{corpMaintain.mai_email},  #{corpMaintain.mai_qq},  #{corpMaintain.mai_webchat},  #{corpMaintain.mai_bz});" +

            "end;")
    void insertCorp(
            @Param(value = "inputid") Integer  inputid,
            @Param(value = "currentTime") Timestamp currentTime,
            @Param(value = "corpId") Integer corpId,
            @Param(value = "corpBase") CorpBase corpBase,
            @Param(value = "corpContact") CorpContact corpContact,
            @Param(value = "corpFinance") CorpFinance corpFinance,
            @Param(value = "corpGov") CorpGov corpGov,
            @Param(value = "corpInvestor") CorpInvestor corpInvestor,
            @Param(value = "corpReFinancing") CorpReFinancing corpReFinancing,
            @Param(value = "corpReHr") CorpReHr corpReHr,
            @Param(value = "corpReTrain") CorpReTrain corpReTrain,
            @Param(value = "corpServicePojo") CorpServicePojo corpServicePojo,
            @Param(value = "corpMaintain") CorpMaintain corpMaintain

    );

    @Select(" select nextval('work.corp_id_seq'::regclass) as corp_id;")
    Integer getMaxCorpId();

    @Select(" SELECT CURRENT_TIMESTAMP(0) :: TIMESTAMP WITHOUT TIME ZONE  ;")
    Timestamp getCurrentTime();

    @Update("begin;" +

            " UPDATE work.tb_corp " +
            "   SET buslicno=#{corpBase.buslicno},name=#{corpBase.name},unit=#{corpBase.unit},legrep=#{corpBase.legrep},province=#{corpBase.province}, " +
            "       city=#{corpBase.city},county=#{corpBase.county},nos=#{corpBase.nos},postal=#{corpBase.postal},nature=#{corpBase.nature}, " +
            "       regcap=#{corpBase.regcap},bustermfdt=#{corpBase.bustermfdt},bustremtdt=#{corpBase.bustremtdt},regdt=#{corpBase.regdt},list_area=#{corpBase.list_area}, " +
            "       listcode=#{corpBase.listcode},listprice=#{corpBase.listprice},listdt=#{corpBase.listdt},channels=#{corpBase.channels},webchat=#{corpBase.webchat}, " +
            "       staffnum=#{corpBase.staffnum},regist_organ=#{corpBase.regist_organ},regaddr=#{corpBase.regaddr},offaddr=#{corpBase.offaddr},scope=#{corpBase.scope}," +
            "       mbus=#{corpBase.mbus},eprofile=#{corpBase.eprofile},phoinf=#{corpBase.phoinf},remark=#{corpBase.remark},indclass1=#{corpBase.indclass1}, " +
            "       indclass2=#{corpBase.indclass2},indclass3=#{corpBase.indclass3},indclass4=#{corpBase.indclass4},csrc_type1=#{corpBase.csrc_type1},csrc_type2=#{corpBase.csrc_type2}," +
            "       type_server=#{corpBase.type_server}, type_investors=#{corpBase.type_investors}, type_govermt=#{corpBase.type_govermt}, demand_rz=#{corpBase.demand_rz}," +
            "       demand_px=#{corpBase.demand_px}, demand_rl=#{corpBase.demand_rl} " +
            " WHERE id=#{corpBase.id};"+



            " UPDATE work.tb_corp_finance " +
            "   SET start_time=#{corpFinance.start_time},end_time=#{corpFinance.end_time},st_money_fund=#{corpFinance.st_money_fund},end_money_fund=#{corpFinance.end_money_fund}," +
            "       st_jyxjr_assets=#{corpFinance.st_jyxjr_assets},end_jyxjr_assets=#{corpFinance.end_jyxjr_assets},st_ys_bill=#{corpFinance.st_ys_bill}," +
            "       end_ys_bill=#{corpFinance.end_ys_bill},st_ys_account=#{corpFinance.st_ys_account},end_ys_account=#{corpFinance.end_ys_account}," +
            "       st_yf_money=#{corpFinance.st_yf_money},end_yf_money=#{corpFinance.end_yf_money},st_ys_interest=#{corpFinance.st_ys_interest}," +
            "       end_ys_interest=#{corpFinance.end_ys_interest},st_ys_dividends=#{corpFinance.st_ys_dividends},end_ys_dividends=#{corpFinance.end_ys_dividends}," +
            "       st_other_ys_money=#{corpFinance.st_other_ys_money},end_other_ys_money=#{corpFinance.end_other_ys_money},st_inventory=#{corpFinance.st_inventory}," +
            "       end_inventory=#{corpFinance.end_inventory},st_ynndq_no_assets=#{corpFinance.st_ynndq_no_assets},end_ynndq_no_assets=#{corpFinance.end_ynndq_no_assets}," +
            "       st_other_assets=#{corpFinance.st_other_assets},end_other_assets=#{corpFinance.end_other_assets},st_hj_assets=#{corpFinance.st_hj_assets}," +
            "       end_hj_assets=#{corpFinance.end_hj_assets},st_kgcs_assets=#{corpFinance.st_kgcs_assets},end_kgcs_assets=#{corpFinance.end_kgcs_assets}," +
            "       st_cyzdq_investment=#{corpFinance.st_cyzdq_investment},end_cyzdq_investment=#{corpFinance.end_cyzdq_investment},st_long_ys_money=#{corpFinance.st_long_ys_money}," +
            "       end_long_ys_money=#{corpFinance.end_long_ys_money},st_long_gq_investment=#{corpFinance.st_long_gq_investment}," +
            "       end_long_gq_investment=#{corpFinance.end_long_gq_investment},st_invest_house=#{corpFinance.st_invest_house},end_invest_house=#{corpFinance.end_invest_house}," +
            "       st_gd_assets=#{corpFinance.st_gd_assets},end_gd_assets=#{corpFinance.end_gd_assets},st_accu_deprec=#{corpFinance.st_accu_deprec},end_accu_deprec=#{corpFinance.end_accu_deprec}," +
            "       st_gd_assets_jz=#{corpFinance.st_gd_assets_jz},end_gd_assets_jz=#{corpFinance.end_gd_assets_jz},st_gd_assets_ready=#{corpFinance.st_gd_assets_ready}," +
            "       end_gd_assets_ready=#{corpFinance.end_gd_assets_ready},st_gd_assets_je=#{corpFinance.st_gd_assets_je},end_gd_assets_je=#{corpFinance.end_gd_assets_je}," +
            "       st_now_project=#{corpFinance.st_now_project},end_now_project=#{corpFinance.end_now_project},st_project_material=#{corpFinance.st_project_material}," +
            "       end_project_material=#{corpFinance.end_project_material}, st_gd_assets_ql=#{corpFinance.st_gd_assets_ql},end_gd_assets_ql=#{corpFinance.end_gd_assets_ql}," +
            "       st_scx_investment=#{corpFinance.st_scx_investment},end_scx_investment=#{corpFinance.end_scx_investment},st_wx_assets=#{corpFinance.st_wx_assets}," +
            "       end_wx_assets=#{corpFinance.end_wx_assets},st_goodwill=#{corpFinance.st_goodwill},end_goodwill=#{corpFinance.end_goodwill},st_cqdt_cost=#{corpFinance.st_cqdt_cost}," +
            "       end_cqdt_cost=#{corpFinance.end_cqdt_cost},st_dysds_assets=#{corpFinance.st_dysds_assets},end_dysds_assets=#{corpFinance.end_dysds_assets}," +
            "       st_other_no_assets=#{corpFinance.st_other_no_assets},end_other_no_assets=#{corpFinance.end_other_no_assets},st_hj_no_asset=#{corpFinance.st_hj_no_asset}," +
            "       end_hj_no_asset=#{corpFinance.end_hj_no_asset},st_hj_total_asset=#{corpFinance.st_hj_total_asset},end_hj_total_asset=#{corpFinance.end_hj_total_asset}," +
            "       st_short_borrow=#{corpFinance.st_short_borrow},end_short_borrow=#{corpFinance.end_short_borrow},st_jyx_finance_fz=#{corpFinance.st_jyx_finance_fz}," +
            "       end_jyx_finance_fz=#{corpFinance.end_jyx_finance_fz},st_yf_bill=#{corpFinance.st_yf_bill},end_yf_bill=#{corpFinance.end_yf_bill}," +
            "       st_yf_account=#{corpFinance.st_yf_account},end_yf_account=#{corpFinance.end_yf_account},st_ys_money=#{corpFinance.st_ys_money}," +
            "       end_ys_money=#{corpFinance.end_ys_money},st_yf_staff_pay=#{corpFinance.st_yf_staff_pay},end_yf_staff_pay=#{corpFinance.end_yf_staff_pay}," +
            "       st_yj_tax=#{corpFinance.st_yj_tax},end_yj_tax=#{corpFinance.end_yj_tax},st_yf_interest=#{corpFinance.st_yf_interest}," +
            "       end_yf_interest=#{corpFinance.end_yf_interest},st_yf_dividends=#{corpFinance.st_yf_dividends},end_yf_dividends=#{corpFinance.end_yf_dividends}," +
            "       st_other_yf_money=#{corpFinance.st_other_yf_money},end_other_yf_money=#{corpFinance.end_other_yf_money},st_ynndq_no_fz=#{corpFinance.st_ynndq_no_fz}," +
            "       end_ynndq_no_fz=#{corpFinance.end_ynndq_no_fz},st_other_fz=#{corpFinance.st_other_fz},end_other_fz=#{corpFinance.end_other_fz}," +
            "       st_hj_fz=#{corpFinance.st_hj_fz},end_hj_fz=#{corpFinance.end_hj_fz},st_long_borrow=#{corpFinance.st_long_borrow},end_long_borrow=#{corpFinance.end_long_borrow}," +
            "       st_yf_bond=#{corpFinance.st_yf_bond},end_yf_bond=#{corpFinance.end_yf_bond},st_long_yf_money=#{corpFinance.st_long_yf_money}," +
            "       end_long_yf_money=#{corpFinance.end_long_yf_money},st_zx_yf_money=#{corpFinance.st_zx_yf_money},end_zx_yf_money=#{corpFinance.end_zx_yf_money}," +
            "       st_yj_fz=#{corpFinance.st_yj_fz},end_yj_fz=#{corpFinance.end_yj_fz},st_dysds_fz=#{corpFinance.st_dysds_fz},end_dysds_fz=#{corpFinance.end_dysds_fz}," +
            "       st_other_no_fz=#{corpFinance.st_other_no_fz},end_other_no_fz=#{corpFinance.end_other_no_fz},st_hj_no_fz=#{corpFinance.st_hj_no_fz}," +
            "       end_hj_no_fz=#{corpFinance.end_hj_no_fz},st_hj_total_fz=#{corpFinance.st_hj_total_fz},end_hj_total_fz=#{corpFinance.end_hj_total_fz}," +
            "       st_paid_assets=#{corpFinance.st_paid_assets},end_paid_assets=#{corpFinance.end_paid_assets},st_zb_reserve=#{corpFinance.st_zb_reserve}," +
            "       end_zb_reserve=#{corpFinance.end_zb_reserve},st_kc_stock=#{corpFinance.st_kc_stock},end_kc_stock=#{corpFinance.end_kc_stock}," +
            "       st_zx_reserve=#{corpFinance.st_zx_reserve},end_zx_reserve=#{corpFinance.end_zx_reserve},st_yy_reserve=#{corpFinance.st_yy_reserve}," +
            "       end_yy_reserve=#{corpFinance.end_yy_reserve},st_wfp_profit=#{corpFinance.st_wfp_profit},end_wfp_profit=#{corpFinance.end_wfp_profit}," +
            "       st_hj_owner_right=#{corpFinance.st_hj_owner_right},end_hj_owner_right=#{corpFinance.end_hj_owner_right}," +
            "       st_hj_fz_owner_right=#{corpFinance.st_hj_fz_owner_right},end_hj_fz_owner_right=#{corpFinance.end_hj_fz_owner_right}" +
            " WHERE finid=#{corpFinance.finid};"+

            " UPDATE work.tb_corp_contact " +
            "   SET cont_name= #{corpContact.cont_name},    cont_psotion=#{corpContact.cont_psotion}, cont_edoctype=#{corpContact.cont_edoctype}," +
            "       cont_edocnum=#{corpContact.cont_edocnum},cont_ephone=#{corpContact.cont_ephone}, cont_efax=#{corpContact.cont_efax},   cont_eemail=#{corpContact.cont_eemail}," +
            "       cont_eqq=#{corpContact.cont_eqq},  cont_webchat=#{corpContact.cont_webchat},cont_tel=#{corpContact.cont_tel},    cont_bz=#{corpContact.cont_bz}" +
            " WHERE cont_id=#{corpContact.cont_id};"+

            " UPDATE work.tb_corp_government " +
            "   SET gov_domain=#{corpGov.gov_domain}, gov_office=#{corpGov.gov_office}, gov_desc=#{corpGov.gov_desc},   " +
            "       gov_contact=#{corpGov.gov_contact},gov_psotion=#{corpGov.gov_psotion},gov_doctype=#{corpGov.gov_doctype}, " +
            "       gov_docnum=#{corpGov.gov_docnum}, gov_phone=#{corpGov.gov_phone},  gov_fax=#{corpGov.gov_fax},    " +
            "       gov_email=#{corpGov.gov_email},  gov_qq=#{corpGov.gov_qq},     gov_webchat=#{corpGov.gov_webchat}, " +
            "       gov_tel=#{corpGov.gov_tel},    gov_remark=#{corpGov.gov_remark}  " +
            " WHERE gov_id=#{corpGov.gov_id};"+

            " UPDATE work.tb_corp_investors " +
            "   SET inv_domain=#{corpInvestor.inv_domain},inv_csrc_type1=#{corpInvestor.inv_csrc_type1},inv_csrc_type2=#{corpInvestor.inv_csrc_type2}, " +
            "       inv_csrc_type3=#{corpInvestor.inv_csrc_type3},inv_csrc_type4=#{corpInvestor.inv_csrc_type4},inv_indclass1=#{corpInvestor.inv_indclass1}, " +
            "       inv_indclass2=#{corpInvestor.inv_indclass2},inv_contact=#{corpInvestor.inv_contact},inv_psotion=#{corpInvestor.inv_psotion}, " +
            "       inv_doctype=#{corpInvestor.inv_doctype},inv_docnum=#{corpInvestor.inv_docnum},inv_phone=#{corpInvestor.inv_phone}, " +
            "       inv_fax=#{corpInvestor.inv_fax},inv_email=#{corpInvestor.inv_email},inv_qq=#{corpInvestor.inv_qq}, " +
            "       inv_webchat=#{corpInvestor.inv_webchat},inv_tel=#{corpInvestor.inv_tel},inv_remark=#{corpInvestor.inv_remark}" +
            " WHERE inv_id=#{corpInvestor.inv_id};"+

            " UPDATE work.tb_corp_refinancing " +
            "   SET  refi_amounts=#{corpReFinancing.refi_amounts},refi_use=#{corpReFinancing.refi_use},refi_financ=#{corpReFinancing.refi_financ}," +
            "        refi_security=#{corpReFinancing.refi_security}, refi_acc_cost=#{corpReFinancing.refi_acc_cost},refi_deadline=#{corpReFinancing.refi_deadline}," +
            "        refi_desc=#{corpReFinancing.refi_desc}" +
            " WHERE refi_id=#{corpReFinancing.refi_id};"+

            " UPDATE work.tb_corp_rehr " +
            "   SET rehr_post=#{corpReHr.rehr_post},rehr_num=#{corpReHr.rehr_num},rehr_salary=#{corpReHr.rehr_salary}," +
            "       rehr_sex_req=#{corpReHr.rehr_sex_req},rehr_age_req=#{corpReHr.rehr_age_req},rehr_requests=#{corpReHr.rehr_requests}" +
            " WHERE rehr_id=#{corpReHr.rehr_id};"+

            " UPDATE work.tb_corp_retrain " +
            "   SET  retra_mode=#{corpReTrain.retra_mode},retra_content=#{corpReTrain.retra_content},retra_acc_cost=#{corpReTrain.retra_acc_cost}," +
            "       retra_dt=#{corpReTrain.retra_dt},retra_requests=#{corpReTrain.retra_requests} " +
            " WHERE  retra_id=#{corpReTrain.retra_id};"+

            " UPDATE work.tb_corp_service " +
            "   SET  srv_name=#{corpServicePojo.srv_name}, srv_type=#{corpServicePojo.srv_type}, srv_content=#{corpServicePojo.srv_content},  " +
            "        srv_levels=#{corpServicePojo.srv_levels}, srv_domain=#{corpServicePojo.srv_domain}, srv_penalty=#{corpServicePojo.srv_penalty}," +
            "        srv_examiner=#{corpServicePojo.srv_examiner}, srv_post= #{corpServicePojo.srv_post},  " +
            "        srv_descs=#{corpServicePojo.srv_descs}, srv_remark= #{corpServicePojo.srv_remark} " +
            " WHERE srv_id=#{corpServicePojo.srv_id};"+

            " UPDATE work.tb_corp_maintain " +
            "   SET  mai_changer_id=#{inputid},mai_changer_dt=#{currentTime}, " +
            "        mai_recomdt=#{corpMaintain.mai_recomdt},mai_trusteeship=#{corpMaintain.mai_trusteeship},mai_listst=#{corpMaintain.mai_listst}, " +
            "        mai_eclass=#{corpMaintain.mai_eclass},mai_maintain=#{corpMaintain.mai_maintain},mai_reserve=#{corpMaintain.mai_reserve}, " +
            "        mai_emaint=#{corpMaintain.mai_emaint},mai_dept=#{corpMaintain.mai_dept},  mai_post=#{corpMaintain.mai_post},  " +
            "        mai_tel=#{corpMaintain.mai_tel},mai_phone=#{corpMaintain.mai_phone}, mai_fax=#{corpMaintain.mai_fax}, " +
            "        mai_email=#{corpMaintain.mai_email},mai_qq=#{corpMaintain.mai_qq},mai_webchat=#{corpMaintain.mai_webchat},mai_bz=#{corpMaintain.mai_bz} " +
            " WHERE mai_id=#{corpMaintain.mai_id};"+

            "end;")
    void updateCorp(
            @Param(value = "inputid") Integer  inputid,
            @Param(value = "currentTime") Timestamp currentTime,
            @Param(value = "corpBase") CorpBase corpBase,
            @Param(value = "corpContact") CorpContact corpContact,
            @Param(value = "corpFinance") CorpFinance corpFinance,
            @Param(value = "corpGov") CorpGov corpGov,
            @Param(value = "corpInvestor") CorpInvestor corpInvestor,
            @Param(value = "corpReFinancing") CorpReFinancing corpReFinancing,
            @Param(value = "corpReHr") CorpReHr corpReHr,
            @Param(value = "corpReTrain") CorpReTrain corpReTrain,
            @Param(value = "corpServicePojo") CorpServicePojo corpServicePojo,
            @Param(value = "corpMaintain") CorpMaintain corpMaintain

    );






    @SelectProvider(type = CorpBaseDaoEmberSql.class, method = "listCorpBase")
    List<CorpBase> listCorpBase(
            @Param(value = "type") String type,
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode,
            @Param(value = "start") String start,
            @Param(value = "limit") String limit,
            @Param(value = "search_val") String search_val
    );

    @SelectProvider(type = CorpBaseDaoEmberSql.class, method = "countCorpBase")
    int getCorpBaseCount(
            @Param(value = "type") String type,
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode,
            @Param(value = "start") String start,
            @Param(value = "limit") String limit
    );

    class CorpBaseDaoEmberSql {
        public String listCorpBase(Map<String, Object> para) {
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
            if (para.get("type").equals("refi"))
                where += " and id   not in (select mos_corp_id  from work.tb_refi_mos)";
            return "select id, buslicno, name, unit, legrep, province, city, county, nos,  " +
                    "       postal, nature, regcap, bustermfdt, bustremtdt, regdt, list_area,  " +
                    "       listcode, listprice, listdt, channels, webchat, staffnum, regist_organ, " +
                    "       regaddr, offaddr, scope, mbus, eprofile, phoinf, remark, indclass1,  " +
                    "       indclass2, indclass3, indclass4, csrc_type1, csrc_type2, csrc_type3,  " +
                    "       csrc_type4, type_enterp, type_server, type_investors, type_govermt,  " +
                    "       demand_rz, demand_px, demand_rl  from work.tb_corp    WHERE 1 = 1  " +
                    where +
                    "ORDER BY  inputdt  DESC  limit " + para.get("limit").toString() + " offset " + para.get("start").toString();
        }
        public String countCorpBase(Map<String, Object> para) {
            String where = "";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";
            if (para.get("type").equals("refi"))
                where += " and id   not in (select mos_corp_id  from work.tb_refi_mos)";
            return " SELECT count(id) " +
                    " FROM work.tb_corp " +
                    " WHERE 1 = 1  " +
                    where;
        }
    }

}
