package common.util;

import org.postgresql.util.PGobject;

import java.util.List;

/**
 * Created by xwq on 14-4-15.
 */
public class DataShop {
    boolean success;
    boolean failure;
    String name;
    String message;
    List list;
    PGobject pGobject;
    private long total;
    private String msg;

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public PGobject getpGobject() {
        return pGobject;
    }

    public void setpGobject(PGobject pGobject) {
        this.pGobject = pGobject;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public boolean isFailure() {
        return failure;
    }

    public void setFailure(boolean failure) {
        this.failure = failure;
    }

    public List getList() {
        return list;
    }

    public void setList(List list) {
        this.list = list;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
