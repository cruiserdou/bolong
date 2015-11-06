package com.springapp.mvc.CorpImg.dao;

import com.springapp.mvc.CorpImg.pojo.CorpImg;
import com.springapp.mvc.stat.pojo.StatInfo;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface CorpImgDao {
    @SelectProvider(type = CorpImgDaoEmberSql.class, method = "listCorpImgInfo")

    List<CorpImg> list(
            @Param(value = "corp_id") Integer corp_id
    );

    class CorpImgDaoEmberSql {
        public String listCorpImgInfo(Map<String, Object> para) {
            Integer i_corp_id = 0;
            if (0 != Integer.parseInt(para.get("corp_id").toString()) && null != para.get("corp_id").toString())
                i_corp_id= Integer.parseInt(para.get("corp_id").toString());

            return  "select * from work.tb_corp_img   where img_corp_id =" +i_corp_id;
        }
    }
}
