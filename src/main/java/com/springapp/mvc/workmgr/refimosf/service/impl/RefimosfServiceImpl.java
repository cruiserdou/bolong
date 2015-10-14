package com.springapp.mvc.workmgr.refimosf.service.impl;

import com.springapp.mvc.workmgr.refimosf.dao.RefimosfDao;
import com.springapp.mvc.workmgr.refimosf.pojo.Refimosf;
import com.springapp.mvc.workmgr.refimosf.service.RefimosfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class RefimosfServiceImpl implements RefimosfService {
    @Autowired private RefimosfDao refimosfDao;
    @Override
    public List<Refimosf> list(String corp_name){
        return refimosfDao.list(corp_name);
    }

    @Override
    public void delete(Integer mos_id){
        refimosfDao.delete(mos_id);
    }
}
