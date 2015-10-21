package com.springapp.mvc.system.service.impl;


import com.springapp.mvc.system.dao.UserDao;
import com.springapp.mvc.system.pojo.User;
import com.springapp.mvc.system.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Override
    public List<User> list(String name) {
        return userDao.list(name);
    }

    @Override
    public boolean validUser(String account, String password) {
        int valid = userDao.validUser(account, password);
        if (valid > 0)
            return true;
        else
            return false;
    }

    @Override
    public void delete(Integer id){
        userDao.delete(id);
    }

    @Override
    public boolean userValid(String account, String password, HttpSession session){
        int val = userDao.userValid(account, password);
        if (val == 1) {
            User user = userDao.getUserByAccount(account);
            session.setAttribute("account", user.getAccount());
            session.setAttribute("password", user.getPassword());
            session.setAttribute("id", user.getId());
            session.setAttribute("name", user.getName());
            session.setAttribute("nos", user.getNos());
            return true;
        }
        else return false;
    }
}
