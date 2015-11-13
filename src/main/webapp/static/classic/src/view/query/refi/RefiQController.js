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
        //var vPanel = Ext.getCmp('refiqdetailview_id');
        //vPanel.tpl.overwrite(vPanel.body, record_.data);
        if (Ext.getCmp('corprefieditloggridview_id')) {
            Ext.getCmp('corprefieditloggridview_id').getStore().load({
                params: {
                    corp_id: record_.get('id')

                }
            });
        }
    },

    btnFind: function () {
        Ext.getCmp('refiqgridview_id').getStore().load({
            params: {
                name: Ext.getCmp('query_refi_q_name_id').getValue(),
                nos: Ext.getCmp('query_refi_q_nos_id').getValue(),
                buslicno: Ext.getCmp('query_refi_q_buslicno_id').getValue(),
                listcode: Ext.getCmp('query_refi_q_listcode_id').getValue()

            }
        });
    },

    btnReset: function (_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('refiqgridview_id').getStore().load();
    },

    itemdblclick: function (view, record, item, index, e) {
        var mypanel = Ext.create('Ext.panel.Panel', {
            id: "mypanel",
            width: 820,
            frame: false,
            height: 600,
            border: false,
            bodyStyle: 'overflow-x:hidden; overflow-y:scroll',
            listeners: {
                afterrender: function (_this) {
                    corp_tpl.append('refinancing_query_corp', record.data);
                    corp_contact_tpl.append('refinancing_query_corp_contact', record.data);
                    //corp_shareholder_tpl.append('refinancing_query_corp_shareholder',record.data);
                    corp_acount_tpl.append('refinancing_query_corp_acount', record.data);
                    corp_maintain_tpl.append('refinancing_query_corp_maintain', record.data);
                    corp_finance_tpl.append('refinancing_query_corp_finance', record.data);
                    corp_refinancing_tpl.append('refinancing_query_corp_refinancing', record.data);
                    //查询股东信息
                    var sh_store = Ext.create('Ext.data.Store', {
                        extend: 'Ext.data.Store',
                        model: 'app.model.corpall.ShareHolder',
                        alias: 'store.shareholder',
                        proxy: {
                            type: 'ajax',
                            actionMethods: {
                                read: 'POST'
                            },
                            api: {
                                read: '/bolong/shareholder_list'
                            },
                            reader: {
                                type: 'json',
                                rootProperty: 'list'
                            }
                        }
                    });

                    sh_store.load({
                        params: {
                            corp_id: record.data.id
                        },
                        callback: function (records, operation, success) {
                            var data = [];

                            sh_store.each(function (record) {
                                data.push(record.getData());
                            });

                            //渲染股东信息
                            corp_shareholder_dis_tpl.append('shareholder_edit', data);
                        }
                    });
                }
            },
            autoScroll: true,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start'
            },
            items: [{
                xtype: 'panel',
                border: false,
                //id: 'corp_panel',
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
                    html: '<div id="refinancing_query_corp_contact"></div>'
                }, {
                    xtype: 'panel',
                    border: false,
                    height: 360,
                    html: '<div id="shareholder_edit"></div>'
                }, {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_acount_panel',
                    html: '<div id="refinancing_query_corp_acount"></div>'
                },{
                    xtype: 'panel',
                    border: false,
                    id: 'corp_maintain_panel',
                    html: '<div id="refinancing_query_corp_maintain"></div>'
                }, {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_finance_panel',
                    html: '<div id="refinancing_query_corp_finance"></div>'
                }, {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_refinancing_panel',
                    html: '<div id="refinancing_query_corp_refinancing"></div>'
                }, {
                    xtype: 'panel',
                    border: false,
                    id: 'refinancing_query_corp_panel',
                    html: '<div id="enter_menu_list" style="position: fixed; top: 7em; right: 6em;">' +
                    '<ul>' +
                    '<li><a href="#table_base" style="font-size:18px;">基本信息</a></li>' +
                    '<li><a href="#table_sh"  style="font-size:18px;">股东名册</a></li>' +
                    '<li><a href="#table_link"  style="font-size:18px;">法定代表人</a></li>' +
                    '<li><a href="#table_acount"  style="font-size:18px;">行业分类</a></li>' +
                    '<li><a href="#table_csrc_type"  style="font-size:18px;">证监会行业分类</a></li>' +
                    '<li><a href="#table_ocompay"  style="font-size:18px;">企业维护信息</a></li>' +
                    '<li><a href="#table_assets_finance"  style="font-size:18px;">企业财务信息</a></li>' +
                    '<li><a href="#table_demand_rz"  style="font-size:18px;">融资需求</a></li>' +
                    '<li><a href="#" style="background-color: #e14100;" onclick="refinancing_query_close()">关闭</a></li>' +
                    '</ul>' +
                    '</div>'
                }]
        });

        Ext.create('Ext.window.Window', {
            layout: 'fit',
            id: 'refinancing_query_id',
            modal: true,
            title: '企业信息',
            maximized: true,
            closeAction: 'destroy',
            autoDestroy: true,
            items: [mypanel]
        }).show();
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
        } else {
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
        } else {
            _this.up().up().remove(Ext.getCmp('corprefieditloggridview_id'));
        }
    }
});

function refinancing_query_close() {
    Ext.getCmp('refinancing_query_id').close();

}
