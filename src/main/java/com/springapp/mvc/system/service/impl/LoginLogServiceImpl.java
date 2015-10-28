package com.springapp.mvc.system.service.impl;

import com.springapp.mvc.system.dao.LoginLogDao;
import com.springapp.mvc.system.pojo.LoginLog;
import com.springapp.mvc.system.service.LoginLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by xwq on 15/9/2.
 */
@Service
public class LoginLogServiceImpl implements LoginLogService {
    @Autowired
    private LoginLogDao loginLogDao;

    @Override
    public List<LoginLog> list(){
        return loginLogDao.list();
    }

    @Override
    public List<LoginLog> listLog(String start, String limit){
        return loginLogDao.listLog(start, limit);
    }

    @Override
    public int getLogCount(){
        return loginLogDao.getLogCount();
    }
}
