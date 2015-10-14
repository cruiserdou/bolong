/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.query.refi.RefiQController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.refiqcontroller',
    requires: [
        'app.xtemplate.corp_view'
    ],
    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('refiqdetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);

        Ext.getCmp('corprefieditloggridview_id').getStore().load({
            params: {
                corp_id: record_.get('id')

            }
        });
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
                    corp_tpl.append('refinancing_query_corp',record.data);
                    corp_contact_tpl.append('refinancing_query_corp_contact',record.data);
                    //corp_shareholder_tpl.append('refinancing_query_corp_shareholder',record.data);
                    corp_acount_tpl.append('refinancing_query_corp_acount',record.data);
                    corp_maintain_tpl.append('refinancing_query_corp_maintain',record.data);
                    corp_finance_tpl.append('refinancing_query_corp_finance',record.data);
                    corp_refinancing_tpl.append('refinancing_query_corp_refinancing',record.data);

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
                    html: '<div id="refinancing_query_corp">' +
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
                    html: '<div id="refinancing_query_corp_contact">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_acount_panel',
                    html: '<div id="refinancing_query_corp_acount">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_maintain_panel',
                    html: '<div id="refinancing_query_corp_maintain">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_finance_panel',
                    html: '<div id="refinancing_query_corp_finance">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_finance_panel',
                    html: '<div id="refinancing_query_corp_finance">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_refinancing_panel',
                    html: '<div id="refinancing_query_corp_refinancing">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'refinancing_query_corp_panel',
                    html:
                    '<div id="enter_menu_list" style="position: fixed; top: 7em; right: 6em;">'+


                    '<ul>'+
                    '<li><a href="#table_base" style="font-size:18px;">基本信息</a></li>' +
                    '<li><a href="#table_sh"  style="font-size:18px;">股东名册</a></li>' +
                    '<li><a href="#table_link"  style="font-size:18px;">法定代表人</a></li>' +
                    '<li><a href="#table_acount"  style="font-size:18px;">行业分类</a></li>' +
                    '<li><a href="#table_csrc_type"  style="font-size:18px;">证监会行业分类</a></li>' +
                    '<li><a href="#table_ocompay"  style="font-size:18px;">企业维护信息</a></li>' +
                    '<li><a href="#table_assets_finance"  style="font-size:18px;">企业财务信息</a></li>' +
                    '<li><a href="#table_demand_rz"  style="font-size:18px;">融资需求</a></li>' +
                    '<li><a href="#" style=" text-align: center; font-size:18px;display: block;  margin-top: 16px;  width: 100%;  font-size: 14px;  border: 1px solid #ffffff;  border-radius: 3px;  padding: 0.6em;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#f27809, #e14100);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);" onclick="refinancing_query_close()">关闭</a></li>' +
                    '</ul>' +
                    '</div>'
                }
            ]
        });

        var editWindow = new Ext.Window({
            layout: 'fit',
            id: 'refinancing_query_id',
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
        Ext.getCmp('refiqgridview_id').getStore().load();
    },
    
    btnSearch: function (_this) {
        if (!Ext.getCmp('refiqqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'refiqqueryview',
                    id: 'refiqqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('refiqqueryview_id'));
        }
    },

    btnLog: function (_this) {
        if (!Ext.getCmp('corprefieditloggridview_id')) {
            _this.up().up().add(
                {
                    xtype: 'corprefieditloggridview',
                    id: 'corprefieditloggridview_id',
                    title: '变更记录',
                    collapsible: true,
                    region: 'south',
                    margin: '1 0 0 0',
                    height: 200
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('corprefieditloggridview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('refiqgridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var id = row.get('id');
                        Ext.Ajax.request({
                            url: '/cloudl/dpos/delete',
                            params: {
                                "id": id
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('refiqgridview_id').getStore().load();
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

function refinancing_query_close() {
    Ext.getCmp('refinancing_query_id').close();

}
