package com.springapp.mvc.system.controller;

import com.springapp.mvc.system.service.DictsService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by xwq on 15/9/2.
 */
@RestController
//@RequestMapping("/dictslist")
public class DictsController {
    @Autowired
    private DictsService dictsService;

    @RequestMapping(value = "/dictslist",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listMenu(
            @RequestParam(value = "fieldnm", required = false, defaultValue = "") String fieldnm
    ) throws Exception{
        DataShop dataShop = new DataShop();
        List list = dictsService.list(fieldnm);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

    @RequestMapping(value = "/deletedict", method = RequestMethod.POST)
    public String deletedict(
            @RequestParam("id") Integer id
    )throws Exception{
        dictsService.delete(id);
        return "success";
    }
}
