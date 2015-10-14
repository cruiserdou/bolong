package com.springapp.mvc.workmgr.refimosf.pojo;

import java.sql.Timestamp;

/**
 * Created by dou on 15-9-3.
 */
public class Refimosf {
    private int mos_id;
    private int mos_corp_id;
    private String mos_cots;
    private String mos_amounts;
    private String mos_mop;
    private String mos_rop;
    private Timestamp inputdt;
    private int inputid;
    private String  corp_name;

    public String getCorp_name() {
        return corp_name;
    }

    public void setCorp_name(String corp_name) {
        this.corp_name = corp_name;
    }

    public int getMos_id() {
        return mos_id;
    }

    public void setMos_id(int mos_id) {
        this.mos_id = mos_id;
    }

    public int getMos_corp_id() {
        return mos_corp_id;
    }

    public void setMos_corp_id(int mos_corp_id) {
        this.mos_corp_id = mos_corp_id;
    }

    public String getMos_cots() {
        return mos_cots;
    }

    public void setMos_cots(String mos_cots) {
        this.mos_cots = mos_cots;
    }

    public String getMos_amounts() {
        return mos_amounts;
    }

    public void setMos_amounts(String mos_amounts) {
        this.mos_amounts = mos_amounts;
    }

    public String getMos_mop() {
        return mos_mop;
    }

    public void setMos_mop(String mos_mop) {
        this.mos_mop = mos_mop;
    }

    public String getMos_rop() {
        return mos_rop;
    }

    public void setMos_rop(String mos_rop) {
        this.mos_rop = mos_rop;
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
