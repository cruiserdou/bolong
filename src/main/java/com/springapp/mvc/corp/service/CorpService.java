package com.springapp.mvc.corp.service;

import com.springapp.mvc.corp.pojo.Corp;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface CorpService {
    List<Corp> list(String name, String nos, String buslicno, String listcode, String start, String limit);
    int getCorpCount(String name, String nos, String buslicno, String listcode, String start, String limit);

    List<Corp> listGov(String name, String nos, String buslicno, String listcode);
    List<Corp> listInv(String name, String nos, String buslicno, String listcode);
    List<Corp> listRefi(String name, String nos, String buslicno, String listcode);
    List<Corp> listRehr(String name, String nos, String buslicno, String listcode);
    List<Corp> listRetr(String name, String nos, String buslicno, String listcode);
    List<Corp> listServer(String name, String nos, String buslicno, String listcode);

    public void delete(Integer id);
}
