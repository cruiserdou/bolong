package com.springapp.mvc.corp.change.service.impl;

import com.springapp.mvc.corp.change.dao.CorpServerChangeDao;
import com.springapp.mvc.corp.change.pojo.CorpServerChange;
import com.springapp.mvc.corp.change.service.CorpServerChangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class CorpServerChangeServiceImpl implements CorpServerChangeService {
    @Autowired
    private CorpServerChangeDao corpServerChangeDao;

    @Override
    public List<CorpServerChange> list(Integer corp_id){
        return corpServerChangeDao.list(corp_id);
    }

}
