package com.springapp.mvc.workmgr.maintaininfo.service;

import com.springapp.mvc.workmgr.maintaininfo.pojo.Maintaininfo;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface MaintaininfoService {
    List<Maintaininfo> list(String corp_name);

    public void delete(Integer mi_id);
}
