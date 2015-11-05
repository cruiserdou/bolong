package com.springapp.mvc.CorpImg.service.impl;

import com.springapp.mvc.CorpImg.dao.CorpImgDao;
import com.springapp.mvc.CorpImg.pojo.CorpImg;
import com.springapp.mvc.CorpImg.service.CorpImgService;
import com.springapp.mvc.stat.dao.StatDao;
import com.springapp.mvc.stat.pojo.StatInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CorpImgServiceImpl implements CorpImgService {
    @Autowired private CorpImgDao corpImgDao;
    @Override
    public List<CorpImg> list(){
        return corpImgDao.list();
    }

}
