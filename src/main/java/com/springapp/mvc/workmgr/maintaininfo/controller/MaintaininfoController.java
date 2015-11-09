package com.springapp.mvc.workmgr.maintaininfo.controller;

import com.springapp.mvc.workmgr.maintaininfo.service.MaintaininfoService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@RestController
//@RequestMapping("/maintaininfolist")
public class MaintaininfoController {
    @Autowired
    private MaintaininfoService maintaininfoService;

    @RequestMapping(value = "/maintaininfolist",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listInnerInfo(
            @RequestParam(value = "mi_mp_id", required = false, defaultValue = "") Integer mi_mp_id
//            @RequestParam(value = "corp_name", required = false, defaultValue = "") String corp_name
    ) throws Exception {
        DataShop dataShop = new DataShop();
        List list = maintaininfoService.list(mi_mp_id);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

    @RequestMapping(value = "/deletemaintaininfo", method = RequestMethod.POST)
    public String delete(
            @RequestParam("mi_id") Integer mi_id
    )throws Exception{
        maintaininfoService.delete(mi_id);
        return "success";
    }

 }
