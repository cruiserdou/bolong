/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.system.menu.MenuController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.menucontroller',

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('menudetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);
    },

    btnAdd: function () {
        Ext.create('app.view.system.menu.MenuAddView', {}).show(Ext.get('menu_add_id'));
    },

    btnRefresh: function () {
        Ext.getCmp('menugridview_id').getStore().load();
    },

    btnFind: function () {
        Ext.getCmp('menugridview_id').getStore().load({
            params: {
                text: Ext.getCmp('query_menu_text_id').getValue()
            }
        });
    },

    btnEdit: function () {
        var sm = Ext.getCmp('menugridview_id').getSelectionModel();
        var record = sm.getSelection()[0];

        if (!record) {
            Ext.Msg.alert('信息', '请选择要编辑的数据');
            return;
        }
        var record = sm.getSelection()[0];

        var editForm = Ext.create('Ext.form.Panel', {
            xtype: 'form',
            bodyPadding: 10,
            layout: 'form',
            items: [
                {
                    readOnly: true,
                    xtype: 'textfield',
                    name: 'id',
                    fieldLabel: '菜单ID'
                }, {
                    xtype: 'textfield',
                    name: 'text',
                    fieldLabel: '菜单标题',
                    allowBlank: false
                }, {
                    allowBlank: false,
                    xtype: 'combo',
                    name: 'leaf',
                    fieldLabel: '菜单标题',
                    autoRender: true,
                    autoShow: true,
                    store: Ext.create('Ext.data.Store', {
                        fields: ['type'],
                        data: [{'type': 'false'}, {'type': 'true'}]
                    }),
                    displayField: 'type',
                    valueField: 'type'
                }, {
                    xtype: 'textfield',
                    name: 'parent_id',
                    fieldLabel: '菜单父ID',
                    allowBlank: false,
                    regex : /^[0-9]*$/,
                    regexText : '请输入数字'
                }, {
                    xtype: 'textfield',
                    name: 'itype',
                    fieldLabel: '菜单链接地址',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    name: 'root',
                    fieldLabel: '根',
                    allowBlank: false,
                    regex : /^[0-9]*$/,
                    regexText : '请输入数字'
                }, {
                    xtype: 'textfield',
                    fieldLabel: '图标',
                    name: 'iconcls',
                    allowBlank: false
                },
                {
                    xtype: 'textareafield',
                    name: 'remark',
                    fieldLabel: '备注'
                }
            ],
            buttonAlign: "center",
            buttons: [{
                text: '保存',
                handler: function () {
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        form.submit({
                            url: '/bolong/update_menu_info',
                            waitMsg: '正在保存数据...',
                            success: function (form, action) {
                                Ext.Msg.alert("成功", "数据保存成功!");
                                Ext.getCmp('menugridview_id').getStore().reload();
                            },
                            failure: function (form, action) {
                                Ext.Msg.alert("失败", "数据保存失败!");
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
            constrain: true,
            closable: true,
            modal: true,
            layout: 'fit',
            width: 400,
            height: 500,
            title: '修改信息',
            items: [editForm]
        });
        editForm.getForm().loadRecord(record);
        editWindow.show(Ext.get('menu_edit_id'));
    },

    btnReset: function (_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('menugridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('menuqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'menuqueryview',
                    id: 'menuqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        } else {
            _this.up().up().remove(Ext.getCmp('menuqueryview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('menugridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var id = row.get('id');
                        Ext.Ajax.request({
                            url: '/bolong/deletemenu',
                            params: {
                                "id": id
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('menugridview_id').getStore().load();
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
