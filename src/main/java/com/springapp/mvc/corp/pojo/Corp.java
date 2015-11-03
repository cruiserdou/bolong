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

    private int   cont_id;
    private int   cont_corp_id;
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

    private String    srv_name;
    private String    srv_type;
    private String    srv_content;
    private String    srv_levels;
    private String    srv_domain;
    private String    srv_penalty;
    private String    srv_examiner;
    private String    srv_post;
    private String    srv_descs;
    private String    srv_remark;

    private String  retra_mode;
    private String  retra_content;
    private Double retra_acc_cost;
    private Date   retra_dt;
    private String  retra_requests;

    private String  rehr_post;
    private String  rehr_num;
    private Double   rehr_salary;
    private String  rehr_sex_req;
    private String  rehr_age_req;
    private String  rehr_requests;

    private String  refi_amounts;
    private String  refi_use;
    private String  refi_financ;
    private String  refi_security;
    private String  refi_acc_cost;
    private Date  refi_deadline;
    private String  refi_desc;

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

    private String   cont_name;
    private String   cont_psotion;
    private String   cont_edoctype;
    private String   cont_edocnum;
    private String   cont_ephone;
    private String   cont_efax;
    private String   cont_eemail;
    private String   cont_eqq;
    private String   cont_webchat;
    private String   cont_tel;
    private String   cont_bz;

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
}
