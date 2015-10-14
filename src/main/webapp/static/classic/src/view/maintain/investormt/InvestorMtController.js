/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.maintain.investormt.InvestorMtController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.investormtcontroller',
    requires: [
        'app.xtemplate.corp_contact'
    ],
    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('investormtdetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);
    },

    itemdblclick: function (view, record, item, index, e) {
        var mypanel = new Ext.form.FormPanel({
            id: "mypanel",
            width: 820,
            frame: false,
            height: 600,
            border: false,
            bodyStyle: 'overflow-x:hidden; overflow-y:scroll',
            listeners: {
                afterrender: function (_this){
                    corp_tpl.append('investors_manage_corp',record.data);
                    corp_contact_tpl.append('investors_manage_corp_contact',record.data);
                    //corp_shareholder_tpl.append('investors_manage_corp_shareholder',record.data);
                    corp_acount_tpl.append('investors_manage_corp_acount',record.data);
                    corp_maintain_tpl.append('investors_manage_corp_maintain',record.data);
                    corp_finance_tpl.append('investors_manage_corp_finance',record.data);
                    corp_investors_con_tpl.append('investors_manage_corp_investors',record.data);

                }
            },
            autoScroll: true,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start'
            },
            items: [
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_panel',
                    html: '<div id="investors_manage_corp">' +
                    '</div>'
                },
                //{
                //    xtype: 'panel',
                //    height: 250,
                //    //autoScroll: true,
                //    frame: false,
                //    border: false,
                //    bodyStyle: 'overflow-x:hidden; overflow-y:scroll',
                //    listeners: {
                //        afterrender: function (_this) {
                //            corp_shareholder_list_store.load({
                //                params: {
                //                    gd_corp_id: record.get("id")
                //                },
                //                callback: function (records, operation, success) {
                //                    if (success) {
                //                        var myarray = new Array();
                //                        for (var i = 0; i < corp_shareholder_list_store.getCount(); i++) {
                //                            myarray[i] = corp_shareholder_list_store.getAt(i).getData();
                //                        }
                //
                //
                //                        corp_shareholder_list_tpl.overwrite(_this.body, myarray[0]);
                //                    }
                //                }
                //            })
                //        }
                //    }
                //},
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_contact_panel',
                    html: '<div id="investors_manage_corp_contact">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_acount_panel',
                    html: '<div id="investors_manage_corp_acount">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_maintain_panel',
                    html: '<div id="investors_manage_corp_maintain">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_finance_panel',
                    html: '<div id="investors_manage_corp_finance">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_finance_panel',
                    html: '<div id="investors_manage_corp_finance">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_investors_panel',
                    html: '<div id="investors_manage_corp_investors">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'investors_manage_corp_panel',
                    html:
                    '<div id="enter_menu_list" style="position: fixed; top: 7em; right: 6em;">'+
                    //
                    //'<a  href="print_enterprise?id={id}" target="_blank" style="font-size:18px;display: block;  margin-top: 26px;  width: 120px;  font-size: 14px;  border: 1px solid #ffffff;  border-radius: 8px;  padding: 4px 25px;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#1d13f2, #1e7fe1);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);">打印</a>'+

                    '<ul>'+
                    '<li><a href="#table_base" style="font-size:18px;">基本信息</a></li>' +
                    '<li><a href="#table_sh"  style="font-size:18px;">股东名册</a></li>' +
                    '<li><a href="#table_link"  style="font-size:18px;">法定代表人</a></li>' +
                    '<li><a href="#table_acount"  style="font-size:18px;">行业分类</a></li>' +
                    '<li><a href="#table_csrc_type"  style="font-size:18px;">证监会行业分类</a></li>' +
                    '<li><a href="#table_ocompay"  style="font-size:18px;">企业维护信息</a></li>' +
                    '<li><a href="#table_assets_finance"  style="font-size:18px;">企业财务信息</a></li>' +
                    '<li><a href="#table_investors"  style="font-size:18px;">投资人信息</li>' +
                    '<li><a href="#" style=" text-align: center; font-size:18px;display: block;  margin-top: 16px;  width: 100%;  font-size: 14px;  border: 1px solid #ffffff;  border-radius: 3px;  padding: 0.6em;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#f27809, #e14100);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);" onclick="close_investors_edit_from()">关闭</a></li>' +
                    '</ul>' +
                    '</div>'
                }
            ]
        });



        var editWindow = new Ext.Window({
            layout: 'fit',
            id: 'investors_edit_id',
            width: 830,
            height: 650,
            modal: true,
            title: '企业信息',
            maximized: true,
            maximizable: true,
            items: [mypanel]
        });
        editWindow.show(Ext.get('body'));
    },

    refresh: function () {
        Ext.getCmp('investormtgridview_id').getStore().load();
    },

    btnFind: function(){
        Ext.getCmp('investormtgridview_id').getStore().load({
            params: {
                name: Ext.getCmp('query_inv_mt_name_id').getValue(),
                nos: Ext.getCmp('query_inv_mt_nos_id').getValue(),
                buslicno: Ext.getCmp('query_inv_mt_buslicno_id').getValue(),
                listcode: Ext.getCmp('query_inv_mt_listcode_id').getValue()

            }
        });
    },

    btnReset: function(_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('investormtgridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('investormtqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'investormtqueryview',
                    id: 'investormtqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('investormtqueryview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('investormtgridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var id = row.get('id');
                        Ext.Ajax.request({
                            url: '/enter/deletecorp',
                            params: {
                                "id": id
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('investormtgridview_id').getStore().load();
                                Ext.Msg.alert("成功", "数据删除成功!");
                            },
                            failure: function () {
                                Ext.Msg.alert("失败", "数据删除失败!");
                            }
                        });
                    }
                } else {
                    Ext.Msg.alert('提示', '请选择要删除的记录');
                }
            }
        });
    }
});

function close_investors_edit_from() {
    Ext.getCmp('investors_edit_id').close();
}



function save_investors_edit(inv_id) {
    var form_obt_apply = document.getElementById("investors_form");
    obt_corp_investors_manage_update(inv_id);
}
