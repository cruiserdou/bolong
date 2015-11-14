package com.springapp.mvc.dict.service;

import com.springapp.mvc.dict.pojo.*;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface DictService {
    List<Province> listProvince();
    List<City> listCity(int provinceid);
    List<County> listDistrict(int cityid);

    List<Industry1> listIndustry1zjy();
    List<Industry1> listIndustry1hy();
    List<Industry2> listIndustry2(int parentid);
}
