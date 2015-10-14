package com.springapp.mvc.workmgr.refiropf.controller;

import com.springapp.mvc.workmgr.refiropf.service.RefiropfService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@RestController
//@RequestMapping("/refimosflist")
public class RefiropfController {
    @Autowired
    private RefiropfService refimosfService;

    @RequestMapping(value = "/refiropflist", method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listInnerInfo(
            @RequestParam(value = "rop_mos_id", required = false, defaultValue = "") Integer rop_mos_id
    ) throws Exception {
        DataShop dataShop = new DataShop();
        List list = refimosfService.list(rop_mos_id);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

    @RequestMapping(value = "/deleterefirop", method = RequestMethod.POST)
    public String delete(
            @RequestParam("rop_id") Integer rop_id
    )throws Exception{
        refimosfService.delete(rop_id);
        return "success";
    }
 }
