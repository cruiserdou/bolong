package com.springapp.mvc.workmgr.innerinfo.dao;

import com.springapp.mvc.workmgr.innerinfo.pojo.InnerInfo;
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
public interface InnerInfoDao {
    @SelectProvider(type = InnerInfoDaoEmberSql.class, method = "listInnerInfo")
    List<InnerInfo> list(
            @Param(value = "stat") String stat,
            @Param(value = "user_name") String user_name
    );

    class InnerInfoDaoEmberSql {
        public String listInnerInfo(Map<String, Object> para) {

            String where = "";
            if (null != para.get("stat").toString() && 0 != para.get("stat").toString().length())
                where += " and stat like '%" + para.get("stat").toString() + "%' ";
            if (null != para.get("user_name").toString() && 0 != para.get("user_name").toString().length())
            where += "and user_id in (select id  from work.users where name  like '%" + para.get("user_name").toString() + "%')";


            where += " ;";

            return "select  id, user_id, (select name from work.users where id =user_id ) as  user_name, ruser_id," +
                    "    TO_CHAR(deadline,'yyyy-mm-dd hh24:mi:ss') as  deadline, content, stat, remark, TO_CHAR(rtdate,'yyyy-mm-dd hh24:mi:ss') as rtdate, " +
                    "      type " +
                    "     from work.tb_msg" +
                    " WHERE 1 = 1  " + where;
        }
    }

    @Delete(" Delete FROM work.tb_msg  where id = #{id}")
    void delete(@Param(value = "id") Integer id);
}
