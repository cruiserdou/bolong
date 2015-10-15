package com.springapp.mvc.stat.dao;

import com.springapp.mvc.stat.pojo.StatInfo;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StatDao {
    @SelectProvider(type = StatDaoEmberSql.class, method = "listStatInfo")
    List<StatInfo> list();

    class StatDaoEmberSql {
        public String listStatInfo() {
            return " select count(*) as corp_num  from work.tb_corp corp ";
        }
    }

    @SelectProvider(type = StatAllDaoEmberSql.class, method = "listStatAllInfo")
    List<StatInfo> listAll();

    class StatAllDaoEmberSql {
        public String listStatAllInfo() {
            return " select count(*) as corp_num  from work.tb_corp corp ";
        }
    }

    @SelectProvider(type = StatGovDaoEmberSql.class, method = "listStatGovInfo")
    List<StatInfo> listGov();

    class StatGovDaoEmberSql {
        public String listStatGovInfo() {
            return " select count(*) as corp_num  from work.tb_corp corp where  corp.type_govermt=TRUE";
        }
    }

    @SelectProvider(type = StatInvDaoEmberSql.class, method = "listStatInvInfo")
    List<StatInfo> listInv();

    class StatInvDaoEmberSql {
        public String listStatInvInfo() {
            return " select count(*) as corp_num  from work.tb_corp corp where  corp.type_investors=TRUE";
        }
    }

    @SelectProvider(type = StatRefiDaoEmberSql.class, method = "listStatRefiInfo")
    List<StatInfo> listRefi();

    class StatRefiDaoEmberSql {
        public String listStatRefiInfo() {
            return " select count(*) as corp_num  from work.tb_corp corp where corp.demand_rz=TRUE ";
        }
    }

    @SelectProvider(type = StatRehrDaoEmberSql.class, method = "listStatRehrInfo")
    List<StatInfo> listRehr();

    class StatRehrDaoEmberSql {
        public String listStatRehrInfo() {
            return " select count(*) as corp_num  from work.tb_corp corp  where corp.demand_rl=TRUE ";
        }
    }

    @SelectProvider(type = StatRetrDaoEmberSql.class, method = "listStatRetrInfo")
    List<StatInfo> listRetr();

    class StatRetrDaoEmberSql {
        public String listStatRetrInfo() {
            return " select count(*) as corp_num  from work.tb_corp corp  where corp.demand_px=TRUE ";
        }
    }

    @SelectProvider(type = StatServerDaoEmberSql.class, method = "listStatServerInfo")
    List<StatInfo> listServer();

    class StatServerDaoEmberSql {
        public String listStatServerInfo() {
            return " select count(*) as corp_num  from work.tb_corp corp   where corp.type_server=TRUE ";
        }
    }
}
