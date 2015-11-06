package com.springapp.mvc.corp.pojo;

/**
 * Created by xwq on 15/11/6.
 */
public class CorpContact {
    private int   cont_id;  //法人编号
    private int   cont_corp_id; //企业编号
    private String   cont_name; //法人姓名
    private String   cont_psotion;  //法人职务
    private String   cont_edoctype; //法人证件类型
    private String   cont_edocnum;  //法人证件号码
    private String   cont_ephone;   //法人手机号码
    private String   cont_efax; //法人传真号码
    private String   cont_eemail;   //法人邮箱
    private String   cont_eqq;  //法人QQ
    private String   cont_webchat;  //法人个人微信号
    private String   cont_tel;  //联系人固话
    private String   cont_bz;   //备注

    public int getCont_id() {
        return cont_id;
    }

    public void setCont_id(int cont_id) {
        this.cont_id = cont_id;
    }

    public int getCont_corp_id() {
        return cont_corp_id;
    }

    public void setCont_corp_id(int cont_corp_id) {
        this.cont_corp_id = cont_corp_id;
    }

    public String getCont_name() {
        return cont_name;
    }

    public void setCont_name(String cont_name) {
        this.cont_name = cont_name;
    }

    public String getCont_psotion() {
        return cont_psotion;
    }

    public void setCont_psotion(String cont_psotion) {
        this.cont_psotion = cont_psotion;
    }

    public String getCont_edoctype() {
        return cont_edoctype;
    }

    public void setCont_edoctype(String cont_edoctype) {
        this.cont_edoctype = cont_edoctype;
    }

    public String getCont_edocnum() {
        return cont_edocnum;
    }

    public void setCont_edocnum(String cont_edocnum) {
        this.cont_edocnum = cont_edocnum;
    }

    public String getCont_ephone() {
        return cont_ephone;
    }

    public void setCont_ephone(String cont_ephone) {
        this.cont_ephone = cont_ephone;
    }

    public String getCont_efax() {
        return cont_efax;
    }

    public void setCont_efax(String cont_efax) {
        this.cont_efax = cont_efax;
    }

    public String getCont_eemail() {
        return cont_eemail;
    }

    public void setCont_eemail(String cont_eemail) {
        this.cont_eemail = cont_eemail;
    }

    public String getCont_eqq() {
        return cont_eqq;
    }

    public void setCont_eqq(String cont_eqq) {
        this.cont_eqq = cont_eqq;
    }

    public String getCont_webchat() {
        return cont_webchat;
    }

    public void setCont_webchat(String cont_webchat) {
        this.cont_webchat = cont_webchat;
    }

    public String getCont_tel() {
        return cont_tel;
    }

    public void setCont_tel(String cont_tel) {
        this.cont_tel = cont_tel;
    }

    public String getCont_bz() {
        return cont_bz;
    }

    public void setCont_bz(String cont_bz) {
        this.cont_bz = cont_bz;
    }
}
