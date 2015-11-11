/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.entermt.innerenter.InnerEnterGdGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'innerentergdgridview',
    columnLines: true,
    requires: [
        'app.store.corpall.CorpGdStore',
        'Ext.grid.filters.Filters'
    ],
    store: {
        type: 'corpgdstore'
    },
    selModel: {
        type: 'spreadsheet',
        // Disables sorting by header click, though it will be still available via menu
        columnSelect: true,
        checkboxSelect: true,
        pruneRemoved: false,
        extensible: 'y'
    },
    listeners: {
        itemdblclick:  function (view, record) {
                var editForm = Ext.create('Ext.form.Panel', {
                    xtype: 'form',
                    frame: true,
                    bodyPadding: 16,
                    defaults: {
                        labelWidth: 90,
                        xtype: 'textfield',
                        width: 300,
                        anchor: '100%'
                    },
                    layout: {
                        type: 'table',
                        columns: 2,
                        tableAttrs: {
                            style: {
                                width: '100%'
                            }
                        }
                    },
                    items: [
                        {
                            hidden: true,
                            xtype: 'textfield',
                            name: 'gd_id',
                            fieldLabel: 'ID'
                        },  {
                            name: 'gd_shtype',
                            xtype: 'textfield',
                            fieldLabel: '股东类型'
                        }, {
                            name: 'gd_shname',
                            xtype: 'textfield',
                            fieldLabel: '股东'
                        }, {
                            name: 'gd_shdoctype',
                        xtype: 'textfield',
                            fieldLabel: '证照/证件类型'
                        }, {
                            name: 'gd_shdocnum',
                                xtype: 'textfield',
                            fieldLabel: '证照/证件号码'
                        }, {
                            name: 'gd_shareholdnum',
                            xtype: 'textfield',
                            fieldLabel: '持股数量'
                        },
                        {
                            name: 'gd_currencynum',
                            xtype: 'textfield',
                            fieldLabel: '流通数量'
                        }, {
                            name: 'gd_freezenum',
                            xtype: 'textfield',
                            fieldLabel: '冻结数量'
                        }, {
                            name: 'gd_psotion',
                            xtype: 'textfield',
                            fieldLabel: '职务'
                        },
                        {
                            name: 'gd_phone',
                            xtype: 'textfield',
                            fieldLabel: '手机号码'
                        }, {
                            name: 'gd_fax',
                            xtype: 'textfield',
                            fieldLabel: '传真'
                        }, {
                            name: 'gd_email',
                            xtype: 'textfield',
                            fieldLabel: 'E-mail'
                        }, {
                            name: 'gd_qq',
                            xtype: 'textfield',
                            fieldLabel: 'QQ'
                        }, {
                            name: 'gd_webchat',
                            xtype: 'textfield',
                            fieldLabel: '个人微信号'
                        }, {
                            name: 'gd_tel',
                            xtype: 'textfield',
                            fieldLabel: '固定电话'
                        }, {
                            name: 'gd_remark',
                            xtype: 'textfield',
                            fieldLabel: '备注'
                        }
                    ],
                    buttonAlign: "center",
                    buttons: [
                        {
                            text: '保存',
                            iconCls: 'icon_save',
                            handler: function () {
                                var form = this.up('form').getForm();
                                if (form.isValid()) {
                                    form.submit({
                                        url: '/bolong/update_corp_shareholder_info',
                                        waitMsg: '正在保存数据...',
                                        success: function (response, action) {
                                            Ext.Msg.alert("成功", "文件上传成功!");
                                            Ext.getCmp('innerentergdgridview_id').getStore().load(
                                                {
                                                    params: {
                                                        corp_id: Ext.getCmp('corp_id').getValue()
                                                    }
                                                }
                                            );
                                        },
                                        failure: function (form, action) {
                                        }
                                    });
                                }
                            }
                        }, {
                            text: '重置',
                            handler: function () {
                                this.up('form').getForm().reset();
                            }
                        }]
                });
                var editWindow = new Ext.Window({
                    width: 650,
                    height: 450,
                    modal: true,
                    border: false,
                    layout: 'fit',
                    title: '修改信息',
                    items: [editForm]
                });
                editForm.getForm().loadRecord(record);
                editWindow.show(Ext.get('corp_gd_edit'));
        }
    },
    columns: [
        {
            text: '操作', width: 100, dataIndex: 'gd_id',
            renderer: function (val) {
                var return_del = "<INPUT type='button' value='删除'  onclick='delete_corp_gd(" + val + ")'>";
                return return_del
            }
        },
        {text: '企业股东ID',  width: 150, dataIndex: 'gd_id', hidden: true},
        {text: '企业ID',  width: 150, dataIndex: 'gd_corp_id', hidden: true},
        {text: '股东类型',  width: 100, dataIndex: 'gd_shtype'},
        {text: '股东',  width: 100, dataIndex: 'gd_shname'},
        {text: '证照/证件类型',  width: 150, dataIndex: 'gd_shdoctype'},
        {text: '证照/证件号码',  width: 150, dataIndex: 'gd_shdocnum'},
        {text: '持股数量',  width: 100, dataIndex: 'gd_shareholdnum'},
        {text: '流通数量',  width: 100, dataIndex: 'gd_currencynum'},
        {text: '冻结数量',  width: 100, dataIndex: 'gd_freezenum'},
        {text: '职务',  width: 100, dataIndex: 'gd_psotion'},
        {text: '手机号码',  width: 120, dataIndex: 'gd_phone'},
        {text: '传真',  width: 120, dataIndex: 'gd_fax'},
        {text: 'E-mail',  width: 150, dataIndex: 'gd_email'},
        {text: 'QQ',  width: 120, dataIndex: 'gd_qq'},
        {text: '个人微信号',  width: 120, dataIndex: 'gd_webchat'},
        {text: '固定电话',  width: 120, dataIndex: 'gd_tel'},
        {text: '备注',  flex: 1, dataIndex: 'gd_remark'}

    ]
});


function delete_corp_gd(id){
    Ext.Ajax.request({
        url: '/bolong/delete_corp_shareholder_info',
        params: {
            "gd_id": id
        },
        waitMsg: '正在删除附件...',
        success: function (form, action) {
            Ext.Msg.alert("成功", "删除成功!");
            Ext.getCmp('innerentergdgridview_id').getStore().load(
                {
                    params: {
                        corp_id: Ext.getCmp('corp_id').getValue()
                    }
                }
            );
        },
        failure: function (form, action) {
            Ext.Msg.alert("失败", "删除失败!");
        }
    });
}


