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
        //var vPanel = Ext.getCmp('investormtdetailview_id');
        //vPanel.tpl.overwrite(vPanel.body, record_.data);
    },

    itemdblclick: function (view, record, item, index, e) {
        var mypanel = Ext.create('Ext.panel.Panel', {
            frame: false,
            border: false,
            bodyStyle: 'overflow-x:hidden; overflow-y:scroll',
            listeners: {
                afterrender: function (_this) {
                    corp_tpl.append('investors_manage_corp', record.data);
                    corp_contact_tpl.append('investors_manage_corp_contact', record.data);
                    corp_acount_tpl.append('investors_manage_corp_acount', record.data);
                    corp_maintain_tpl.append('investors_manage_corp_maintain', record.data);
                    corp_finance_tpl.append('investors_manage_corp_finance', record.data);
                    corp_investors_con_tpl.append('investors_manage_corp_investors', record.data);

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
                html: '<div id="investors_manage_corp"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="investors_manage_corp_contact"></div>'
            }, {
                xtype: 'panel',
                border: false,
                height: 360,
                html: '<div id="shareholder_edit"></div>'
            },{
                xtype: 'panel',
                border: false,
                html: '<div id="investors_manage_corp_acount"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="investors_manage_corp_maintain"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="investors_manage_corp_finance"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="investors_manage_corp_investors"></div>'
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
                '<li><a href="#table_investors" >投资人信息</li>' +
                '<li><a href="#" style="background-color: #e14100;" onclick="close_investors_edit_from()">关闭</a></li>' +
                '</ul>' +
                '</div>'
            }]
        });

       Ext.create('Ext.window.Window', {
            layout: 'fit',
            id: 'investors_edit_id',
            modal: true,
            title: '企业信息',
            maximized: true,
            closeAction: 'destroy',
            autoDestroy: true,
            items: [mypanel]
        }).show();
    },

    refresh: function () {
        Ext.getCmp('investormtgridview_id').getStore().load();
    },

    btnFind: function () {
        Ext.getCmp('investormtgridview_id').getStore().load({
            params: {
                name: Ext.getCmp('query_inv_mt_name_id').getValue(),
                nos: Ext.getCmp('query_inv_mt_nos_id').getValue(),
                buslicno: Ext.getCmp('query_inv_mt_buslicno_id').getValue(),
                listcode: Ext.getCmp('query_inv_mt_listcode_id').getValue()

            }
        });
    },

    btnReset: function (_this) {
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
        } else {
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
                            url: '/bolong/deletecorp',
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
