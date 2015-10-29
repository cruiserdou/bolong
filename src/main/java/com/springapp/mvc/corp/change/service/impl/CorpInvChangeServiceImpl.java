package com.springapp.mvc.corp.change.service.impl;

import com.springapp.mvc.corp.change.dao.CorpInvChangeDao;
import com.springapp.mvc.corp.change.pojo.CorpInvChange;
import com.springapp.mvc.corp.change.service.CorpInvChangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class CorpInvChangeServiceImpl implements CorpInvChangeService {
    @Autowired
    private CorpInvChangeDao corpInvChangeDao;

    @Override
    public List<CorpInvChange> list(Integer corp_id){
        return corpInvChangeDao.list(corp_id);
    }

}
