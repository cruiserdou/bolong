package com.springapp.mvc.system.service.impl;

import com.springapp.mvc.system.dao.DictsDao;
import com.springapp.mvc.system.pojo.Dicts;
import com.springapp.mvc.system.service.DictsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by xwq on 15/9/2.
 */
@Service
public class DictsServiceImpl implements DictsService {
    @Autowired
    private DictsDao dictsDao;

    @Override
    public List<Dicts> list(String field,String fieldnm){
        return dictsDao.list(field,fieldnm);
    }

    @Override
    public void delete(Integer id){
         dictsDao.delete(id);
    }
}
