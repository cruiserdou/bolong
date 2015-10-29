package com.springapp.mvc.corp.change.pojo;

import java.sql.Timestamp;

/**
 * Created by dou on 15-9-3.
 */
public class CorpRefiChange {
    private int id;
    private int refi_corp_id;
    private String changer_id;
    private Timestamp changer_dt;
    private String changer_ip;
    private String field;
    private String c_before;
    private String c_after;
    private String field_name;
    private String refi_id;

    public String getRefi_id() {
        return refi_id;
    }

    public void setRefi_id(String refi_id) {
        this.refi_id = refi_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRefi_corp_id() {
        return refi_corp_id;
    }

    public void setRefi_corp_id(int refi_corp_id) {
        this.refi_corp_id = refi_corp_id;
    }

    public String getChanger_id() {
        return changer_id;
    }

    public void setChanger_id(String changer_id) {
        this.changer_id = changer_id;
    }

    public Timestamp getChanger_dt() {
        return changer_dt;
    }

    public void setChanger_dt(Timestamp changer_dt) {
        this.changer_dt = changer_dt;
    }

    public String getChanger_ip() {
        return changer_ip;
    }

    public void setChanger_ip(String changer_ip) {
        this.changer_ip = changer_ip;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getC_before() {
        return c_before;
    }

    public void setC_before(String c_before) {
        this.c_before = c_before;
    }

    public String getC_after() {
        return c_after;
    }

    public void setC_after(String c_after) {
        this.c_after = c_after;
    }

    public String getField_name() {
        return field_name;
    }

    public void setField_name(String field_name) {
        this.field_name = field_name;
    }



}
