package com.springapp.mvc.corp.change.service.impl;

import com.springapp.mvc.corp.change.dao.CorpRetrChangeDao;
import com.springapp.mvc.corp.change.pojo.CorpRetrChange;
import com.springapp.mvc.corp.change.service.CorpRetrChangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class CorpRetrChangeServiceImpl implements CorpRetrChangeService {
    @Autowired
    private CorpRetrChangeDao corpRetrChangeDao;

    @Override
    public List<CorpRetrChange> list(Integer corp_id){
        return corpRetrChangeDao.list(corp_id);
    }

}
