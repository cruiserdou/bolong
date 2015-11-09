package com.springapp.mvc.workmgr.maintaininfo.service.impl;

import com.springapp.mvc.workmgr.maintaininfo.dao.MaintaininfoDao;
import com.springapp.mvc.workmgr.maintaininfo.pojo.Maintaininfo;
import com.springapp.mvc.workmgr.maintaininfo.service.MaintaininfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class MaintaininfoServiceImpl implements MaintaininfoService {
    @Autowired private MaintaininfoDao maintaininfoDao;
    @Override
    public List<Maintaininfo> list(Integer mi_mp_id){
        return maintaininfoDao.list(mi_mp_id);
    }

    @Override
    public void delete(Integer mi_id){
        maintaininfoDao.delete(mi_id);
    }
}
