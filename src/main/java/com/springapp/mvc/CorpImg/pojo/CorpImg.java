package com.springapp.mvc.CorpImg.pojo;

/**
 * Created by dou on 15-9-3.
 */
public class CorpImg {


    private int id;
    private int img_corp_id;
    private String img_name;
    private String img_type;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getImg_corp_id() {
        return img_corp_id;
    }

    public void setImg_corp_id(int img_corp_id) {
        this.img_corp_id = img_corp_id;
    }

    public String getImg_name() {
        return img_name;
    }

    public void setImg_name(String img_name) {
        this.img_name = img_name;
    }

    public String getImg_type() {
        return img_type;
    }

    public void setImg_type(String img_type) {
        this.img_type = img_type;
    }
}
