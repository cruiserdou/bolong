package com.springapp.mvc.corp.controller;

import com.springapp.mvc.corp.service.CorpService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@RestController
@RequestMapping("/corpgovlist")
public class CorpGovController {
    @Autowired
    private CorpService corpService;

    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listCorp(
            @RequestParam(value = "name", required = false, defaultValue = "") String name,
            @RequestParam(value = "nos", required = false, defaultValue = "") String nos,
            @RequestParam(value = "search_val", required = false, defaultValue = "n o") String search_val,
            @RequestParam(value = "buslicno", required = false, defaultValue = "") String buslicno,
            @RequestParam(value = "listcode", required = false, defaultValue = "") String listcode
    ) throws Exception {
        DataShop dataShop = new DataShop();
        List list = corpService.listGov(name, nos, buslicno, listcode, search_val);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }
}
