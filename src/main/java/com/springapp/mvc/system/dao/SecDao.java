package com.springapp.mvc.system.dao;

import com.springapp.mvc.system.pojo.Sec;
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
public interface SecDao {

    @SelectProvider(type = SecDaoEmberSql.class, method = "listSecInfo")
    List<Sec> list(
            @Param(value = "rolename") String rolename,
            @Param(value = "username") String username
    );

    class SecDaoEmberSql {
        public String listSecInfo(Map<String, Object> para) {

            String where = "";
            if (null != para.get("rolename").toString() && 0 != para.get("rolename").toString().length())
                where += " and rolename like '%" + para.get("rolename").toString() + "%' ";
            if (null != para.get("username").toString() && 0 != para.get("username").toString().length())
                where += " and username like '%" + para.get("username").toString() + "%' ";


            where += " ;";

            return " SELECT roleid, userid, rolename, username  " +
                    "  FROM work.userroles " +
                    " WHERE 1 = 1  " + where;
        }
    }

    @Delete(" Delete FROM work.userroles  where roleid = #{roleid} and userid = #{userid}")
    void delete(@Param(value = "roleid") Integer roleid, @Param(value = "userid") Integer userid);
}