package common.util;

/**
 * Created by Administrator on 13-12-18.
 */

public class DBInfo {
    String url;
    String user;
    String password;

    public DBInfo() {
        url = "jdbc:postgresql://localhost:5432/equity";
        user = "postgres";
        password = "postgres";
    }

    public String getUrl() {
        return url;
    }

    public String getUser() {
        return user;
    }

    public String getPassword() {
        return password;
    }
}
