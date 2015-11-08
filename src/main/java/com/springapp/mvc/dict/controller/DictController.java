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

    @RequestMapping(value = "/city",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listCity(
            @RequestParam(value = "provinceid", required = false, defaultValue = "") Integer provinceid
    ) throws Exception{
        DataShop dataShop = new DataShop();
        List list = dictService.listCity(provinceid);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

    @RequestMapping(value = "/county",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listCounty(
            @RequestParam(value = "cityid", required = false, defaultValue = "") Integer cityid
    ) throws Exception{
        DataShop dataShop = new DataShop();
        List list = dictService.listCounty(cityid);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

    @RequestMapping(value = "/industry1",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listIndustry1(
    ) throws Exception{
        DataShop dataShop = new DataShop();
        List list = dictService.listIndustry1();
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

    @RequestMapping(value = "/industry2",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listIndustry2(
            @RequestParam(value = "parentid", required = false, defaultValue = "") Integer parentid
    ) throws Exception{
        DataShop dataShop = new DataShop();
        List list = dictService.listIndustry2(parentid);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }
}
