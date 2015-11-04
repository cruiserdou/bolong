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

        if (!record) {
            Ext.Msg.alert('信息', '请选择要编辑的数据');
            return;
        }
        var record = sm.getSelection()[0];

        editForm = new Ext.form.FormPanel({

            id: 'user_modify_id',
            xtype: 'form',
            bodyPadding: 10,
            scrollable: true,
            layout: 'form',
            columns: 2,
            items: [{
                xtype: "fieldcontainer",
                layout: "hbox",
                items: [{
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'id',
                            hidden: true,
                            fieldLabel: 'ID'
                        },
                        {
                            xtype: 'textfield',
                            readOnly: true,
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
                        }, {
                            xtype: 'container',
                            layout: 'column',
                            items: [{
                                layout: "column",
                                fieldLabel: '性别',
                                labelAlign: 'right',
                                xtype: 'radiogroup', columns: 50, items: [
                                    {boxLabel: "男", name: 'sex', inputValue: '男', checked: true},
                                    {boxLabel: "女", name: 'sex', inputValue: '女'}
                                ]
                            }]
                        }, {
                            xtype: 'textfield',
                            name: 'phone',
                            fieldLabel: '手机号',
                            allowBlank: false,
                            regex : /(^13\d{9}$)|(^14)[5,7]\d{8}$|(^15[0,1,2,3,5,6,7,8,9]\d{8}$)|(^17)[6,7,8]\d{8}$|(^18\d{9}$)/g,
                            regexText : '请输入正确的电话号码'
                        }, {
                            xtype: 'textfield',
                            name: 'address',
                            fieldLabel: '联系地址',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            name: 'remark',
                            fieldLabel: '备注'
                        }]
                }, {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'stretch'
                    },
                    items: [{
                        xtype: 'filefield',
                        labelAlign: 'right',
                        fieldLabel: '上传头像',
                        name: 'img',
                        id: 'img',
                        buttonText: '',
                        buttonConfig: {
                            iconCls: 'upload'
                        },
                        listeners: {
                            change: function (btn, value) {
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
                                    return;
                                }
                            }
                        }
                    }, {
                        xtype: 'fieldset',
                        flex: 1,
                        margin: '10 10',
                        title: '图片预览',
                        defaults: {margin: '5 5', height: 150, width: 160},
                        items: [{
                            xtype: 'image',
                            id: 'staffavatar',
                            border: 1,
                            src: '/bolong/static/upload/annex/'+record.data['img'],
                            //src: '/bolong/static/resources/per.png',
                            style: {
                                display: 'block',
                                margin: '0 auto',
                                width: '100%'
                            }
                        }]
                    }]
                }]
            }],
            buttonAlign: "center",
            buttons: [
                {
                    text: '重置',
                    handler: function () {
                        this.up('form').getForm().reset();
                    }
                },
                {
                    text: '保存',
                    handler: function () {
                        var form = this.up('form').getForm();
                        if (form.isValid()) {
                            form.submit({
                                url: '/bolong/update_users_info',
                                waitMsg: '正在保存数据...',
                                success: function (form, action) {
                                    Ext.Msg.alert("成功", "数据保存成功!");
                                    //重新载入渠道信息
                                    Ext.getCmp('usergridview_id').getStore().reload();
                                },
                                failure: function (form, action) {
                                    Ext.Msg.alert("失败", "数据保存失败!");
                                }
                            });
                        }
                    }
                }
            ]


        });
        editWindow = new Ext.Window({
            layout: 'fit',
            title: "修改用户信息",
            width: 600,
            height: 450,
            modal: true,
            items: [editForm]
        });
        editWindow.show(Ext.get('user_edit_id'));
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
