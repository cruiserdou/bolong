package com.springapp.mvc.workmgr.innerinfo.pojo;

import java.sql.Date;

/**
 * Created by dou on 15-9-3.
 */
public class InnerInfo {
    private int id;
    private int userid;
    private int ruer_id;
    private Date deadline;
    private String content;
    private String stat;
    private String remark;
    private Date rtdate;
    private String type;
    private String user_name;

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public int getRuer_id() {
        return ruer_id;
    }

    public void setRuer_id(int ruer_id) {
        this.ruer_id = ruer_id;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getStat() {
        return stat;
    }

    public void setStat(String stat) {
        this.stat = stat;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Date getRtdate() {
        return rtdate;
    }

    public void setRtdate(Date rtdate) {
        this.rtdate = rtdate;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
