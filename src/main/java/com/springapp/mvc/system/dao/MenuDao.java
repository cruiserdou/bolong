package com.springapp.mvc.system.dao;

import com.springapp.mvc.system.pojo.Menu;
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
public interface MenuDao {

    @SelectProvider(type = MenuDaoEmberSql.class, method = "listMenuInfo")
    List<Menu> list(
            @Param(value = "text") String text
    );

    class MenuDaoEmberSql {
        public String listMenuInfo(Map<String, Object> para) {

            String where = "";
            if (null != para.get("text").toString() && 0 != para.get("text").toString().length())
                where += " and text like '%" + para.get("text").toString() + "%' ";


            where += " ;";

            return " SELECT id, text, leaf, parent_id, itype, root, remark, iconcls " +
                    "  FROM work.menu " +
                    " WHERE 1 = 1  " + where;
        }
    }

    @Delete(" Delete FROM work.menu  where id = #{id}")
    void delete(@Param(value = "id") Integer id);
}
