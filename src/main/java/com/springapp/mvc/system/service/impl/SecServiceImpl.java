package com.springapp.mvc.system.service.impl;

import com.springapp.mvc.system.dao.SecDao;
import com.springapp.mvc.system.pojo.Sec;
import com.springapp.mvc.system.service.SecService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-2.
 */
@Service
public class SecServiceImpl implements SecService {
    @Autowired
    private SecDao secDao;

    @Override
    public List<Sec> list(String rolename,String username){
        return secDao.list(rolename,username);
    }

    @Override
    public void delete(Integer roleid, Integer userid){
        secDao.delete(roleid,userid);
    }
}
