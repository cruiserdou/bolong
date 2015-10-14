package com.springapp.mvc.system.service;

import com.springapp.mvc.system.pojo.User;

import java.util.List;

public interface UserService {
    List<User> list(String name);

//    User getById(long userId);

    boolean validUser(String account, String password);

    public void delete(Integer id);
}