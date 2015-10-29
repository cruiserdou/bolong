package com.springapp.mvc.corp.pojo;

import java.sql.Date;

/**
 * Created by dou on 15-9-3.
 */
public class Corp {
    private int id;
    private String buslicno;
    private String name;
    private String unit;
    private String legrep;
    private String province;
    private String city;
    private String county;
    private String nos;
    private String postal;
    private String nature;
    private String regcap;
    private Date bustermfdt;
    private Date bustremtdt;
    private Date regdt;
    private String list_area;
    private String listcode;
    private String listprice;
    private Date listdt;
    private String channels;
    private String webchat;
    private String staffnum;
    private String regist_organ;
    private String regaddr;
    private String offaddr;
    private String scope;
    private String mbus;
    private String eprofile;
    private String phoinf;
    private String remark;
    private String indclass1;
    private String indclass2;
    private String indclass3;
    private String indclass4;
    private String csrc_type1;
    private String csrc_type2;
    private String csrc_type3;
    private String csrc_type4;
    private boolean type_enterp;
    private boolean type_server;
    private boolean type_investors;
    private boolean type_govermt;
    private boolean demand_rz;
    private boolean demand_px;
    private boolean demand_rl;
    private Date inputdt;
    private int inputid;


    private  int   srv_id;
    private  int   srv_corp_id;
    private  int   retra_id;
    private  int   retra_corp_id;
    private  int   rehr_id;
    private  int   rehr_corp_id;
    private  int   refi_id;
    private  int   refi_corp_id;
    private  int   inv_id;
    private  int   inv_corp_id;
    private  int   gov_id;
    private  int   gov_corp_id;




    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBuslicno() {
        return buslicno;
    }

    public void setBuslicno(String buslicno) {
        this.buslicno = buslicno;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getLegrep() {
        return legrep;
    }

    public void setLegrep(String legrep) {
        this.legrep = legrep;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public String getNos() {
        return nos;
    }

    public void setNos(String nos) {
        this.nos = nos;
    }

    public String getPostal() {
        return postal;
    }

    public void setPostal(String postal) {
        this.postal = postal;
    }

    public String getNature() {
        return nature;
    }

    public void setNature(String nature) {
        this.nature = nature;
    }

    public String getRegcap() {
        return regcap;
    }

    public void setRegcap(String regcap) {
        this.regcap = regcap;
    }

    public Date getBustermfdt() {
        return bustermfdt;
    }

    public void setBustermfdt(Date bustermfdt) {
        this.bustermfdt = bustermfdt;
    }

    public Date getBustremtdt() {
        return bustremtdt;
    }

    public void setBustremtdt(Date bustremtdt) {
        this.bustremtdt = bustremtdt;
    }

    public Date getRegdt() {
        return regdt;
    }

    public void setRegdt(Date regdt) {
        this.regdt = regdt;
    }

    public String getList_area() {
        return list_area;
    }

    public void setList_area(String list_area) {
        this.list_area = list_area;
    }

    public String getListcode() {
        return listcode;
    }

    public void setListcode(String listcode) {
        this.listcode = listcode;
    }

    public String getListprice() {
        return listprice;
    }

    public void setListprice(String listprice) {
        this.listprice = listprice;
    }

    public Date getListdt() {
        return listdt;
    }

    public void setListdt(Date listdt) {
        this.listdt = listdt;
    }

    public String getChannels() {
        return channels;
    }

    public void setChannels(String channels) {
        this.channels = channels;
    }

    public String getWebchat() {
        return webchat;
    }

    public void setWebchat(String webchat) {
        this.webchat = webchat;
    }

    public String getStaffnum() {
        return staffnum;
    }

    public void setStaffnum(String staffnum) {
        this.staffnum = staffnum;
    }

    public String getRegist_organ() {
        return regist_organ;
    }

    public void setRegist_organ(String regist_organ) {
        this.regist_organ = regist_organ;
    }

    public String getRegaddr() {
        return regaddr;
    }

    public void setRegaddr(String regaddr) {
        this.regaddr = regaddr;
    }

    public String getOffaddr() {
        return offaddr;
    }

    public void setOffaddr(String offaddr) {
        this.offaddr = offaddr;
    }

    public String getScope() {
        return scope;
    }

    public void setScope(String scope) {
        this.scope = scope;
    }

    public String getMbus() {
        return mbus;
    }

    public void setMbus(String mbus) {
        this.mbus = mbus;
    }

    public String getEprofile() {
        return eprofile;
    }

    public void setEprofile(String eprofile) {
        this.eprofile = eprofile;
    }

    public String getPhoinf() {
        return phoinf;
    }

    public void setPhoinf(String phoinf) {
        this.phoinf = phoinf;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getIndclass1() {
        return indclass1;
    }

    public void setIndclass1(String indclass1) {
        this.indclass1 = indclass1;
    }

    public String getIndclass2() {
        return indclass2;
    }

    public void setIndclass2(String indclass2) {
        this.indclass2 = indclass2;
    }

    public String getIndclass3() {
        return indclass3;
    }

    public void setIndclass3(String indclass3) {
        this.indclass3 = indclass3;
    }

    public String getIndclass4() {
        return indclass4;
    }

    public void setIndclass4(String indclass4) {
        this.indclass4 = indclass4;
    }

    public String getCsrc_type1() {
        return csrc_type1;
    }

    public void setCsrc_type1(String csrc_type1) {
        this.csrc_type1 = csrc_type1;
    }

    public String getCsrc_type2() {
        return csrc_type2;
    }

    public void setCsrc_type2(String csrc_type2) {
        this.csrc_type2 = csrc_type2;
    }

    public String getCsrc_type3() {
        return csrc_type3;
    }

    public void setCsrc_type3(String csrc_type3) {
        this.csrc_type3 = csrc_type3;
    }

    public String getCsrc_type4() {
        return csrc_type4;
    }

    public void setCsrc_type4(String csrc_type4) {
        this.csrc_type4 = csrc_type4;
    }

    public boolean isType_enterp() {
        return type_enterp;
    }

    public void setType_enterp(boolean type_enterp) {
        this.type_enterp = type_enterp;
    }

    public boolean isType_server() {
        return type_server;
    }

    public void setType_server(boolean type_server) {
        this.type_server = type_server;
    }

    public boolean isType_investors() {
        return type_investors;
    }

    public void setType_investors(boolean type_investors) {
        this.type_investors = type_investors;
    }

    public boolean isType_govermt() {
        return type_govermt;
    }

    public void setType_govermt(boolean type_govermt) {
        this.type_govermt = type_govermt;
    }

    public boolean isDemand_rz() {
        return demand_rz;
    }

    public void setDemand_rz(boolean demand_rz) {
        this.demand_rz = demand_rz;
    }

    public boolean isDemand_px() {
        return demand_px;
    }

    public void setDemand_px(boolean demand_px) {
        this.demand_px = demand_px;
    }

    public boolean isDemand_rl() {
        return demand_rl;
    }

    public void setDemand_rl(boolean demand_rl) {
        this.demand_rl = demand_rl;
    }

    public Date getInputdt() {
        return inputdt;
    }

    public void setInputdt(Date inputdt) {
        this.inputdt = inputdt;
    }

    public int getInputid() {
        return inputid;
    }

    public void setInputid(int inputid) {
        this.inputid = inputid;
    }

    public int getGov_corp_id() {
        return gov_corp_id;
    }

    public void setGov_corp_id(int gov_corp_id) {
        this.gov_corp_id = gov_corp_id;
    }

    public int getSrv_id() {
        return srv_id;
    }

    public void setSrv_id(int srv_id) {
        this.srv_id = srv_id;
    }

    public int getSrv_corp_id() {
        return srv_corp_id;
    }

    public void setSrv_corp_id(int srv_corp_id) {
        this.srv_corp_id = srv_corp_id;
    }

    public int getRetra_id() {
        return retra_id;
    }

    public void setRetra_id(int retra_id) {
        this.retra_id = retra_id;
    }

    public int getRetra_corp_id() {
        return retra_corp_id;
    }

    public void setRetra_corp_id(int retra_corp_id) {
        this.retra_corp_id = retra_corp_id;
    }

    public int getRehr_id() {
        return rehr_id;
    }

    public void setRehr_id(int rehr_id) {
        this.rehr_id = rehr_id;
    }

    public int getRehr_corp_id() {
        return rehr_corp_id;
    }

    public void setRehr_corp_id(int rehr_corp_id) {
        this.rehr_corp_id = rehr_corp_id;
    }

    public int getRefi_id() {
        return refi_id;
    }

    public void setRefi_id(int refi_id) {
        this.refi_id = refi_id;
    }

    public int getRefi_corp_id() {
        return refi_corp_id;
    }

    public void setRefi_corp_id(int refi_corp_id) {
        this.refi_corp_id = refi_corp_id;
    }

    public int getInv_id() {
        return inv_id;
    }

    public void setInv_id(int inv_id) {
        this.inv_id = inv_id;
    }

    public int getInv_corp_id() {
        return inv_corp_id;
    }

    public void setInv_corp_id(int inv_corp_id) {
        this.inv_corp_id = inv_corp_id;
    }

    public int getGov_id() {
        return gov_id;
    }

    public void setGov_id(int gov_id) {
        this.gov_id = gov_id;
    }

}
