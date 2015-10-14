package com.springapp.mvc.system.service;

import com.springapp.mvc.system.pojo.Menu;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface MenuService {
    List<Menu> list(String text);

    public void delete(Integer id);
}
