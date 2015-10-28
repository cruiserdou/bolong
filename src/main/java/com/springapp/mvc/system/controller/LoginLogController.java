package com.springapp.mvc.system.controller;

import com.springapp.mvc.system.service.LoginLogService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by xwq on 15/9/2.
 */
@RestController
@RequestMapping("/loginloglist")
public class LoginLogController {
    @Autowired
    private LoginLogService loginLogService;

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop listLoginLog(
            @RequestParam(value = "start", required = true)String start,
            @RequestParam(value = "limit", required = true)String limit
    ) throws Exception{
        DataShop dataShop = new DataShop();
        List list = loginLogService.listLog(start, limit);
        int count = loginLogService.getLogCount();
        dataShop.setList(list);
        dataShop.setTotal(count);
        dataShop .setSuccess(true);
        return dataShop;
    }
}
