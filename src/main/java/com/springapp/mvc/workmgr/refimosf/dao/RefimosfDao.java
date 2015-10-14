package com.springapp.mvc.workmgr.refimosf.dao;

import com.springapp.mvc.workmgr.refimosf.pojo.Refimosf;
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
public interface RefimosfDao {
    @SelectProvider(type = RefimosfDaoEmberSql.class, method = "listRefimosf")
    List<Refimosf> list(
            @Param(value = "corp_name") String corp_name
    );

    class RefimosfDaoEmberSql {
        public String listRefimosf(Map<String, Object> para) {

            String where = "";
            if (null != para.get("corp_name").toString() && 0 != para.get("corp_name").toString().length())
                where += " and corp.name like '%" + para.get("corp_name").toString() + "%' ";


            where += " ;";

            return  "SELECT corp.name corp_name, mos_id, mos_corp_id, mos_cots, mos_amounts, mos_mop, mos_rop" +
                    "  from work.tb_corp  corp INNER  join work.tb_refi_mos  refi_mos on  corp.id  = refi_mos.mos_corp_id "+
                   "  where 1=1   "  + where;
        }
    }

    @Delete(" Delete FROM work.tb_refi_mos  where mos_id = #{mos_id}")
    void delete(@Param(value = "mos_id") Integer mos_id);
}
