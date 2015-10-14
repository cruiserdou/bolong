package com.springapp.mvc.workmgr.innerinfo.controller;

import com.springapp.mvc.workmgr.innerinfo.service.InnerInfoService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@RestController
//@RequestMapping("/innerinfolist")
public class InnerInfoController {
    @Autowired
    private InnerInfoService innerInfoService;

    @RequestMapping(value = "/innerinfolist",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listInnerInfo(
            @RequestParam(value = "stat", required = false, defaultValue = "") String stat,
            @RequestParam(value = "user_name", required = false, defaultValue = "") String user_name
    ) throws Exception {
        DataShop dataShop = new DataShop();
        List list = innerInfoService.list(stat,user_name);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

    @RequestMapping(value = "/deletemsg", method = RequestMethod.POST)
    public String deletedict(
            @RequestParam("id") Integer id
    )throws Exception{
        innerInfoService.delete(id);
        return "success";
    }

 }
