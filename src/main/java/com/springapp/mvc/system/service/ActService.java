package com.springapp.mvc.system.service;

import com.springapp.mvc.system.pojo.Act;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface ActService {
    List<Act> list(String rolename, String text);

    public void delete(Integer roleid, Integer treeid);
}
