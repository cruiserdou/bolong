package com.springapp.mvc.corp.change.service.impl;

import com.springapp.mvc.corp.change.dao.CorpRefiChangeDao;
import com.springapp.mvc.corp.change.pojo.CorpRefiChange;
import com.springapp.mvc.corp.change.service.CorpRefiChangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class CorpRefiChangeServiceImpl implements CorpRefiChangeService {
    @Autowired
    private CorpRefiChangeDao corpRefiChangeDao;

    @Override
    public List<CorpRefiChange> list(Integer corp_id){
        return corpRefiChangeDao.list(corp_id);
    }

}
