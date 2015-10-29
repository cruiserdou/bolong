package com.springapp.mvc.corp.change.service.impl;

import com.springapp.mvc.corp.change.dao.CorpConChangeDao;
import com.springapp.mvc.corp.change.pojo.CorpConChange;
import com.springapp.mvc.corp.change.service.CorpConChangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class CorpConChangeServiceImpl implements CorpConChangeService {
    @Autowired
    private CorpConChangeDao corpConChangeDao;

    @Override
    public List<CorpConChange> list(Integer corp_id){
        return corpConChangeDao.list(corp_id);
    }

}
