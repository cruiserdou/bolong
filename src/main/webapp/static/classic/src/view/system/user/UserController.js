/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.system.user.UserController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.usercontroller',

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('userdetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);
    },

    btnAdd: function () {
        Ext.create('app.view.system.user.UserAddView', {}).show(Ext.get('user_add_id'));
    },

    btnRefresh: function () {
        Ext.getCmp('usergridview_id').getStore().load();
    },

    btnFind: function () {
        Ext.getCmp('usergridview_id').getStore().load({
            params: {
                name: Ext.getCmp('query_user_name_id').getValue()
            }
        });
    },

    btnEdit: function(_this) {
        var sm = Ext.getCmp('usergridview_id').getSelectionModel();
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
                //    {
                //    xtype: 'textfield',
                //    name: 'id',
                //    fieldLabel: '用户ID',
                //    hidden: 'true'
                //},

                {
                    xtype: 'textfield',
                    name: 'account',
                    fieldLabel: '帐号',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    name: 'password',
                    inputType: 'password',
                    fieldLabel: '密码',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '姓名',
                    allowBlank: false
                },
                //    {
                //    xtype: 'radiofield',
                //    name: 'sex',
                //    value: '男',
                //    fieldLabel: '性别',
                //    boxLabel: '男'
                //}, {
                //    xtype: 'radiofield',
                //    name: 'sex',
                //    value: '女',
                //    fieldLabel: '',
                //    labelSeparator: '',
                //    hideEmptyLabel: false,
                //    boxLabel: '女'
                //},
                {
                    xtype: 'container',
                    anchor: '100%',
                    layout: 'column',
                    items: [
                        {
                            layout: "column",
                            fieldLabel: '性&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp别',
                            labelAlign: 'right',
                            xtype: 'radiogroup', anchor: '220%', columns: 20, items: [
                            {boxLabel: "男", name: 'sex', inputValue: '男',checked: true},
                            {boxLabel: "女", name: 'sex', inputValue: '女'}
                        ]
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    name: 'phone',
                    fieldLabel: '手机号',
                    allowBlank: false
                },{
                    xtype: 'textareafield',
                    name: 'address',
                    fieldLabel: '联系地址',
                    allowBlank: false
                },{
                    xtype: 'textareafield',
                    name: 'remark',
                    fieldLabel: '备注'
                } ,
                {
                    xtype: 'container',
                    anchor: '100%',
                    layout: 'column',
                    items: [
                        {
                            xtype:'filefield',
                            labelAlign: 'right',
                            fieldLabel:'上传头像',
                            name:'img',
                            id:'img',
                            anchor: '97%',
                            buttonText:'',
                            buttonConfig:{
                                iconCls:'upload'
                            },
                            listeners:{
                                change:function(btn,value){
                                    //是否是规定的图片类型
                                    var img_reg = /\.([jJ][pP][gG])$|\.([jJ][pP][eE][gG])$|\.([gG][iI][fF])小贝$|\.([pP][nN][gG])$|\.([bB][mM][pP])$/;
                                    if (img_reg.test(value)) {
                                        var img = Ext.getCmp('staffavatar');
                                        var file = btn.fileInputEl.dom.files[0];
                                        var url = URL.createObjectURL(file);
                                        img.setSrc(url);
                                    } else {
                                        Ext.Msg.alert('提示', '请选择图片类型的文件！');
                                        Ext.getCmp('url').reset();
                                        return ;
                                    }
                                }
                            }
                        },
                        {
                            xtype: 'fieldset',
                            width:255,
                            margin:'10 10 10 10',
                            title: '图片预览',
                            defaults: {margin:'10 0 10 20', width: 200,height:150},
                            items: [
                                {
                                    xtype: 'image',
                                    id: 'staffavatar',
                                    border:1,
                                    src: 'upload/per.png',
                                    style: {
                                        borderColor: 'blue',
                                        borderStyle: 'solid'
                                    }}
                            ]
                        }
                    ]
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
                                url: '/bolong/update_users_info',
                                waitMsg: '正在保存数据...',
                                success: function(form, action){
                                    Ext.Msg.alert("成功", "数据保存成功!");
                                    Ext.getCmp('usergridview_id').getStore().reload();
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

    btnReset: function (_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('usergridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('userqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'userqueryview',
                    id: 'userqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        } else {
            _this.up().up().remove(Ext.getCmp('userqueryview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('usergridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var id = row.get('id');
                        Ext.Ajax.request({
                            url: '/bolong/deleteuser',
                            params: {
                                "id": id
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('usergridview_id').getStore().load();
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
