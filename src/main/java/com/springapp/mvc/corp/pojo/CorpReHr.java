package com.springapp.mvc.corp.pojo;

/**
 * Created by xwq on 15/11/6.
 */
public class CorpReHr {
    private  int   rehr_id; //人力资源需求ID
    private  int   rehr_corp_id;    //企业ID
    private String  rehr_post;  //需求职位
    private String  rehr_num;   //职位人数
    private Double   rehr_salary;   //职位薪金
    private String  rehr_sex_req;   //性别要求
    private String  rehr_age_req;   //年龄要求
    private String  rehr_requests;  //经验要求

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
}
