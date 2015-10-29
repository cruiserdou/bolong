package com.springapp.mvc.corp.change.controller;

import com.springapp.mvc.corp.change.service.CorpRehrChangeService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@RestController
@RequestMapping("/corprehrchangelist")
public class CorpRehrChangeController {
    @Autowired
    private CorpRehrChangeService corpRehrService;

    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listCorp(
            @RequestParam(value = "corp_id", required = false, defaultValue = "") Integer corp_id
    ) throws Exception {
        DataShop dataShop = new DataShop();
        List list = corpRehrService.list(corp_id);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }
}
