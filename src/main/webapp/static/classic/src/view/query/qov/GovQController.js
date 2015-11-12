/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.maintain.govmt.GovMtController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.govmtcontroller',
    requires: [
        'app.xtemplate.corp_contact'
    ],
    itemclick: function (this_, record_) {
        //var vPanel = Ext.getCmp('govmtdetailview_id');
        //vPanel.tpl.overwrite(vPanel.body, record_.data);
    },

    refresh: function () {
        Ext.getCmp('govmtgridview_id').getStore().load();
    },

    itemdblclick: function (view, record, item, index, e) {
        var mypanel = Ext.create('Ext.panel.Panel', {
            frame: false,
            border: false,
            bodyStyle: 'overflow-x:hidden; overflow-y:scroll',
            listeners: {
                afterrender: function (_this) {
                    corp_tpl.append('government_manage_corp', record.data);
                    corp_contact_tpl.append('government_manage_corp_contact', record.data);
                    corp_acount_tpl.append('government_manage_corp_acount', record.data);
                    corp_maintain_tpl.append('government_manage_corp_maintain', record.data);
                    corp_finance_tpl.append('government_manage_corp_finance', record.data);
                    corp_government_con_tpl.append('government_manage_corp_government', record.data);

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
                html: '<div id="government_manage_corp"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="government_manage_corp_contact"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="government_manage_corp_acount"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="government_manage_corp_maintain"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="government_manage_corp_finance"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="government_manage_corp_government"></div>'
            }, {
                xtype: 'panel',
                border: false,
                html: '<div id="enter_menu_list" style="position: fixed; top: 7em; right: 6em;">' +
                '<ul>' +
                '<li><a href="#table_base">基本信息</a></li>' +
                '<li><a href="#table_sh" >股东名册</a></li>' +
                '<li><a href="#table_link" >法定代表人</a></li>' +
                '<li><a href="#table_acount" >行业分类</a></li>' +
                '<li><a href="#table_csrc_type" >证监会行业分类</a></li>' +
                '<li><a href="#table_ocompay" >企业维护信息</a></li>' +
                '<li><a href="#table_assets_finance" >企业财务信息</a></li>' +
                '<li><a href="#table_govermt" >政府部门</a></li>' +
                '<li><a href="#" style="background-color: #e14100;" onclick="government_close_edit()">关闭</a></li>' +
                '</ul>' +
                '</div>'
            }]
        });

        var editWindow = Ext.create('Ext.window.Window', {
            layout: 'fit',
            id: 'government_edit_id',
            modal: true,
            title: '企业信息',
            maximized: true,
            closeAction: 'destroy',
            autoDestroy: true,
            items: [mypanel]
        });
        editWindow.show(Ext.get('body'));
    },

    btnFind: function () {
        Ext.getCmp('govmtgridview_id').getStore().load({
            params: {
                name: Ext.getCmp('query_gov_mt_name_id').getValue(),
                nos: Ext.getCmp('query_gov_mt_nos_id').getValue(),
                buslicno: Ext.getCmp('query_gov_mt_buslicno_id').getValue(),
                listcode: Ext.getCmp('query_gov_mt_listcode_id').getValue()

            }
        });
    },

    btnReset: function (_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('govmtgridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('govmtqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'govmtqueryview',
                    id: 'govmtqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        } else {
            _this.up().up().remove(Ext.getCmp('govmtqueryview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('govmtgridview_id').getSelectionModel();
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
                                Ext.getCmp('govmtgridview_id').getStore().load();
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

function government_close_edit() {
    Ext.getCmp('government_edit_id').close();

}
function save_government_edit(gov_id) {
    var form_obt_edit = document.getElementById("apply_government_edit");
    obt_corp_government_manage_update(gov_id);

}
