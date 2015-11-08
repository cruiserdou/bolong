package com.springapp.mvc.dict.pojo;

/**
 * Created by root on 15-11-8.
 */
public class Industry2 {
    private int id;
    private int parentid;
    private String name;
    private String indcode;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getparentid() {
        return parentid;
    }

    public void setparentid(int parentid) {
        this.parentid = parentid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getindcode() {
        return indcode;
    }

    public void setindcode(String indcode) {
        this.indcode = indcode;
    }
}
