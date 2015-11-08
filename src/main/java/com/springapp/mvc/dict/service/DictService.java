package com.springapp.mvc.dict.service;

import com.springapp.mvc.dict.pojo.*;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface DictService {
    List<Province> listProvince();
    List<City> listCity(Integer provinceid);
    List<County> listCounty(Integer cityid);

    List<Industry1> listIndustry1();
    List<Industry2> listIndustry2(Integer parentid);
}
