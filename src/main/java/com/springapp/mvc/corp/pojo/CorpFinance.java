package com.springapp.mvc.corp.pojo;

import java.sql.Date;

/**
 * Created by xwq on 15/11/6.
 */
public class CorpFinance {
    private int    finid;
    private int    fin_corp_id;
    private String start_time;
    private String end_time;
    private Double  st_money_fund;
    private Double  end_money_fund;
    private Double  st_jyxjr_assets;
    private Double  end_jyxjr_assets;
    private Double  st_ys_bill;
    private Double  end_ys_bill;
    private Double  st_ys_account;
    private Double  end_ys_account;
    private Double  st_yf_money;
    private Double  end_yf_money;
    private Double  st_ys_interest;
    private Double  end_ys_interest;
    private Double  st_ys_dividends;
    private Double  end_ys_dividends;
    private Double  st_other_ys_money;
    private Double  end_other_ys_money;
    private Double  st_inventory;
    private Double  end_inventory;
    private Double  st_ynndq_no_assets;
    private Double  end_ynndq_no_assets;
    private Double  st_other_assets;
    private Double  end_other_assets;
    private Double  st_hj_assets;
    private Double  end_hj_assets;
    private Double  st_kgcs_assets;
    private Double  end_kgcs_assets;
    private Double  st_cyzdq_investment;
    private Double  end_cyzdq_investment;
    private Double  st_long_ys_money;
    private Double  end_long_ys_money;
    private Double  st_long_gq_investment;
    private Double  end_long_gq_investment;
    private Double  st_invest_house;
    private Double  end_invest_house;
    private Double  st_gd_assets;
    private Double  end_gd_assets;
    private Double  st_accu_deprec;
    private Double  end_accu_deprec;
    private Double  st_gd_assets_jz;
    private Double  end_gd_assets_jz;
    private Double  st_gd_assets_ready;
    private Double  end_gd_assets_ready;
    private Double  st_gd_assets_je;
    private Double  end_gd_assets_je;
    private Double  st_now_project;
    private Double  end_now_project;
    private Double  st_project_material;
    private Double  end_project_material;
    private Double  st_gd_assets_ql;
    private Double  end_gd_assets_ql;
    private Double  st_scx_investment;
    private Double  end_scx_investment;
    private Double  st_wx_assets;
    private Double  end_wx_assets;
    private Double  st_goodwill;
    private Double  end_goodwill;
    private Double  st_cqdt_cost;
    private Double  end_cqdt_cost;
    private Double  st_dysds_assets;
    private Double  end_dysds_assets;
    private Double  st_other_no_assets;
    private Double  end_other_no_assets;
    private Double  st_hj_no_asset;
    private Double  end_hj_no_asset;
    private Double  st_hj_total_asset;
    private Double  end_hj_total_asset;
    private Double  st_short_borrow;
    private Double  end_short_borrow;
    private Double  st_jyx_finance_fz;
    private Double  end_jyx_finance_fz;
    private Double  st_yf_bill;
    private Double  end_yf_bill;
    private Double  st_yf_account;
    private Double  end_yf_account;
    private Double  st_ys_money;
    private Double  end_ys_money;
    private Double  st_yf_staff_pay;
    private Double  end_yf_staff_pay;
    private Double  st_yj_tax;
    private Double  end_yj_tax;
    private Double  st_yf_interest;
    private Double  end_yf_interest;
    private Double  st_yf_dividends;
    private Double  end_yf_dividends;
    private Double  st_other_yf_money;
    private Double  end_other_yf_money;
    private Double  st_ynndq_no_fz;
    private Double  end_ynndq_no_fz;
    private Double  st_other_fz;
    private Double  end_other_fz;
    private Double  st_hj_fz;
    private Double  end_hj_fz;
    private Double  st_long_borrow;
    private Double  end_long_borrow;
    private Double  st_yf_bond;
    private Double  end_yf_bond;
    private Double  st_long_yf_money;
    private Double  end_long_yf_money;
    private Double  st_zx_yf_money;
    private Double  end_zx_yf_money;
    private Double  st_yj_fz;
    private Double  end_yj_fz;
    private Double  st_dysds_fz;
    private Double  end_dysds_fz;
    private Double  st_other_no_fz;
    private Double  end_other_no_fz;
    private Double  st_hj_no_fz;
    private Double  end_hj_no_fz;
    private Double  st_hj_total_fz;
    private Double  end_hj_total_fz;
    private Double  st_paid_assets;
    private Double  end_paid_assets;
    private Double  st_zb_reserve;
    private Double  end_zb_reserve;
    private Double  st_kc_stock;
    private Double  end_kc_stock;
    private Double  st_zx_reserve;
    private Double  end_zx_reserve;
    private Double  st_yy_reserve;
    private Double  end_yy_reserve;
    private Double  st_wfp_profit;
    private Double  end_wfp_profit;
    private Double  st_hj_owner_right;
    private Double  end_hj_owner_right;
    private Double  st_hj_fz_owner_right;
    private Double  end_hj_fz_owner_right;

    public int getFinid() {
        return finid;
    }

    public void setFinid(int finid) {
        this.finid = finid;
    }

    public int getFin_corp_id() {
        return fin_corp_id;
    }

    public void setFin_corp_id(int fin_corp_id) {
        this.fin_corp_id = fin_corp_id;
    }


    public Date getEnd_time() {
        Date d_end_time = null;
        if (this.end_time != null && this.end_time.length() > 2)
            d_end_time = Date.valueOf(this.end_time);
        return d_end_time;
    }

    public void setEnd_time(String end_time) {
        this.end_time = end_time;
    }

    public Date getStart_time() {
        Date d_start_time = null;
        if (this.start_time != null && this.start_time.length() > 2)
            d_start_time = Date.valueOf(this.start_time);
        return d_start_time;
    }


    public void setStart_time(String start_time) {
        this.start_time = start_time;
    }

    public Double getSt_money_fund() {
        return st_money_fund;
    }

    public void setSt_money_fund(Double st_money_fund) {
        this.st_money_fund = st_money_fund;
    }

    public Double getEnd_money_fund() {
        return end_money_fund;
    }

    public void setEnd_money_fund(Double end_money_fund) {
        this.end_money_fund = end_money_fund;
    }

    public Double getSt_jyxjr_assets() {
        return st_jyxjr_assets;
    }

    public void setSt_jyxjr_assets(Double st_jyxjr_assets) {
        this.st_jyxjr_assets = st_jyxjr_assets;
    }

    public Double getEnd_jyxjr_assets() {
        return end_jyxjr_assets;
    }

    public void setEnd_jyxjr_assets(Double end_jyxjr_assets) {
        this.end_jyxjr_assets = end_jyxjr_assets;
    }

    public Double getSt_ys_bill() {
        return st_ys_bill;
    }

    public void setSt_ys_bill(Double st_ys_bill) {
        this.st_ys_bill = st_ys_bill;
    }

    public Double getEnd_ys_bill() {
        return end_ys_bill;
    }

    public void setEnd_ys_bill(Double end_ys_bill) {
        this.end_ys_bill = end_ys_bill;
    }

    public Double getSt_ys_account() {
        return st_ys_account;
    }

    public void setSt_ys_account(Double st_ys_account) {
        this.st_ys_account = st_ys_account;
    }

    public Double getEnd_ys_account() {
        return end_ys_account;
    }

    public void setEnd_ys_account(Double end_ys_account) {
        this.end_ys_account = end_ys_account;
    }

    public Double getSt_yf_money() {
        return st_yf_money;
    }

    public void setSt_yf_money(Double st_yf_money) {
        this.st_yf_money = st_yf_money;
    }

    public Double getEnd_yf_money() {
        return end_yf_money;
    }

    public void setEnd_yf_money(Double end_yf_money) {
        this.end_yf_money = end_yf_money;
    }

    public Double getSt_ys_interest() {
        return st_ys_interest;
    }

    public void setSt_ys_interest(Double st_ys_interest) {
        this.st_ys_interest = st_ys_interest;
    }

    public Double getEnd_ys_interest() {
        return end_ys_interest;
    }

    public void setEnd_ys_interest(Double end_ys_interest) {
        this.end_ys_interest = end_ys_interest;
    }

    public Double getSt_ys_dividends() {
        return st_ys_dividends;
    }

    public void setSt_ys_dividends(Double st_ys_dividends) {
        this.st_ys_dividends = st_ys_dividends;
    }

    public Double getEnd_ys_dividends() {
        return end_ys_dividends;
    }

    public void setEnd_ys_dividends(Double end_ys_dividends) {
        this.end_ys_dividends = end_ys_dividends;
    }

    public Double getSt_other_ys_money() {
        return st_other_ys_money;
    }

    public void setSt_other_ys_money(Double st_other_ys_money) {
        this.st_other_ys_money = st_other_ys_money;
    }

    public Double getEnd_other_ys_money() {
        return end_other_ys_money;
    }

    public void setEnd_other_ys_money(Double end_other_ys_money) {
        this.end_other_ys_money = end_other_ys_money;
    }

    public Double getSt_inventory() {
        return st_inventory;
    }

    public void setSt_inventory(Double st_inventory) {
        this.st_inventory = st_inventory;
    }

    public Double getEnd_inventory() {
        return end_inventory;
    }

    public void setEnd_inventory(Double end_inventory) {
        this.end_inventory = end_inventory;
    }

    public Double getSt_ynndq_no_assets() {
        return st_ynndq_no_assets;
    }

    public void setSt_ynndq_no_assets(Double st_ynndq_no_assets) {
        this.st_ynndq_no_assets = st_ynndq_no_assets;
    }

    public Double getEnd_ynndq_no_assets() {
        return end_ynndq_no_assets;
    }

    public void setEnd_ynndq_no_assets(Double end_ynndq_no_assets) {
        this.end_ynndq_no_assets = end_ynndq_no_assets;
    }

    public Double getSt_other_assets() {
        return st_other_assets;
    }

    public void setSt_other_assets(Double st_other_assets) {
        this.st_other_assets = st_other_assets;
    }

    public Double getEnd_other_assets() {
        return end_other_assets;
    }

    public void setEnd_other_assets(Double end_other_assets) {
        this.end_other_assets = end_other_assets;
    }

    public Double getSt_hj_assets() {
        return st_hj_assets;
    }

    public void setSt_hj_assets(Double st_hj_assets) {
        this.st_hj_assets = st_hj_assets;
    }

    public Double getEnd_hj_assets() {
        return end_hj_assets;
    }

    public void setEnd_hj_assets(Double end_hj_assets) {
        this.end_hj_assets = end_hj_assets;
    }

    public Double getSt_kgcs_assets() {
        return st_kgcs_assets;
    }

    public void setSt_kgcs_assets(Double st_kgcs_assets) {
        this.st_kgcs_assets = st_kgcs_assets;
    }

    public Double getEnd_kgcs_assets() {
        return end_kgcs_assets;
    }

    public void setEnd_kgcs_assets(Double end_kgcs_assets) {
        this.end_kgcs_assets = end_kgcs_assets;
    }

    public Double getSt_cyzdq_investment() {
        return st_cyzdq_investment;
    }

    public void setSt_cyzdq_investment(Double st_cyzdq_investment) {
        this.st_cyzdq_investment = st_cyzdq_investment;
    }

    public Double getEnd_cyzdq_investment() {
        return end_cyzdq_investment;
    }

    public void setEnd_cyzdq_investment(Double end_cyzdq_investment) {
        this.end_cyzdq_investment = end_cyzdq_investment;
    }

    public Double getSt_long_ys_money() {
        return st_long_ys_money;
    }

    public void setSt_long_ys_money(Double st_long_ys_money) {
        this.st_long_ys_money = st_long_ys_money;
    }

    public Double getEnd_long_ys_money() {
        return end_long_ys_money;
    }

    public void setEnd_long_ys_money(Double end_long_ys_money) {
        this.end_long_ys_money = end_long_ys_money;
    }

    public Double getSt_long_gq_investment() {
        return st_long_gq_investment;
    }

    public void setSt_long_gq_investment(Double st_long_gq_investment) {
        this.st_long_gq_investment = st_long_gq_investment;
    }

    public Double getEnd_long_gq_investment() {
        return end_long_gq_investment;
    }

    public void setEnd_long_gq_investment(Double end_long_gq_investment) {
        this.end_long_gq_investment = end_long_gq_investment;
    }

    public Double getSt_invest_house() {
        return st_invest_house;
    }

    public void setSt_invest_house(Double st_invest_house) {
        this.st_invest_house = st_invest_house;
    }

    public Double getEnd_invest_house() {
        return end_invest_house;
    }

    public void setEnd_invest_house(Double end_invest_house) {
        this.end_invest_house = end_invest_house;
    }

    public Double getSt_gd_assets() {
        return st_gd_assets;
    }

    public void setSt_gd_assets(Double st_gd_assets) {
        this.st_gd_assets = st_gd_assets;
    }

    public Double getEnd_gd_assets() {
        return end_gd_assets;
    }

    public void setEnd_gd_assets(Double end_gd_assets) {
        this.end_gd_assets = end_gd_assets;
    }

    public Double getSt_accu_deprec() {
        return st_accu_deprec;
    }

    public void setSt_accu_deprec(Double st_accu_deprec) {
        this.st_accu_deprec = st_accu_deprec;
    }

    public Double getEnd_accu_deprec() {
        return end_accu_deprec;
    }

    public void setEnd_accu_deprec(Double end_accu_deprec) {
        this.end_accu_deprec = end_accu_deprec;
    }

    public Double getSt_gd_assets_jz() {
        return st_gd_assets_jz;
    }

    public void setSt_gd_assets_jz(Double st_gd_assets_jz) {
        this.st_gd_assets_jz = st_gd_assets_jz;
    }

    public Double getEnd_gd_assets_jz() {
        return end_gd_assets_jz;
    }

    public void setEnd_gd_assets_jz(Double end_gd_assets_jz) {
        this.end_gd_assets_jz = end_gd_assets_jz;
    }

    public Double getSt_gd_assets_ready() {
        return st_gd_assets_ready;
    }

    public void setSt_gd_assets_ready(Double st_gd_assets_ready) {
        this.st_gd_assets_ready = st_gd_assets_ready;
    }

    public Double getEnd_gd_assets_ready() {
        return end_gd_assets_ready;
    }

    public void setEnd_gd_assets_ready(Double end_gd_assets_ready) {
        this.end_gd_assets_ready = end_gd_assets_ready;
    }

    public Double getSt_gd_assets_je() {
        return st_gd_assets_je;
    }

    public void setSt_gd_assets_je(Double st_gd_assets_je) {
        this.st_gd_assets_je = st_gd_assets_je;
    }

    public Double getEnd_gd_assets_je() {
        return end_gd_assets_je;
    }

    public void setEnd_gd_assets_je(Double end_gd_assets_je) {
        this.end_gd_assets_je = end_gd_assets_je;
    }

    public Double getSt_now_project() {
        return st_now_project;
    }

    public void setSt_now_project(Double st_now_project) {
        this.st_now_project = st_now_project;
    }

    public Double getEnd_now_project() {
        return end_now_project;
    }

    public void setEnd_now_project(Double end_now_project) {
        this.end_now_project = end_now_project;
    }

    public Double getSt_project_material() {
        return st_project_material;
    }

    public void setSt_project_material(Double st_project_material) {
        this.st_project_material = st_project_material;
    }

    public Double getEnd_project_material() {
        return end_project_material;
    }

    public void setEnd_project_material(Double end_project_material) {
        this.end_project_material = end_project_material;
    }

    public Double getSt_gd_assets_ql() {
        return st_gd_assets_ql;
    }

    public void setSt_gd_assets_ql(Double st_gd_assets_ql) {
        this.st_gd_assets_ql = st_gd_assets_ql;
    }

    public Double getEnd_gd_assets_ql() {
        return end_gd_assets_ql;
    }

    public void setEnd_gd_assets_ql(Double end_gd_assets_ql) {
        this.end_gd_assets_ql = end_gd_assets_ql;
    }

    public Double getSt_scx_investment() {
        return st_scx_investment;
    }

    public void setSt_scx_investment(Double st_scx_investment) {
        this.st_scx_investment = st_scx_investment;
    }

    public Double getEnd_scx_investment() {
        return end_scx_investment;
    }

    public void setEnd_scx_investment(Double end_scx_investment) {
        this.end_scx_investment = end_scx_investment;
    }

    public Double getSt_wx_assets() {
        return st_wx_assets;
    }

    public void setSt_wx_assets(Double st_wx_assets) {
        this.st_wx_assets = st_wx_assets;
    }

    public Double getEnd_wx_assets() {
        return end_wx_assets;
    }

    public void setEnd_wx_assets(Double end_wx_assets) {
        this.end_wx_assets = end_wx_assets;
    }

    public Double getSt_goodwill() {
        return st_goodwill;
    }

    public void setSt_goodwill(Double st_goodwill) {
        this.st_goodwill = st_goodwill;
    }

    public Double getEnd_goodwill() {
        return end_goodwill;
    }

    public void setEnd_goodwill(Double end_goodwill) {
        this.end_goodwill = end_goodwill;
    }

    public Double getSt_cqdt_cost() {
        return st_cqdt_cost;
    }

    public void setSt_cqdt_cost(Double st_cqdt_cost) {
        this.st_cqdt_cost = st_cqdt_cost;
    }

    public Double getEnd_cqdt_cost() {
        return end_cqdt_cost;
    }

    public void setEnd_cqdt_cost(Double end_cqdt_cost) {
        this.end_cqdt_cost = end_cqdt_cost;
    }

    public Double getSt_dysds_assets() {
        return st_dysds_assets;
    }

    public void setSt_dysds_assets(Double st_dysds_assets) {
        this.st_dysds_assets = st_dysds_assets;
    }

    public Double getEnd_dysds_assets() {
        return end_dysds_assets;
    }

    public void setEnd_dysds_assets(Double end_dysds_assets) {
        this.end_dysds_assets = end_dysds_assets;
    }

    public Double getSt_other_no_assets() {
        return st_other_no_assets;
    }

    public void setSt_other_no_assets(Double st_other_no_assets) {
        this.st_other_no_assets = st_other_no_assets;
    }

    public Double getEnd_other_no_assets() {
        return end_other_no_assets;
    }

    public void setEnd_other_no_assets(Double end_other_no_assets) {
        this.end_other_no_assets = end_other_no_assets;
    }

    public Double getSt_hj_no_asset() {
        return st_hj_no_asset;
    }

    public void setSt_hj_no_asset(Double st_hj_no_asset) {
        this.st_hj_no_asset = st_hj_no_asset;
    }

    public Double getEnd_hj_no_asset() {
        return end_hj_no_asset;
    }

    public void setEnd_hj_no_asset(Double end_hj_no_asset) {
        this.end_hj_no_asset = end_hj_no_asset;
    }

    public Double getSt_hj_total_asset() {
        return st_hj_total_asset;
    }

    public void setSt_hj_total_asset(Double st_hj_total_asset) {
        this.st_hj_total_asset = st_hj_total_asset;
    }

    public Double getEnd_hj_total_asset() {
        return end_hj_total_asset;
    }

    public void setEnd_hj_total_asset(Double end_hj_total_asset) {
        this.end_hj_total_asset = end_hj_total_asset;
    }

    public Double getSt_short_borrow() {
        return st_short_borrow;
    }

    public void setSt_short_borrow(Double st_short_borrow) {
        this.st_short_borrow = st_short_borrow;
    }

    public Double getEnd_short_borrow() {
        return end_short_borrow;
    }

    public void setEnd_short_borrow(Double end_short_borrow) {
        this.end_short_borrow = end_short_borrow;
    }

    public Double getSt_jyx_finance_fz() {
        return st_jyx_finance_fz;
    }

    public void setSt_jyx_finance_fz(Double st_jyx_finance_fz) {
        this.st_jyx_finance_fz = st_jyx_finance_fz;
    }

    public Double getEnd_jyx_finance_fz() {
        return end_jyx_finance_fz;
    }

    public void setEnd_jyx_finance_fz(Double end_jyx_finance_fz) {
        this.end_jyx_finance_fz = end_jyx_finance_fz;
    }

    public Double getSt_yf_bill() {
        return st_yf_bill;
    }

    public void setSt_yf_bill(Double st_yf_bill) {
        this.st_yf_bill = st_yf_bill;
    }

    public Double getEnd_yf_bill() {
        return end_yf_bill;
    }

    public void setEnd_yf_bill(Double end_yf_bill) {
        this.end_yf_bill = end_yf_bill;
    }

    public Double getSt_yf_account() {
        return st_yf_account;
    }

    public void setSt_yf_account(Double st_yf_account) {
        this.st_yf_account = st_yf_account;
    }

    public Double getEnd_yf_account() {
        return end_yf_account;
    }

    public void setEnd_yf_account(Double end_yf_account) {
        this.end_yf_account = end_yf_account;
    }

    public Double getSt_ys_money() {
        return st_ys_money;
    }

    public void setSt_ys_money(Double st_ys_money) {
        this.st_ys_money = st_ys_money;
    }

    public Double getEnd_ys_money() {
        return end_ys_money;
    }

    public void setEnd_ys_money(Double end_ys_money) {
        this.end_ys_money = end_ys_money;
    }

    public Double getSt_yf_staff_pay() {
        return st_yf_staff_pay;
    }

    public void setSt_yf_staff_pay(Double st_yf_staff_pay) {
        this.st_yf_staff_pay = st_yf_staff_pay;
    }

    public Double getEnd_yf_staff_pay() {
        return end_yf_staff_pay;
    }

    public void setEnd_yf_staff_pay(Double end_yf_staff_pay) {
        this.end_yf_staff_pay = end_yf_staff_pay;
    }

    public Double getSt_yj_tax() {
        return st_yj_tax;
    }

    public void setSt_yj_tax(Double st_yj_tax) {
        this.st_yj_tax = st_yj_tax;
    }

    public Double getEnd_yj_tax() {
        return end_yj_tax;
    }

    public void setEnd_yj_tax(Double end_yj_tax) {
        this.end_yj_tax = end_yj_tax;
    }

    public Double getSt_yf_interest() {
        return st_yf_interest;
    }

    public void setSt_yf_interest(Double st_yf_interest) {
        this.st_yf_interest = st_yf_interest;
    }

    public Double getEnd_yf_interest() {
        return end_yf_interest;
    }

    public void setEnd_yf_interest(Double end_yf_interest) {
        this.end_yf_interest = end_yf_interest;
    }

    public Double getSt_yf_dividends() {
        return st_yf_dividends;
    }

    public void setSt_yf_dividends(Double st_yf_dividends) {
        this.st_yf_dividends = st_yf_dividends;
    }

    public Double getEnd_yf_dividends() {
        return end_yf_dividends;
    }

    public void setEnd_yf_dividends(Double end_yf_dividends) {
        this.end_yf_dividends = end_yf_dividends;
    }

    public Double getSt_other_yf_money() {
        return st_other_yf_money;
    }

    public void setSt_other_yf_money(Double st_other_yf_money) {
        this.st_other_yf_money = st_other_yf_money;
    }

    public Double getEnd_other_yf_money() {
        return end_other_yf_money;
    }

    public void setEnd_other_yf_money(Double end_other_yf_money) {
        this.end_other_yf_money = end_other_yf_money;
    }

    public Double getSt_ynndq_no_fz() {
        return st_ynndq_no_fz;
    }

    public void setSt_ynndq_no_fz(Double st_ynndq_no_fz) {
        this.st_ynndq_no_fz = st_ynndq_no_fz;
    }

    public Double getEnd_ynndq_no_fz() {
        return end_ynndq_no_fz;
    }

    public void setEnd_ynndq_no_fz(Double end_ynndq_no_fz) {
        this.end_ynndq_no_fz = end_ynndq_no_fz;
    }

    public Double getSt_other_fz() {
        return st_other_fz;
    }

    public void setSt_other_fz(Double st_other_fz) {
        this.st_other_fz = st_other_fz;
    }

    public Double getEnd_other_fz() {
        return end_other_fz;
    }

    public void setEnd_other_fz(Double end_other_fz) {
        this.end_other_fz = end_other_fz;
    }

    public Double getSt_hj_fz() {
        return st_hj_fz;
    }

    public void setSt_hj_fz(Double st_hj_fz) {
        this.st_hj_fz = st_hj_fz;
    }

    public Double getEnd_hj_fz() {
        return end_hj_fz;
    }

    public void setEnd_hj_fz(Double end_hj_fz) {
        this.end_hj_fz = end_hj_fz;
    }

    public Double getSt_long_borrow() {
        return st_long_borrow;
    }

    public void setSt_long_borrow(Double st_long_borrow) {
        this.st_long_borrow = st_long_borrow;
    }

    public Double getEnd_long_borrow() {
        return end_long_borrow;
    }

    public void setEnd_long_borrow(Double end_long_borrow) {
        this.end_long_borrow = end_long_borrow;
    }

    public Double getSt_yf_bond() {
        return st_yf_bond;
    }

    public void setSt_yf_bond(Double st_yf_bond) {
        this.st_yf_bond = st_yf_bond;
    }

    public Double getEnd_yf_bond() {
        return end_yf_bond;
    }

    public void setEnd_yf_bond(Double end_yf_bond) {
        this.end_yf_bond = end_yf_bond;
    }

    public Double getSt_long_yf_money() {
        return st_long_yf_money;
    }

    public void setSt_long_yf_money(Double st_long_yf_money) {
        this.st_long_yf_money = st_long_yf_money;
    }

    public Double getEnd_long_yf_money() {
        return end_long_yf_money;
    }

    public void setEnd_long_yf_money(Double end_long_yf_money) {
        this.end_long_yf_money = end_long_yf_money;
    }

    public Double getSt_zx_yf_money() {
        return st_zx_yf_money;
    }

    public void setSt_zx_yf_money(Double st_zx_yf_money) {
        this.st_zx_yf_money = st_zx_yf_money;
    }

    public Double getEnd_zx_yf_money() {
        return end_zx_yf_money;
    }

    public void setEnd_zx_yf_money(Double end_zx_yf_money) {
        this.end_zx_yf_money = end_zx_yf_money;
    }

    public Double getSt_yj_fz() {
        return st_yj_fz;
    }

    public void setSt_yj_fz(Double st_yj_fz) {
        this.st_yj_fz = st_yj_fz;
    }

    public Double getEnd_yj_fz() {
        return end_yj_fz;
    }

    public void setEnd_yj_fz(Double end_yj_fz) {
        this.end_yj_fz = end_yj_fz;
    }

    public Double getSt_dysds_fz() {
        return st_dysds_fz;
    }

    public void setSt_dysds_fz(Double st_dysds_fz) {
        this.st_dysds_fz = st_dysds_fz;
    }

    public Double getEnd_dysds_fz() {
        return end_dysds_fz;
    }

    public void setEnd_dysds_fz(Double end_dysds_fz) {
        this.end_dysds_fz = end_dysds_fz;
    }

    public Double getSt_other_no_fz() {
        return st_other_no_fz;
    }

    public void setSt_other_no_fz(Double st_other_no_fz) {
        this.st_other_no_fz = st_other_no_fz;
    }

    public Double getEnd_other_no_fz() {
        return end_other_no_fz;
    }

    public void setEnd_other_no_fz(Double end_other_no_fz) {
        this.end_other_no_fz = end_other_no_fz;
    }

    public Double getSt_hj_no_fz() {
        return st_hj_no_fz;
    }

    public void setSt_hj_no_fz(Double st_hj_no_fz) {
        this.st_hj_no_fz = st_hj_no_fz;
    }

    public Double getEnd_hj_no_fz() {
        return end_hj_no_fz;
    }

    public void setEnd_hj_no_fz(Double end_hj_no_fz) {
        this.end_hj_no_fz = end_hj_no_fz;
    }

    public Double getSt_hj_total_fz() {
        return st_hj_total_fz;
    }

    public void setSt_hj_total_fz(Double st_hj_total_fz) {
        this.st_hj_total_fz = st_hj_total_fz;
    }

    public Double getEnd_hj_total_fz() {
        return end_hj_total_fz;
    }

    public void setEnd_hj_total_fz(Double end_hj_total_fz) {
        this.end_hj_total_fz = end_hj_total_fz;
    }

    public Double getSt_paid_assets() {
        return st_paid_assets;
    }

    public void setSt_paid_assets(Double st_paid_assets) {
        this.st_paid_assets = st_paid_assets;
    }

    public Double getEnd_paid_assets() {
        return end_paid_assets;
    }

    public void setEnd_paid_assets(Double end_paid_assets) {
        this.end_paid_assets = end_paid_assets;
    }

    public Double getSt_zb_reserve() {
        return st_zb_reserve;
    }

    public void setSt_zb_reserve(Double st_zb_reserve) {
        this.st_zb_reserve = st_zb_reserve;
    }

    public Double getEnd_zb_reserve() {
        return end_zb_reserve;
    }

    public void setEnd_zb_reserve(Double end_zb_reserve) {
        this.end_zb_reserve = end_zb_reserve;
    }

    public Double getSt_kc_stock() {
        return st_kc_stock;
    }

    public void setSt_kc_stock(Double st_kc_stock) {
        this.st_kc_stock = st_kc_stock;
    }

    public Double getEnd_kc_stock() {
        return end_kc_stock;
    }

    public void setEnd_kc_stock(Double end_kc_stock) {
        this.end_kc_stock = end_kc_stock;
    }

    public Double getSt_zx_reserve() {
        return st_zx_reserve;
    }

    public void setSt_zx_reserve(Double st_zx_reserve) {
        this.st_zx_reserve = st_zx_reserve;
    }

    public Double getEnd_zx_reserve() {
        return end_zx_reserve;
    }

    public void setEnd_zx_reserve(Double end_zx_reserve) {
        this.end_zx_reserve = end_zx_reserve;
    }

    public Double getSt_yy_reserve() {
        return st_yy_reserve;
    }

    public void setSt_yy_reserve(Double st_yy_reserve) {
        this.st_yy_reserve = st_yy_reserve;
    }

    public Double getEnd_yy_reserve() {
        return end_yy_reserve;
    }

    public void setEnd_yy_reserve(Double end_yy_reserve) {
        this.end_yy_reserve = end_yy_reserve;
    }

    public Double getSt_wfp_profit() {
        return st_wfp_profit;
    }

    public void setSt_wfp_profit(Double st_wfp_profit) {
        this.st_wfp_profit = st_wfp_profit;
    }

    public Double getEnd_wfp_profit() {
        return end_wfp_profit;
    }

    public void setEnd_wfp_profit(Double end_wfp_profit) {
        this.end_wfp_profit = end_wfp_profit;
    }

    public Double getSt_hj_owner_right() {
        return st_hj_owner_right;
    }

    public void setSt_hj_owner_right(Double st_hj_owner_right) {
        this.st_hj_owner_right = st_hj_owner_right;
    }

    public Double getEnd_hj_owner_right() {
        return end_hj_owner_right;
    }

    public void setEnd_hj_owner_right(Double end_hj_owner_right) {
        this.end_hj_owner_right = end_hj_owner_right;
    }

    public Double getSt_hj_fz_owner_right() {
        return st_hj_fz_owner_right;
    }

    public void setSt_hj_fz_owner_right(Double st_hj_fz_owner_right) {
        this.st_hj_fz_owner_right = st_hj_fz_owner_right;
    }

    public Double getEnd_hj_fz_owner_right() {
        return end_hj_fz_owner_right;
    }

    public void setEnd_hj_fz_owner_right(Double end_hj_fz_owner_right) {
        this.end_hj_fz_owner_right = end_hj_fz_owner_right;
    }
}
