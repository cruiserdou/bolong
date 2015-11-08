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

    @Select("SELECT id, name, orderid FROM dict.tb_province;")
    List<Province> listProvince();

    @SelectProvider(type = CityDaoEmberSql.class, method = "listCityInfo")
    List<City> listCityInfo(
            @Param(value = "provinceid") Integer provinceid
    );

    class CityDaoEmberSql {
        public String listCityInfo(Map<String, Object> para) {
            Integer i_provinceid = 0;
            if (0 != Integer.parseInt(para.get("provinceid").toString()) && null != para.get("provinceid").toString())
                i_provinceid= Integer.parseInt(para.get("provinceid").toString());

            return " SELECT *    FROM work.tb_city   WHERE 1 = 1  and provinceid= " + i_provinceid;
        }
    }

    @SelectProvider(type = CountyDaoEmberSql.class, method = "listCountyInfo")
    List<County> listCountyInfo(
            @Param(value = "cityid") Integer cityid
    );

    class CountyDaoEmberSql {
        public String listCountyInfo(Map<String, Object> para) {
            Integer i_cityid = 0;
            if (0 != Integer.parseInt(para.get("cityid").toString()) && null != para.get("cityid").toString())
                i_cityid= Integer.parseInt(para.get("cityid").toString());

            return " SELECT *    FROM work.tb_county   WHERE 1 = 1  and cityid= " + i_cityid;
        }
    }

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


    @Select("SELECT * FROM dict.tb_industry;")
    List<Industry1> listIndustry1();

    @SelectProvider(type = Industry2DaoEmberSql.class, method = "listIndustry2Info")
    List<Industry2> listIndustry2(
            @Param(value = "parentid") Integer parentid
    );

    class Industry2DaoEmberSql {
        public String listIndustry2Info(Map<String, Object> para) {
            Integer i_parentid = 0;
            if (0 != Integer.parseInt(para.get("parentid").toString()) && null != para.get("parentid").toString())
                i_parentid= Integer.parseInt(para.get("parentid").toString());

            return " SELECT *    FROM work.tb_industry2   WHERE 1 = 1  and parentid= " + i_parentid;
        }
    }

}
