package com.springapp.mvc.dict.service.impl;

import com.springapp.mvc.dict.dao.DictDao;
import com.springapp.mvc.dict.pojo.*;
import com.springapp.mvc.dict.service.DictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by xwq on 15/9/2.
 */
@Service
public class DictServiceImpl implements DictService{
    @Autowired
    private DictDao dictDao;

    @Override
    public List<Province> listProvince(){
        return dictDao.listProvince();
    }

    @Override
    public List<City> listCity(int provinceid){
        return dictDao.listCity(provinceid);
    }

    @Override
    public List<County> listDistrict(int cityid){
        return dictDao.listDistrict(cityid);
    }

    @Override
    public List<Industry1> listIndustry1zjy(){
        return dictDao.listIndustry1zjh();
    }

    @Override
    public List<Industry1> listIndustry1hy(){
        return dictDao.listIndustry1hy();
    }

    @Override
    public List<Industry2> listIndustry2(int parentid){
        return dictDao.listIndustry2(parentid);
    }
}
