package com.springapp.security;

import com.springapp.mvc.system.service.UserService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by dou on 15-10-21.
 */
@RestController
@RequestMapping("/user_valid")
public class UserValid {
    @Autowired
    UserService userService;
    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop userValid(
            @RequestParam(value = "account", required = true)String account,
            @RequestParam(value = "password", required = true)String password
    )throws Exception{
        DataShop dataShop = new DataShop();
        dataShop.setSuccess(userService.userValid(account, password));

        return dataShop;
    }
}
