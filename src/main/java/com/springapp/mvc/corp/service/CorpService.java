package com.springapp.mvc.corp.service;

import com.springapp.mvc.corp.pojo.*;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface CorpService {
    List<Corp> list(String name, String nos, String buslicno, String listcode, String start, String limit, String search_val);
    void delShareHolder(int corp_id);
    int getCorpCount(String name, String nos, String buslicno, String listcode, String start, String limit);

    List<Corp> listGov(String name, String nos, String buslicno, String listcode, String search_val);
    List<Corp> listInv(String name, String nos, String buslicno, String listcode, String search_val);
    List<Corp> listRefi(String name, String nos, String buslicno, String listcode);
    List<Corp> listRehr(String name, String nos, String buslicno, String listcode);
    List<Corp> listRetr(String name, String nos, String buslicno, String listcode);
    List<Corp> listServer(String name, String nos, String buslicno, String listcode);


    List<CorpShareHolder> getShareHolderByCorpID(int corp_id);

    void insertCorp(CorpBase corpBase, CorpContact corpContact, CorpFinance corpFinance, CorpGov corpGov,
                    CorpInvestor corpInvestor, CorpReFinancing corpReFinancing,CorpReHr corpReHr,
                    CorpReTrain corpReTrain, CorpServicePojo corpServicePojo);

    public void delete(Integer id);
}
