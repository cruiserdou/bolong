package com.springapp.mvc.corp.change.service;

import com.springapp.mvc.corp.change.pojo.CorpRehrChange;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface CorpRehrChangeService {
    List<CorpRehrChange> list(Integer corp_id);

}
