package com.springapp.mvc.corp.change.controller;

import com.springapp.mvc.corp.change.service.CorpInvChangeService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@RestController
@RequestMapping("/corpinvchangelist")
public class CorpInvChangeController {
    @Autowired
    private CorpInvChangeService corpInvService;

    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listCorp(
            @RequestParam(value = "corp_id", required = false, defaultValue = "") Integer corp_id
    ) throws Exception {
        DataShop dataShop = new DataShop();
        List list = corpInvService.list(corp_id);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }
}
