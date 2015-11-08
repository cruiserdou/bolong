package com.springapp.mvc.dict.controller;

import com.springapp.mvc.dict.service.DictService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by xwq on 15/9/2.
 */
@RestController
@RequestMapping("/dict")
public class DictController {
    @Autowired
    private DictService dictService;

    @RequestMapping(value = "/province",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listMenu(
    ) throws Exception{
        DataShop dataShop = new DataShop();
        List list = dictService.listProvince();
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }
}
