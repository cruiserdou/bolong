package com.springapp.mvc.corp.pojo;


import java.sql.Date;

/**
 * Created by xwq on 15/11/6.
 */
public class CorpReTrain {
    private  int   retra_id;    //培训需求ID
    private  int   retra_corp_id;   //企业ID
    private String  retra_mode; //培训方式
    private String  retra_content;  //培训内容
    private Double retra_acc_cost;  //可接受成本
    private String retra_dt;    //有效时间
    private String  retra_requests; //详细要求

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
        Date d_retra_dt = null;
        if (this.retra_dt != null && this.retra_dt.length() > 2)
            d_retra_dt = Date.valueOf(this.retra_dt);
        return d_retra_dt;
    }

    public void setRetra_dt(String retra_dt) {
        this.retra_dt = retra_dt;
    }

    public String getRetra_requests() {
        return retra_requests;
    }

    public void setRetra_requests(String retra_requests) {
        this.retra_requests = retra_requests;
    }
}
