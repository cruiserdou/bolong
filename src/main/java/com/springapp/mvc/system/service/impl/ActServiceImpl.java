package com.springapp.mvc.system.service.impl;

import com.springapp.mvc.system.dao.ActDao;
import com.springapp.mvc.system.pojo.Act;
import com.springapp.mvc.system.service.ActService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-2.
 */
@Service
public class ActServiceImpl implements ActService {
    @Autowired
    private ActDao actDao;

    @Override
    public List<Act> list(String rolename, String text){
        return actDao.list(rolename,text);
    }

    @Override
    public void delete(Integer roleid, Integer treeid){
        actDao.delete(roleid,treeid);
    }
}
