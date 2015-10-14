package com.springapp.mvc.system.controller;

import com.springapp.mvc.system.service.SecService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dou on 15-9-2.
 */
@RestController
//@RequestMapping("/seclist")
public class SecController {
    @Autowired
    private SecService secService;

    @RequestMapping(value = "/seclist",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listSec(
            @RequestParam(value = "rolename", required = false, defaultValue = "") String rolename,
            @RequestParam(value = "username", required = false, defaultValue = "") String username
    ) throws Exception{
        DataShop dataShop = new DataShop();
        List list = secService.list(rolename,username);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

    @RequestMapping(value = "/deleteuserroles", method = RequestMethod.POST)
    public String delete(
            @RequestParam("roleid") Integer roleid,
            @RequestParam("userid") Integer userid
    )throws Exception{
        secService.delete(roleid,userid);
        return "success";
    }
}
