package com.springapp.mvc.corp.change.controller;

import com.springapp.mvc.corp.change.service.CorpConChangeService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@RestController
@RequestMapping("/corpconchangelist")
public class CorpConChangeController {
    @Autowired
    private CorpConChangeService corpConChangeService;

    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listCorp(
            @RequestParam(value = "corp_id", required = false, defaultValue = "") Integer corp_id
    ) throws Exception {
        DataShop dataShop = new DataShop();
        List list = corpConChangeService.list(corp_id);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }
}
