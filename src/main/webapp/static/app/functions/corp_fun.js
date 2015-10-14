//政府部门信息管理
Ext.define('app.functions.corp_fun', {});
function obt_corp_government_manage_update(gov_id) {
    var form_obt_edit = document.getElementById("apply_government_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            gov_id : gov_id,
            //gov_corp_id : corp_id,
            gov_domain : form_obt_edit['gov_domain'].value,
            gov_office : form_obt_edit['gov_office'].value,
            gov_desc : form_obt_edit['gov_desc'].value,
            gov_contact : form_obt_edit['gov_contact'].value,
            gov_psotion : form_obt_edit['gov_psotion'].value,
            gov_doctype : form_obt_edit['gov_doctype'].value,
            gov_docnum : form_obt_edit['gov_docnum'].value,
            gov_phone : form_obt_edit['gov_phone'].value,
            gov_fax : form_obt_edit['gov_fax'].value,
            gov_email : form_obt_edit['gov_email'].value,
            gov_qq : form_obt_edit['gov_qq'].value,
            gov_webchat : form_obt_edit['gov_webchat'].value,
            gov_tel : form_obt_edit['gov_tel'].value,
            gov_remark : form_obt_edit['gov_remark'].value
        },
        url: '/enter/update_corp_government_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
            Ext.getCmp('govmtgridview_id').getStore().reload();
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

//投资人信息管理
function obt_corp_investors_manage_update(inv_id) {
    var form_obt_edit = document.getElementById("investors_form");
    Ext.Ajax.request({
        method: "POST",
        params: {
            inv_id : inv_id,
            //inv_corp_id :corp_id,
            inv_domain : form_obt_edit['inv_domain'].value,
            inv_csrc_type1 : form_obt_edit['inv_csrc_type1'].value,
            inv_csrc_type2 : form_obt_edit['inv_csrc_type2'].value,
            inv_csrc_type3 : form_obt_edit['inv_csrc_type3'].value,
            inv_csrc_type4 : form_obt_edit['inv_csrc_type4'].value,
            inv_indclass1 : form_obt_edit['inv_indclass1'].value,
            inv_indclass2 : form_obt_edit['inv_indclass2'].value,
            inv_indclass3 : "",
            inv_indclass4 : "",
            inv_contact : form_obt_edit['inv_contact'].value,
            inv_psotion : form_obt_edit['inv_psotion'].value,
            inv_doctype : form_obt_edit['inv_doctype'].value,
            inv_docnum : form_obt_edit['inv_docnum'].value,
            inv_phone : form_obt_edit['inv_phone'].value,
            inv_fax : form_obt_edit['inv_fax'].value,
            inv_email : form_obt_edit['inv_email'].value,
            inv_qq : form_obt_edit['inv_qq'].value,
            inv_webchat : form_obt_edit['inv_webchat'].value,
            inv_tel : form_obt_edit['inv_tel'].value,
            inv_remark : form_obt_edit['inv_remark'].value
        },
        url: '/enter/update_corp_investors_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
            Ext.getCmp('investormtgridview_id').getStore().reload();
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

//服务机构信息管理
function obt_corp_service_manage_update(srv_id) {
    var form_obt_edit = document.getElementById("apply_service_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            srv_id : srv_id,
            //srv_corp_id :corp_id,
            srv_name : form_obt_edit['srv_name'].value,
            srv_type : form_obt_edit['srv_type'].value,
            srv_content : form_obt_edit['srv_content'].value,
            srv_levels : form_obt_edit['srv_levels'].value,
            srv_domain : form_obt_edit['srv_domain'].value,
            srv_penalty : form_obt_edit['srv_penalty'].value,
            srv_examiner : form_obt_edit['srv_examiner'].value,
            srv_post : form_obt_edit['srv_post'].value,
            srv_descs : form_obt_edit['srv_descs'].value,
            srv_remark : form_obt_edit['srv_remark'].value
        },
        url: '/enter/update_corp_service_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
            Ext.getCmp('servicemtgridview_id').getStore().reload();
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

//人力资源信息管理
function obt_corp_rehr_manage_update(rehr_id) {
    var form_obt_edit = document.getElementById("apply_rehr_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            rehr_id : rehr_id,
            //rehr_corp_id : corp_id,
            rehr_post : form_obt_edit['rehr_post'].value,
            rehr_num : form_obt_edit['rehr_num'].value,
            rehr_salary : form_obt_edit['rehr_salary'].value,
            rehr_sex_req : form_obt_edit['rehr_sex_req'].value,
            rehr_age_req : form_obt_edit['rehr_age_req'].value,
            rehr_requests : form_obt_edit['rehr_requests'].value
        },
        url: '/enter/update_corp_rehr_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
            Ext.getCmp('rehrgridview_id').getStore().reload();
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};


//融资信息管理
function obt_corp_refinancing_manage_update(refi_id) {
    var form_obt_edit = document.getElementById("apply_refinancing_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            refi_id : refi_id,
            //refi_corp_id :corp_id,
            refi_amounts : form_obt_edit['refi_amounts'].value,
            refi_use : form_obt_edit['refi_use'].value,
            refi_financ : form_obt_edit['refi_financ'].value,
            refi_security : form_obt_edit['refi_security'].value,
            refi_acc_cost : form_obt_edit['refi_acc_cost'].value,
            refi_deadline : form_obt_edit['refi_deadline'].value,
            refi_desc : form_obt_edit['refi_desc'].value
        },
        url: '/enter/update_corp_refinancing_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
            Ext.getCmp('refigridview_id').getStore().reload();
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

//培训信息管理
function obt_corp_retrain_manage_update(retra_id) {
    var form_obt_edit = document.getElementById("apply_retrain_edit");

    Ext.Ajax.request({
        params: {
            retra_id : retra_id,
            //retra_corp_id : corp_id,
            retra_mode : form_obt_edit['retra_mode'].value,
            retra_content : form_obt_edit['retra_content'].value,
            retra_acc_cost : form_obt_edit['retra_acc_cost'].value,
            retra_dt : form_obt_edit['retra_dt'].value,
            retra_requests : form_obt_edit['retra_requests'].value
        },
        url: '/enter/update_corp_retrain_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
            Ext.getCmp('retrgridview_id').getStore().reload();
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

//企业基本信息更新
function obt_corp_update(corp_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            id :corp_id,
            buslicno : form_obt_edit['buslicno'].value,
            name : form_obt_edit['name'].value,
            unit : form_obt_edit['unit'].value,
            legrep : form_obt_edit['legrep'].value,
            province : form_obt_edit['province'].value,
            city : form_obt_edit['city'].value,
            county : form_obt_edit['county'].value,
            nos : form_obt_edit['nos'].value,
            postal : form_obt_edit['postal'].value,
            nature : form_obt_edit['nature'].value,
            regcap : form_obt_edit['regcap'].value,
            bustermfdt : form_obt_edit['bustermfdt'].value,
            bustremtdt : form_obt_edit['bustremtdt'].value,
            regdt : form_obt_edit['regdt'].value,
            list_area : form_obt_edit['list_area'].value,
            listcode : form_obt_edit['listcode'].value,
            listprice : form_obt_edit['listprice'].value,
            listdt : form_obt_edit['listdt'].value,
            channels : form_obt_edit['channels'].value,
            webchat : form_obt_edit['webchat'].value,
            staffnum : form_obt_edit['staffnum'].value,
            regist_organ : form_obt_edit['regist_organ'].value,
            regaddr : form_obt_edit['regaddr'].value,
            offaddr : form_obt_edit['offaddr'].value,
            scope : form_obt_edit['scope'].value,
            mbus : form_obt_edit['mbus'].value,
            eprofile : form_obt_edit['eprofile'].value,
            remark : form_obt_edit['remark'].value,
            phoinf : "",
            indclass1 : form_obt_edit['indclass1'].value,
            indclass2 : form_obt_edit['indclass2'].value,
            indclass3 : form_obt_edit['indclass3'].value,
            indclass4 : form_obt_edit['indclass4'].value,
            csrc_type1 : form_obt_edit['csrc_type1'].value,
            csrc_type2 : form_obt_edit['csrc_type2'].value,
            csrc_type3 : "",
            csrc_type4 : "",
            type_enterp : true,
            type_server : form_obt_edit['type_server'].checked,
            type_investors : form_obt_edit['type_investors'].checked,
            type_govermt : form_obt_edit['type_govermt'].checked,
            demand_rz : form_obt_edit['demand_rz'].checked,
            demand_px : form_obt_edit['demand_px'].checked,
            demand_rl : form_obt_edit['demand_rl'].checked
            //inputdt : form_obt_edit['inputdt'].value
        },
        url: '/enter/update_corp_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

//联系人信息更新
function obt_corp_contact_update(cont_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");

    Ext.Ajax.request({
        method: "POST",
        params: {
            cont_id : cont_id,
            //cont_corp_id : corp_id,
            cont_name : form_obt_edit['cont_name'].value,
            cont_psotion : form_obt_edit['cont_psotion'].value,
            cont_edoctype : form_obt_edit['cont_edoctype'].value,
            cont_edocnum : form_obt_edit['cont_edocnum'].value,
            cont_ephone : form_obt_edit['cont_ephone'].value,
            cont_efax : form_obt_edit['cont_efax'].value,
            cont_eemail : form_obt_edit['cont_eemail'].value,
            cont_eqq : form_obt_edit['cont_eqq'].value,
            cont_webchat : form_obt_edit['cont_webchat'].value,
            cont_tel : form_obt_edit['cont_tel'].value,
            cont_bz : form_obt_edit['cont_bz'].value
        },
        url: '/enter/update_corp_contact_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

//股东信息更新
function obt_corp_shareholder_update(gd_id) {


    var tab=document.getElementById("table_corp_sh");
    var rows=tab.rows;
    for(var i=2;i<rows.length;i++)
    {

        {
            Ext.Ajax.request({
                method: "POST",
                params: {
                    gd_id : gd_id,
                    //gd_corp_id : corp_id,
                    gd_shtype : rows[i].cells[0].innerHTML,
                    gd_shname : rows[i].cells[1].innerHTML,
                    gd_shdoctype : rows[i].cells[2].innerHTML,
                    gd_shdocnum : rows[i].cells[3].innerHTML,
                    gd_shareholdnum : rows[i].cells[4].innerHTML,
                    gd_currencynum : rows[i].cells[5].innerHTML,
                    gd_freezenum : rows[i].cells[6].innerHTML,
                    gd_psotion : rows[i].cells[7].innerHTML,
                    gd_phone : rows[i].cells[8].innerHTML,
                    gd_fax : rows[i].cells[9].innerHTML,
                    gd_email : rows[i].cells[10].innerHTML,
                    gd_qq : rows[i].cells[11].innerHTML,
                    gd_webchat : rows[i].cells[12].innerHTML,
                    gd_tel : rows[i].cells[13].innerHTML,
                    gd_remark : rows[i].cells[14].innerHTML,
                    gd_doctype : "",
                    gd_docnum : ""
                },
                url: '/enter/update_corp_shareholder_info',
                success: function () {
                    Ext.Msg.alert("提示", "保存成功！");
                },
                failure: function () {
                    Ext.Msg.alert("提示", "保存失败！");
                }
            });
        }
    }
};

//财务信息更新
function obt_corp_finance_update(finid) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            finid : finid,
            //fin_corp_id : corp_id,
            start_time : form_obt_edit['start_time'].value,
            end_time : form_obt_edit['end_time'].value,
            st_money_fund : form_obt_edit['st_money_fund'].value,
            end_money_fund : form_obt_edit['end_money_fund'].value,
            st_jyxjr_assets : form_obt_edit['st_jyxjr_assets'].value,
            end_jyxjr_assets : form_obt_edit['end_jyxjr_assets'].value,
            st_ys_bill : form_obt_edit['st_ys_bill'].value,
            end_ys_bill : form_obt_edit['end_ys_bill'].value,
            st_ys_account : form_obt_edit['st_ys_account'].value,
            end_ys_account : form_obt_edit['end_ys_account'].value,
            st_yf_money : form_obt_edit['st_yf_money'].value,
            end_yf_money : form_obt_edit['end_yf_money'].value,
            st_ys_interest : form_obt_edit['st_ys_interest'].value,
            end_ys_interest : form_obt_edit['end_ys_interest'].value,
            st_ys_dividends : form_obt_edit['st_ys_dividends'].value,
            end_ys_dividends : form_obt_edit['end_ys_dividends'].value,
            st_other_ys_money : form_obt_edit['st_other_ys_money'].value,
            end_other_ys_money : form_obt_edit['end_other_ys_money'].value,
            st_inventory : form_obt_edit['st_inventory'].value,
            end_inventory : form_obt_edit['end_inventory'].value,
            st_ynndq_no_assets : form_obt_edit['st_ynndq_no_assets'].value,
            end_ynndq_no_assets : form_obt_edit['end_ynndq_no_assets'].value,
            st_other_assets : form_obt_edit['st_other_assets'].value,
            end_other_assets : form_obt_edit['end_other_assets'].value,
            st_hj_assets : form_obt_edit['st_hj_assets'].value,
            end_hj_assets : form_obt_edit['end_hj_assets'].value,
            st_kgcs_assets : form_obt_edit['st_kgcs_assets'].value,
            end_kgcs_assets : form_obt_edit['end_kgcs_assets'].value,
            st_cyzdq_investment : form_obt_edit['st_cyzdq_investment'].value,
            end_cyzdq_investment : form_obt_edit['end_cyzdq_investment'].value,
            st_long_ys_money : form_obt_edit['st_long_ys_money'].value,
            end_long_ys_money : form_obt_edit['end_long_ys_money'].value,
            st_long_gq_investment : form_obt_edit['st_long_gq_investment'].value,
            end_long_gq_investment : form_obt_edit['end_long_gq_investment'].value,
            st_invest_house : form_obt_edit['st_invest_house'].value,
            end_invest_house : form_obt_edit['end_invest_house'].value,
            st_gd_assets : form_obt_edit['st_gd_assets'].value,
            end_gd_assets : form_obt_edit['end_gd_assets'].value,
            st_accu_deprec : form_obt_edit['st_accu_deprec'].value,
            end_accu_deprec : form_obt_edit['end_accu_deprec'].value,
            st_gd_assets_jz : form_obt_edit['st_gd_assets_jz'].value,
            end_gd_assets_jz : form_obt_edit['end_gd_assets_jz'].value,
            st_gd_assets_ready : form_obt_edit['st_gd_assets_ready'].value,
            end_gd_assets_ready : form_obt_edit['end_gd_assets_ready'].value,
            st_gd_assets_je : form_obt_edit['st_gd_assets_je'].value,
            end_gd_assets_je : form_obt_edit['end_gd_assets_je'].value,
            st_now_project : form_obt_edit['st_now_project'].value,
            end_now_project : form_obt_edit['end_now_project'].value,
            st_project_material : form_obt_edit['st_project_material'].value,
            end_project_material : form_obt_edit['end_project_material'].value,
            st_gd_assets_ql : form_obt_edit['st_gd_assets_ql'].value,
            end_gd_assets_ql : form_obt_edit['end_gd_assets_ql'].value,
            st_scx_investment : form_obt_edit['st_scx_investment'].value,
            end_scx_investment : form_obt_edit['end_scx_investment'].value,
            st_wx_assets : form_obt_edit['st_wx_assets'].value,
            end_wx_assets : form_obt_edit['end_wx_assets'].value,
            st_goodwill : form_obt_edit['st_goodwill'].value,
            end_goodwill : form_obt_edit['end_goodwill'].value,
            st_cqdt_cost : form_obt_edit['st_cqdt_cost'].value,
            end_cqdt_cost : form_obt_edit['end_cqdt_cost'].value,
            st_dysds_assets : form_obt_edit['st_dysds_assets'].value,
            end_dysds_assets : form_obt_edit['end_dysds_assets'].value,
            st_other_no_assets : form_obt_edit['st_other_no_assets'].value,
            end_other_no_assets : form_obt_edit['end_other_no_assets'].value,
            st_hj_no_asset : form_obt_edit['st_hj_no_asset'].value,
            end_hj_no_asset : form_obt_edit['end_hj_no_asset'].value,
            st_hj_total_asset : form_obt_edit['st_hj_total_asset'].value,
            end_hj_total_asset : form_obt_edit['end_hj_total_asset'].value,
            st_short_borrow : form_obt_edit['st_short_borrow'].value,
            end_short_borrow : form_obt_edit['end_short_borrow'].value,
            st_jyx_finance_fz : form_obt_edit['st_jyx_finance_fz'].value,
            end_jyx_finance_fz : form_obt_edit['end_jyx_finance_fz'].value,
            st_yf_bill : form_obt_edit['st_yf_bill'].value,
            end_yf_bill : form_obt_edit['end_yf_bill'].value,
            st_yf_account : form_obt_edit['st_yf_account'].value,
            end_yf_account : form_obt_edit['end_yf_account'].value,
            st_ys_money : form_obt_edit['st_ys_money'].value,
            end_ys_money : form_obt_edit['end_ys_money'].value,
            st_yf_staff_pay : form_obt_edit['st_yf_staff_pay'].value,
            end_yf_staff_pay : form_obt_edit['end_yf_staff_pay'].value,
            st_yj_tax : form_obt_edit['st_yj_tax'].value,
            end_yj_tax : form_obt_edit['end_yj_tax'].value,
            st_yf_interest : form_obt_edit['st_yf_interest'].value,
            end_yf_interest : form_obt_edit['end_yf_interest'].value,
            st_yf_dividends : form_obt_edit['st_yf_dividends'].value,
            end_yf_dividends : form_obt_edit['end_yf_dividends'].value,
            st_other_yf_money : form_obt_edit['st_other_yf_money'].value,
            end_other_yf_money : form_obt_edit['end_other_yf_money'].value,
            st_ynndq_no_fz : form_obt_edit['st_ynndq_no_fz'].value,
            end_ynndq_no_fz : form_obt_edit['end_ynndq_no_fz'].value,
            st_other_fz : form_obt_edit['st_other_fz'].value,
            end_other_fz : form_obt_edit['end_other_fz'].value,
            st_hj_fz : form_obt_edit['st_hj_fz'].value,
            end_hj_fz : form_obt_edit['end_hj_fz'].value,
            st_long_borrow : form_obt_edit['st_long_borrow'].value,
            end_long_borrow : form_obt_edit['end_long_borrow'].value,
            st_yf_bond : form_obt_edit['st_yf_bond'].value,
            end_yf_bond : form_obt_edit['end_yf_bond'].value,
            st_long_yf_money : form_obt_edit['st_long_yf_money'].value,
            end_long_yf_money : form_obt_edit['end_long_yf_money'].value,
            st_zx_yf_money : form_obt_edit['st_zx_yf_money'].value,
            end_zx_yf_money : form_obt_edit['end_zx_yf_money'].value,
            st_yj_fz : form_obt_edit['st_yj_fz'].value,
            end_yj_fz : form_obt_edit['end_yj_fz'].value,
            st_dysds_fz : form_obt_edit['st_dysds_fz'].value,
            end_dysds_fz : form_obt_edit['end_dysds_fz'].value,
            st_other_no_fz : form_obt_edit['st_other_no_fz'].value,
            end_other_no_fz : form_obt_edit['end_other_no_fz'].value,
            st_hj_no_fz : form_obt_edit['st_hj_no_fz'].value,
            end_hj_no_fz : form_obt_edit['end_hj_no_fz'].value,
            st_hj_total_fz : form_obt_edit['st_hj_total_fz'].value,
            end_hj_total_fz : form_obt_edit['end_hj_total_fz'].value,
            st_paid_assets : form_obt_edit['st_paid_assets'].value,
            end_paid_assets : form_obt_edit['end_paid_assets'].value,
            st_zb_reserve : form_obt_edit['st_zb_reserve'].value,
            end_zb_reserve : form_obt_edit['end_zb_reserve'].value,
            st_kc_stock : form_obt_edit['st_kc_stock'].value,
            end_kc_stock : form_obt_edit['end_kc_stock'].value,
            st_zx_reserve : form_obt_edit['st_zx_reserve'].value,
            end_zx_reserve : form_obt_edit['end_zx_reserve'].value,
            st_yy_reserve : form_obt_edit['st_yy_reserve'].value,
            end_yy_reserve : form_obt_edit['end_yy_reserve'].value,
            st_wfp_profit : form_obt_edit['st_wfp_profit'].value,
            end_wfp_profit : form_obt_edit['end_wfp_profit'].value,
            st_hj_owner_right : form_obt_edit['st_hj_owner_right'].value,
            end_hj_owner_right : form_obt_edit['end_hj_owner_right'].value,
            st_hj_fz_owner_right : form_obt_edit['st_hj_fz_owner_right'].value,
            end_hj_fz_owner_right : form_obt_edit['end_hj_fz_owner_right'].value
        },
        url: '/enter/update_corp_finance_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

//最近一次维护信息更新
function obt_corp_maintain_update(mai_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            mai_id : mai_id,
            //mai_corp_id : corp_id,
            mai_changer_id : form_obt_edit['mai_changer_id'].value,
            mai_changer_dt : form_obt_edit['mai_changer_dt'].value,
            mai_changer_dept : form_obt_edit['mai_changer_dept'].value,
            mai_recomdt : form_obt_edit['mai_recomdt'].value,
            mai_trusteeship : form_obt_edit['mai_trusteeship'].value,
            mai_listst : form_obt_edit['mai_listst'].value,
            mai_eclass : form_obt_edit['mai_eclass'].value,
            mai_maintain : form_obt_edit['mai_maintain'].value,
            mai_reserve : form_obt_edit['mai_reserve'].value,
            mai_emaint : form_obt_edit['mai_emaint'].value,
            mai_dept : form_obt_edit['mai_dept'].value,
            mai_post : form_obt_edit['mai_post'].value,
            mai_tel : form_obt_edit['mai_tel'].value,
            mai_phone : form_obt_edit['mai_phone'].value,
            mai_fax : form_obt_edit['mai_fax'].value,
            mai_email : form_obt_edit['mai_email'].value,
            mai_qq : form_obt_edit['mai_qq'].value,
            mai_webchat : form_obt_edit['mai_webchat'].value,
            mai_bz : form_obt_edit['mai_bz'].value
        },
        url: '/enter/update_corp_maintain_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

//政府部门信息更新
function obt_corp_government_update(gov_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            gov_id : gov_id,
            //gov_corp_id : corp_id,
            gov_domain : form_obt_edit['gov_domain'].value,
            gov_office : form_obt_edit['gov_office'].value,
            gov_desc : form_obt_edit['gov_desc'].value,
            gov_contact : form_obt_edit['gov_contact'].value,
            gov_psotion : form_obt_edit['gov_psotion'].value,
            gov_doctype : form_obt_edit['gov_doctype'].value,
            gov_docnum : form_obt_edit['gov_docnum'].value,
            gov_phone : form_obt_edit['gov_phone'].value,
            gov_fax : form_obt_edit['gov_fax'].value,
            gov_email : form_obt_edit['gov_email'].value,
            gov_qq : form_obt_edit['gov_qq'].value,
            gov_webchat : form_obt_edit['gov_webchat'].value,
            gov_tel : form_obt_edit['gov_tel'].value,
            gov_remark : form_obt_edit['gov_remark'].value
        },
        url: '/enter/update_corp_government_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

//投资人信息更新
function obt_corp_investors_update(inv_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            inv_id : inv_id,
            //inv_corp_id :corp_id,
            inv_domain : form_obt_edit['inv_domain'].value,
            inv_csrc_type1 : form_obt_edit['inv_csrc_type1'].value,
            inv_csrc_type2 : form_obt_edit['inv_csrc_type2'].value,
            inv_csrc_type3 : form_obt_edit['inv_csrc_type3'].value,
            inv_csrc_type4 : form_obt_edit['inv_csrc_type4'].value,
            inv_indclass1 : form_obt_edit['inv_indclass1'].value,
            inv_indclass2 : form_obt_edit['inv_indclass2'].value,
            inv_indclass3 : "",
            inv_indclass4 : "",
            inv_contact : form_obt_edit['inv_contact'].value,
            inv_psotion : form_obt_edit['inv_psotion'].value,
            inv_doctype : form_obt_edit['inv_doctype'].value,
            inv_docnum : form_obt_edit['inv_docnum'].value,
            inv_phone : form_obt_edit['inv_phone'].value,
            inv_fax : form_obt_edit['inv_fax'].value,
            inv_email : form_obt_edit['inv_email'].value,
            inv_qq : form_obt_edit['inv_qq'].value,
            inv_webchat : form_obt_edit['inv_webchat'].value,
            inv_tel : form_obt_edit['inv_tel'].value,
            inv_remark : form_obt_edit['inv_remark'].value
        },
        url: '/enter/update_corp_investors_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

//服务机构信息更新
function obt_corp_service_update(srv_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            srv_id : srv_id,
            //srv_corp_id :corp_id,
            srv_name : form_obt_edit['srv_name'].value,
            srv_type : form_obt_edit['srv_type'].value,
            srv_content : form_obt_edit['srv_content'].value,
            srv_levels : form_obt_edit['srv_levels'].value,
            srv_domain : form_obt_edit['srv_domain'].value,
            srv_penalty : form_obt_edit['srv_penalty'].value,
            srv_examiner : form_obt_edit['srv_examiner'].value,
            srv_post : form_obt_edit['srv_post'].value,
            srv_descs : form_obt_edit['srv_descs'].value,
            srv_remark : form_obt_edit['srv_remark'].value
        },
        url: '/enter/update_corp_service_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

//融资信息更新
function obt_corp_refinancing_update(refi_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            refi_id : refi_id,
            //refi_corp_id :corp_id,
            refi_amounts : form_obt_edit['refi_amounts'].value,
            refi_use : form_obt_edit['refi_use'].value,
            refi_financ : form_obt_edit['refi_financ'].value,
            refi_security : form_obt_edit['refi_security'].value,
            refi_acc_cost : form_obt_edit['refi_acc_cost'].value,
            refi_deadline : form_obt_edit['refi_deadline'].value,
            refi_desc : form_obt_edit['refi_desc'].value
        },
        url: '/enter/update_corp_refinancing_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

//人力资源信息更新
function obt_corp_rehr_update(rehr_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            rehr_id : rehr_id,
            //rehr_corp_id : corp_id,
            rehr_post : form_obt_edit['rehr_post'].value,
            rehr_num : form_obt_edit['rehr_num'].value,
            rehr_salary : form_obt_edit['rehr_salary'].value,
            rehr_sex_req : form_obt_edit['rehr_sex_req'].value,
            rehr_age_req : form_obt_edit['rehr_age_req'].value,
            rehr_requests : form_obt_edit['rehr_requests'].value
        },
        url: '/enter/update_corp_rehr_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

//培训信息更新
function obt_corp_retrain_update(retra_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            retra_id : retra_id,
            //retra_corp_id : corp_id,
            retra_mode : form_obt_edit['retra_mode'].value,
            retra_content : form_obt_edit['retra_content'].value,
            retra_acc_cost : form_obt_edit['retra_acc_cost'].value,
            retra_dt : form_obt_edit['retra_dt'].value,
            retra_requests : form_obt_edit['retra_requests'].value
        },
        url: '/enter/update_corp_retrain_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

function obt_corp_add(corp_id) {
    Ext.Ajax.request({
        method: "POST",
        params: {
            id :corp_id,
            buslicno : document.getElementById('buslicno').value,
            name : document.getElementById('name').value,
            unit : document.getElementById('unit').value,
            legrep : document.getElementById('legrep').value,
            province : document.getElementById('province').value,
            city : document.getElementById('city').value,
            county : document.getElementById('county').value,
            nos : document.getElementById('nos').value,
            postal : document.getElementById('postal').value,
            nature : document.getElementById('nature').value,
            regcap : document.getElementById('regcap').value,
            bustermfdt : document.getElementById('bustermfdt').value,
            bustremtdt : document.getElementById('bustremtdt').value,
            regdt : document.getElementById('regdt').value,
            list_area : document.getElementById('list_area').value,
            listcode : document.getElementById('listcode').value,
            listprice : document.getElementById('listprice').value,
            listdt : document.getElementById('listdt').value,
            channels : document.getElementById('channels').value,
            webchat : document.getElementById('webchat').value,
            staffnum : document.getElementById('staffnum').value,
            regist_organ : document.getElementById('regist_organ').value,
            regaddr : document.getElementById('regaddr').value,
            offaddr : document.getElementById('offaddr').value,
            scope : document.getElementById('scope').value,
            mbus : document.getElementById('mbus').value,
            eprofile : document.getElementById('eprofile').value,
            remark : document.getElementById('remark').value,
            phoinf : "",
            indclass1 : document.getElementById('indclass1').value,
            indclass2 : document.getElementById('indclass2').value,
            indclass3 : document.getElementById('indclass3').value,
            indclass4 : document.getElementById('indclass4').value,
            csrc_type1 : document.getElementById('csrc_type1').value,
            csrc_type2 : document.getElementById('csrc_type2').value,
            csrc_type3 : "",
            csrc_type4 : "",
            type_enterp : false,
            type_server : document.getElementById('type_server').checked,
            type_investors : document.getElementById('type_investors').checked,
            type_govermt : document.getElementById('type_govermt').checked,
            demand_rz : document.getElementById('demand_rz').checked,
            demand_px : document.getElementById('demand_px').checked,
            demand_rl : document.getElementById('demand_rl').checked
        },
        url: '/enter/add_corp_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_contact_add(corp_id) {

    Ext.Ajax.request({
        method: "POST",
        params: {
            cont_corp_id : corp_id,
            cont_name : document.getElementById('cont_name').value,
            cont_psotion : document.getElementById('cont_psotion').value,
            cont_edoctype : document.getElementById('cont_edoctype').value,
            cont_edocnum : document.getElementById('cont_edocnum').value,
            cont_ephone : document.getElementById('cont_ephone').value,
            cont_efax : document.getElementById('cont_efax').value,
            cont_eemail : document.getElementById('cont_eemail').value,
            cont_eqq : document.getElementById('cont_eqq').value,
            cont_webchat : document.getElementById('cont_webchat').value,
            cont_tel : document.getElementById('cont_tel').value,
            cont_bz : document.getElementById('cont_bz').value
        },
        url: '/enter/add_corp_contact_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_shareholder_add(corp_id) {
    var tab=document.getElementById("table_corp_sh");
    var rows=tab.rows;
    for(var i=2;i<rows.length;i++)
    {
            Ext.Ajax.request({
                method: "POST",
                params: {
                    gd_corp_id : corp_id,
                    gd_shtype : rows[i].cells[0].innerHTML,
                    gd_shname : rows[i].cells[1].innerHTML,
                    gd_shdoctype : rows[i].cells[2].innerHTML,
                    gd_shdocnum : rows[i].cells[3].innerHTML,
                    gd_shareholdnum : rows[i].cells[4].innerHTML,
                    gd_currencynum : rows[i].cells[5].innerHTML,
                    gd_freezenum : rows[i].cells[6].innerHTML,
                    gd_psotion : rows[i].cells[7].innerHTML,
                    gd_phone : rows[i].cells[8].innerHTML,
                    gd_fax : rows[i].cells[9].innerHTML,
                    gd_email : rows[i].cells[10].innerHTML,
                    gd_qq : rows[i].cells[11].innerHTML,
                    gd_webchat : rows[i].cells[12].innerHTML,
                    gd_tel : rows[i].cells[13].innerHTML,
                    gd_remark : rows[i].cells[14].innerHTML,
                    gd_doctype : "",
                    gd_docnum : ""
                },
                url: '/enter/add_corp_shareholder_info',
                success: function () {
                    Ext.Msg.alert("提示", "保存成功！");
                },
                failure: function () {
                    Ext.Msg.alert("提示", "保存失败！");
                }
            });
    }

};
function obt_corp_finance_add(corp_id) {
    Ext.Ajax.request({
        method: "POST",
        params: {
            fin_corp_id : corp_id,
            start_time : document.getElementById('start_time').value,
            end_time : document.getElementById('end_time').value,
            st_money_fund : document.getElementById('st_money_fund').value,
            end_money_fund : document.getElementById('end_money_fund').value,
            st_jyxjr_assets : document.getElementById('st_jyxjr_assets').value,
            end_jyxjr_assets : document.getElementById('end_jyxjr_assets').value,
            st_ys_bill : document.getElementById('st_ys_bill').value,
            end_ys_bill : document.getElementById('end_ys_bill').value,
            st_ys_account : document.getElementById('st_ys_account').value,
            end_ys_account : document.getElementById('end_ys_account').value,
            st_yf_money : document.getElementById('st_yf_money').value,
            end_yf_money : document.getElementById('end_yf_money').value,
            st_ys_interest : document.getElementById('st_ys_interest').value,
            end_ys_interest : document.getElementById('end_ys_interest').value,
            st_ys_dividends : document.getElementById('st_ys_dividends').value,
            end_ys_dividends : document.getElementById('end_ys_dividends').value,
            st_other_ys_money : document.getElementById('st_other_ys_money').value,
            end_other_ys_money : document.getElementById('end_other_ys_money').value,
            st_inventory : document.getElementById('st_inventory').value,
            end_inventory : document.getElementById('end_inventory').value,
            st_ynndq_no_assets : document.getElementById('st_ynndq_no_assets').value,
            end_ynndq_no_assets : document.getElementById('end_ynndq_no_assets').value,
            st_other_assets : document.getElementById('st_other_assets').value,
            end_other_assets : document.getElementById('end_other_assets').value,
            st_hj_assets : document.getElementById('st_hj_assets').value,
            end_hj_assets : document.getElementById('end_hj_assets').value,
            st_kgcs_assets : document.getElementById('st_kgcs_assets').value,
            end_kgcs_assets : document.getElementById('end_kgcs_assets').value,
            st_cyzdq_investment : document.getElementById('st_cyzdq_investment').value,
            end_cyzdq_investment : document.getElementById('end_cyzdq_investment').value,
            st_long_ys_money : document.getElementById('st_long_ys_money').value,
            end_long_ys_money : document.getElementById('end_long_ys_money').value,
            st_long_gq_investment : document.getElementById('st_long_gq_investment').value,
            end_long_gq_investment : document.getElementById('end_long_gq_investment').value,
            st_invest_house : document.getElementById('st_invest_house').value,
            end_invest_house : document.getElementById('end_invest_house').value,
            st_gd_assets : document.getElementById('st_gd_assets').value,
            end_gd_assets : document.getElementById('end_gd_assets').value,
            st_accu_deprec : document.getElementById('st_accu_deprec').value,
            end_accu_deprec : document.getElementById('end_accu_deprec').value,
            st_gd_assets_jz : document.getElementById('st_gd_assets_jz').value,
            end_gd_assets_jz : document.getElementById('end_gd_assets_jz').value,
            st_gd_assets_ready : document.getElementById('st_gd_assets_ready').value,
            end_gd_assets_ready : document.getElementById('end_gd_assets_ready').value,
            st_gd_assets_je : document.getElementById('st_gd_assets_je').value,
            end_gd_assets_je : document.getElementById('end_gd_assets_je').value,
            st_now_project : document.getElementById('st_now_project').value,
            end_now_project : document.getElementById('end_now_project').value,
            st_project_material : document.getElementById('st_project_material').value,
            end_project_material : document.getElementById('end_project_material').value,
            st_gd_assets_ql : document.getElementById('st_gd_assets_ql').value,
            end_gd_assets_ql : document.getElementById('end_gd_assets_ql').value,
            st_scx_investment : document.getElementById('st_scx_investment').value,
            end_scx_investment : document.getElementById('end_scx_investment').value,
            st_wx_assets : document.getElementById('st_wx_assets').value,
            end_wx_assets : document.getElementById('end_wx_assets').value,
            st_goodwill : document.getElementById('st_goodwill').value,
            end_goodwill : document.getElementById('end_goodwill').value,
            st_cqdt_cost : document.getElementById('st_cqdt_cost').value,
            end_cqdt_cost : document.getElementById('end_cqdt_cost').value,
            st_dysds_assets : document.getElementById('st_dysds_assets').value,
            end_dysds_assets : document.getElementById('end_dysds_assets').value,
            st_other_no_assets : document.getElementById('st_other_no_assets').value,
            end_other_no_assets : document.getElementById('end_other_no_assets').value,
            st_hj_no_asset : document.getElementById('st_hj_no_asset').value,
            end_hj_no_asset : document.getElementById('end_hj_no_asset').value,
            st_hj_total_asset : document.getElementById('st_hj_total_asset').value,
            end_hj_total_asset : document.getElementById('end_hj_total_asset').value,
            st_short_borrow : document.getElementById('st_short_borrow').value,
            end_short_borrow : document.getElementById('end_short_borrow').value,
            st_jyx_finance_fz : document.getElementById('st_jyx_finance_fz').value,
            end_jyx_finance_fz : document.getElementById('end_jyx_finance_fz').value,
            st_yf_bill : document.getElementById('st_yf_bill').value,
            end_yf_bill : document.getElementById('end_yf_bill').value,
            st_yf_account : document.getElementById('st_yf_account').value,
            end_yf_account : document.getElementById('end_yf_account').value,
            st_ys_money : document.getElementById('st_ys_money').value,
            end_ys_money : document.getElementById('end_ys_money').value,
            st_yf_staff_pay : document.getElementById('st_yf_staff_pay').value,
            end_yf_staff_pay : document.getElementById('end_yf_staff_pay').value,
            st_yj_tax : document.getElementById('st_yj_tax').value,
            end_yj_tax : document.getElementById('end_yj_tax').value,
            st_yf_interest : document.getElementById('st_yf_interest').value,
            end_yf_interest : document.getElementById('end_yf_interest').value,
            st_yf_dividends : document.getElementById('st_yf_dividends').value,
            end_yf_dividends : document.getElementById('end_yf_dividends').value,
            st_other_yf_money : document.getElementById('st_other_yf_money').value,
            end_other_yf_money : document.getElementById('end_other_yf_money').value,
            st_ynndq_no_fz : document.getElementById('st_ynndq_no_fz').value,
            end_ynndq_no_fz : document.getElementById('end_ynndq_no_fz').value,
            st_other_fz : document.getElementById('st_other_fz').value,
            end_other_fz : document.getElementById('end_other_fz').value,
            st_hj_fz : document.getElementById('st_hj_fz').value,
            end_hj_fz : document.getElementById('end_hj_fz').value,
            st_long_borrow : document.getElementById('st_long_borrow').value,
            end_long_borrow : document.getElementById('end_long_borrow').value,
            st_yf_bond : document.getElementById('st_yf_bond').value,
            end_yf_bond : document.getElementById('end_yf_bond').value,
            st_long_yf_money : document.getElementById('st_long_yf_money').value,
            end_long_yf_money : document.getElementById('end_long_yf_money').value,
            st_zx_yf_money : document.getElementById('st_zx_yf_money').value,
            end_zx_yf_money : document.getElementById('end_zx_yf_money').value,
            st_yj_fz : document.getElementById('st_yj_fz').value,
            end_yj_fz : document.getElementById('end_yj_fz').value,
            st_dysds_fz : document.getElementById('st_dysds_fz').value,
            end_dysds_fz : document.getElementById('end_dysds_fz').value,
            st_other_no_fz : document.getElementById('st_other_no_fz').value,
            end_other_no_fz : document.getElementById('end_other_no_fz').value,
            st_hj_no_fz : document.getElementById('st_hj_no_fz').value,
            end_hj_no_fz : document.getElementById('end_hj_no_fz').value,
            st_hj_total_fz : document.getElementById('st_hj_total_fz').value,
            end_hj_total_fz : document.getElementById('end_hj_total_fz').value,
            st_paid_assets : document.getElementById('st_paid_assets').value,
            end_paid_assets : document.getElementById('end_paid_assets').value,
            st_zb_reserve : document.getElementById('st_zb_reserve').value,
            end_zb_reserve : document.getElementById('end_zb_reserve').value,
            st_kc_stock : document.getElementById('st_kc_stock').value,
            end_kc_stock : document.getElementById('end_kc_stock').value,
            st_zx_reserve : document.getElementById('st_zx_reserve').value,
            end_zx_reserve : document.getElementById('end_zx_reserve').value,
            st_yy_reserve : document.getElementById('st_yy_reserve').value,
            end_yy_reserve : document.getElementById('end_yy_reserve').value,
            st_wfp_profit : document.getElementById('st_wfp_profit').value,
            end_wfp_profit : document.getElementById('end_wfp_profit').value,
            st_hj_owner_right : document.getElementById('st_hj_owner_right').value,
            end_hj_owner_right : document.getElementById('end_hj_owner_right').value,
            st_hj_fz_owner_right : document.getElementById('st_hj_fz_owner_right').value,
            end_hj_fz_owner_right : document.getElementById('end_hj_fz_owner_right').value
        },
        url: '/enter/add_corp_finance_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_maintain_add(corp_id) {
    Ext.Ajax.request({
        method: "POST",
        params: {
            mai_corp_id : corp_id,
            mai_changer_id : document.getElementById('mai_changer_id').value,
            mai_changer_dt : document.getElementById('mai_changer_dt').value,
            mai_changer_dept : document.getElementById('mai_changer_dept').value,
            mai_recomdt : document.getElementById('mai_recomdt').value,
            mai_trusteeship : document.getElementById('mai_trusteeship').value,
            mai_listst : document.getElementById('mai_listst').value,
            mai_eclass : document.getElementById('mai_eclass').value,
            mai_maintain : document.getElementById('mai_maintain').value,
            mai_reserve : document.getElementById('mai_reserve').value,
            mai_emaint : document.getElementById('mai_emaint').value,
            mai_dept : document.getElementById('mai_dept').value,
            mai_post : document.getElementById('mai_post').value,
            mai_tel : document.getElementById('mai_tel').value,
            mai_phone : document.getElementById('mai_phone').value,
            mai_fax : document.getElementById('mai_fax').value,
            mai_email : document.getElementById('mai_email').value,
            mai_qq : document.getElementById('mai_qq').value,
            mai_webchat : document.getElementById('mai_webchat').value,
            mai_bz : document.getElementById('mai_bz').value
        },
        url: '/enter/add_corp_maintain_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_government_add(corp_id) {
    Ext.Ajax.request({
        method: "POST",
        params: {
            gov_corp_id : corp_id,
            gov_domain : document.getElementById('gov_domain').value,
            gov_office : document.getElementById('gov_office').value,
            gov_desc : document.getElementById('gov_desc').value,
            gov_contact : document.getElementById('gov_contact').value,
            gov_psotion : document.getElementById('gov_psotion').value,
            gov_doctype : document.getElementById('gov_doctype').value,
            gov_docnum : document.getElementById('gov_docnum').value,
            gov_phone : document.getElementById('gov_phone').value,
            gov_fax : document.getElementById('gov_fax').value,
            gov_email : document.getElementById('gov_email').value,
            gov_qq : document.getElementById('gov_qq').value,
            gov_webchat : document.getElementById('gov_webchat').value,
            gov_tel : document.getElementById('gov_tel').value,
            gov_remark : document.getElementById('gov_remark').value
        },
        url: '/enter/add_corp_government_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_investors_add(corp_id) {
    Ext.Ajax.request({
        method: "POST",
        params: {
            inv_corp_id :corp_id,
            inv_domain : document.getElementById('inv_domain').value,
            inv_csrc_type1 : document.getElementById('inv_csrc_type1').value,
            inv_csrc_type2 : document.getElementById('inv_csrc_type2').value,
            inv_csrc_type3 : document.getElementById('inv_csrc_type3').value,
            inv_csrc_type4 : document.getElementById('inv_csrc_type4').value,
            inv_indclass1 : document.getElementById('inv_indclass1').value,
            inv_indclass2 : document.getElementById('inv_indclass2').value,
            inv_indclass3 : "",
            inv_indclass4 : "",
            inv_contact : document.getElementById('inv_contact').value,
            inv_psotion : document.getElementById('inv_psotion').value,
            inv_doctype : document.getElementById('inv_doctype').value,
            inv_docnum : document.getElementById('inv_docnum').value,
            inv_phone : document.getElementById('inv_phone').value,
            inv_fax : document.getElementById('inv_fax').value,
            inv_email : document.getElementById('inv_email').value,
            inv_qq : document.getElementById('inv_qq').value,
            inv_webchat : document.getElementById('inv_webchat').value,
            inv_tel : document.getElementById('inv_tel').value,
            inv_remark : document.getElementById('inv_remark').value
        },
        url: '/enter/add_corp_investors_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_service_add(corp_id) {
    Ext.Ajax.request({
        method: "POST",
        params: {
            srv_corp_id :corp_id,
            srv_name : document.getElementById('srv_name').value,
            srv_type : document.getElementById('srv_type').value,
            srv_content : document.getElementById('srv_content').value,
            srv_levels : document.getElementById('srv_levels').value,
            srv_domain : document.getElementById('srv_domain').value,
            srv_penalty : document.getElementById('srv_penalty').value,
            srv_examiner : document.getElementById('srv_examiner').value,
            srv_post : document.getElementById('srv_post').value,
            srv_descs : document.getElementById('srv_descs').value,
            srv_remark : document.getElementById('srv_remark').value
        },
        url: '/enter/add_corp_service_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_refinancing_add(corp_id) {
    Ext.Ajax.request({
        method: "POST",
        params: {
            refi_corp_id :corp_id,
            refi_amounts : document.getElementById('refi_amounts').value,
            refi_use : document.getElementById('refi_use').value,
            refi_financ : document.getElementById('refi_financ').value,
            refi_security : document.getElementById('refi_security').value,
            refi_acc_cost : document.getElementById('refi_acc_cost').value,
            refi_deadline : document.getElementById('refi_deadline').value,
            refi_desc : document.getElementById('refi_desc').value
        },
        url: '/enter/add_corp_refinancing_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_rehr_add(corp_id) {
    Ext.Ajax.request({
        method: "POST",
        params: {
            rehr_corp_id : corp_id,
            rehr_post : document.getElementById('rehr_post').value,
            rehr_num : document.getElementById('rehr_num').value,
            rehr_salary : document.getElementById('rehr_salary').value,
            rehr_sex_req : document.getElementById('rehr_sex_req').value,
            rehr_age_req : document.getElementById('rehr_age_req').value,
            rehr_requests : document.getElementById('rehr_requests').value
        },
        url: '/enter/add_corp_rehr_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_retrain_add(corp_id) {
    Ext.Ajax.request({
        method: "POST",
        params: {
            retra_corp_id : corp_id,
            retra_mode : document.getElementById('retra_mode').value,
            retra_content : document.getElementById('retra_content').value,
            retra_acc_cost : document.getElementById('retra_acc_cost').value,
            retra_dt : document.getElementById('retra_dt').value,
            retra_requests : document.getElementById('retra_requests').value
        },
        url: '/enter/add_corp_retrain_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};


