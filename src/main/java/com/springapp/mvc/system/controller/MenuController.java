package com.springapp.mvc.system.controller;

import com.springapp.mvc.system.service.MenuService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by xwq on 15/9/2.
 */
@RestController
//@RequestMapping("/menulist")
public class MenuController {
    @Autowired
    private MenuService menuService;



    @RequestMapping(value = "/menulist",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listMenu(
            @RequestParam(value = "text", required = false, defaultValue = "") String text
    ) throws Exception{
        DataShop dataShop = new DataShop();
        List list = menuService.list(text);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

    @RequestMapping(value = "/deletemenu", method = RequestMethod.POST)
    public String deletedict(
            @RequestParam("id") Integer id
    )throws Exception{
        menuService.delete(id);
        return "success";
    }
}
