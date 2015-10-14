package com.springapp.mvc.workmgr.refiropf.service.impl;

import com.springapp.mvc.workmgr.refiropf.dao.RefiropfDao;
import com.springapp.mvc.workmgr.refiropf.pojo.Refiropf;
import com.springapp.mvc.workmgr.refiropf.service.RefiropfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class RefiropfServiceImpl implements RefiropfService {
    @Autowired private RefiropfDao refiropfDao;
    @Override
    public List<Refiropf> list(Integer rop_mos_id){
        return refiropfDao.list(rop_mos_id);
    }

    @Override
    public void delete(Integer rop_id){
        refiropfDao.delete(rop_id);
    }
}
