package com.springapp.mvc.corp.pojo;

import java.sql.Date;

/**
 * Created by xwq on 15/11/6.
 */
public class CorpReFinancing {
    private  int   refi_id; //融资需求ID
    private  int   refi_corp_id;    //企业ID
    private String  refi_amounts;   //融资金额
    private String  refi_use;   //融资用途
    private String  refi_financ;    //股份融资/债券融资
    private String  refi_security;  //偿付保障
    private String  refi_acc_cost;  //可接受成本
    private Date refi_deadline;    //融资期限
    private String  refi_desc;  //融资用途详细说明

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
}
