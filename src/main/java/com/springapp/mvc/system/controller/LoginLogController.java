package com.springapp.mvc.system.controller;

import com.springapp.mvc.system.service.LoginLogService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by xwq on 15/9/2.
 */
@RestController
@RequestMapping("/loginloglist")
public class LoginLogController {
    @Autowired
    private LoginLogService loginLogService;

    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listLoginLog() throws Exception{
        DataShop dataShop = new DataShop();
        List   list  = loginLogService.list();
        dataShop.setList(list);
        dataShop .setSuccess(true);
        return dataShop;
    }
}
