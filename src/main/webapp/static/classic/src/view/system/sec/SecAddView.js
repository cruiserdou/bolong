/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.sec.SecAddView', {
    extend: 'Ext.window.Window',
    xtype: 'secaddview',
    width: 320,
    title: '添加权限',
    constrain: true,
    closable: true,
    modal: true,
    layout: 'fit',
    requires: [
        'app.store.system.UserMtStore',
        'app.store.system.RoleMtStore'
    ],
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'form',
        bodyPadding: 10,
        layout: 'form',

        items: [
            {
                anchor: '100%',
                name: 'roleid',
                fieldLabel: '角色',
                xtype: 'combobox',
                autoRender: true,
                autoShow: true,
                store: {
                    type: 'rolestore'
                },
                triggerAction: 'all',
                valueField: 'id',
                displayField: 'rolename',
                allowBlank:false

            },
            {
                anchor: '100%',
                xtype: 'combobox',
                allowBlank: false,
                fieldLabel: '用户',
                name: 'userid',
                store: {
                    type: 'userstore'
                },
                displayField: 'name',
                valueField: 'id',
                listConfig: {
                    getInnerTpl: function () {
                        return '<div><span style="color: green;">' + '({name})</span></div>';
                    }
                }
            }
        ],
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
                    if (form.isValid()){
                        form.submit({
                            url: '/enter/add_userroles_info',
                            waitMsg: '正在保存数据...',
                            success: function(form, action){
                                Ext.Msg.alert("成功", "数据保存成功!");
                                //重新载入渠道信息
                                Ext.getCmp('secgridview_id').getStore().reload();
                            },
                            failure: function(form, action){
                                Ext.Msg.alert("失败", "数据保存失败!");
                            }
                        });
                    }
                }
            }
        ]
    }
});
