package com.springapp.mvc.corp.change.service;

import com.springapp.mvc.corp.change.pojo.CorpConChange;

import java.util.List;


public interface CorpConChangeService {
    List<CorpConChange> list(Integer corp_id);

}
