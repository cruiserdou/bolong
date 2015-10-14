package com.springapp.mvc.workmgr.refiropf.pojo;

import java.sql.Date;
import java.sql.Timestamp;

/**
 * Created by dou on 15-9-3.
 */
public class Refiropf {
    private int rop_id;
    private int rop_mos_id;
    private String rop_items;
    private String rop_desc;
    private Date rop_endt;
    private String rop_crb;
    private String rop_stat;
    private String rop_remark;
    private Timestamp inputdt;
    private int inputid;
    private String  corp_name;

    public String getCorp_name() {
        return corp_name;
    }

    public void setCorp_name(String corp_name) {
        this.corp_name = corp_name;
    }

    public int getRop_id() {
        return rop_id;
    }

    public void setRop_id(int rop_id) {
        this.rop_id = rop_id;
    }

    public int getRop_mos_id() {
        return rop_mos_id;
    }

    public void setRop_mos_id(int rop_mos_id) {
        this.rop_mos_id = rop_mos_id;
    }

    public String getRop_items() {
        return rop_items;
    }

    public void setRop_items(String rop_items) {
        this.rop_items = rop_items;
    }

    public String getRop_desc() {
        return rop_desc;
    }

    public void setRop_desc(String rop_desc) {
        this.rop_desc = rop_desc;
    }

    public Date getRop_endt() {
        return rop_endt;
    }

    public void setRop_endt(Date rop_endt) {
        this.rop_endt = rop_endt;
    }

    public String getRop_crb() {
        return rop_crb;
    }

    public void setRop_crb(String rop_crb) {
        this.rop_crb = rop_crb;
    }

    public String getRop_stat() {
        return rop_stat;
    }

    public void setRop_stat(String rop_stat) {
        this.rop_stat = rop_stat;
    }

    public String getRop_remark() {
        return rop_remark;
    }

    public void setRop_remark(String rop_remark) {
        this.rop_remark = rop_remark;
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
