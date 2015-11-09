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
//@RequestMapping("/dict")
public class DictController {
    @Autowired
    private DictService dictService;

    @RequestMapping(value = "/province",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop province(
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
    DataShop city(
            @RequestParam(value = "provinceid", required = true, defaultValue = "0")Integer provinceid
    ) throws Exception{
        DataShop dataShop = new DataShop();
        if (null == provinceid){
            provinceid = 0;
        }
        List list = dictService.listCity(provinceid);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

    @RequestMapping(value = "/district",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop district(
            @RequestParam(value = "cityid", required = true, defaultValue = "0")Integer cityid
    ) throws Exception{
        DataShop dataShop = new DataShop();
        if (null == cityid){
            cityid = 0;
        }
        List list = dictService.listDistrict(cityid);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }


    @RequestMapping(value = "/industry1",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop industry1(
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
    DataShop industry2(
            @RequestParam(value = "parentid", required = true, defaultValue = "0")Integer parentid
    ) throws Exception{
        DataShop dataShop = new DataShop(); 
        if (null == parentid){
            parentid = 0;
        }
        System.out.println(parentid);
        List list = dictService.listIndustry2(parentid);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }
}
