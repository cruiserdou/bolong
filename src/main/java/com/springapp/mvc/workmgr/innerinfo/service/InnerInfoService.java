package com.springapp.mvc.workmgr.innerinfo.service;

import com.springapp.mvc.workmgr.innerinfo.pojo.InnerInfo;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface InnerInfoService {
    List<InnerInfo> list(String stat, String user_name);

    public void delete(Integer id);
}
