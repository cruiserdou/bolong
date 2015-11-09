package com.springapp.mvc.workmgr.maintaininfo.pojo;

import java.sql.Date;
import java.sql.Timestamp;

/**
 * Created by dou on 15-9-3.
 */
public class Maintaininfo {
    private int mi_id;
    private int mi_mp_id;
    private int mi_corp_id;
    private String mi_listcode;
    private String mi_province;
    private String mi_city;
    private String mi_county;
    private Date mi_mt_date;
    private String mi_cust_type;
    private Date mi_next_date;
    private String mi_next_plan;
    private String mi_remark;
    private Timestamp inputdt;
    private int inputid;


    public int getMi_id() {
        return mi_id;
    }

    public void setMi_id(int mi_id) {
        this.mi_id = mi_id;
    }



    public int getMi_mp_id() {
        return mi_mp_id;
    }

    public void setMi_mp_id(int mi_mp_id) {
        this.mi_mp_id = mi_mp_id;
    }

    public int getMi_corp_id() {
        return mi_corp_id;
    }

    public void setMi_corp_id(int mi_corp_id) {
        this.mi_corp_id = mi_corp_id;
    }

    public String getMi_listcode() {
        return mi_listcode;
    }

    public void setMi_listcode(String mi_listcode) {
        this.mi_listcode = mi_listcode;
    }

    public String getMi_province() {
        return mi_province;
    }

    public void setMi_province(String mi_province) {
        this.mi_province = mi_province;
    }

    public String getMi_city() {
        return mi_city;
    }

    public void setMi_city(String mi_city) {
        this.mi_city = mi_city;
    }

    public String getMi_county() {
        return mi_county;
    }

    public void setMi_county(String mi_county) {
        this.mi_county = mi_county;
    }

    public Date getMi_mt_date() {
        return mi_mt_date;
    }

    public void setMi_mt_date(Date mi_mt_date) {
        this.mi_mt_date = mi_mt_date;
    }

    public String getMi_cust_type() {
        return mi_cust_type;
    }

    public void setMi_cust_type(String mi_cust_type) {
        this.mi_cust_type = mi_cust_type;
    }

    public Date getMi_next_date() {
        return mi_next_date;
    }

    public void setMi_next_date(Date mi_next_date) {
        this.mi_next_date = mi_next_date;
    }

    public String getMi_next_plan() {
        return mi_next_plan;
    }

    public void setMi_next_plan(String mi_next_plan) {
        this.mi_next_plan = mi_next_plan;
    }

    public String getMi_remark() {
        return mi_remark;
    }

    public void setMi_remark(String mi_remark) {
        this.mi_remark = mi_remark;
    }

    public Timestamp getInputdt() {
        return inputdt;
    }

    public void setInputdt(Timestamp inputdt) {
        this.inputdt = inputdt;
    }

    public int getInputid() {
        return inputid;
    }

    public void setInputid(int inputid) {
        this.inputid = inputid;
    }


}
