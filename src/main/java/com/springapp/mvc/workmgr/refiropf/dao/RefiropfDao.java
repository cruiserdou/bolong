package com.springapp.mvc.workmgr.refiropf.dao;

import com.springapp.mvc.workmgr.refiropf.pojo.Refiropf;
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
public interface RefiropfDao {
    @SelectProvider(type = RefiropfDaoEmberSql.class, method = "listRefiropf")
    List<Refiropf> list(
            @Param(value = "rop_mos_id") Integer rop_mos_id
    );

    class RefiropfDaoEmberSql {
        public String listRefiropf(Map<String, Object> para) {

            String where = "";
            if (null != para.get("rop_mos_id").toString() && 0 != para.get("rop_mos_id").toString().length())
                where += " and rop_mos_id= " + Integer.parseInt(para.get("rop_mos_id").toString());


            where += " ;";

            return  "SELECT * FROM work.tb_refi_rop   where 1=1   "  + where;
        }
    }

    @Delete(" delete from work.tb_refi_rop where rop_id  = #{rop_id}")
    void delete(@Param(value = "mos_id") Integer rop_id);
}
