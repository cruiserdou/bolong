package com.springapp.mvc.system.dao;

import com.springapp.mvc.system.pojo.Role;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by xwq on 15/9/2.
 */
@Repository
public interface RoleDao {

    @SelectProvider(type = RoleDaoEmberSql.class, method = "listRoleInfo")
    List<Role> list(
            @Param(value = "rolename") String rolename
    );

    class RoleDaoEmberSql {
        public String listRoleInfo(Map<String, Object> para) {

            String where = "";
            if (null != para.get("rolename").toString() && 0 != para.get("rolename").toString().length())
                where += " and rolename like '%" + para.get("rolename").toString() + "%' ";


            where += " ;";

            return " SELECT id, rolename, roledesc, remark " +
                    "  FROM work.roles " +
                    " WHERE 1 = 1  " + where;
        }
    }

    @Delete(" Delete FROM work.roles  where id = #{id}")
    void delete(@Param(value = "id") Integer id);
}
