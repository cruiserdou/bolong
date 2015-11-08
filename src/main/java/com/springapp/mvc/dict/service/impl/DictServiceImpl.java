package com.springapp.mvc.dict.service.impl;

import com.springapp.mvc.dict.dao.DictDao;
import com.springapp.mvc.dict.pojo.City;
import com.springapp.mvc.dict.pojo.District;
import com.springapp.mvc.dict.pojo.Province;
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
    public List<District> listDistrict(int cityid){
        return dictDao.listDistrict(cityid);
    }
}