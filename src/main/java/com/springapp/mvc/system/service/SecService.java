package com.springapp.mvc.system.service;

import com.springapp.mvc.system.pojo.Sec;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface SecService {
    List<Sec> list(String rolename, String username);

    public void delete(Integer roleid, Integer userid);
}
