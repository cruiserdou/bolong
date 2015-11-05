package com.springapp.mvc.CorpImg.dao;

import com.springapp.mvc.CorpImg.pojo.CorpImg;
import com.springapp.mvc.stat.pojo.StatInfo;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CorpImgDao {
    @SelectProvider(type = CorpImgDaoEmberSql.class, method = "listCorpImgInfo")
    List<CorpImg> list();

    class CorpImgDaoEmberSql {
        public String listCorpImgInfo() {
            return " select *   from work.CorpImg corp ";
        }
    }




}
