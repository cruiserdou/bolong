package com.springapp.mvc.corp.controller;

import com.springapp.mvc.corp.service.CorpService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.xml.crypto.Data;
import java.util.List;
import java.util.concurrent.ExecutionException;

/**
 * Created by dou on 15-9-3.
 */
@RestController
public class CorpController {
    @Autowired
    private CorpService corpService;

    @RequestMapping(value = "/corplist",method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop listCorp(
            @RequestParam(value = "name", required = false, defaultValue = "") String name,
            @RequestParam(value = "nos", required = false, defaultValue = "") String nos,
            @RequestParam(value = "buslicno", required = false, defaultValue = "") String buslicno,
            @RequestParam(value = "search_val", required = false, defaultValue = "no")String search_val,
            @RequestParam(value = "listcode", required = false, defaultValue = "") String listcode,
            @RequestParam(value = "start", required = false)String start,
            @RequestParam(value = "limit", required = false)String limit,
            HttpSession session
    ) throws Exception {
        DataShop dataShop = new DataShop();
        List list = corpService.list(name, nos, buslicno, listcode, start, limit, search_val);
        int count = corpService.getCorpCount(name, nos, buslicno, listcode, start, limit);
        dataShop.setSuccess(true);
        dataShop.setList(list);
        dataShop.setTotal(count);
        return dataShop;
    }

    @RequestMapping(value = "/shareholder_list")
    public DataShop getShareHolderByCorpID(
            @RequestParam(value = "corp_id", required = true)int corp_id
    ) throws Exception{
        DataShop dataShop = new DataShop();
        dataShop.setList(corpService.getShareHolderByCorpID(corp_id));
        dataShop.setSuccess(true);

        return dataShop;
    }

    @RequestMapping(value = "/deletecorp", method = RequestMethod.POST)
    public String delete(
            @RequestParam("id") Integer id
    )throws Exception{

        System.out.println("start");
        corpService.delete(id);
        System.out.println("end");
        return "success";
    }
}
