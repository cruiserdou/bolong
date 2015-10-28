/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.workmgr.msg.MsgController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.msgcontroller',
    requires: [
        'app.store.system.UserMtStore'
    ],

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('msgdetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);
    },

    btnAdd: function(){
        Ext.create('app.view.workmgr.msg.MsgAddView',{
        }).show(Ext.get('msg_add_id'));
    },

    refresh: function () {
        Ext.getCmp('msggridview_id').getStore().load();
    },

    btnEdit:function () {
        var sm = Ext.getCmp('msggridview_id').getSelectionModel();
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
                    hidden: 'true',
                    fieldLabel: 'ID',
                    name: 'id'
                },
                {
                    xtype: 'combobox',
                    name: 'ruser_id',
                    fieldLabel: '接受人',
                    allowBlank: false,
                    //store: 'userstore',
                    store: {
                        type: 'userstore'
                    },
                    autoRender: true,
                    autoShow: true,
                    displayField: 'name',
                    valueField: 'id',
                    listConfig: {
                        getInnerTpl: function () {
                            return '<div><span style="color: green;">' + '({name})</span></div>'
                        }
                    }
                },
                {
                    xtype: 'datefield',
                    name: 'deadline',
                    fieldLabel: '期限',
                    value: new Date(),
                    hidden: true,
                    format: 'Y-m-d H:i:s',
                    allowBlank: false
                },
                {
                    xtype: 'textareafield',
                    name: 'content',
                    fieldLabel: '消息内容',
                    allowBlank: false
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
                                url: '/bolong/update_msg_info',
                                waitMsg: '正在保存数据...',
                                success: function(form, action){
                                    Ext.Msg.alert("成功", "数据保存成功!");
                                    Ext.getCmp('msggridview_id').getStore().reload();
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
            height: 300,
            title: '修改信息',
            items: [editForm]

        });
        editWindow.show(Ext.get('msg_edit_id'));
        editForm.getForm().loadRecord(record);

    },

    btnRead: function () {
            Ext.Msg.confirm('信息', '确定要已阅吗？', function (btn) {
                if (btn == 'yes') {
                    var sm = Ext.getCmp('msggridview_id').getSelectionModel();
                    var rows = sm.getSelection();

                    if (rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            var row = rows[i];
                            var id = row.get('id');
                            Ext.Ajax.request({
                                url: '/bolong/readed_msg_info',
                                params: {
                                    "id": id,
                                    "stat":'已阅'
                                },
                                waitMsg: '正在标记数据...',
                                success: function (form, action) {
                                    Ext.Msg.alert("成功", "数据标记成功!");
                                    Ext.getCmp('msggridview_id').getStore().reload();
                                },
                                failure: function (form, action) {
                                    Ext.Msg.alert("失败", "数据已阅失败!");
                                }
                            });
                        }
                    } else {
                        Ext.Msg.alert('提示', '请选择要操作的记录');
                    }
                }
            });
    },

    btnFind: function(){
        Ext.getCmp('msggridview_id').getStore().load({
            params: {
                stat: Ext.getCmp('query_msg_stat_id').getValue(),
                user_name: Ext.getCmp('query_msg_user_name_id').getValue()
            }
        });
    },

    btnReset: function(_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('msggridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('msgqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'msgqueryview',
                    id: 'msgqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('msgqueryview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('msggridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var id = row.get('id');
                        Ext.Ajax.request({
                            url: '/bolong/deletemsg',
                            params: {
                                "id": id
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('msggridview_id').getStore().load();
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
