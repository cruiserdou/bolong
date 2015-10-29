package com.springapp.mvc.corp.change.service;

import com.springapp.mvc.corp.change.pojo.CorpInvChange;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface CorpInvChangeService {
    List<CorpInvChange> list(Integer corp_id);

}
