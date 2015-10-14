package com.springapp.mvc.system.controller;

import com.springapp.mvc.system.pojo.Principaldou;
import com.springapp.mvc.system.service.UserService;
import common.util.DataShop;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.List;


@RestController
//@RequestMapping(value = "/userslist")
public class UserController {
    private static Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    /**
     *
     * @return 返回指定的页面
     */
    @RequestMapping(value = "/userslist",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listUsers(HttpServletRequest request,
                                @RequestParam(value = "name", required = false, defaultValue = "") String name
    ) throws Exception{
        DataShop dataShop = new DataShop();
        List list = userService.list(name);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }



    /**
     * 解析并返回指定格式数据(如json)
     * @param user 传递的参数
     * @return 返回解析后的数据
     */
//    @RequestMapping(value = "/{userId}")
//    public
//    @ResponseBody
//    DataShop getUserById(@PathVariable("userId") long userId) {
//        DataShop dataShop =  new DataShop();
//        return userService.getById(userId);
//    }

    @RequestMapping("/user")
    public Principaldou userInfo(Principal user) {
        System.out.println("name:"+user.getName());
        Principaldou principaldou = new Principaldou();
        principaldou.setSuccess(false);
        if (user.getName() != null)
            principaldou.setSuccess(true);
        return principaldou;
    }

    @RequestMapping("/valid")
    public String validUser(){
        return "{\"msg\":\"true\"}";
    }

    @RequestMapping(value = "/deleteuser", method = RequestMethod.POST)
    public String delete(
            @RequestParam("id") Integer id
    )throws Exception{
        userService.delete(id);
        return "success";
    }
}