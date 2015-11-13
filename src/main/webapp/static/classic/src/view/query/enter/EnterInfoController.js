/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.query.enter.EnterInfoController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.enterinfocontroller',
    requires: [
        'app.xtemplate.corp_apply',
        'app.xtemplate.corp_edit'
    ],
    itemclick: function (this_, record_) {
        if (Ext.getCmp('entereditloggridview_id')) {
            Ext.getCmp('entereditloggridview_id').getStore().load({
                params: {
                    corp_id: record_.get('id')
                }
            });
        }
    },
    itemdblclick: function (view, record) {
        var mypanel = Ext.create('Ext.panel.Panel', {
            frame: false,
            border: false,
            bodyStyle: 'overflow-x:hidden; overflow-y:scroll',
            listeners: {
                afterrender: function () {
                    corp_tpl.append('corp', record.data);
                    corp_contact_tpl.append('corp_contact', record.data);
                    corp_acount_tpl.append('corp_acount', record.data);
                    corp_maintain_tpl.append('corp_maintain', record.data);
                    corp_finance_tpl.append('corp_finance', record.data);
                    corp_service_tpl.append('corp_service', record.data);
                    corp_investors_tpl.append('corp_investors', record.data);
                    corp_government_tpl.append('corp_government', record.data);
                    corp_refinancing_tpl.append('corp_refinancing', record.data);
                    corp_retrain_tpl.append('corp_retrain', record.data);
                    corp_rehr_tpl.append('corp_rehr', record.data);


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
                html: '<div id="corp"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="corp_contact"></div>'
            }, {
                xtype: 'panel',
                border: false,
                height: 360,
                html: '<div id="shareholder_edit"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="corp_acount"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="corp_maintain"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="corp_finance"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="corp_service"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="corp_investors"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="corp_government"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="corp_refinancing"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="corp_retrain"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="corp_rehr"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="enter_menu_list">' +
                '<ul>' +
                '<li><a href="#table_base">基本信息</a></li>' +
                '<li><a href="#table_sh">股东名册</a></li>' +
                '<li><a href="#table_link">法定代表人</a></li>' +
                '<li><a href="#table_acount">行业分类</a></li>' +
                '<li><a href="#table_csrc_type">证监会行业分类</a></li>' +
                '<li><a href="#table_ocompay">企业维护信息</a></li>' +
                '<li><a href="#table_assets_finance" >企业财务信息</a></li>' +
                '<li><a href="#table_service">服务机构</a></li>' +
                '<li><a href="#table_investors">投资人</a></li>' +
                '<li><a href="#table_govermt">政府部门</a></li>' +
                '<li><a href="#table_demand_rz">融资需求</a></li>' +
                '<li><a href="#table_demand_px">培训需求</a></li>' +
                '<li><a href="#table_demand_rl">人力资源需求</a></li>' +
                '<li><a href="#" class="close_btn_xwq" style="background-color: #e14100;" onclick="win_close_ch()">关闭</a></li>' +
                '</ul>' +
                '</div>'
            }]
        });

        Ext.create('Ext.window.Window', {
            layout: 'fit',
            id: 'enterprise_ch_id',
            modal: true,
            title: '企业信息查看',
            maximized: true,
            autoDestroy: true,
            closeAction: 'destroy',
            items: [mypanel]
        }).show();
    },

    btnClick: function () {
        Ext.getCmp('enter_grid_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('enterinfoqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'enterinfoqueryview',
                    id: 'enterinfoqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        } else {
            _this.up().up().remove(Ext.getCmp('enterinfoqueryview_id'));
        }
    },

    btnLog: function (_this) {
        if (!Ext.getCmp('entereditloggridview_id')) {
            _this.up().up().add(
                {
                    xtype: 'entereditloggridview',
                    id: 'entereditloggridview_id',
                    title: '变更记录',
                    collapsible: true,
                    region: 'south',
                    margin: '1 0 0 0',
                    height: 200
                }
            );
        } else {
            _this.up().up().remove(Ext.getCmp('entereditloggridview_id'));
        }
    },

    btnFind: function () {
        Ext.getCmp('enter_grid_id').getStore().load({
            params: {
                name: Ext.getCmp('query_name_id').getValue(),
                nos: Ext.getCmp('query_nos_id').getValue(),
                buslicno: Ext.getCmp('query_buslicno_id').getValue(),
                listcode: Ext.getCmp('query_listcode_id').getValue()

            }
        });
    },

    btnReset: function (_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('enter_grid_id').getStore().load();
    }
});


function win_close_ch() {
    Ext.getCmp('enterprise_ch_id').close();
}
