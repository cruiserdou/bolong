package com.springapp.mvc.workmgr.maintaininfo.dao;

import com.springapp.mvc.workmgr.maintaininfo.pojo.Maintaininfo;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by dou on 15-9-3.
 */
@Repository
public interface MaintaininfoDao {
    @SelectProvider(type = MaintaininfoDaoEmberSql.class, method = "listMaintainInfo")
    List<Maintaininfo> list(
            @Param(value = "corp_name") String corp_name
    );

    class MaintaininfoDaoEmberSql {
        public String listMaintainInfo(Map<String, Object> para) {

            String where = "";
            if (null != para.get("corp_name").toString() && 0 != para.get("corp_name").toString().length())
                where += " and corp.name like '%" + para.get("corp_name").toString() + "%' ";


            where += " ;";

            return "SELECT corp.name corp_name,mi_id, mi_corp_id, mi_listcode, mi_province, mi_city, mi_county, " +
                    "     mi_mt_date, mi_cust_type, mi_next_date, mi_next_plan, mi_remark  " +
                    "      FROM  work.tb_maintain_info maintain_info ,work.tb_corp  corp   " +
                    "      where   corp.id  = maintain_info.mi_corp_id    and  " +
                    "             mi_id  in (select max(mi_id)  from work.tb_maintain_info   group by mi_corp_id)  "  + where;
        }
    }



    @Delete(" Delete FROM work.tb_maintain_info  where mi_id = #{mi_id}")
    void delete(@Param(value = "mi_id") Integer mi_id);
}
