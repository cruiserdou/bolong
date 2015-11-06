package com.springapp.mvc.corp.pojo;

import java.sql.Date;

/**
 * Created by xwq on 15/11/6.
 */
public class CorpBase {
    private int id;
    private String buslicno;    //营业执照编号
    private String name;    //企业名称
    private String unit;    //单位类别
    private String legrep;  //法定代表人
    private String province;    //省
    private String city;    //市
    private String county;  //县
    private String nos; //公司简称
    private String postal;  //邮政编码
    private String nature;  //企业性质
    private String regcap;  //注册资本
    private Date bustermfdt;    //营业期限自
    private Date bustremtdt;    //营业期限至
    private Date regdt;     //注册日期
    private String list_area;   //挂牌区域
    private String listcode;    //挂牌代码
    private String listprice;   //挂牌出资
    private Date listdt;    //挂牌日期
    private String channels;    //推荐单位
    private String webchat;     //微信号
    private String staffnum;    //员工人数
    private String regist_organ;    //登记机关
    private String regaddr;     //注册地址
    private String offaddr;     //办公地点
    private String scope;   //经营范围
    private String mbus;    //主营业务
    private String eprofile;    //企业简介
    private String phoinf;  //企业照片资料
    private String remark;  //备注
    private String indclass1;   //行业一级分类
    private String indclass2;   //行业二级分类
    private String indclass3;   //行业三级分类
    private String indclass4;   //行业四级分类
    private String csrc_type1;  //证监会行业分类1
    private String csrc_type2;  //证监会行业分类2
    private String csrc_type3;  //证监会行业分类3
    private String csrc_type4;  //证监会行业分类4
    private boolean type_enterp;    //一般企业
    private boolean type_server;    //服务机构
    private boolean type_investors; //投资人
    private boolean type_govermt;   //政府机构
    private boolean demand_rz;  //融资需求
    private boolean demand_px;  //培训需求
    private boolean demand_rl;  //人力需求
    private Date inputdt;   //录入时间
    private int inputid;    //录入人

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
}
