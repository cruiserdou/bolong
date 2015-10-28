/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.system.sysdict.SysdictController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.sysdictcontroller',

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('sysdictdetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);
    },

    btnAdd: function(){
        Ext.create('app.view.system.sysdict.SysdictAddView',{
        }).show(Ext.get('sysdict_add_id'));
    },

    btnRefresh: function () {
        Ext.getCmp('sysdictgridview_id').getStore().load();
    },

    btnFind: function(){
        Ext.getCmp('sysdictgridview_id').getStore().load({
            params: {
                fieldnm: Ext.getCmp('query_dict_fieldnm_id').getValue()
            }
        });
    },

    btnEdit: function(_this) {
        var sm = Ext.getCmp('sysdictgridview_id').getSelectionModel();
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
                    fieldLabel: '字典ID'
                }, {
                    xtype: 'textfield',
                    name: 'field',
                    fieldLabel: '字段',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    name: 'fieldnm',
                    fieldLabel: '字段名称',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    name: 'fieldval',
                    fieldLabel: '字段值',
                    allowBlank: false
                },{
                    xtype: 'textfield',
                    name: 'fieldvaldis',
                    fieldLabel: '字段显示名称',
                    allowBlank: false
                },{
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
                                url: '/bolong/update_dicts_info',
                                waitMsg: '正在保存数据...',
                                success: function(form, action){
                                    Ext.Msg.alert("成功", "数据保存成功!");
                                    Ext.getCmp('sysdictgridview_id').getStore().reload();
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
        Ext.getCmp('sysdictgridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('sysdictqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'sysdictqueryview',
                    id: 'sysdictqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('sysdictqueryview_id'));
        }
    },
    
    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('sysdictgridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var id = row.get('id');
                        Ext.Ajax.request({
                            url: '/bolong/deletedict',
                            params: {
                                "id": id
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('sysdictgridview_id').getStore().load();
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
