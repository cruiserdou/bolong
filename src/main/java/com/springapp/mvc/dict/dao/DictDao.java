package com.springapp.mvc.dict.dao;

import com.springapp.mvc.dict.pojo.*;
import com.springapp.mvc.system.pojo.Dicts;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by xwq on 15/9/2.
 */
@Repository
public interface DictDao {

    @Select("SELECT * FROM dict.tb_province;")
    List<Province> listProvince();

    @Select("SELECT * FROM dict.tb_city WHERE provinceid=#{provinceid};")
    List<City> listCity(@Param(value = "provinceid")int provinceid);

    @Select("SELECT * FROM dict.tb_district WHERE cityid=#{cityid};")
    List<County> listDistrict(@Param(value = "cityid")int cityid);

    @SelectProvider(type = DictsDaoEmberSql.class, method = "listDictsInfo")
    List<Dicts> list(
            @Param(value = "fieldnm") String fieldnm
    );

    class DictsDaoEmberSql {
        public String listDictsInfo(Map<String, Object> para) {

            String where = "";
            if (null != para.get("fieldnm").toString() && 0 != para.get("fieldnm").toString().length())
                where += " and fieldnm like '%" + para.get("fieldnm").toString() + "%' ";

            where += " ;";

            return " SELECT id, field, fieldnm, fieldval, fieldvaldis, remark " +
                    "  FROM work.dicts " +
                    " WHERE 1 = 1  " + where;
        }
    }

    @Delete(" Delete FROM work.dicts  where id = #{id}")
    void delete(@Param(value = "id") Integer id);

    @Select("SELECT * FROM  work.tb_industry1 where id <20;")
    List<Industry1> listIndustry1hy();

    @Select("SELECT * FROM  work.tb_industry1 where id >19 ;")
    List<Industry1> listIndustry1zjh();

    @Select("SELECT * FROM work.tb_industry2 WHERE parentid=#{parentid};")
    List<Industry2> listIndustry2(@Param(value = "parentid")int parentid);
}
