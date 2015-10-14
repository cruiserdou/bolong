package com.springapp.mvc.workmgr.maintainplan.service.impl;

import com.springapp.mvc.workmgr.maintainplan.dao.MaintainplanDao;
import com.springapp.mvc.workmgr.maintainplan.pojo.Maintainplan;
import com.springapp.mvc.workmgr.maintainplan.service.MaintainplanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class MaintainplanServiceImpl implements MaintainplanService {
    @Autowired private MaintainplanDao maintainplanDao;
    @Override
    public List<Maintainplan> list(String corp_name){
        return maintainplanDao.list(corp_name);
    }

    @Override
    public void delete(Integer mp_id){
        maintainplanDao.delete(mp_id);
    }
}
