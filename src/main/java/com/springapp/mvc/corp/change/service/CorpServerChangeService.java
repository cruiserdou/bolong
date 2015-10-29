package com.springapp.mvc.corp.change.service;

import com.springapp.mvc.corp.change.pojo.CorpServerChange;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface CorpServerChangeService {
    List<CorpServerChange> list(Integer corp_id);

}
