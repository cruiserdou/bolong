package com.springapp.mvc.system.controller;

import com.springapp.mvc.system.service.RoleService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by xwq on 15/9/2.
 */
@RestController
//@RequestMapping("/rolelist")
public class RoleController {
    @Autowired
    private RoleService roleService;

    @RequestMapping(value = "/rolelist",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listRoles(
            @RequestParam(value = "rolename", required = false, defaultValue = "") String rolename
    ) throws Exception{
        DataShop dataShop = new DataShop();
        List list = roleService.list(rolename);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

    @RequestMapping(value = "/deleterole", method = RequestMethod.POST)
    public String deletedict(
            @RequestParam("id") Integer id
    )throws Exception{
        roleService.delete(id);
        return "success";
    }
}
