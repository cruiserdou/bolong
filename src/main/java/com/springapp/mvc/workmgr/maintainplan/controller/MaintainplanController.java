package com.springapp.mvc.workmgr.maintainplan.controller;

import com.springapp.mvc.workmgr.maintainplan.service.MaintainplanService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@RestController
//@RequestMapping("/maintainplanlist")
public class MaintainplanController {
    @Autowired
    private MaintainplanService maintainplanService;

    @RequestMapping(value = "/maintainplanlist",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listInnerInfo(
            @RequestParam(value = "corp_name", required = false, defaultValue = "") String corp_name
    ) throws Exception {
        DataShop dataShop = new DataShop();
        List list = maintainplanService.list(corp_name);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

    @RequestMapping(value = "/deletemaintainplan", method = RequestMethod.POST)
    public String delete(
            @RequestParam("mp_id") Integer mp_id
    )throws Exception{
        maintainplanService.delete(mp_id);
        return "success";
    }
 }
