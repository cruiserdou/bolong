package com.springapp.mvc.system.service;

import com.springapp.mvc.system.pojo.Dicts;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface DictsService {
    List<Dicts> list(String field,String fieldnm);

    public void delete(Integer id);
}
