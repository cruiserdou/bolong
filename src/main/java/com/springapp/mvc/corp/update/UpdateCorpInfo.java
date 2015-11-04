package com.springapp.mvc.corp.update;

/**
 * Created by xwq on 14-4-15.
 */

import common.util.DBInfo;
import common.util.DataShop;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.*;

@Controller
@RequestMapping("/update_corp_info")
public class UpdateCorpInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam(value = "id", required = false) Integer id,
            @RequestParam(value = "buslicno", required = false) String buslicno,
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "unit", required = false) String unit,
            @RequestParam(value = "legrep", required = false) String legrep,
            @RequestParam(value = "province", required = false) String province,
            @RequestParam(value = "city", required = false) String city,
            @RequestParam(value = "county", required = false) String county,
            @RequestParam(value = "nos", required = false) String nos,
            @RequestParam(value = "postal", required = false) String postal,
            @RequestParam(value = "nature", required = false) String nature,
            @RequestParam(value = "regcap", required = false) String regcap,
            @RequestParam(value = "bustermfdt", required = false) String bustermfdt,
            @RequestParam(value = "bustremtdt", required = false) String bustremtdt,
            @RequestParam(value = "regdt", required = false) String regdt,
            @RequestParam(value = "list_area", required = false) String list_area,
            @RequestParam(value = "listcode", required = false) String listcode,
            @RequestParam(value = "listprice", required = false) String listprice,
            @RequestParam(value = "listdt", required = false) String listdt,
            @RequestParam(value = "channels", required = false) String channels,
            @RequestParam(value = "webchat", required = false) String webchat,
            @RequestParam(value = "staffnum", required = false) String staffnum,
            @RequestParam(value = "regist_organ", required = false) String regist_organ,
            @RequestParam(value = "regaddr", required = false) String regaddr,
            @RequestParam(value = "offaddr", required = false) String offaddr,
            @RequestParam(value = "scope", required = false) String scope,
            @RequestParam(value = "mbus", required = false) String mbus,
            @RequestParam(value = "eprofile", required = false) String eprofile,
            @RequestParam(value = "phoinf", required = false) String phoinf,
            @RequestParam(value = "remark", required = false) String remark,
            @RequestParam(value = "indclass1", required = false) String indclass1,
            @RequestParam(value = "indclass2", required = false) String indclass2,
            @RequestParam(value = "indclass3", required = false) String indclass3,
            @RequestParam(value = "indclass4", required = false) String indclass4,
            @RequestParam(value = "csrc_type1", required = false) String csrc_type1,
            @RequestParam(value = "csrc_type2", required = false) String csrc_type2,
            @RequestParam(value = "csrc_type3", required = false) String csrc_type3,
            @RequestParam(value = "csrc_type4", required = false) String csrc_type4,
            @RequestParam(value = "type_enterp", required = false) Boolean type_enterp,
            @RequestParam(value = "type_server", required = false) Boolean type_server,
            @RequestParam(value = "type_investors", required = false) Boolean type_investors,
            @RequestParam(value = "type_govermt", required = false) Boolean type_govermt,
            @RequestParam(value = "demand_rz", required = false) Boolean demand_rz,
            @RequestParam(value = "demand_px", required = false) Boolean demand_px,
            @RequestParam(value = "demand_rl", required = false) Boolean demand_rl

    ) throws Exception {
        DataShop dataShop = new DataShop();
        dataShop.setSuccess(true);
        Connection conn = null;
        PreparedStatement pst = null;
        try {
            Class.forName("org.postgresql.Driver").newInstance();
        } catch (Exception e) {
            System.out.print(e.getMessage());
        }

        DBInfo connstr = new DBInfo();
        String url = connstr.getUrl();
        String user = connstr.getUser();
        String password = connstr.getPassword();
        java.util.Date date = new java.util.Date();
        Timestamp timestamp = new Timestamp(date.getTime());
        try {
            conn = DriverManager.getConnection(url, user, password);

            String sql = "UPDATE work.tb_corp\n" +
                    "   SET buslicno=?, name=?, unit=?, legrep=?, province=?, city=?, \n" +
                    "       county=?, nos=?, postal=?, nature=?, regcap=?, bustermfdt=?, \n" +
                    "       bustremtdt=?, regdt=?, list_area=?, listcode=?, listprice=?, \n" +
                    "       listdt=?, channels=?, webchat=?, staffnum=?, regist_organ=?, \n" +
                    "       regaddr=?, offaddr=?, scope=?, mbus=?, eprofile=?, phoinf=?, \n" +
                    "       remark=?, indclass1=?, indclass2=?, indclass3=?, indclass4=?, \n" +
                    "       csrc_type1=?, csrc_type2=?, csrc_type3=?, csrc_type4=?, type_enterp=?, \n" +
                    "       type_server=?, type_investors=?, type_govermt=?, demand_rz=?, \n" +
                    "       demand_px=?, demand_rl=?, inputdt=? " +
                    "  where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, buslicno);
            pst.setString(2, name);
            pst.setString(3, unit);
            pst.setString(4, legrep);
            pst.setString(5, province);
            pst.setString(6, city);
            pst.setString(7, county);
            pst.setString(8, nos);
            pst.setString(9, postal);
            pst.setString(10, nature);
            pst.setString(11, regcap);
            Date d_bustermfdt = null;
            if (bustermfdt != null && bustermfdt.length() > 2)
                d_bustermfdt = Date.valueOf(bustermfdt);
            pst.setDate(12, d_bustermfdt);
            Date d_bustremtdt = null;
            if (bustremtdt != null && bustremtdt.length() > 2)
                d_bustremtdt = Date.valueOf(bustremtdt);
            pst.setDate(13, d_bustremtdt);
            Date d_regdt = null;
            if (regdt != null && regdt.length() > 2)
                d_regdt = Date.valueOf(regdt);
            pst.setDate(14, d_regdt);
            pst.setString(15, list_area);
            pst.setString(16, listcode);
            pst.setString(17, listprice);
            Date d_listdt = null;
            if (listdt != null && listdt.length() > 2)
                d_listdt = Date.valueOf(listdt);
            pst.setDate(18, d_listdt);
            pst.setString(19, channels);
            pst.setString(20, webchat);
            pst.setString(21, staffnum);
            pst.setString(22, regist_organ);
            pst.setString(23, regaddr);
            pst.setString(24, offaddr);
            pst.setString(25, scope);
            pst.setString(26, mbus);
            pst.setString(27, eprofile);
            pst.setString(28, phoinf);
            pst.setString(29, remark);
            pst.setString(30, indclass1);
            pst.setString(31, indclass2);
            pst.setString(32, indclass3);
            pst.setString(33, indclass4);
            pst.setString(34, csrc_type1);
            pst.setString(35, csrc_type2);
            pst.setString(36, csrc_type3);
            pst.setString(37, csrc_type4);
            pst.setBoolean(38, type_enterp);
            pst.setBoolean(39, type_server);
            pst.setBoolean(40, type_investors);
            pst.setBoolean(41, type_govermt);
            pst.setBoolean(42, demand_rz);
            pst.setBoolean(43, demand_px);
            pst.setBoolean(44, demand_rl);
            pst.setTimestamp(45, timestamp);
            pst.setInt(46, id);
            pst.executeUpdate();


            dataShop.setSuccess(true);

        } catch (SQLException e) {
            System.out.print(e.getMessage());
        } finally {
            if (pst != null) pst.close();
            if (conn != null) conn.close();
        }

        return dataShop;
    }
}
