package com.springapp.mvc.stat.service;


import com.springapp.mvc.stat.pojo.StatInfo;

import java.util.List;

public interface StatService{
    List<StatInfo> list();
    List<StatInfo> listAll();
    List<StatInfo> listGov();
    List<StatInfo> listInv();
    List<StatInfo> listRefi();
    List<StatInfo> listRehr();
    List<StatInfo> listRetr();
    List<StatInfo> listServer();
}
