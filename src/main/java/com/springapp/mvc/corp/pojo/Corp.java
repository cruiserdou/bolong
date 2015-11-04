package com.springapp.mvc.corp.pojo;

import java.sql.Date;

/**
 * Created by dou on 15-9-3.
 */
public class Corp {
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

    private int   cont_id;  //法人编号
    private int   cont_corp_id; //企业编号
    private String   cont_name; //法人姓名
    private String   cont_psotion;  //法人职务
    private String   cont_edoctype; //法人证件类型
    private String   cont_edocnum;  //法人证件号码
    private String   cont_ephone;   //法人手机号码
    private String   cont_efax; //法人传真号码
    private String   cont_eemail;   //法人邮箱
    private String   cont_eqq;  //法人QQ
    private String   cont_webchat;  //法人个人微信号
    private String   cont_tel;  //联系人固话
    private String   cont_bz;   //备注

    private  int   srv_id;  //服务机构编号
    private  int   srv_corp_id; //企业编号
    private String    srv_name; //服务机构名称
    private String    srv_type; //服务机构类别
    private String    srv_content;  //业务内容
    private String    srv_levels;   //级别
    private String    srv_domain;   //专属领域
    private String    srv_penalty;  //惩罚记录
    private String    srv_examiner; //专申委员
    private String    srv_post; //兼任职务
    private String    srv_descs;    //简介
    private String    srv_remark;   //备注

    private  int   inv_id;
    private  int   inv_corp_id;
    private String   inv_domain;
    private String   inv_csrc_type1;
    private String   inv_csrc_type2;
    private String   inv_csrc_type3;
    private String   inv_csrc_type4;
    private String   inv_indclass1;
    private String   inv_indclass2;
    private String   inv_indclass3;
    private String   inv_indclass4;
    private String   inv_contact;
    private String   inv_psotion;
    private String   inv_doctype;
    private String   inv_docnum;
    private String   inv_phone;
    private String   inv_fax;
    private String   inv_email;
    private String   inv_qq;
    private String   inv_webchat;
    private String   inv_tel;
    private String   inv_remark;


    private  int   gov_id;
    private  int   gov_corp_id;
    private String  gov_domain;
    private String  gov_office;
    private String  gov_desc;
    private String  gov_contact;
    private String  gov_psotion;
    private String  gov_doctype;
    private String  gov_docnum;
    private String  gov_phone;
    private String  gov_fax;
    private String  gov_email;
    private String  gov_qq;
    private String  gov_webchat;
    private String  gov_tel;
    private String  gov_remark;

    private  int   retra_id;    //培训需求ID
    private  int   retra_corp_id;   //企业ID
    private String  retra_mode; //培训方式
    private String  retra_content;  //培训内容
    private Double retra_acc_cost;  //可接受成本
    private Date   retra_dt;    //有效时间
    private String  retra_requests; //详细要求

    private  int   rehr_id; //人力资源需求ID
    private  int   rehr_corp_id;    //企业ID
    private String  rehr_post;  //需求职位
    private String  rehr_num;   //职位人数
    private Double   rehr_salary;   //职位薪金
    private String  rehr_sex_req;   //性别要求
    private String  rehr_age_req;   //年龄要求
    private String  rehr_requests;  //经验要求

    private  int   refi_id; //融资需求ID
    private  int   refi_corp_id;    //企业ID
    private String  refi_amounts;   //融资金额
    private String  refi_use;   //融资用途
    private String  refi_financ;    //股份融资/债券融资
    private String  refi_security;  //偿付保障
    private String  refi_acc_cost;  //可接受成本
    private Date  refi_deadline;    //融资期限
    private String  refi_desc;  //融资用途详细说明

    private int   mai_changer_id;
    private String   mai_changer_dept;
    private Date   mai_recomdt;
    private String   mai_trusteeship;
    private String   mai_listst;
    private String   mai_eclass;
    private String   mai_maintain;
    private String   mai_reserve;
    private String   mai_emaint;
    private String   mai_dept;
    private String   mai_post;
    private String   mai_tel;
    private String   mai_phone;
    private String   mai_fax;
    private String   mai_email;
    private String   mai_qq;
    private String   mai_webchat;
    private String   mai_bz;

    private int    finid;
    private int    fin_corp_id;
    private Double  st_money_fund;
    private Double  end_money_fund;
    private Double  st_jyxjr_assets;
    private Double  end_jyxjr_assets;
    private Double  st_ys_bill;
    private Double  end_ys_bill;
    private Double  st_ys_account;
    private Double  end_ys_account;
    private Double  st_yf_money;
    private Double  end_yf_money;
    private Double  st_ys_interest;
    private Double  end_ys_interest;
    private Double  st_ys_dividends;
    private Double  end_ys_dividends;
    private Double  st_other_ys_money;
    private Double  end_other_ys_money;
    private Double  st_inventory;
    private Double  end_inventory;
    private Double  st_ynndq_no_assets;
    private Double  end_ynndq_no_assets;
    private Double  st_other_assets;
    private Double  end_other_assets;
    private Double  st_hj_assets;
    private Double  end_hj_assets;
    private Double  st_kgcs_assets;
    private Double  end_kgcs_assets;
    private Double  st_cyzdq_investment;
    private Double  end_cyzdq_investment;
    private Double  st_long_ys_money;
    private Double  end_long_ys_money;
    private Double  st_long_gq_investment;
    private Double  end_long_gq_investment;
    private Double  st_invest_house;
    private Double  end_invest_house;
    private Double  st_gd_assets;
    private Double  end_gd_assets;
    private Double  st_accu_deprec;
    private Double  end_accu_deprec;
    private Double  st_gd_assets_jz;
    private Double  end_gd_assets_jz;
    private Double  st_gd_assets_ready;
    private Double  end_gd_assets_ready;
    private Double  st_gd_assets_je;
    private Double  end_gd_assets_je;
    private Double  st_now_project;
    private Double  end_now_project;
    private Double  st_project_material;
    private Double  end_project_material;
    private Double  st_gd_assets_ql;
    private Double  end_gd_assets_ql;
    private Double  st_scx_investment;
    private Double  end_scx_investment;
    private Double  st_wx_assets;
    private Double  end_wx_assets;
    private Double  st_goodwill;
    private Double  end_goodwill;
    private Double  st_cqdt_cost;
    private Double  end_cqdt_cost;
    private Double  st_dysds_assets;
    private Double  end_dysds_assets;
    private Double  st_other_no_assets;
    private Double  end_other_no_assets;
    private Double  st_hj_no_asset;
    private Double  end_hj_no_asset;
    private Double  st_hj_total_asset;
    private Double  end_hj_total_asset;
    private Double  st_short_borrow;
    private Double  end_short_borrow;
    private Double  st_jyx_finance_fz;
    private Double  end_jyx_finance_fz;
    private Double  st_yf_bill;
    private Double  end_yf_bill;
    private Double  st_yf_account;
    private Double  end_yf_account;
    private Double  st_ys_money;
    private Double  end_ys_money;
    private Double  st_yf_staff_pay;
    private Double  end_yf_staff_pay;
    private Double  st_yj_tax;
    private Double  end_yj_tax;
    private Double  st_yf_interest;
    private Double  end_yf_interest;
    private Double  st_yf_dividends;
    private Double  end_yf_dividends;
    private Double  st_other_yf_money;
    private Double  end_other_yf_money;
    private Double  st_ynndq_no_fz;
    private Double  end_ynndq_no_fz;
    private Double  st_other_fz;
    private Double  end_other_fz;
    private Double  st_hj_fz;
    private Double  end_hj_fz;
    private Double  st_long_borrow;
    private Double  end_long_borrow;
    private Double  st_yf_bond;
    private Double  end_yf_bond;
    private Double  st_long_yf_money;
    private Double  end_long_yf_money;
    private Double  st_zx_yf_money;
    private Double  end_zx_yf_money;
    private Double  st_yj_fz;
    private Double  end_yj_fz;
    private Double  st_dysds_fz;
    private Double  end_dysds_fz;
    private Double  st_other_no_fz;
    private Double  end_other_no_fz;
    private Double  st_hj_no_fz;
    private Double  end_hj_no_fz;
    private Double  st_hj_total_fz;
    private Double  end_hj_total_fz;
    private Double  st_paid_assets;
    private Double  end_paid_assets;
    private Double  st_zb_reserve;
    private Double  end_zb_reserve;
    private Double  st_kc_stock;
    private Double  end_kc_stock;
    private Double  st_zx_reserve;
    private Double  end_zx_reserve;
    private Double  st_yy_reserve;
    private Double  end_yy_reserve;
    private Double  st_wfp_profit;
    private Double  end_wfp_profit;
    private Double  st_hj_owner_right;
    private Double  end_hj_owner_right;
    private Double  st_hj_fz_owner_right;
    private Double  end_hj_fz_owner_right;


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

    public String getSrv_name() {
        return srv_name;
    }

    public void setSrv_name(String srv_name) {
        this.srv_name = srv_name;
    }

    public String getSrv_type() {
        return srv_type;
    }

    public void setSrv_type(String srv_type) {
        this.srv_type = srv_type;
    }

    public String getSrv_content() {
        return srv_content;
    }

    public void setSrv_content(String srv_content) {
        this.srv_content = srv_content;
    }

    public String getSrv_levels() {
        return srv_levels;
    }

    public void setSrv_levels(String srv_levels) {
        this.srv_levels = srv_levels;
    }

    public String getSrv_domain() {
        return srv_domain;
    }

    public void setSrv_domain(String srv_domain) {
        this.srv_domain = srv_domain;
    }

    public String getSrv_penalty() {
        return srv_penalty;
    }

    public void setSrv_penalty(String srv_penalty) {
        this.srv_penalty = srv_penalty;
    }

    public String getSrv_examiner() {
        return srv_examiner;
    }

    public void setSrv_examiner(String srv_examiner) {
        this.srv_examiner = srv_examiner;
    }

    public String getSrv_post() {
        return srv_post;
    }

    public void setSrv_post(String srv_post) {
        this.srv_post = srv_post;
    }

    public String getSrv_descs() {
        return srv_descs;
    }

    public void setSrv_descs(String srv_descs) {
        this.srv_descs = srv_descs;
    }

    public String getSrv_remark() {
        return srv_remark;
    }

    public void setSrv_remark(String srv_remark) {
        this.srv_remark = srv_remark;
    }

    public String getRetra_mode() {
        return retra_mode;
    }

    public void setRetra_mode(String retra_mode) {
        this.retra_mode = retra_mode;
    }

    public String getRetra_content() {
        return retra_content;
    }

    public void setRetra_content(String retra_content) {
        this.retra_content = retra_content;
    }

    public Double getRetra_acc_cost() {
        return retra_acc_cost;
    }

    public void setRetra_acc_cost(Double retra_acc_cost) {
        this.retra_acc_cost = retra_acc_cost;
    }

    public Date getRetra_dt() {
        return retra_dt;
    }

    public void setRetra_dt(Date retra_dt) {
        this.retra_dt = retra_dt;
    }

    public String getRetra_requests() {
        return retra_requests;
    }

    public void setRetra_requests(String retra_requests) {
        this.retra_requests = retra_requests;
    }

    public String getRehr_post() {
        return rehr_post;
    }

    public void setRehr_post(String rehr_post) {
        this.rehr_post = rehr_post;
    }

    public String getRehr_num() {
        return rehr_num;
    }

    public void setRehr_num(String rehr_num) {
        this.rehr_num = rehr_num;
    }

    public Double getRehr_salary() {
        return rehr_salary;
    }

    public void setRehr_salary(Double rehr_salary) {
        this.rehr_salary = rehr_salary;
    }

    public String getRehr_sex_req() {
        return rehr_sex_req;
    }

    public void setRehr_sex_req(String rehr_sex_req) {
        this.rehr_sex_req = rehr_sex_req;
    }

    public String getRehr_age_req() {
        return rehr_age_req;
    }

    public void setRehr_age_req(String rehr_age_req) {
        this.rehr_age_req = rehr_age_req;
    }

    public String getRehr_requests() {
        return rehr_requests;
    }

    public void setRehr_requests(String rehr_requests) {
        this.rehr_requests = rehr_requests;
    }

    public String getRefi_amounts() {
        return refi_amounts;
    }

    public void setRefi_amounts(String refi_amounts) {
        this.refi_amounts = refi_amounts;
    }

    public String getRefi_use() {
        return refi_use;
    }

    public void setRefi_use(String refi_use) {
        this.refi_use = refi_use;
    }

    public String getRefi_financ() {
        return refi_financ;
    }

    public void setRefi_financ(String refi_financ) {
        this.refi_financ = refi_financ;
    }

    public String getRefi_security() {
        return refi_security;
    }

    public void setRefi_security(String refi_security) {
        this.refi_security = refi_security;
    }

    public String getRefi_acc_cost() {
        return refi_acc_cost;
    }

    public void setRefi_acc_cost(String refi_acc_cost) {
        this.refi_acc_cost = refi_acc_cost;
    }

    public Date getRefi_deadline() {
        return refi_deadline;
    }

    public void setRefi_deadline(Date refi_deadline) {
        this.refi_deadline = refi_deadline;
    }

    public String getRefi_desc() {
        return refi_desc;
    }

    public void setRefi_desc(String refi_desc) {
        this.refi_desc = refi_desc;
    }
    public String getGov_domain() {
        return gov_domain;
    }

    public void setGov_domain(String gov_domain) {
        this.gov_domain = gov_domain;
    }

    public String getGov_office() {
        return gov_office;
    }

    public void setGov_office(String gov_office) {
        this.gov_office = gov_office;
    }

    public String getGov_desc() {
        return gov_desc;
    }

    public void setGov_desc(String gov_desc) {
        this.gov_desc = gov_desc;
    }

    public String getGov_contact() {
        return gov_contact;
    }

    public void setGov_contact(String gov_contact) {
        this.gov_contact = gov_contact;
    }

    public String getGov_psotion() {
        return gov_psotion;
    }

    public void setGov_psotion(String gov_psotion) {
        this.gov_psotion = gov_psotion;
    }

    public String getGov_doctype() {
        return gov_doctype;
    }

    public void setGov_doctype(String gov_doctype) {
        this.gov_doctype = gov_doctype;
    }

    public String getGov_docnum() {
        return gov_docnum;
    }

    public void setGov_docnum(String gov_docnum) {
        this.gov_docnum = gov_docnum;
    }

    public String getGov_phone() {
        return gov_phone;
    }

    public void setGov_phone(String gov_phone) {
        this.gov_phone = gov_phone;
    }

    public String getGov_fax() {
        return gov_fax;
    }

    public void setGov_fax(String gov_fax) {
        this.gov_fax = gov_fax;
    }

    public String getGov_email() {
        return gov_email;
    }

    public void setGov_email(String gov_email) {
        this.gov_email = gov_email;
    }

    public String getGov_qq() {
        return gov_qq;
    }

    public void setGov_qq(String gov_qq) {
        this.gov_qq = gov_qq;
    }

    public String getGov_webchat() {
        return gov_webchat;
    }

    public void setGov_webchat(String gov_webchat) {
        this.gov_webchat = gov_webchat;
    }

    public String getGov_tel() {
        return gov_tel;
    }

    public void setGov_tel(String gov_tel) {
        this.gov_tel = gov_tel;
    }

    public String getGov_remark() {
        return gov_remark;
    }

    public void setGov_remark(String gov_remark) {
        this.gov_remark = gov_remark;
    }

    public String getInv_domain() {
        return inv_domain;
    }

    public void setInv_domain(String inv_domain) {
        this.inv_domain = inv_domain;
    }

    public String getInv_csrc_type1() {
        return inv_csrc_type1;
    }

    public void setInv_csrc_type1(String inv_csrc_type1) {
        this.inv_csrc_type1 = inv_csrc_type1;
    }

    public String getInv_csrc_type2() {
        return inv_csrc_type2;
    }

    public void setInv_csrc_type2(String inv_csrc_type2) {
        this.inv_csrc_type2 = inv_csrc_type2;
    }

    public String getInv_csrc_type3() {
        return inv_csrc_type3;
    }

    public void setInv_csrc_type3(String inv_csrc_type3) {
        this.inv_csrc_type3 = inv_csrc_type3;
    }

    public String getInv_csrc_type4() {
        return inv_csrc_type4;
    }

    public void setInv_csrc_type4(String inv_csrc_type4) {
        this.inv_csrc_type4 = inv_csrc_type4;
    }

    public String getInv_indclass1() {
        return inv_indclass1;
    }

    public void setInv_indclass1(String inv_indclass1) {
        this.inv_indclass1 = inv_indclass1;
    }

    public String getInv_indclass2() {
        return inv_indclass2;
    }

    public void setInv_indclass2(String inv_indclass2) {
        this.inv_indclass2 = inv_indclass2;
    }

    public String getInv_indclass3() {
        return inv_indclass3;
    }

    public void setInv_indclass3(String inv_indclass3) {
        this.inv_indclass3 = inv_indclass3;
    }

    public String getInv_indclass4() {
        return inv_indclass4;
    }

    public void setInv_indclass4(String inv_indclass4) {
        this.inv_indclass4 = inv_indclass4;
    }

    public String getInv_contact() {
        return inv_contact;
    }

    public void setInv_contact(String inv_contact) {
        this.inv_contact = inv_contact;
    }

    public String getInv_psotion() {
        return inv_psotion;
    }

    public void setInv_psotion(String inv_psotion) {
        this.inv_psotion = inv_psotion;
    }

    public String getInv_doctype() {
        return inv_doctype;
    }

    public void setInv_doctype(String inv_doctype) {
        this.inv_doctype = inv_doctype;
    }

    public String getInv_docnum() {
        return inv_docnum;
    }

    public void setInv_docnum(String inv_docnum) {
        this.inv_docnum = inv_docnum;
    }

    public String getInv_phone() {
        return inv_phone;
    }

    public void setInv_phone(String inv_phone) {
        this.inv_phone = inv_phone;
    }

    public String getInv_fax() {
        return inv_fax;
    }

    public void setInv_fax(String inv_fax) {
        this.inv_fax = inv_fax;
    }

    public String getInv_email() {
        return inv_email;
    }

    public void setInv_email(String inv_email) {
        this.inv_email = inv_email;
    }

    public String getInv_qq() {
        return inv_qq;
    }

    public void setInv_qq(String inv_qq) {
        this.inv_qq = inv_qq;
    }

    public String getInv_webchat() {
        return inv_webchat;
    }

    public void setInv_webchat(String inv_webchat) {
        this.inv_webchat = inv_webchat;
    }

    public String getInv_tel() {
        return inv_tel;
    }

    public void setInv_tel(String inv_tel) {
        this.inv_tel = inv_tel;
    }

    public String getInv_remark() {
        return inv_remark;
    }

    public void setInv_remark(String inv_remark) {
        this.inv_remark = inv_remark;
    }

    public int getCont_id() {
        return cont_id;
    }

    public void setCont_id(int cont_id) {
        this.cont_id = cont_id;
    }

    public int getCont_corp_id() {
        return cont_corp_id;
    }

    public void setCont_corp_id(int cont_corp_id) {
        this.cont_corp_id = cont_corp_id;
    }

    public String getCont_name() {
        return cont_name;
    }

    public void setCont_name(String cont_name) {
        this.cont_name = cont_name;
    }

    public String getCont_psotion() {
        return cont_psotion;
    }

    public void setCont_psotion(String cont_psotion) {
        this.cont_psotion = cont_psotion;
    }

    public String getCont_edoctype() {
        return cont_edoctype;
    }

    public void setCont_edoctype(String cont_edoctype) {
        this.cont_edoctype = cont_edoctype;
    }

    public String getCont_edocnum() {
        return cont_edocnum;
    }

    public void setCont_edocnum(String cont_edocnum) {
        this.cont_edocnum = cont_edocnum;
    }

    public String getCont_ephone() {
        return cont_ephone;
    }

    public void setCont_ephone(String cont_ephone) {
        this.cont_ephone = cont_ephone;
    }

    public String getCont_efax() {
        return cont_efax;
    }

    public void setCont_efax(String cont_efax) {
        this.cont_efax = cont_efax;
    }

    public String getCont_eemail() {
        return cont_eemail;
    }

    public void setCont_eemail(String cont_eemail) {
        this.cont_eemail = cont_eemail;
    }

    public String getCont_eqq() {
        return cont_eqq;
    }

    public void setCont_eqq(String cont_eqq) {
        this.cont_eqq = cont_eqq;
    }

    public String getCont_webchat() {
        return cont_webchat;
    }

    public void setCont_webchat(String cont_webchat) {
        this.cont_webchat = cont_webchat;
    }

    public String getCont_tel() {
        return cont_tel;
    }

    public void setCont_tel(String cont_tel) {
        this.cont_tel = cont_tel;
    }

    public String getCont_bz() {
        return cont_bz;
    }

    public void setCont_bz(String cont_bz) {
        this.cont_bz = cont_bz;
    }

    public int getMai_changer_id() {
        return mai_changer_id;
    }

    public void setMai_changer_id(int mai_changer_id) {
        this.mai_changer_id = mai_changer_id;
    }

    public String getMai_changer_dept() {
        return mai_changer_dept;
    }

    public void setMai_changer_dept(String mai_changer_dept) {
        this.mai_changer_dept = mai_changer_dept;
    }

    public Date getMai_recomdt() {
        return mai_recomdt;
    }

    public void setMai_recomdt(Date mai_recomdt) {
        this.mai_recomdt = mai_recomdt;
    }

    public String getMai_trusteeship() {
        return mai_trusteeship;
    }

    public void setMai_trusteeship(String mai_trusteeship) {
        this.mai_trusteeship = mai_trusteeship;
    }

    public String getMai_listst() {
        return mai_listst;
    }

    public void setMai_listst(String mai_listst) {
        this.mai_listst = mai_listst;
    }

    public String getMai_eclass() {
        return mai_eclass;
    }

    public void setMai_eclass(String mai_eclass) {
        this.mai_eclass = mai_eclass;
    }

    public String getMai_maintain() {
        return mai_maintain;
    }

    public void setMai_maintain(String mai_maintain) {
        this.mai_maintain = mai_maintain;
    }

    public String getMai_reserve() {
        return mai_reserve;
    }

    public void setMai_reserve(String mai_reserve) {
        this.mai_reserve = mai_reserve;
    }

    public String getMai_emaint() {
        return mai_emaint;
    }

    public void setMai_emaint(String mai_emaint) {
        this.mai_emaint = mai_emaint;
    }

    public String getMai_dept() {
        return mai_dept;
    }

    public void setMai_dept(String mai_dept) {
        this.mai_dept = mai_dept;
    }

    public String getMai_post() {
        return mai_post;
    }

    public void setMai_post(String mai_post) {
        this.mai_post = mai_post;
    }

    public String getMai_tel() {
        return mai_tel;
    }

    public void setMai_tel(String mai_tel) {
        this.mai_tel = mai_tel;
    }

    public String getMai_phone() {
        return mai_phone;
    }

    public void setMai_phone(String mai_phone) {
        this.mai_phone = mai_phone;
    }

    public String getMai_fax() {
        return mai_fax;
    }

    public void setMai_fax(String mai_fax) {
        this.mai_fax = mai_fax;
    }

    public String getMai_email() {
        return mai_email;
    }

    public void setMai_email(String mai_email) {
        this.mai_email = mai_email;
    }

    public String getMai_qq() {
        return mai_qq;
    }

    public void setMai_qq(String mai_qq) {
        this.mai_qq = mai_qq;
    }

    public String getMai_webchat() {
        return mai_webchat;
    }

    public void setMai_webchat(String mai_webchat) {
        this.mai_webchat = mai_webchat;
    }

    public String getMai_bz() {
        return mai_bz;
    }

    public void setMai_bz(String mai_bz) {
        this.mai_bz = mai_bz;
    }

    public int getFinid() {
        return finid;
    }

    public void setFinid(int finid) {
        this.finid = finid;
    }

    public int getFin_corp_id() {
        return fin_corp_id;
    }

    public void setFin_corp_id(int fin_corp_id) {
        this.fin_corp_id = fin_corp_id;
    }

    public Double getSt_money_fund() {
        return st_money_fund;
    }

    public void setSt_money_fund(Double st_money_fund) {
        this.st_money_fund = st_money_fund;
    }

    public Double getEnd_money_fund() {
        return end_money_fund;
    }

    public void setEnd_money_fund(Double end_money_fund) {
        this.end_money_fund = end_money_fund;
    }

    public Double getSt_jyxjr_assets() {
        return st_jyxjr_assets;
    }

    public void setSt_jyxjr_assets(Double st_jyxjr_assets) {
        this.st_jyxjr_assets = st_jyxjr_assets;
    }

    public Double getEnd_jyxjr_assets() {
        return end_jyxjr_assets;
    }

    public void setEnd_jyxjr_assets(Double end_jyxjr_assets) {
        this.end_jyxjr_assets = end_jyxjr_assets;
    }

    public Double getSt_ys_bill() {
        return st_ys_bill;
    }

    public void setSt_ys_bill(Double st_ys_bill) {
        this.st_ys_bill = st_ys_bill;
    }

    public Double getEnd_ys_bill() {
        return end_ys_bill;
    }

    public void setEnd_ys_bill(Double end_ys_bill) {
        this.end_ys_bill = end_ys_bill;
    }

    public Double getSt_ys_account() {
        return st_ys_account;
    }

    public void setSt_ys_account(Double st_ys_account) {
        this.st_ys_account = st_ys_account;
    }

    public Double getEnd_ys_account() {
        return end_ys_account;
    }

    public void setEnd_ys_account(Double end_ys_account) {
        this.end_ys_account = end_ys_account;
    }

    public Double getSt_yf_money() {
        return st_yf_money;
    }

    public void setSt_yf_money(Double st_yf_money) {
        this.st_yf_money = st_yf_money;
    }

    public Double getEnd_yf_money() {
        return end_yf_money;
    }

    public void setEnd_yf_money(Double end_yf_money) {
        this.end_yf_money = end_yf_money;
    }

    public Double getSt_ys_interest() {
        return st_ys_interest;
    }

    public void setSt_ys_interest(Double st_ys_interest) {
        this.st_ys_interest = st_ys_interest;
    }

    public Double getEnd_ys_interest() {
        return end_ys_interest;
    }

    public void setEnd_ys_interest(Double end_ys_interest) {
        this.end_ys_interest = end_ys_interest;
    }

    public Double getSt_ys_dividends() {
        return st_ys_dividends;
    }

    public void setSt_ys_dividends(Double st_ys_dividends) {
        this.st_ys_dividends = st_ys_dividends;
    }

    public Double getEnd_ys_dividends() {
        return end_ys_dividends;
    }

    public void setEnd_ys_dividends(Double end_ys_dividends) {
        this.end_ys_dividends = end_ys_dividends;
    }

    public Double getSt_other_ys_money() {
        return st_other_ys_money;
    }

    public void setSt_other_ys_money(Double st_other_ys_money) {
        this.st_other_ys_money = st_other_ys_money;
    }

    public Double getEnd_other_ys_money() {
        return end_other_ys_money;
    }

    public void setEnd_other_ys_money(Double end_other_ys_money) {
        this.end_other_ys_money = end_other_ys_money;
    }

    public Double getSt_inventory() {
        return st_inventory;
    }

    public void setSt_inventory(Double st_inventory) {
        this.st_inventory = st_inventory;
    }

    public Double getEnd_inventory() {
        return end_inventory;
    }

    public void setEnd_inventory(Double end_inventory) {
        this.end_inventory = end_inventory;
    }

    public Double getSt_ynndq_no_assets() {
        return st_ynndq_no_assets;
    }

    public void setSt_ynndq_no_assets(Double st_ynndq_no_assets) {
        this.st_ynndq_no_assets = st_ynndq_no_assets;
    }

    public Double getEnd_ynndq_no_assets() {
        return end_ynndq_no_assets;
    }

    public void setEnd_ynndq_no_assets(Double end_ynndq_no_assets) {
        this.end_ynndq_no_assets = end_ynndq_no_assets;
    }

    public Double getSt_other_assets() {
        return st_other_assets;
    }

    public void setSt_other_assets(Double st_other_assets) {
        this.st_other_assets = st_other_assets;
    }

    public Double getEnd_other_assets() {
        return end_other_assets;
    }

    public void setEnd_other_assets(Double end_other_assets) {
        this.end_other_assets = end_other_assets;
    }

    public Double getSt_hj_assets() {
        return st_hj_assets;
    }

    public void setSt_hj_assets(Double st_hj_assets) {
        this.st_hj_assets = st_hj_assets;
    }

    public Double getEnd_hj_assets() {
        return end_hj_assets;
    }

    public void setEnd_hj_assets(Double end_hj_assets) {
        this.end_hj_assets = end_hj_assets;
    }

    public Double getSt_kgcs_assets() {
        return st_kgcs_assets;
    }

    public void setSt_kgcs_assets(Double st_kgcs_assets) {
        this.st_kgcs_assets = st_kgcs_assets;
    }

    public Double getEnd_kgcs_assets() {
        return end_kgcs_assets;
    }

    public void setEnd_kgcs_assets(Double end_kgcs_assets) {
        this.end_kgcs_assets = end_kgcs_assets;
    }

    public Double getSt_cyzdq_investment() {
        return st_cyzdq_investment;
    }

    public void setSt_cyzdq_investment(Double st_cyzdq_investment) {
        this.st_cyzdq_investment = st_cyzdq_investment;
    }

    public Double getEnd_cyzdq_investment() {
        return end_cyzdq_investment;
    }

    public void setEnd_cyzdq_investment(Double end_cyzdq_investment) {
        this.end_cyzdq_investment = end_cyzdq_investment;
    }

    public Double getSt_long_ys_money() {
        return st_long_ys_money;
    }

    public void setSt_long_ys_money(Double st_long_ys_money) {
        this.st_long_ys_money = st_long_ys_money;
    }

    public Double getEnd_long_ys_money() {
        return end_long_ys_money;
    }

    public void setEnd_long_ys_money(Double end_long_ys_money) {
        this.end_long_ys_money = end_long_ys_money;
    }

    public Double getSt_long_gq_investment() {
        return st_long_gq_investment;
    }

    public void setSt_long_gq_investment(Double st_long_gq_investment) {
        this.st_long_gq_investment = st_long_gq_investment;
    }

    public Double getEnd_long_gq_investment() {
        return end_long_gq_investment;
    }

    public void setEnd_long_gq_investment(Double end_long_gq_investment) {
        this.end_long_gq_investment = end_long_gq_investment;
    }

    public Double getSt_invest_house() {
        return st_invest_house;
    }

    public void setSt_invest_house(Double st_invest_house) {
        this.st_invest_house = st_invest_house;
    }

    public Double getEnd_invest_house() {
        return end_invest_house;
    }

    public void setEnd_invest_house(Double end_invest_house) {
        this.end_invest_house = end_invest_house;
    }

    public Double getSt_gd_assets() {
        return st_gd_assets;
    }

    public void setSt_gd_assets(Double st_gd_assets) {
        this.st_gd_assets = st_gd_assets;
    }

    public Double getEnd_gd_assets() {
        return end_gd_assets;
    }

    public void setEnd_gd_assets(Double end_gd_assets) {
        this.end_gd_assets = end_gd_assets;
    }

    public Double getSt_accu_deprec() {
        return st_accu_deprec;
    }

    public void setSt_accu_deprec(Double st_accu_deprec) {
        this.st_accu_deprec = st_accu_deprec;
    }

    public Double getEnd_accu_deprec() {
        return end_accu_deprec;
    }

    public void setEnd_accu_deprec(Double end_accu_deprec) {
        this.end_accu_deprec = end_accu_deprec;
    }

    public Double getSt_gd_assets_jz() {
        return st_gd_assets_jz;
    }

    public void setSt_gd_assets_jz(Double st_gd_assets_jz) {
        this.st_gd_assets_jz = st_gd_assets_jz;
    }

    public Double getEnd_gd_assets_jz() {
        return end_gd_assets_jz;
    }

    public void setEnd_gd_assets_jz(Double end_gd_assets_jz) {
        this.end_gd_assets_jz = end_gd_assets_jz;
    }

    public Double getSt_gd_assets_ready() {
        return st_gd_assets_ready;
    }

    public void setSt_gd_assets_ready(Double st_gd_assets_ready) {
        this.st_gd_assets_ready = st_gd_assets_ready;
    }

    public Double getEnd_gd_assets_ready() {
        return end_gd_assets_ready;
    }

    public void setEnd_gd_assets_ready(Double end_gd_assets_ready) {
        this.end_gd_assets_ready = end_gd_assets_ready;
    }

    public Double getSt_gd_assets_je() {
        return st_gd_assets_je;
    }

    public void setSt_gd_assets_je(Double st_gd_assets_je) {
        this.st_gd_assets_je = st_gd_assets_je;
    }

    public Double getEnd_gd_assets_je() {
        return end_gd_assets_je;
    }

    public void setEnd_gd_assets_je(Double end_gd_assets_je) {
        this.end_gd_assets_je = end_gd_assets_je;
    }

    public Double getSt_now_project() {
        return st_now_project;
    }

    public void setSt_now_project(Double st_now_project) {
        this.st_now_project = st_now_project;
    }

    public Double getEnd_now_project() {
        return end_now_project;
    }

    public void setEnd_now_project(Double end_now_project) {
        this.end_now_project = end_now_project;
    }

    public Double getSt_project_material() {
        return st_project_material;
    }

    public void setSt_project_material(Double st_project_material) {
        this.st_project_material = st_project_material;
    }

    public Double getEnd_project_material() {
        return end_project_material;
    }

    public void setEnd_project_material(Double end_project_material) {
        this.end_project_material = end_project_material;
    }

    public Double getSt_gd_assets_ql() {
        return st_gd_assets_ql;
    }

    public void setSt_gd_assets_ql(Double st_gd_assets_ql) {
        this.st_gd_assets_ql = st_gd_assets_ql;
    }

    public Double getEnd_gd_assets_ql() {
        return end_gd_assets_ql;
    }

    public void setEnd_gd_assets_ql(Double end_gd_assets_ql) {
        this.end_gd_assets_ql = end_gd_assets_ql;
    }

    public Double getSt_scx_investment() {
        return st_scx_investment;
    }

    public void setSt_scx_investment(Double st_scx_investment) {
        this.st_scx_investment = st_scx_investment;
    }

    public Double getEnd_scx_investment() {
        return end_scx_investment;
    }

    public void setEnd_scx_investment(Double end_scx_investment) {
        this.end_scx_investment = end_scx_investment;
    }

    public Double getSt_wx_assets() {
        return st_wx_assets;
    }

    public void setSt_wx_assets(Double st_wx_assets) {
        this.st_wx_assets = st_wx_assets;
    }

    public Double getEnd_wx_assets() {
        return end_wx_assets;
    }

    public void setEnd_wx_assets(Double end_wx_assets) {
        this.end_wx_assets = end_wx_assets;
    }

    public Double getSt_goodwill() {
        return st_goodwill;
    }

    public void setSt_goodwill(Double st_goodwill) {
        this.st_goodwill = st_goodwill;
    }

    public Double getEnd_goodwill() {
        return end_goodwill;
    }

    public void setEnd_goodwill(Double end_goodwill) {
        this.end_goodwill = end_goodwill;
    }

    public Double getSt_cqdt_cost() {
        return st_cqdt_cost;
    }

    public void setSt_cqdt_cost(Double st_cqdt_cost) {
        this.st_cqdt_cost = st_cqdt_cost;
    }

    public Double getEnd_cqdt_cost() {
        return end_cqdt_cost;
    }

    public void setEnd_cqdt_cost(Double end_cqdt_cost) {
        this.end_cqdt_cost = end_cqdt_cost;
    }

    public Double getSt_dysds_assets() {
        return st_dysds_assets;
    }

    public void setSt_dysds_assets(Double st_dysds_assets) {
        this.st_dysds_assets = st_dysds_assets;
    }

    public Double getEnd_dysds_assets() {
        return end_dysds_assets;
    }

    public void setEnd_dysds_assets(Double end_dysds_assets) {
        this.end_dysds_assets = end_dysds_assets;
    }

    public Double getSt_other_no_assets() {
        return st_other_no_assets;
    }

    public void setSt_other_no_assets(Double st_other_no_assets) {
        this.st_other_no_assets = st_other_no_assets;
    }

    public Double getEnd_other_no_assets() {
        return end_other_no_assets;
    }

    public void setEnd_other_no_assets(Double end_other_no_assets) {
        this.end_other_no_assets = end_other_no_assets;
    }

    public Double getSt_hj_no_asset() {
        return st_hj_no_asset;
    }

    public void setSt_hj_no_asset(Double st_hj_no_asset) {
        this.st_hj_no_asset = st_hj_no_asset;
    }

    public Double getEnd_hj_no_asset() {
        return end_hj_no_asset;
    }

    public void setEnd_hj_no_asset(Double end_hj_no_asset) {
        this.end_hj_no_asset = end_hj_no_asset;
    }

    public Double getSt_hj_total_asset() {
        return st_hj_total_asset;
    }

    public void setSt_hj_total_asset(Double st_hj_total_asset) {
        this.st_hj_total_asset = st_hj_total_asset;
    }

    public Double getEnd_hj_total_asset() {
        return end_hj_total_asset;
    }

    public void setEnd_hj_total_asset(Double end_hj_total_asset) {
        this.end_hj_total_asset = end_hj_total_asset;
    }

    public Double getSt_short_borrow() {
        return st_short_borrow;
    }

    public void setSt_short_borrow(Double st_short_borrow) {
        this.st_short_borrow = st_short_borrow;
    }

    public Double getEnd_short_borrow() {
        return end_short_borrow;
    }

    public void setEnd_short_borrow(Double end_short_borrow) {
        this.end_short_borrow = end_short_borrow;
    }

    public Double getSt_jyx_finance_fz() {
        return st_jyx_finance_fz;
    }

    public void setSt_jyx_finance_fz(Double st_jyx_finance_fz) {
        this.st_jyx_finance_fz = st_jyx_finance_fz;
    }

    public Double getEnd_jyx_finance_fz() {
        return end_jyx_finance_fz;
    }

    public void setEnd_jyx_finance_fz(Double end_jyx_finance_fz) {
        this.end_jyx_finance_fz = end_jyx_finance_fz;
    }

    public Double getSt_yf_bill() {
        return st_yf_bill;
    }

    public void setSt_yf_bill(Double st_yf_bill) {
        this.st_yf_bill = st_yf_bill;
    }

    public Double getEnd_yf_bill() {
        return end_yf_bill;
    }

    public void setEnd_yf_bill(Double end_yf_bill) {
        this.end_yf_bill = end_yf_bill;
    }

    public Double getSt_yf_account() {
        return st_yf_account;
    }

    public void setSt_yf_account(Double st_yf_account) {
        this.st_yf_account = st_yf_account;
    }

    public Double getEnd_yf_account() {
        return end_yf_account;
    }

    public void setEnd_yf_account(Double end_yf_account) {
        this.end_yf_account = end_yf_account;
    }

    public Double getSt_ys_money() {
        return st_ys_money;
    }

    public void setSt_ys_money(Double st_ys_money) {
        this.st_ys_money = st_ys_money;
    }

    public Double getEnd_ys_money() {
        return end_ys_money;
    }

    public void setEnd_ys_money(Double end_ys_money) {
        this.end_ys_money = end_ys_money;
    }

    public Double getSt_yf_staff_pay() {
        return st_yf_staff_pay;
    }

    public void setSt_yf_staff_pay(Double st_yf_staff_pay) {
        this.st_yf_staff_pay = st_yf_staff_pay;
    }

    public Double getEnd_yf_staff_pay() {
        return end_yf_staff_pay;
    }

    public void setEnd_yf_staff_pay(Double end_yf_staff_pay) {
        this.end_yf_staff_pay = end_yf_staff_pay;
    }

    public Double getSt_yj_tax() {
        return st_yj_tax;
    }

    public void setSt_yj_tax(Double st_yj_tax) {
        this.st_yj_tax = st_yj_tax;
    }

    public Double getEnd_yj_tax() {
        return end_yj_tax;
    }

    public void setEnd_yj_tax(Double end_yj_tax) {
        this.end_yj_tax = end_yj_tax;
    }

    public Double getSt_yf_interest() {
        return st_yf_interest;
    }

    public void setSt_yf_interest(Double st_yf_interest) {
        this.st_yf_interest = st_yf_interest;
    }

    public Double getEnd_yf_interest() {
        return end_yf_interest;
    }

    public void setEnd_yf_interest(Double end_yf_interest) {
        this.end_yf_interest = end_yf_interest;
    }

    public Double getSt_yf_dividends() {
        return st_yf_dividends;
    }

    public void setSt_yf_dividends(Double st_yf_dividends) {
        this.st_yf_dividends = st_yf_dividends;
    }

    public Double getEnd_yf_dividends() {
        return end_yf_dividends;
    }

    public void setEnd_yf_dividends(Double end_yf_dividends) {
        this.end_yf_dividends = end_yf_dividends;
    }

    public Double getSt_other_yf_money() {
        return st_other_yf_money;
    }

    public void setSt_other_yf_money(Double st_other_yf_money) {
        this.st_other_yf_money = st_other_yf_money;
    }

    public Double getEnd_other_yf_money() {
        return end_other_yf_money;
    }

    public void setEnd_other_yf_money(Double end_other_yf_money) {
        this.end_other_yf_money = end_other_yf_money;
    }

    public Double getSt_ynndq_no_fz() {
        return st_ynndq_no_fz;
    }

    public void setSt_ynndq_no_fz(Double st_ynndq_no_fz) {
        this.st_ynndq_no_fz = st_ynndq_no_fz;
    }

    public Double getEnd_ynndq_no_fz() {
        return end_ynndq_no_fz;
    }

    public void setEnd_ynndq_no_fz(Double end_ynndq_no_fz) {
        this.end_ynndq_no_fz = end_ynndq_no_fz;
    }

    public Double getSt_other_fz() {
        return st_other_fz;
    }

    public void setSt_other_fz(Double st_other_fz) {
        this.st_other_fz = st_other_fz;
    }

    public Double getEnd_other_fz() {
        return end_other_fz;
    }

    public void setEnd_other_fz(Double end_other_fz) {
        this.end_other_fz = end_other_fz;
    }

    public Double getSt_hj_fz() {
        return st_hj_fz;
    }

    public void setSt_hj_fz(Double st_hj_fz) {
        this.st_hj_fz = st_hj_fz;
    }

    public Double getEnd_hj_fz() {
        return end_hj_fz;
    }

    public void setEnd_hj_fz(Double end_hj_fz) {
        this.end_hj_fz = end_hj_fz;
    }

    public Double getSt_long_borrow() {
        return st_long_borrow;
    }

    public void setSt_long_borrow(Double st_long_borrow) {
        this.st_long_borrow = st_long_borrow;
    }

    public Double getEnd_long_borrow() {
        return end_long_borrow;
    }

    public void setEnd_long_borrow(Double end_long_borrow) {
        this.end_long_borrow = end_long_borrow;
    }

    public Double getSt_yf_bond() {
        return st_yf_bond;
    }

    public void setSt_yf_bond(Double st_yf_bond) {
        this.st_yf_bond = st_yf_bond;
    }

    public Double getEnd_yf_bond() {
        return end_yf_bond;
    }

    public void setEnd_yf_bond(Double end_yf_bond) {
        this.end_yf_bond = end_yf_bond;
    }

    public Double getSt_long_yf_money() {
        return st_long_yf_money;
    }

    public void setSt_long_yf_money(Double st_long_yf_money) {
        this.st_long_yf_money = st_long_yf_money;
    }

    public Double getEnd_long_yf_money() {
        return end_long_yf_money;
    }

    public void setEnd_long_yf_money(Double end_long_yf_money) {
        this.end_long_yf_money = end_long_yf_money;
    }

    public Double getSt_zx_yf_money() {
        return st_zx_yf_money;
    }

    public void setSt_zx_yf_money(Double st_zx_yf_money) {
        this.st_zx_yf_money = st_zx_yf_money;
    }

    public Double getEnd_zx_yf_money() {
        return end_zx_yf_money;
    }

    public void setEnd_zx_yf_money(Double end_zx_yf_money) {
        this.end_zx_yf_money = end_zx_yf_money;
    }

    public Double getSt_yj_fz() {
        return st_yj_fz;
    }

    public void setSt_yj_fz(Double st_yj_fz) {
        this.st_yj_fz = st_yj_fz;
    }

    public Double getEnd_yj_fz() {
        return end_yj_fz;
    }

    public void setEnd_yj_fz(Double end_yj_fz) {
        this.end_yj_fz = end_yj_fz;
    }

    public Double getSt_dysds_fz() {
        return st_dysds_fz;
    }

    public void setSt_dysds_fz(Double st_dysds_fz) {
        this.st_dysds_fz = st_dysds_fz;
    }

    public Double getEnd_dysds_fz() {
        return end_dysds_fz;
    }

    public void setEnd_dysds_fz(Double end_dysds_fz) {
        this.end_dysds_fz = end_dysds_fz;
    }

    public Double getSt_other_no_fz() {
        return st_other_no_fz;
    }

    public void setSt_other_no_fz(Double st_other_no_fz) {
        this.st_other_no_fz = st_other_no_fz;
    }

    public Double getEnd_other_no_fz() {
        return end_other_no_fz;
    }

    public void setEnd_other_no_fz(Double end_other_no_fz) {
        this.end_other_no_fz = end_other_no_fz;
    }

    public Double getSt_hj_no_fz() {
        return st_hj_no_fz;
    }

    public void setSt_hj_no_fz(Double st_hj_no_fz) {
        this.st_hj_no_fz = st_hj_no_fz;
    }

    public Double getEnd_hj_no_fz() {
        return end_hj_no_fz;
    }

    public void setEnd_hj_no_fz(Double end_hj_no_fz) {
        this.end_hj_no_fz = end_hj_no_fz;
    }

    public Double getSt_hj_total_fz() {
        return st_hj_total_fz;
    }

    public void setSt_hj_total_fz(Double st_hj_total_fz) {
        this.st_hj_total_fz = st_hj_total_fz;
    }

    public Double getEnd_hj_total_fz() {
        return end_hj_total_fz;
    }

    public void setEnd_hj_total_fz(Double end_hj_total_fz) {
        this.end_hj_total_fz = end_hj_total_fz;
    }

    public Double getSt_paid_assets() {
        return st_paid_assets;
    }

    public void setSt_paid_assets(Double st_paid_assets) {
        this.st_paid_assets = st_paid_assets;
    }

    public Double getEnd_paid_assets() {
        return end_paid_assets;
    }

    public void setEnd_paid_assets(Double end_paid_assets) {
        this.end_paid_assets = end_paid_assets;
    }

    public Double getSt_zb_reserve() {
        return st_zb_reserve;
    }

    public void setSt_zb_reserve(Double st_zb_reserve) {
        this.st_zb_reserve = st_zb_reserve;
    }

    public Double getEnd_zb_reserve() {
        return end_zb_reserve;
    }

    public void setEnd_zb_reserve(Double end_zb_reserve) {
        this.end_zb_reserve = end_zb_reserve;
    }

    public Double getSt_kc_stock() {
        return st_kc_stock;
    }

    public void setSt_kc_stock(Double st_kc_stock) {
        this.st_kc_stock = st_kc_stock;
    }

    public Double getEnd_kc_stock() {
        return end_kc_stock;
    }

    public void setEnd_kc_stock(Double end_kc_stock) {
        this.end_kc_stock = end_kc_stock;
    }

    public Double getSt_zx_reserve() {
        return st_zx_reserve;
    }

    public void setSt_zx_reserve(Double st_zx_reserve) {
        this.st_zx_reserve = st_zx_reserve;
    }

    public Double getEnd_zx_reserve() {
        return end_zx_reserve;
    }

    public void setEnd_zx_reserve(Double end_zx_reserve) {
        this.end_zx_reserve = end_zx_reserve;
    }

    public Double getSt_yy_reserve() {
        return st_yy_reserve;
    }

    public void setSt_yy_reserve(Double st_yy_reserve) {
        this.st_yy_reserve = st_yy_reserve;
    }

    public Double getEnd_yy_reserve() {
        return end_yy_reserve;
    }

    public void setEnd_yy_reserve(Double end_yy_reserve) {
        this.end_yy_reserve = end_yy_reserve;
    }

    public Double getSt_wfp_profit() {
        return st_wfp_profit;
    }

    public void setSt_wfp_profit(Double st_wfp_profit) {
        this.st_wfp_profit = st_wfp_profit;
    }

    public Double getEnd_wfp_profit() {
        return end_wfp_profit;
    }

    public void setEnd_wfp_profit(Double end_wfp_profit) {
        this.end_wfp_profit = end_wfp_profit;
    }

    public Double getSt_hj_owner_right() {
        return st_hj_owner_right;
    }

    public void setSt_hj_owner_right(Double st_hj_owner_right) {
        this.st_hj_owner_right = st_hj_owner_right;
    }

    public Double getEnd_hj_owner_right() {
        return end_hj_owner_right;
    }

    public void setEnd_hj_owner_right(Double end_hj_owner_right) {
        this.end_hj_owner_right = end_hj_owner_right;
    }

    public Double getSt_hj_fz_owner_right() {
        return st_hj_fz_owner_right;
    }

    public void setSt_hj_fz_owner_right(Double st_hj_fz_owner_right) {
        this.st_hj_fz_owner_right = st_hj_fz_owner_right;
    }

    public Double getEnd_hj_fz_owner_right() {
        return end_hj_fz_owner_right;
    }

    public void setEnd_hj_fz_owner_right(Double end_hj_fz_owner_right) {
        this.end_hj_fz_owner_right = end_hj_fz_owner_right;
    }
}
