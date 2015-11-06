package com.springapp.mvc.CorpImg.controller;

import com.springapp.mvc.CorpImg.service.CorpImgService;
import com.springapp.mvc.stat.service.StatService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/corpimglist")
public class CorpImgController {
    @Autowired
    private CorpImgService corpImgService;


    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listCorp(
            @RequestParam(value = "corp_id", required = false, defaultValue = "") Integer corp_id
    ) throws Exception {
        DataShop dataShop  = new DataShop();
        List list = corpImgService.list(corp_id);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }
 }
