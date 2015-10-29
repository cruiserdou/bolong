package com.springapp.mvc.corp.change.dao;

import com.springapp.mvc.corp.change.pojo.CorpServerChange;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by dou on 15-9-3.
 */
@Repository
public interface CorpServerChangeDao {
    @SelectProvider(type = CorpServerChangeDaoEmberSql.class, method = "listCorpServerChange")
    List<CorpServerChange> list(
            @Param(value = "corp_id") Integer corp_id
    );

    class CorpServerChangeDaoEmberSql {
        public String listCorpServerChange(Map<String, Object> para) {
            Integer i_corp_id = 0;

            if (0 != Integer.parseInt(para.get("corp_id").toString()) && null != para.get("corp_id").toString())
                i_corp_id= Integer.parseInt(para.get("corp_id").toString());

            return  "select * from work.tb_corp_service_change   where srv_corp_id =" +i_corp_id+" and c_before!=''    ORDER BY  ID DESC ";

        }
    }
}