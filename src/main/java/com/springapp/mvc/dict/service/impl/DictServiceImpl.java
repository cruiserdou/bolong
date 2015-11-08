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
    public List<City> listCity(Integer provinceid){
        return dictDao.listCityInfo(provinceid);
    }
    public List<County> listCounty(Integer cityid){
        return dictDao.listCountyInfo(cityid);
    }

    public List<Industry1> listIndustry1(){
        return dictDao.listIndustry1();
    }
    public List<Industry2> listIndustry2(Integer parentid){
        return dictDao.listIndustry2(parentid);
    }

}
