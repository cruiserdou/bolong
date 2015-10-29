package com.springapp.mvc.system.dao;

import com.springapp.mvc.system.pojo.Act;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by dou on 15-9-2.
 */
@Repository
public interface ActDao {

    @SelectProvider(type = ActDaoEmberSql.class, method = "listActInfo")
    List<Act> list(
            @Param(value = "rolename") String rolename,
            @Param(value = "text") String text
    );

    class ActDaoEmberSql {
        public String listActInfo(Map<String, Object> para) {

            String where = "";
            if (null != para.get("rolename").toString() && 0 != para.get("rolename").toString().length())
                where += " and rolename like '%" + para.get("rolename").toString() + "%' ";
            if (null != para.get("text").toString() && 0 != para.get("text").toString().length())
                where += " and text like '%" + para.get("text").toString() + "%' ";


            where += " ;";

            return " SELECT roleid, treeid, parentid, rolename, text " +
                    "  FROM work.rolepermissions " +
                    " WHERE 1 = 1  " + where;
        }
    }

    @Delete(" Delete FROM work.rolepermissions  where roleid = #{roleid} and treeid = #{treeid}")
    void delete(@Param(value = "roleid") Integer roleid, @Param(value = "treeid") Integer treeid);
}
