package com.springapp.mvc.corp.service.impl;

import com.springapp.mvc.corp.dao.CorpDao;
import com.springapp.mvc.corp.pojo.*;
import com.springapp.mvc.corp.service.CorpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class CorpServiceImpl implements CorpService {
    @Autowired
    private CorpDao corpDao;

    @Override
    public List<Corp> list(String name, String nos, String buslicno, String listcode, String start, String limit, String search_val){
        return corpDao.list(name, nos, buslicno, listcode, start, limit, search_val);
    }

    public int getCorpCount(String name, String nos, String buslicno, String listcode, String start, String limit){
        return corpDao.getCorpCount(name, nos, buslicno, listcode, start, limit);
    }


    public List<Corp> listGov(String name, String nos, String buslicno, String listcode, String search_val){
        return corpDao.listGov(name, nos, buslicno, listcode, search_val);
    }

    public List<Corp> listInv(String name, String nos, String buslicno, String listcode, String search_val){
        return corpDao.listInv(name, nos, buslicno, listcode, search_val);
    }

    public List<Corp> listRefi(String name, String nos, String buslicno, String listcode){
        return corpDao.listRefi(name, nos, buslicno, listcode);
    }

    public List<Corp> listRehr(String name, String nos, String buslicno, String listcode){
        return corpDao.listRehr(name, nos, buslicno, listcode);
    }

    public List<Corp> listRetr(String name, String nos, String buslicno, String listcode){
        return corpDao.listRetr(name, nos, buslicno, listcode);
    }

    public List<Corp> listServer(String name, String nos, String buslicno, String listcode){ return corpDao.listServer(name, nos, buslicno, listcode);
    }

    public void delShareHolder(int corp_id){
        corpDao.delShareHolder(corp_id);
    }
    public List<CorpShareHolder> getShareHolderByCorpID(int corp_id){
        return corpDao.getShareHoderByCorpID(corp_id);
    }

    public void delete(Integer id){
        corpDao.delete(id);
    }

    public void insertCorp(Integer inputid,Timestamp currentTime,Integer corpId,CorpBase corpBase, CorpContact corpContact, CorpFinance corpFinance,
                           CorpGov corpGov ,CorpInvestor corpInvestor, CorpReFinancing corpReFinancing
                          ,CorpReHr corpReHr, CorpReTrain corpReTrain, CorpServicePojo corpServicePojo,CorpMaintain corpMaintain ){
        corpDao.insertCorp(inputid,currentTime,corpId,corpBase,corpContact,corpFinance,corpGov ,corpInvestor,corpReFinancing
                ,corpReHr, corpReTrain,corpServicePojo,corpMaintain );
    }


    public Integer getMaxCorpId(){
        return  corpDao.getMaxCorpId();
    }

    public Timestamp getCurrentTime(){return corpDao.getCurrentTime();}

    public void updateCorp(Integer inputid,Timestamp currentTime, CorpBase corpBase, CorpContact corpContact, CorpFinance corpFinance,
                           CorpGov corpGov ,CorpInvestor corpInvestor, CorpReFinancing corpReFinancing
            ,CorpReHr corpReHr, CorpReTrain corpReTrain, CorpServicePojo corpServicePojo,CorpMaintain corpMaintain ){
        corpDao.updateCorp(inputid, currentTime, corpBase, corpContact, corpFinance, corpGov, corpInvestor, corpReFinancing
                , corpReHr, corpReTrain, corpServicePojo, corpMaintain);
    }
}

