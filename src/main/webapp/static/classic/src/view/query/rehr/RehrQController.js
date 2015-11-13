/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.query.rehr.RehrQController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.rehrqcontroller',
    requires: [
        'app.xtemplate.corp_view'
    ],
    itemclick: function (this_, record_) {
        if (Ext.getCmp('corprehreditloggridview_id')) {
            Ext.getCmp('corprehreditloggridview_id').getStore().load({
                params: {
                    corp_id: record_.get('id')
                }
            });
        }
    },

    itemdblclick: function (view, record, item, index, e) {
        var mypanel = Ext.create('Ext.panel.Panel', {
            frame: false,
            border: false,
            bodyStyle: 'overflow-x:hidden; overflow-y:scroll',
            listeners: {
                afterrender: function (_this) {
                    corp_tpl.append('rehr_query_corp', record.data);
                    corp_contact_tpl.append('rehr_query_corp_contact', record.data);
                    corp_acount_tpl.append('rehr_query_corp_acount', record.data);
                    corp_maintain_tpl.append('rehr_query_corp_maintain', record.data);
                    corp_finance_tpl.append('rehr_query_corp_finance', record.data);
                    corp_rehr_tpl.append('rehr_query_corp_rehr', record.data);
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
                html: '<div id="rehr_query_corp"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="rehr_query_corp_contact"></div>'
            }, {
                xtype: 'panel',
                border: false,
                height: 360,
                html: '<div id="shareholder_edit"></div>'
            },{
                xtype: 'panel',
                border: false,
                html: '<div id="rehr_query_corp_acount"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="rehr_query_corp_maintain"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="rehr_query_corp_finance"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="rehr_query_corp_rehr"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="enter_menu_list">' +
                '<ul>' +
                '<li><a href="#table_base">基本信息</a></li>' +
                '<li><a href="#table_sh" >股东名册</a></li>' +
                '<li><a href="#table_link" >法定代表人</a></li>' +
                '<li><a href="#table_acount" >行业分类</a></li>' +
                '<li><a href="#table_csrc_type" >证监会行业分类</a></li>' +
                '<li><a href="#table_ocompay" >企业维护信息</a></li>' +
                '<li><a href="#table_assets_finance" >企业财务信息</a></li>' +
                '<li><a href="#table_demand_rl" >人力资源需求</a></li>' +
                '<li><a href="#" style="background-color: #e14100;" onclick="rehr_query_close()">关闭</a></li>' +
                '</ul>' +
                '</div>'
            }]
        });
        Ext.create('Ext.window.Window', {
            layout: 'fit',
            id: 'rehr_query_id',
            modal: true,
            title: '企业信息',
            maximized: true,
            closeAction: 'destroy',
            autoDestroy: true,
            items: [mypanel]
        }).show();
    },

    refresh: function () {
        Ext.getCmp('rehrqgridview_id').getStore().load();
    },

    btnFind: function () {
        Ext.getCmp('rehrqgridview_id').getStore().load({
            params: {
                name: Ext.getCmp('query_rehr_q_name_id').getValue(),
                nos: Ext.getCmp('query_rehr_q_nos_id').getValue(),
                buslicno: Ext.getCmp('query_rehr_q_buslicno_id').getValue(),
                listcode: Ext.getCmp('query_rehr_q_listcode_id').getValue()

            }
        });
    },

    btnReset: function (_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('rehrqgridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('rehrqqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'rehrqqueryview',
                    id: 'rehrqqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        } else {
            _this.up().up().remove(Ext.getCmp('rehrqqueryview_id'));
        }
    },

    btnLog: function (_this) {
        if (!Ext.getCmp('corprehreditloggridview_id')) {
            _this.up().up().add(
                {
                    xtype: 'corprehreditloggridview',
                    id: 'corprehreditloggridview_id',
                    title: '变更记录',
                    collapsible: true,
                    region: 'south',
                    margin: '1 0 0 0',
                    height: 200
                }
            );
        } else {
            _this.up().up().remove(Ext.getCmp('corprehreditloggridview_id'));
        }
    }
});

function rehr_query_close() {
    Ext.getCmp('rehr_query_id').close();

}
