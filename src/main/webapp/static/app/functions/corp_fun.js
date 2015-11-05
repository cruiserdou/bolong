//政府部门信息管理
Ext.define('app.functions.corp_fun', {});
function obt_corp_government_manage_update(gov_id) {
    var form_obt_edit = document.getElementById("apply_government_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            gov_id: gov_id,
            gov_domain: form_obt_edit['gov_domain'].value,
            gov_office: form_obt_edit['gov_office'].value,
            gov_desc: form_obt_edit['gov_desc'].value,
            gov_contact: form_obt_edit['gov_contact'].value,
            gov_psotion: form_obt_edit['gov_psotion'].value,
            gov_doctype: form_obt_edit['gov_doctype'].value,
            gov_docnum: form_obt_edit['gov_docnum'].value,
            gov_phone: form_obt_edit['gov_phone'].value,
            gov_fax: form_obt_edit['gov_fax'].value,
            gov_email: form_obt_edit['gov_email'].value,
            gov_qq: form_obt_edit['gov_qq'].value,
            gov_webchat: form_obt_edit['gov_webchat'].value,
            gov_tel: form_obt_edit['gov_tel'].value,
            gov_remark: form_obt_edit['gov_remark'].value
        },
        url: '/bolong/update_corp_government_info',
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
            inv_id: inv_id,
            inv_domain: form_obt_edit['inv_domain'].value,
            inv_csrc_type1: form_obt_edit['inv_csrc_type1'].value,
            inv_csrc_type2: form_obt_edit['inv_csrc_type2'].value,
            inv_csrc_type3: form_obt_edit['inv_csrc_type3'].value,
            inv_csrc_type4: form_obt_edit['inv_csrc_type4'].value,
            inv_indclass1: form_obt_edit['inv_indclass1'].value,
            inv_indclass2: form_obt_edit['inv_indclass2'].value,
            inv_indclass3: "",
            inv_indclass4: "",
            inv_contact: form_obt_edit['inv_contact'].value,
            inv_psotion: form_obt_edit['inv_psotion'].value,
            inv_doctype: form_obt_edit['inv_doctype'].value,
            inv_docnum: form_obt_edit['inv_docnum'].value,
            inv_phone: form_obt_edit['inv_phone'].value,
            inv_fax: form_obt_edit['inv_fax'].value,
            inv_email: form_obt_edit['inv_email'].value,
            inv_qq: form_obt_edit['inv_qq'].value,
            inv_webchat: form_obt_edit['inv_webchat'].value,
            inv_tel: form_obt_edit['inv_tel'].value,
            inv_remark: form_obt_edit['inv_remark'].value
        },
        url: '/bolong/update_corp_investors_info',
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
            srv_id: srv_id,
            srv_name: form_obt_edit['srv_name'].value,
            srv_type: form_obt_edit['srv_type'].value,
            srv_content: form_obt_edit['srv_content'].value,
            srv_levels: form_obt_edit['srv_levels'].value,
            srv_domain: form_obt_edit['srv_domain'].value,
            srv_penalty: form_obt_edit['srv_penalty'].value,
            srv_examiner: form_obt_edit['srv_examiner'].value,
            srv_post: form_obt_edit['srv_post'].value,
            srv_descs: form_obt_edit['srv_descs'].value,
            srv_remark: form_obt_edit['srv_remark'].value
        },
        url: '/bolong/update_corp_service_info',
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
            rehr_id: rehr_id,
            rehr_post: form_obt_edit['rehr_post'].value,
            rehr_num: form_obt_edit['rehr_num'].value,
            rehr_salary: form_obt_edit['rehr_salary'].value,
            rehr_sex_req: form_obt_edit['rehr_sex_req'].value,
            rehr_age_req: form_obt_edit['rehr_age_req'].value,
            rehr_requests: form_obt_edit['rehr_requests'].value
        },
        url: '/bolong/update_corp_rehr_info',
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
            refi_id: refi_id,
            refi_amounts: form_obt_edit['refi_amounts'].value,
            refi_use: form_obt_edit['refi_use'].value,
            refi_financ: form_obt_edit['refi_financ'].value,
            refi_security: form_obt_edit['refi_security'].value,
            refi_acc_cost: form_obt_edit['refi_acc_cost'].value,
            refi_deadline: form_obt_edit['refi_deadline'].value,
            refi_desc: form_obt_edit['refi_desc'].value
        },
        url: '/bolong/update_corp_refinancing_info',
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
            retra_id: retra_id,
            retra_mode: form_obt_edit['retra_mode'].value,
            retra_content: form_obt_edit['retra_content'].value,
            retra_acc_cost: form_obt_edit['retra_acc_cost'].value,
            retra_dt: form_obt_edit['retra_dt'].value,
            retra_requests: form_obt_edit['retra_requests'].value
        },
        url: '/bolong/update_corp_retrain_info',
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
    //var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            id: corp_id,
            buslicno: Ext.get('buslicno').getValue(),
            name: Ext.get('name').getValue(),
            unit: Ext.get('unit').getValue(),
            legrep: Ext.get('legrep').getValue(),
            province: Ext.get('province').getValue(),
            city: Ext.get('city').getValue(),
            county: Ext.get('county').getValue(),
            nos: Ext.get('nos').getValue(),
            postal: Ext.get('postal').getValue(),
            nature: Ext.get('nature').getValue(),
            regcap: Ext.get('regcap').getValue(),
            bustermfdt: Ext.get('bustermfdt').getValue(),
            bustremtdt: Ext.get('bustremtdt').getValue(),
            regdt: Ext.get('regdt').getValue(),
            list_area: Ext.get('list_area').getValue(),
            listcode: Ext.get('listcode').getValue(),
            listprice: Ext.get('listprice').getValue(),
            listdt: Ext.get('listdt').getValue(),
            channels: Ext.get('channels').getValue(),
            webchat: Ext.get('webchat').getValue(),
            staffnum: Ext.get('staffnum').getValue(),
            regist_organ: Ext.get('regist_organ').getValue(),
            regaddr: Ext.get('regaddr').getValue(),
            offaddr: Ext.get('offaddr').getValue(),
            scope: Ext.get('scope').getValue(),
            mbus: Ext.get('mbus').getValue(),
            eprofile: Ext.get('eprofile').getValue(),
            remark: Ext.get('remark').getValue(),
            phoinf: "",
            indclass1: Ext.get('indclass1').getValue(),
            indclass2: Ext.get('indclass2').getValue(),
            indclass3: Ext.get('indclass3').getValue(),
            indclass4: Ext.get('indclass4').getValue(),
            csrc_type1: Ext.get('csrc_type1').getValue(),
            csrc_type2: Ext.get('csrc_type2').getValue(),
            csrc_type3: "",
            csrc_type4: "",
            type_enterp: true,
            type_server: Ext.get('type_server').getValue(),
            type_investors: Ext.get('type_investors').getValue(),
            type_govermt: Ext.get('type_govermt').getValue(),
            demand_rz: Ext.get('demand_rz').getValue(),
            demand_px: Ext.get('demand_px').getValue(),
            demand_rl: Ext.get('demand_rl').getValue()
        },
        url: '/bolong/update_corp_info',
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
    Ext.Ajax.request({
        method: "POST",
        params: {
            cont_id: cont_id,
            cont_name: Ext.get('cont_name').getValue(),
            cont_psotion: Ext.get('cont_psotion').getValue(),
            cont_edoctype: Ext.get('cont_edoctype').getValue(),
            cont_edocnum: Ext.get('cont_edocnum').getValue(),
            cont_ephone: Ext.get('cont_ephone').getValue(),
            cont_efax: Ext.get('cont_efax').getValue(),
            cont_eemail: Ext.get('cont_eemail').getValue(),
            cont_eqq: Ext.get('cont_eqq').getValue(),
            cont_webchat: Ext.get('cont_webchat').getValue(),
            cont_tel: Ext.get('cont_tel').getValue(),
            cont_bz: Ext.get('cont_bz').getValue()
        },
        url: '/bolong/update_corp_contact_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

//股东信息更新
function obt_corp_shareholder_update(corp_id) {
    var tab = document.getElementById("table_corp_sh");
    var rows = tab.rows;
    for (var i = 2; i < rows.length; i++) {
        Ext.Ajax.request({
            method: "POST",
            params: {
                gd_corp_id: corp_id,
                gd_shtype: rows[i].cells[0].innerHTML,
                gd_shname: rows[i].cells[1].innerHTML,
                gd_shdoctype: rows[i].cells[2].innerHTML,
                gd_shdocnum: rows[i].cells[3].innerHTML,
                gd_shareholdnum: rows[i].cells[4].innerHTML,
                gd_currencynum: rows[i].cells[5].innerHTML,
                gd_freezenum: rows[i].cells[6].innerHTML,
                gd_psotion: rows[i].cells[7].innerHTML,
                gd_phone: rows[i].cells[8].innerHTML,
                gd_fax: rows[i].cells[9].innerHTML,
                gd_email: rows[i].cells[10].innerHTML,
                gd_qq: rows[i].cells[11].innerHTML,
                gd_webchat: rows[i].cells[12].innerHTML,
                gd_tel: rows[i].cells[13].innerHTML,
                gd_remark: rows[i].cells[14].innerHTML,
                gd_doctype: "",
                gd_docnum: ""
            },
            url: '/bolong/add_corp_shareholder_info',
            success: function () {
                Ext.Msg.alert("提示", "保存成功！");
            },
            failure: function () {
                Ext.Msg.alert("提示", "保存失败！");
            }
        });
    }
};

//财务信息更新
function obt_corp_finance_update(finid) {
    Ext.Ajax.request({
        method: "POST",
        params: {
            finid: finid,
            start_time: Ext.get('start_time').getValue(),
            end_time: Ext.get('end_time').getValue(),
            st_money_fund: Ext.get('st_money_fund').getValue(),
            end_money_fund: Ext.get('end_money_fund').getValue(),
            st_jyxjr_assets: Ext.get('st_jyxjr_assets').getValue(),
            end_jyxjr_assets: Ext.get('end_jyxjr_assets').getValue(),
            st_ys_bill: Ext.get('st_ys_bill').getValue(),
            end_ys_bill: Ext.get('end_ys_bill').getValue(),
            st_ys_account: Ext.get('st_ys_account').getValue(),
            end_ys_account: Ext.get('end_ys_account').getValue(),
            st_yf_money: Ext.get('st_yf_money').getValue(),
            end_yf_money: Ext.get('end_yf_money').getValue(),
            st_ys_interest: Ext.get('st_ys_interest').getValue(),
            end_ys_interest: Ext.get('end_ys_interest').getValue(),
            st_ys_dividends: Ext.get('st_ys_dividends').getValue(),
            end_ys_dividends: Ext.get('end_ys_dividends').getValue(),
            st_other_ys_money: Ext.get('st_other_ys_money').getValue(),
            end_other_ys_money: Ext.get('end_other_ys_money').getValue(),
            st_inventory: Ext.get('st_inventory').getValue(),
            end_inventory: Ext.get('end_inventory').getValue(),
            st_ynndq_no_assets: Ext.get('st_ynndq_no_assets').getValue(),
            end_ynndq_no_assets: Ext.get('end_ynndq_no_assets').getValue(),
            st_other_assets: Ext.get('st_other_assets').getValue(),
            end_other_assets: Ext.get('end_other_assets').getValue(),
            st_hj_assets: Ext.get('st_hj_assets').getValue(),
            end_hj_assets: Ext.get('end_hj_assets').getValue(),
            st_kgcs_assets: Ext.get('st_kgcs_assets').getValue(),
            end_kgcs_assets: Ext.get('end_kgcs_assets').getValue(),
            st_cyzdq_investment: Ext.get('st_cyzdq_investment').getValue(),
            end_cyzdq_investment: Ext.get('end_cyzdq_investment').getValue(),
            st_long_ys_money: Ext.get('st_long_ys_money').getValue(),
            end_long_ys_money: Ext.get('end_long_ys_money').getValue(),
            st_long_gq_investment: Ext.get('st_long_gq_investment').getValue(),
            end_long_gq_investment: Ext.get('end_long_gq_investment').getValue(),
            st_invest_house: Ext.get('st_invest_house').getValue(),
            end_invest_house: Ext.get('end_invest_house').getValue(),
            st_gd_assets: Ext.get('st_gd_assets').getValue(),
            end_gd_assets: Ext.get('end_gd_assets').getValue(),
            st_accu_deprec: Ext.get('st_accu_deprec').getValue(),
            end_accu_deprec: Ext.get('end_accu_deprec').getValue(),
            st_gd_assets_jz: Ext.get('st_gd_assets_jz').getValue(),
            end_gd_assets_jz: Ext.get('end_gd_assets_jz').getValue(),
            st_gd_assets_ready: Ext.get('st_gd_assets_ready').getValue(),
            end_gd_assets_ready: Ext.get('end_gd_assets_ready').getValue(),
            st_gd_assets_je: Ext.get('st_gd_assets_je').getValue(),
            end_gd_assets_je: Ext.get('end_gd_assets_je').getValue(),
            st_now_project: Ext.get('st_now_project').getValue(),
            end_now_project: Ext.get('end_now_project').getValue(),
            st_project_material: Ext.get('st_project_material').getValue(),
            end_project_material: Ext.get('end_project_material').getValue(),
            st_gd_assets_ql: Ext.get('st_gd_assets_ql').getValue(),
            end_gd_assets_ql: Ext.get('end_gd_assets_ql').getValue(),
            st_scx_investment: Ext.get('st_scx_investment').getValue(),
            end_scx_investment: Ext.get('end_scx_investment').getValue(),
            st_wx_assets: Ext.get('st_wx_assets').getValue(),
            end_wx_assets: Ext.get('end_wx_assets').getValue(),
            st_goodwill: Ext.get('st_goodwill').getValue(),
            end_goodwill: Ext.get('end_goodwill').getValue(),
            st_cqdt_cost: Ext.get('st_cqdt_cost').getValue(),
            end_cqdt_cost: Ext.get('end_cqdt_cost').getValue(),
            st_dysds_assets: Ext.get('st_dysds_assets').getValue(),
            end_dysds_assets: Ext.get('end_dysds_assets').getValue(),
            st_other_no_assets: Ext.get('st_other_no_assets').getValue(),
            end_other_no_assets: Ext.get('end_other_no_assets').getValue(),
            st_hj_no_asset: Ext.get('st_hj_no_asset').getValue(),
            end_hj_no_asset: Ext.get('end_hj_no_asset').getValue(),
            st_hj_total_asset: Ext.get('st_hj_total_asset').getValue(),
            end_hj_total_asset: Ext.get('end_hj_total_asset').getValue(),
            st_short_borrow: Ext.get('st_short_borrow').getValue(),
            end_short_borrow: Ext.get('end_short_borrow').getValue(),
            st_jyx_finance_fz: Ext.get('st_jyx_finance_fz').getValue(),
            end_jyx_finance_fz: Ext.get('end_jyx_finance_fz').getValue(),
            st_yf_bill: Ext.get('st_yf_bill').getValue(),
            end_yf_bill: Ext.get('end_yf_bill').getValue(),
            st_yf_account: Ext.get('st_yf_account').getValue(),
            end_yf_account: Ext.get('end_yf_account').getValue(),
            st_ys_money: Ext.get('st_ys_money').getValue(),
            end_ys_money: Ext.get('end_ys_money').getValue(),
            st_yf_staff_pay: Ext.get('st_yf_staff_pay').getValue(),
            end_yf_staff_pay: Ext.get('end_yf_staff_pay').getValue(),
            st_yj_tax: Ext.get('st_yj_tax').getValue(),
            end_yj_tax: Ext.get('end_yj_tax').getValue(),
            st_yf_interest: Ext.get('st_yf_interest').getValue(),
            end_yf_interest: Ext.get('end_yf_interest').getValue(),
            st_yf_dividends: Ext.get('st_yf_dividends').getValue(),
            end_yf_dividends: Ext.get('end_yf_dividends').getValue(),
            st_other_yf_money: Ext.get('st_other_yf_money').getValue(),
            end_other_yf_money: Ext.get('end_other_yf_money').getValue(),
            st_ynndq_no_fz: Ext.get('st_ynndq_no_fz').getValue(),
            end_ynndq_no_fz: Ext.get('end_ynndq_no_fz').getValue(),
            st_other_fz: Ext.get('st_other_fz').getValue(),
            end_other_fz: Ext.get('end_other_fz').getValue(),
            st_hj_fz: Ext.get('st_hj_fz').getValue(),
            end_hj_fz: Ext.get('end_hj_fz').getValue(),
            st_long_borrow: Ext.get('st_long_borrow').getValue(),
            end_long_borrow: Ext.get('end_long_borrow').getValue(),
            st_yf_bond: Ext.get('st_yf_bond').getValue(),
            end_yf_bond: Ext.get('end_yf_bond').getValue(),
            st_long_yf_money: Ext.get('st_long_yf_money').getValue(),
            end_long_yf_money: Ext.get('end_long_yf_money').getValue(),
            st_zx_yf_money: Ext.get('st_zx_yf_money').getValue(),
            end_zx_yf_money: Ext.get('end_zx_yf_money').getValue(),
            st_yj_fz: Ext.get('st_yj_fz').getValue(),
            end_yj_fz: Ext.get('end_yj_fz').getValue(),
            st_dysds_fz: Ext.get('st_dysds_fz').getValue(),
            end_dysds_fz: Ext.get('end_dysds_fz').getValue(),
            st_other_no_fz: Ext.get('st_other_no_fz').getValue(),
            end_other_no_fz: Ext.get('end_other_no_fz').getValue(),
            st_hj_no_fz: Ext.get('st_hj_no_fz').getValue(),
            end_hj_no_fz: Ext.get('end_hj_no_fz').getValue(),
            st_hj_total_fz: Ext.get('st_hj_total_fz').getValue(),
            end_hj_total_fz: Ext.get('end_hj_total_fz').getValue(),
            st_paid_assets: Ext.get('st_paid_assets').getValue(),
            end_paid_assets: Ext.get('end_paid_assets').getValue(),
            st_zb_reserve: Ext.get('st_zb_reserve').getValue(),
            end_zb_reserve: Ext.get('end_zb_reserve').getValue(),
            st_kc_stock: Ext.get('st_kc_stock').getValue(),
            end_kc_stock: Ext.get('end_kc_stock').getValue(),
            st_zx_reserve: Ext.get('st_zx_reserve').getValue(),
            end_zx_reserve: Ext.get('end_zx_reserve').getValue(),
            st_yy_reserve: Ext.get('st_yy_reserve').getValue(),
            end_yy_reserve: Ext.get('end_yy_reserve').getValue(),
            st_wfp_profit: Ext.get('st_wfp_profit').getValue(),
            end_wfp_profit: Ext.get('end_wfp_profit').getValue(),
            st_hj_owner_right: Ext.get('st_hj_owner_right').getValue(),
            end_hj_owner_right: Ext.get('end_hj_owner_right').getValue(),
            st_hj_fz_owner_right: Ext.get('st_hj_fz_owner_right').getValue(),
            end_hj_fz_owner_right: Ext.get('end_hj_fz_owner_right').getValue()
        },
        url: '/bolong/update_corp_finance_info',
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
    Ext.Ajax.request({
        method: "POST",
        params: {
            mai_id: mai_id,
            mai_changer_id: Ext.get('mai_changer_id').getValue(),
            mai_changer_dt: Ext.get('mai_changer_dt').getValue(),
            mai_changer_dept: Ext.get('mai_changer_dept').getValue(),
            mai_recomdt: Ext.get('mai_recomdt').getValue(),
            mai_trusteeship: Ext.get('mai_trusteeship').getValue(),
            mai_listst: Ext.get('mai_listst').getValue(),
            mai_eclass: Ext.get('mai_eclass').getValue(),
            mai_maintain: Ext.get('mai_maintain').getValue(),
            mai_reserve: Ext.get('mai_reserve').getValue(),
            mai_emaint: Ext.get('mai_emaint').getValue(),
            mai_dept: Ext.get('mai_dept').getValue(),
            mai_post: Ext.get('mai_post').getValue(),
            mai_tel: Ext.get('mai_tel').getValue(),
            mai_phone: Ext.get('mai_phone').getValue(),
            mai_fax: Ext.get('mai_fax').getValue(),
            mai_email: Ext.get('mai_email').getValue(),
            mai_qq: Ext.get('mai_qq').getValue(),
            mai_webchat: Ext.get('mai_webchat').getValue(),
            mai_bz: Ext.get('mai_bz').getValue()
        },
        url: '/bolong/update_corp_maintain_info',
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
    Ext.Ajax.request({
        method: "POST",
        params: {
            gov_id: gov_id,
            gov_domain: Ext.get('gov_domain').getValue(),
            gov_office: Ext.get('gov_office').getValue(),
            gov_desc: Ext.get('gov_desc').getValue(),
            gov_contact: Ext.get('gov_contact').getValue(),
            gov_psotion: Ext.get('gov_psotion').getValue(),
            gov_doctype: Ext.get('gov_doctype').getValue(),
            gov_docnum: Ext.get('gov_docnum').getValue(),
            gov_phone: Ext.get('gov_phone').getValue(),
            gov_fax: Ext.get('gov_fax').getValue(),
            gov_email: Ext.get('gov_email').getValue(),
            gov_qq: Ext.get('gov_qq').getValue(),
            gov_webchat: Ext.get('gov_webchat').getValue(),
            gov_tel: Ext.get('gov_tel').getValue(),
            gov_remark: Ext.get('gov_remark').getValue()
        },
        url: '/bolong/update_corp_government_info',
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
    Ext.Ajax.request({
        method: "POST",
        params: {
            inv_id: inv_id,
            inv_domain: Ext.get('inv_domain').getValue(),
            inv_csrc_type1: Ext.get('inv_csrc_type1').getValue(),
            inv_csrc_type2: Ext.get('inv_csrc_type2').getValue(),
            inv_csrc_type3: Ext.get('inv_csrc_type3').getValue(),
            inv_csrc_type4: Ext.get('inv_csrc_type4').getValue(),
            inv_indclass1: Ext.get('inv_indclass1').getValue(),
            inv_indclass2: Ext.get('inv_indclass2').getValue(),
            inv_indclass3: "",
            inv_indclass4: "",
            inv_contact: Ext.get('inv_contact').getValue(),
            inv_psotion: Ext.get('inv_psotion').getValue(),
            inv_doctype: Ext.get('inv_doctype').getValue(),
            inv_docnum: Ext.get('inv_docnum').getValue(),
            inv_phone: Ext.get('inv_phone').getValue(),
            inv_fax: Ext.get('inv_fax').getValue(),
            inv_email: Ext.get('inv_email').getValue(),
            inv_qq: Ext.get('inv_qq').getValue(),
            inv_webchat: Ext.get('inv_webchat').getValue(),
            inv_tel: Ext.get('inv_tel').getValue(),
            inv_remark: Ext.get('inv_remark').getValue()
        },
        url: '/bolong/update_corp_investors_info',
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
    Ext.Ajax.request({
        method: "POST",
        params: {
            srv_id: srv_id,
            //srv_corp_id :corp_id,
            srv_name: Ext.get('srv_name').getValue(),
            srv_type: Ext.get('srv_type').getValue(),
            srv_content: Ext.get('srv_content').getValue(),
            srv_levels: Ext.get('srv_levels').getValue(),
            srv_domain: Ext.get('srv_domain').getValue(),
            srv_penalty: Ext.get('srv_penalty').getValue(),
            srv_examiner: Ext.get('srv_examiner').getValue(),
            srv_post: Ext.get('srv_post').getValue(),
            srv_descs: Ext.get('srv_descs').getValue(),
            srv_remark: Ext.get('srv_remark').getValue()
        },
        url: '/bolong/update_corp_service_info',
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
    Ext.Ajax.request({
        method: "POST",
        params: {
            refi_id: refi_id,
            refi_amounts: Ext.get('refi_amounts').getValue(),
            refi_use: Ext.get('refi_use').getValue(),
            refi_financ: Ext.get('refi_financ').getValue(),
            refi_security: Ext.get('refi_security').getValue(),
            refi_acc_cost: Ext.get('refi_acc_cost').getValue(),
            refi_deadline: Ext.get('refi_deadline').getValue(),
            refi_desc: Ext.get('refi_desc').getValue()
        },
        url: '/bolong/update_corp_refinancing_info',
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
    Ext.Ajax.request({
        method: "POST",
        params: {
            rehr_id: rehr_id,
            rehr_post: Ext.get('rehr_post').getValue(),
            rehr_num: Ext.get('rehr_num').getValue(),
            rehr_salary: Ext.get('rehr_salary').getValue(),
            rehr_sex_req: Ext.get('rehr_sex_req').getValue(),
            rehr_age_req: Ext.get('rehr_age_req').getValue(),
            rehr_requests: Ext.get('rehr_requests').getValue()
        },
        url: '/bolong/update_corp_rehr_info',
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
    Ext.Ajax.request({
        method: "POST",
        params: {
            retra_id: retra_id,
            retra_mode: Ext.get('retra_mode').getValue(),
            retra_content: Ext.get('retra_content').getValue(),
            retra_acc_cost: Ext.get('retra_acc_cost').getValue(),
            retra_dt: Ext.get('retra_dt').getValue(),
            retra_requests: Ext.get('retra_requests').getValue()
        },
        url: '/bolong/update_corp_retrain_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

//添加企业信息
function obt_corp_add(corp_id) {
    Ext.Ajax.request({
        method: "POST",
        url: '/bolong/add_corp_info',
        params: {
            id: corp_id,
            buslicno: Ext.get('buslicno').getValue(),
            name: Ext.get('name').getValue(),
            unit: Ext.get('unit').getValue(),
            legrep: Ext.get('legrep').getValue(),
            province: Ext.get('province').getValue(),
            city: Ext.get('city').getValue(),
            county: Ext.get('country').getValue(),
            nos: Ext.get('nos').getValue(),
            postal: Ext.get('postal').getValue(),
            nature: Ext.get('nature').getValue(),
            regcap: Ext.get('regcap').getValue(),
            bustermfdt: Ext.get('bustermfdt').getValue(),
            bustremtdt: Ext.get('bustremtdt').getValue(),
            regdt: Ext.get('regdt').getValue(),
            list_area: Ext.get('list_area').getValue(),
            listcode: Ext.get('listcode').getValue(),
            listprice: Ext.get('listprice').getValue(),
            listdt: Ext.get('listdt').getValue(),
            channels: Ext.get('channels').getValue(),
            webchat: Ext.get('webchat').getValue(),
            staffnum: Ext.get('staffnum').getValue(),
            regist_organ: Ext.get('regist_organ').getValue(),
            regaddr: Ext.get('regaddr').getValue(),
            offaddr: Ext.get('offaddr').getValue(),
            scope: Ext.get('scope').getValue(),
            mbus: Ext.get('mbus').getValue(),
            eprofile: Ext.get('eprofile').getValue(),
            remark: Ext.get('remark').getValue(),
            phoinf: "",
            indclass1: Ext.get('indclass1').getValue(),
            indclass2: Ext.get('indclass2').getValue(),
            indclass3: Ext.get('indclass3').getValue(),
            indclass4: Ext.get('indclass4').getValue(),
            csrc_type1: Ext.get('csrc_type1').getValue(),
            csrc_type2: Ext.get('csrc_type2').getValue(),
            csrc_type3: "",
            csrc_type4: "",
            type_enterp: false,
            type_server: document.getElementById('type_server').checked,
            type_investors: document.getElementById('type_investors').checked,
            type_govermt: document.getElementById('type_govermt').checked,
            demand_rz: document.getElementById('demand_rz').checked,
            demand_px: document.getElementById('demand_px').checked,
            demand_rl: document.getElementById('demand_rl').checked
        },
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
            cont_corp_id: corp_id,
            cont_name: document.getElementById('cont_name').value,
            cont_psotion: document.getElementById('cont_psotion').value,
            cont_edoctype: document.getElementById('cont_edoctype').value,
            cont_edocnum: document.getElementById('cont_edocnum').value,
            cont_ephone: document.getElementById('cont_ephone').value,
            cont_efax: document.getElementById('cont_efax').value,
            cont_eemail: document.getElementById('cont_eemail').value,
            cont_eqq: document.getElementById('cont_eqq').value,
            cont_webchat: document.getElementById('cont_webchat').value,
            cont_tel: document.getElementById('cont_tel').value,
            cont_bz: document.getElementById('cont_bz').value
        },
        url: '/bolong/add_corp_contact_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_shareholder_add(corp_id) {
    var tab = document.getElementById("table_corp_sh");
    var rows = tab.rows;
    for (var i = 2; i < rows.length; i++) {
        Ext.Ajax.request({
            method: "POST",
            params: {
                gd_corp_id: corp_id,
                gd_shtype: rows[i].cells[0].innerHTML,
                gd_shname: rows[i].cells[1].innerHTML,
                gd_shdoctype: rows[i].cells[2].innerHTML,
                gd_shdocnum: rows[i].cells[3].innerHTML,
                gd_shareholdnum: rows[i].cells[4].innerHTML,
                gd_currencynum: rows[i].cells[5].innerHTML,
                gd_freezenum: rows[i].cells[6].innerHTML,
                gd_psotion: rows[i].cells[7].innerHTML,
                gd_phone: rows[i].cells[8].innerHTML,
                gd_fax: rows[i].cells[9].innerHTML,
                gd_email: rows[i].cells[10].innerHTML,
                gd_qq: rows[i].cells[11].innerHTML,
                gd_webchat: rows[i].cells[12].innerHTML,
                gd_tel: rows[i].cells[13].innerHTML,
                gd_remark: rows[i].cells[14].innerHTML,
                gd_doctype: "",
                gd_docnum: ""
            },
            url: '/bolong/add_corp_shareholder_info',
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
            fin_corp_id: corp_id,
            start_time: Ext.get('start_time').getValue(),
            end_time: Ext.get('end_time').getValue(),
            st_money_fund: Ext.get('st_money_fund').getValue(),
            end_money_fund: Ext.get('end_money_fund').getValue(),
            st_jyxjr_assets: Ext.get('st_jyxjr_assets').getValue(),
            end_jyxjr_assets: Ext.get('end_jyxjr_assets').getValue(),
            st_ys_bill: Ext.get('st_ys_bill').getValue(),
            end_ys_bill: Ext.get('end_ys_bill').getValue(),
            st_ys_account: Ext.get('st_ys_account').getValue(),
            end_ys_account: Ext.get('end_ys_account').getValue(),
            st_yf_money: Ext.get('st_yf_money').getValue(),
            end_yf_money: Ext.get('end_yf_money').getValue(),
            st_ys_interest: Ext.get('st_ys_interest').getValue(),
            end_ys_interest: Ext.get('end_ys_interest').getValue(),
            st_ys_dividends: Ext.get('st_ys_dividends').getValue(),
            end_ys_dividends: Ext.get('end_ys_dividends').getValue(),
            st_other_ys_money: Ext.get('st_other_ys_money').getValue(),
            end_other_ys_money: Ext.get('end_other_ys_money').getValue(),
            st_inventory: Ext.get('st_inventory').getValue(),
            end_inventory: Ext.get('end_inventory').getValue(),
            st_ynndq_no_assets: Ext.get('st_ynndq_no_assets').getValue(),
            end_ynndq_no_assets: Ext.get('end_ynndq_no_assets').getValue(),
            st_other_assets: Ext.get('st_other_assets').getValue(),
            end_other_assets: Ext.get('end_other_assets').getValue(),
            st_hj_assets: Ext.get('st_hj_assets').getValue(),
            end_hj_assets: Ext.get('end_hj_assets').getValue(),
            st_kgcs_assets: Ext.get('st_kgcs_assets').getValue(),
            end_kgcs_assets: Ext.get('end_kgcs_assets').getValue(),
            st_cyzdq_investment: Ext.get('st_cyzdq_investment').getValue(),
            end_cyzdq_investment: Ext.get('end_cyzdq_investment').getValue(),
            st_long_ys_money: Ext.get('st_long_ys_money').getValue(),
            end_long_ys_money: Ext.get('end_long_ys_money').getValue(),
            st_long_gq_investment: Ext.get('st_long_gq_investment').getValue(),
            end_long_gq_investment: Ext.get('end_long_gq_investment').getValue(),
            st_invest_house: Ext.get('st_invest_house').getValue(),
            end_invest_house: Ext.get('end_invest_house').getValue(),
            st_gd_assets: Ext.get('st_gd_assets').getValue(),
            end_gd_assets: Ext.get('end_gd_assets').getValue(),
            st_accu_deprec: Ext.get('st_accu_deprec').getValue(),
            end_accu_deprec: Ext.get('end_accu_deprec').getValue(),
            st_gd_assets_jz: Ext.get('st_gd_assets_jz').getValue(),
            end_gd_assets_jz: Ext.get('end_gd_assets_jz').getValue(),
            st_gd_assets_ready: Ext.get('st_gd_assets_ready').getValue(),
            end_gd_assets_ready: Ext.get('end_gd_assets_ready').getValue(),
            st_gd_assets_je: Ext.get('st_gd_assets_je').getValue(),
            end_gd_assets_je: Ext.get('end_gd_assets_je').getValue(),
            st_now_project: Ext.get('st_now_project').getValue(),
            end_now_project: Ext.get('end_now_project').getValue(),
            st_project_material: Ext.get('st_project_material').getValue(),
            end_project_material: Ext.get('end_project_material').getValue(),
            st_gd_assets_ql: Ext.get('st_gd_assets_ql').getValue(),
            end_gd_assets_ql: Ext.get('end_gd_assets_ql').getValue(),
            st_scx_investment: Ext.get('st_scx_investment').getValue(),
            end_scx_investment: Ext.get('end_scx_investment').getValue(),
            st_wx_assets: Ext.get('st_wx_assets').getValue(),
            end_wx_assets: Ext.get('end_wx_assets').getValue(),
            st_goodwill: Ext.get('st_goodwill').getValue(),
            end_goodwill: Ext.get('end_goodwill').getValue(),
            st_cqdt_cost: Ext.get('st_cqdt_cost').getValue(),
            end_cqdt_cost: Ext.get('end_cqdt_cost').getValue(),
            st_dysds_assets: Ext.get('st_dysds_assets').getValue(),
            end_dysds_assets: Ext.get('end_dysds_assets').getValue(),
            st_other_no_assets: Ext.get('st_other_no_assets').getValue(),
            end_other_no_assets: Ext.get('end_other_no_assets').getValue(),
            st_hj_no_asset: Ext.get('st_hj_no_asset').getValue(),
            end_hj_no_asset: Ext.get('end_hj_no_asset').getValue(),
            st_hj_total_asset: Ext.get('st_hj_total_asset').getValue(),
            end_hj_total_asset: Ext.get('end_hj_total_asset').getValue(),
            st_short_borrow: Ext.get('st_short_borrow').getValue(),
            end_short_borrow: Ext.get('end_short_borrow').getValue(),
            st_jyx_finance_fz: Ext.get('st_jyx_finance_fz').getValue(),
            end_jyx_finance_fz: Ext.get('end_jyx_finance_fz').getValue(),
            st_yf_bill: Ext.get('st_yf_bill').getValue(),
            end_yf_bill: Ext.get('end_yf_bill').getValue(),
            st_yf_account: Ext.get('st_yf_account').getValue(),
            end_yf_account: Ext.get('end_yf_account').getValue(),
            st_ys_money: Ext.get('st_ys_money').getValue(),
            end_ys_money: Ext.get('end_ys_money').getValue(),
            st_yf_staff_pay: Ext.get('st_yf_staff_pay').getValue(),
            end_yf_staff_pay: Ext.get('end_yf_staff_pay').getValue(),
            st_yj_tax: Ext.get('st_yj_tax').getValue(),
            end_yj_tax: Ext.get('end_yj_tax').getValue(),
            st_yf_interest: Ext.get('st_yf_interest').getValue(),
            end_yf_interest: Ext.get('end_yf_interest').getValue(),
            st_yf_dividends: Ext.get('st_yf_dividends').getValue(),
            end_yf_dividends: Ext.get('end_yf_dividends').getValue(),
            st_other_yf_money: Ext.get('st_other_yf_money').getValue(),
            end_other_yf_money: Ext.get('end_other_yf_money').getValue(),
            st_ynndq_no_fz: Ext.get('st_ynndq_no_fz').getValue(),
            end_ynndq_no_fz: Ext.get('end_ynndq_no_fz').getValue(),
            st_other_fz: Ext.get('st_other_fz').getValue(),
            end_other_fz: Ext.get('end_other_fz').getValue(),
            st_hj_fz: Ext.get('st_hj_fz').getValue(),
            end_hj_fz: Ext.get('end_hj_fz').getValue(),
            st_long_borrow: Ext.get('st_long_borrow').getValue(),
            end_long_borrow: Ext.get('end_long_borrow').getValue(),
            st_yf_bond: Ext.get('st_yf_bond').getValue(),
            end_yf_bond: Ext.get('end_yf_bond').getValue(),
            st_long_yf_money: Ext.get('st_long_yf_money').getValue(),
            end_long_yf_money: Ext.get('end_long_yf_money').getValue(),
            st_zx_yf_money: Ext.get('st_zx_yf_money').getValue(),
            end_zx_yf_money: Ext.get('end_zx_yf_money').getValue(),
            st_yj_fz: Ext.get('st_yj_fz').getValue(),
            end_yj_fz: Ext.get('end_yj_fz').getValue(),
            st_dysds_fz: Ext.get('st_dysds_fz').getValue(),
            end_dysds_fz: Ext.get('end_dysds_fz').getValue(),
            st_other_no_fz: Ext.get('st_other_no_fz').getValue(),
            end_other_no_fz: Ext.get('end_other_no_fz').getValue(),
            st_hj_no_fz: Ext.get('st_hj_no_fz').getValue(),
            end_hj_no_fz: Ext.get('end_hj_no_fz').getValue(),
            st_hj_total_fz: Ext.get('st_hj_total_fz').getValue(),
            end_hj_total_fz: Ext.get('end_hj_total_fz').getValue(),
            st_paid_assets: Ext.get('st_paid_assets').getValue(),
            end_paid_assets: Ext.get('end_paid_assets').getValue(),
            st_zb_reserve: Ext.get('st_zb_reserve').getValue(),
            end_zb_reserve: Ext.get('end_zb_reserve').getValue(),
            st_kc_stock: Ext.get('st_kc_stock').getValue(),
            end_kc_stock: Ext.get('end_kc_stock').getValue(),
            st_zx_reserve: Ext.get('st_zx_reserve').getValue(),
            end_zx_reserve: Ext.get('end_zx_reserve').getValue(),
            st_yy_reserve: Ext.get('st_yy_reserve').getValue(),
            end_yy_reserve: Ext.get('end_yy_reserve').getValue(),
            st_wfp_profit: Ext.get('st_wfp_profit').getValue(),
            end_wfp_profit: Ext.get('end_wfp_profit').getValue(),
            st_hj_owner_right: Ext.get('st_hj_owner_right').getValue(),
            end_hj_owner_right: Ext.get('end_hj_owner_right').getValue(),
            st_hj_fz_owner_right: Ext.get('st_hj_fz_owner_right').getValue(),
            end_hj_fz_owner_right: Ext.get('end_hj_fz_owner_right').getValue()
        },
        url: '/bolong/add_corp_finance_info',
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
            mai_corp_id: corp_id,
            mai_changer_id: Ext.get('mai_changer_id').getValue(),
            mai_changer_dt: Ext.get('mai_changer_dt').getValue(),
            mai_changer_dept: Ext.get('mai_changer_dept').getValue(),
            mai_recomdt: Ext.get('mai_recomdt').getValue(),
            mai_trusteeship: Ext.get('mai_trusteeship').getValue(),
            mai_listst: Ext.get('mai_listst').getValue(),
            mai_eclass: Ext.get('mai_eclass').getValue(),
            mai_maintain: Ext.get('mai_maintain').getValue(),
            mai_reserve: Ext.get('mai_reserve').getValue(),
            mai_emaint: Ext.get('mai_emaint').getValue(),
            mai_dept: Ext.get('mai_dept').getValue(),
            mai_post: Ext.get('mai_post').getValue(),
            mai_tel: Ext.get('mai_tel').getValue(),
            mai_phone: Ext.get('mai_phone').getValue(),
            mai_fax: Ext.get('mai_fax').getValue(),
            mai_email: Ext.get('mai_email').getValue(),
            mai_qq: Ext.get('mai_qq').getValue(),
            mai_webchat: Ext.get('mai_webchat').getValue(),
            mai_bz: Ext.get('mai_bz').getValue()
        },
        url: '/bolong/add_corp_maintain_info',
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
            gov_corp_id: corp_id,
            gov_domain: Ext.get('gov_domain').getValue(),
            gov_office: Ext.get('gov_office').getValue(),
            gov_desc: Ext.get('gov_desc').getValue(),
            gov_contact: Ext.get('gov_contact').getValue(),
            gov_psotion: Ext.get('gov_psotion').getValue(),
            gov_doctype: Ext.get('gov_doctype').getValue(),
            gov_docnum: Ext.get('gov_docnum').getValue(),
            gov_phone: Ext.get('gov_phone').getValue(),
            gov_fax: Ext.get('gov_fax').getValue(),
            gov_email: Ext.get('gov_email').getValue(),
            gov_qq: Ext.get('gov_qq').getValue(),
            gov_webchat: Ext.get('gov_webchat').getValue(),
            gov_tel: Ext.get('gov_tel').getValue(),
            gov_remark: Ext.get('gov_remark').getValue()
        },
        url: '/bolong/add_corp_government_info',
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
            inv_corp_id: corp_id,
            inv_domain: Ext.get('inv_domain').getValue(),
            inv_csrc_type1: Ext.get('inv_csrc_type1').getValue(),
            inv_csrc_type2: Ext.get('inv_csrc_type2').getValue(),
            inv_csrc_type3: Ext.get('inv_csrc_type3').getValue(),
            inv_csrc_type4: Ext.get('inv_csrc_type4').getValue(),
            inv_indclass1: Ext.get('inv_indclass1').getValue(),
            inv_indclass2: Ext.get('inv_indclass2').getValue(),
            inv_indclass3: "",
            inv_indclass4: "",
            inv_contact: Ext.get('inv_contact').getValue(),
            inv_psotion: Ext.get('inv_psotion').getValue(),
            inv_doctype: Ext.get('inv_doctype').getValue(),
            inv_docnum: Ext.get('inv_docnum').getValue(),
            inv_phone: Ext.get('inv_phone').getValue(),
            inv_fax: Ext.get('inv_fax').getValue(),
            inv_email: Ext.get('inv_email').getValue(),
            inv_qq: Ext.get('inv_qq').getValue(),
            inv_webchat: Ext.get('inv_webchat').getValue(),
            inv_tel: Ext.get('inv_tel').getValue(),
            inv_remark: Ext.get('inv_remark').getValue()
        },
        url: '/bolong/add_corp_investors_info',
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
            srv_corp_id: corp_id,
            srv_name: Ext.get('srv_name').getValue(),
            srv_type: Ext.get('srv_type').getValue(),
            srv_content: Ext.get('srv_content').getValue(),
            srv_levels: Ext.get('srv_levels').getValue(),
            srv_domain: Ext.get('srv_domain').getValue(),
            srv_penalty: Ext.get('srv_penalty').getValue(),
            srv_examiner: Ext.get('srv_examiner').getValue(),
            srv_post: Ext.get('srv_post').getValue(),
            srv_descs: Ext.get('srv_descs').getValue(),
            srv_remark: Ext.get('srv_remark').getValue()
        },
        url: '/bolong/add_corp_service_info',
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
            refi_corp_id: corp_id,
            refi_amounts: Ext.get('refi_amounts').getValue(),
            refi_use: Ext.get('refi_use').getValue(),
            refi_financ: Ext.get('refi_financ').getValue(),
            refi_security: Ext.get('refi_security').getValue(),
            refi_acc_cost: Ext.get('refi_acc_cost').getValue(),
            refi_deadline: Ext.get('refi_deadline').getValue(),
            refi_desc: Ext.get('refi_desc').getValue()
        },
        url: '/bolong/add_corp_refinancing_info',
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
            rehr_corp_id: corp_id,
            rehr_post: Ext.get('rehr_post').getValue(),
            rehr_num: Ext.get('rehr_num').getValue(),
            rehr_salary: Ext.get('rehr_salary').getValue(),
            rehr_sex_req: Ext.get('rehr_sex_req').getValue(),
            rehr_age_req: Ext.get('rehr_age_req').getValue(),
            rehr_requests: Ext.get('rehr_requests').getValue()
        },
        url: '/bolong/add_corp_rehr_info',
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


            retra_corp_id: corp_id,
            retra_mode: Ext.get('retra_mode').getValue(),
            retra_content: Ext.get('retra_content').getValue(),
            retra_acc_cost: Ext.get('retra_acc_cost').getValue(),
            retra_dt: Ext.get('retra_dt').getValue(),
            retra_requests: Ext.get('retra_requests').getValue()
        },
        url: '/bolong/add_corp_retrain_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

function keyPress() {
    var keyCode = event.keyCode;
    if ((keyCode >= 48 && keyCode <= 57)) {
        event.returnValue = true;
    } else {
        event.returnValue = false;
    }
}


function emailcheck(emailvalue) {
    var emailReg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
    return emailReg.exec(emailvalue) != null;
};

function email_check_apply() {
    if (!emailcheck(document.getElementById("gov_email").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>邮箱格式不对！请重新输入！</span>")
        document.getElementById("gov_email").value = "";
        return;
    }
}
function cont_eemail_check_apply() {
    if (!emailcheck(document.getElementById("cont_eemail").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>邮箱格式不对！请重新输入！</span>")
        document.getElementById("cont_eemail").value = "";
        return;
    }
}

function mai_email_check_apply() {
    if (!emailcheck(document.getElementById("mai_email").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>邮箱格式不对！请重新输入！</span>")
        document.getElementById("mai_email").value = "";
        return;
    }
}

function inv_email_check_apply() {
    if (!emailcheck(document.getElementById("inv_email").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>邮箱格式不对！请重新输入！</span>")
        document.getElementById("inv_email").value = "";
        return;
    }
}

function qqcheck(qqvalue) {
    var qqReg = /^\d{5,10}$/;
    return qqReg.exec(qqvalue) != null;
};

function cont_eqq_check_apply() {
    if (!qqcheck(document.getElementById("cont_eqq").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>QQ格式不对！请重新输入！</span>")
        document.getElementById("cont_eqq").value = "";
        return;
    }
}

function mai_qq_check_apply() {
    if (!qqcheck(document.getElementById("mai_qq").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>QQ格式不对！请重新输入！</span>")
        document.getElementById("mai_qq").value = "";
        return;
    }
}

function inv_qq_check_apply() {
    if (!qqcheck(document.getElementById("inv_qq").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>QQ格式不对！请重新输入！</span>")
        document.getElementById("inv_qq").value = "";
        return;
    }
}

function gov_qq_check() {
    if (!qqcheck(document.getElementById("gov_qq").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>QQ格式不对！请重新输入！</span>")
        document.getElementById("gov_qq").value = "";
        return;
    }
}

function cardcheck(cardvalue) {
    var cardReg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
    return cardReg.exec(cardvalue) != null;
};


function phonecheck(phonevalue) {
    var phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    return phoneReg.exec(phonevalue) != null;
};

function mai_phone_check() {
    if (!phonecheck(document.getElementById("mai_phone").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>手机号码格式不对！请重新输入！</span>")
        document.getElementById("mai_phone").value = "";
        return;
    }
}

function inv_phone_check() {
    if (!phonecheck(document.getElementById("inv_phone").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>手机号码格式不对！请重新输入！</span>")
        document.getElementById("inv_phone").value = "";
        return;
    }
}

function gov_phone_check() {
    if (!phonecheck(document.getElementById("gov_phone").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>手机号码格式不对！请重新输入！</span>")
        document.getElementById("gov_phone").value = "";
        return;
    }
}

function cont_ephone_check() {
    if (!phonecheck(document.getElementById("cont_ephone").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>手机号码格式不对！请重新输入！</span>")
        document.getElementById("cont_ephone").value = "";
        return;
    }
}

function telcheck(telvalue) {
    //var telReg =/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
    var telReg = /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/;
    return telReg.exec(telvalue) != null;
};

function mai_tel_check() {
    if (!telcheck(document.getElementById("mai_tel").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>固定电话格式不对！请重新输入！</span>")
        document.getElementById("mai_tel").value = "";
        return;
    }
}

function cont_tel_check() {
    if (!telcheck(document.getElementById("cont_tel").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>固定电话格式不对！请重新输入！</span>")
        document.getElementById("cont_tel").value = "";
        return;
    }
}

function inv_tel_check() {
    if (!telcheck(document.getElementById("inv_tel").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>固定电话格式不对！请重新输入！</span>")
        document.getElementById("inv_tel").value = "";
        return;
    }
}

function gov_tel_check() {
    if (!telcheck(document.getElementById("gov_tel").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>固定电话格式不对！请重新输入！</span>")
        document.getElementById("gov_tel").value = "";
        return;
    }
}

function cont_efax_check() {
    if (!telcheck(document.getElementById("cont_efax").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>传真号码格式不对！请重新输入！</span>")
        document.getElementById("cont_efax").value = "";
        return;
    }
}

function mai_fax_check() {
    if (!telcheck(document.getElementById("mai_fax").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>传真号码格式不对！请重新输入！</span>")
        document.getElementById("mai_fax").value = "";
        return;
    }
}

function inv_fax_check() {
    if (!telcheck(document.getElementById("inv_fax").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>传真号码格式不对！请重新输入！</span>")
        document.getElementById("inv_fax").value = "";
        return;
    }
}

function gov_fax_check() {
    if (!telcheck(document.getElementById("gov_fax").value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>传真号码格式不对！请重新输入！</span>")
        document.getElementById("gov_fax").value = "";
        return;
    }
}




























