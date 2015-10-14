package com.springapp.mvc.workmgr.maintainplan.pojo;

import java.sql.Timestamp;

/**
 * Created by dou on 15-9-3.
 */
public class Maintainplan {
    private int mp_id;
    private int mp_corp_id;
    private String mp_listcode;
    private String mp_province;
    private String mp_city;
    private String mp_county;
    private Timestamp mp_last_date;
    private String mp_content;
    private String mp_result;
    private String mp_hisdesc;
    private String mp_remark;
    private Timestamp inputdt;
    private int inputid;
    private String  corp_name;

    public String getCorp_name() {
        return corp_name;
    }

    public void setCorp_name(String corp_name) {
        this.corp_name = corp_name;
    }

    public int getMp_id() {
        return mp_id;
    }

    public void setMp_id(int mp_id) {
        this.mp_id = mp_id;
    }

    public int getMp_corp_id() {
        return mp_corp_id;
    }

    public void setMp_corp_id(int mp_corp_id) {
        this.mp_corp_id = mp_corp_id;
    }

    public String getMp_listcode() {
        return mp_listcode;
    }

    public void setMp_listcode(String mp_listcode) {
        this.mp_listcode = mp_listcode;
    }

    public String getMp_province() {
        return mp_province;
    }

    public void setMp_province(String mp_province) {
        this.mp_province = mp_province;
    }

    public String getMp_city() {
        return mp_city;
    }

    public void setMp_city(String mp_city) {
        this.mp_city = mp_city;
    }

    public String getMp_county() {
        return mp_county;
    }

    public void setMp_county(String mp_county) {
        this.mp_county = mp_county;
    }

    public Timestamp getMp_last_date() {
        return mp_last_date;
    }

    public void setMp_last_date(Timestamp mp_last_date) {
        this.mp_last_date = mp_last_date;
    }

    public String getMp_content() {
        return mp_content;
    }

    public void setMp_content(String mp_content) {
        this.mp_content = mp_content;
    }

    public String getMp_result() {
        return mp_result;
    }

    public void setMp_result(String mp_result) {
        this.mp_result = mp_result;
    }

    public String getMp_hisdesc() {
        return mp_hisdesc;
    }

    public void setMp_hisdesc(String mp_hisdesc) {
        this.mp_hisdesc = mp_hisdesc;
    }

    public String getMp_remark() {
        return mp_remark;
    }

    public void setMp_remark(String mp_remark) {
        this.mp_remark = mp_remark;
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
