package com.springapp.mvc.corp.pojo;

/**
 * Created by xwq on 15/11/6.
 */
public class CorpServicePojo {
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
}
