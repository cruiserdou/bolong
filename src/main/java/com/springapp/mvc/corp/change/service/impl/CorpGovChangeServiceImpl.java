package com.springapp.mvc.corp.change.service.impl;

import com.springapp.mvc.corp.change.dao.CorpGovChangeDao;
import com.springapp.mvc.corp.change.pojo.CorpGovChange;
import com.springapp.mvc.corp.change.service.CorpGovChangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class CorpGovChangeServiceImpl implements CorpGovChangeService {
    @Autowired
    private CorpGovChangeDao corpGovChangeDao;

    @Override
    public List<CorpGovChange> list(Integer corp_id){
        return corpGovChangeDao.list(corp_id);
    }

}
