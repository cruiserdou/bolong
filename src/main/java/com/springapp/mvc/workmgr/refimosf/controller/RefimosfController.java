package com.springapp.mvc.workmgr.refimosf.controller;

import com.springapp.mvc.workmgr.refimosf.service.RefimosfService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@RestController
//@RequestMapping("/refimosflist")
public class RefimosfController {
    @Autowired
    private RefimosfService refimosfService;

    @RequestMapping(value = "/refimosflist", method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listInnerInfo(
            @RequestParam(value = "corp_name", required = false, defaultValue = "") String corp_name
    ) throws Exception {
        DataShop dataShop = new DataShop();
        List list = refimosfService.list(corp_name);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

    @RequestMapping(value = "/deleterefimos", method = RequestMethod.POST)
    public String delete(
            @RequestParam("mos_id") Integer mos_id
    )throws Exception{
        refimosfService.delete(mos_id);
        return "success";
    }
 }
