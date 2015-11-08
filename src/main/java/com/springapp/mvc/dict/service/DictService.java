package com.springapp.mvc.dict.service;

import com.springapp.mvc.dict.pojo.City;
import com.springapp.mvc.dict.pojo.Province;
import com.springapp.mvc.dict.pojo.County;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface DictService {
    List<Province> listProvince();
    List<City> listCity(int provinceid);
    List<County> listDistrict(int cityid);
}
