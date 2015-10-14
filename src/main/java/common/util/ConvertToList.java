package common.util;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.*;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 13-11-16
 * Time: 上午10:27
 * To change this template use File | Settings | File Templates.
 */
public class ConvertToList {
    private long total;
    @SuppressWarnings({"rawtypes", "unchecked"})
    public static List convertList(ResultSet rs) throws SQLException{
        List list = new ArrayList();
        ResultSetMetaData md = rs.getMetaData();
        //Map rowData
        int columnCount = md.getColumnCount();
        while (rs.next()){
            Map rowData = new HashMap<String, Objects>();
            for (int i = 1; i <= columnCount; i++){
                rowData.put(md.getColumnName(i), rs.getObject(i));
            }
            list.add(rowData);
        }
        return list;
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }
}
