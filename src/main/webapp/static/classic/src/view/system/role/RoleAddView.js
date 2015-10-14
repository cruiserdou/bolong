/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.role.RoleAddView', {
    extend: 'Ext.window.Window',
    xtype: 'roleaddview',
    width: 360,
    title: '添加角色',
    constrain: true,
    closable: true,
    modal: true,
    layout: 'fit',
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'form',
        bodyPadding: 10,
        layout: 'form',

        items: [
        //    {
        //    xtype: 'textfield',
        //    name: 'id',
        //    fieldLabel: '角色ID',
        //    hidden: true
        //},
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
                    if (form.isValid()){
                        form.submit({
                            url: '/enter/add_roles_info',
                            waitMsg: '正在保存数据...',
                            success: function(form, action){
                                Ext.Msg.alert("成功", "数据保存成功!");
                                //重新载入渠道信息
                                Ext.getCmp('rolegridview_id').getStore().reload();
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
