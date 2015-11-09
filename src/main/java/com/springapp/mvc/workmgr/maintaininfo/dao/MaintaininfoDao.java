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
            @Param(value = "mi_mp_id") Integer mi_mp_id
    );

    class MaintaininfoDaoEmberSql {
        public String listMaintainInfo(Map<String, Object> para) {

            String where = "";
            if (null != para.get("mi_mp_id").toString() && 0 != para.get("mi_mp_id").toString().length())
                where += " and mi_mp_id= " + Integer.parseInt(para.get("mi_mp_id").toString());

            where += " ;";

            return "SELECT   mi_id,mi_mp_id, mi_corp_id, mi_listcode, mi_province, mi_city, mi_county, " +
                    "     mi_mt_date, mi_cust_type, mi_next_date, mi_next_plan, mi_remark  " +
                    "      FROM  work.tb_maintain_info maintain_info    where  1=1    "  + where;
        }
    }

    @Delete(" Delete FROM work.tb_maintain_info  where mi_id = #{mi_id}")
    void delete(@Param(value = "mi_id") Integer mi_id);
}
