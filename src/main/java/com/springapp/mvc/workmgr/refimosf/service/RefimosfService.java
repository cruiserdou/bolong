package com.springapp.mvc.workmgr.refimosf.service;

import com.springapp.mvc.workmgr.refimosf.pojo.Refimosf;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface RefimosfService {
    List<Refimosf> list(String corp_name);

    public void delete(Integer mos_id);
}
