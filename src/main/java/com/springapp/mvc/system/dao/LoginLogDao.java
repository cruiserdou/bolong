package com.springapp.mvc.system.dao;

import com.springapp.mvc.system.pojo.LoginLog;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by xwq on 15/9/2.
 */
@Repository
public interface LoginLogDao {
    @Select(" SELECT login_log_id, user_id, ip, login_datetime " +
            " FROM work.t_login_log;")
    List<LoginLog> list();
}
