package com.springapp.mvc.system.dao;

import com.springapp.mvc.system.pojo.LoginLog;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by xwq on 15/9/2.
 */
@Repository
public interface LoginLogDao {
    @Select(" SELECT login_log_id, user_id, ip, login_datetime " +
            " FROM work.t_login_log;")
    List<LoginLog> list();

    @SelectProvider(type = CorpDaoEmberSql.class, method = "listLog")
    List<LoginLog> listLog(
            @Param(value = "start") String start,
            @Param(value = "limit") String limit
    );

    @SelectProvider(type = CorpDaoEmberSql.class, method = "countLog")
    int getLogCount();

    class CorpDaoEmberSql {
        public String listLog(Map<String, Object> para) {
            String where = "";
            return " SELECT login_log_id, user_id, ip, login_datetime " +
                    " FROM work.t_login_log " +
                    " WHERE 1 = 1  " +
                    where +
                    " limit " + para.get("limit").toString() + " offset " + para.get("start").toString();
        }

        public String countLog(Map<String, Object> para) {
            String where = "";

            return " SELECT count(*) " +
                    " FROM work.t_login_log " +
                    " WHERE 1 = 1  " +
                    where;
        }
    }
}
