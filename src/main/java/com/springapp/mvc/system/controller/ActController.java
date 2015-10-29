package com.springapp.mvc.system.controller;

import com.springapp.mvc.system.service.ActService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dou on 15-9-2.
 */
@RestController
//@RequestMapping("/actlist")
public class ActController {
    @Autowired
    private ActService actService;

    @RequestMapping(value = "/actlist",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listMenu(
            @RequestParam(value = "rolename", required = false, defaultValue = "") String rolename,
            @RequestParam(value = "text", required = false, defaultValue = "") String text
    ) throws Exception{
        DataShop dataShop = new DataShop();
        List list = actService.list(rolename,text);
        dataShop.setList(list);
        dataShop.setSuccess(true);
       return dataShop;
    }

    @RequestMapping(value = "/deleteroleperm", method = RequestMethod.POST)
    public String delete(
            @RequestParam("roleid") Integer roleid,
            @RequestParam("treeid") Integer treeid
    )throws Exception{
        actService.delete(roleid,treeid);
        return "success";
    }
}

