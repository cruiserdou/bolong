package com.springapp.mvc.corp.change.dao;

import com.springapp.mvc.corp.change.pojo.CorpRehrChange;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by dou on 15-9-3.
 */
@Repository
public interface CorpRehrChangeDao {
    @SelectProvider(type = CorpRehrChangeDaoEmberSql.class, method = "listCorpRehrChange")
    List<CorpRehrChange> list(
            @Param(value = "corp_id") Integer corp_id
    );

    class CorpRehrChangeDaoEmberSql {
        public String listCorpRehrChange(Map<String, Object> para) {
            Integer i_corp_id = 0;

            if (0 != Integer.parseInt(para.get("corp_id").toString()) && null != para.get("corp_id").toString())
                i_corp_id= Integer.parseInt(para.get("corp_id").toString());

            return  "select * from work.tb_corp_rehr_change   where rehr_corp_id =" +i_corp_id+" and c_before!=''    ORDER BY  ID DESC ";

        }
    }
}