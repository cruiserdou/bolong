/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.system.role.RoleController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.rolecontroller',

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('roledetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);
    },

    btnAdd: function(){
        Ext.create('app.view.system.role.RoleAddView',{
        }).show(Ext.get('role_add_id'));
    },

    btnRefresh: function () {
        Ext.getCmp('rolegridview_id').getStore().load();
    },

    btnFind: function(){
        Ext.getCmp('rolegridview_id').getStore().load({
            params: {
                rolename: Ext.getCmp('query_rolename_id').getValue()
            }
        });
    },

    btnEdit: function(_this) {
        var sm = Ext.getCmp('rolegridview_id').getSelectionModel();
        var record = sm.getSelection()[0];

        if(!record){
            Ext.Msg.alert('信息','请选择要编辑的数据');
            return;
        }
        var record = sm.getSelection()[0];

        var editForm = null;
        var editWindow = null;
        editForm = new Ext.form.FormPanel({
            xtype: 'form',
            bodyPadding: 10,
            layout: 'form',
            items: [
                {
                    xtype: 'textfield',
                    name: 'id',
                    hidden: true,
                    fieldLabel: '角色ID'
                },
                {
                    xtype: 'textfield',
                    name: 'rolename',
                    fieldLabel: '角色名称'
                }, {
                    xtype: 'textareafield',
                    name: 'roledesc',
                    fieldLabel: '角色描述'
                }, {
                    xtype: 'textareafield',
                    name: 'remark',
                    fieldLabel: '备注'
                }
            ],
            buttonAlign : "center",
            buttons: [
                {
                    text: '保存',
                    handler: function(){
                        var form = this.up('form').getForm();
                        if (form.isValid()){
                            form.submit({
                                url: '/bolong/update_roles_info',
                                waitMsg: '正在保存数据...',
                                success: function(form, action){
                                    Ext.Msg.alert("成功", "数据保存成功!");
                                    Ext.getCmp('rolegridview_id').getStore().reload();
                                },
                                failure: function(form, action){
                                    Ext.Msg.alert("失败", "数据保存失败!");
                                }
                            });
                        }
                    }
                },
                {
                    text: '重置',
                    handler: function () {
                        this.up('form').getForm().reset();
                    }
                }
            ]
        });
        editWindow = new Ext.Window({
            constrain: true,
            closable: true,
            modal: true,
            layout: 'fit',
            width: 400,
            height: 400,
            title: '修改信息',
            items: [editForm]
        });
        editWindow.show(Ext.get('menu_edit_id'));
        editForm.getForm().loadRecord(record);
    },

    btnReset: function(_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('rolegridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('rolequeryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'rolequeryview',
                    id: 'rolequeryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('rolequeryview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('rolegridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var id = row.get('id');
                        Ext.Ajax.request({
                            url: '/bolong/deleterole',
                            params: {
                                "id": id
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('rolegridview_id').getStore().load();
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
