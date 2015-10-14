package com.springapp.mvc.workmgr.maintainplan.service;

import com.springapp.mvc.workmgr.maintainplan.pojo.Maintainplan;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface MaintainplanService {
    List<Maintainplan> list(String corp_name);

    public void delete(Integer mp_id);
}
