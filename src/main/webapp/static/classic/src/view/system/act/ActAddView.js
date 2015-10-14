/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.act.ActAddView', {
    extend: 'Ext.window.Window',
    xtype: 'actaddview',
    width: 320,
    title: '添加信息',
    constrain: true,
    closable: true,
    modal: true,
    layout: 'fit',
    requires: [
        'app.store.system.MenuMtStore',
        'app.store.system.RoleMtStore'
    ],
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'form',
        bodyPadding: 10,
        layout: 'form',

        items: [
        //{
        //    xtype: 'combobox',
        //    name: 'roleid',
        //    fieldLabel: '角色'
        //}, {
        //    xtype: 'combobox',
        //    name: 'treeid',
        //    fieldLabel: '菜单'
        //}
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
                name: 'treeid',
                fieldLabel: '菜单',
                xtype: 'combobox',
                autoRender: true,
                autoShow: true,
                store: {
                    type: 'menustore'
                },
                triggerAction: 'all',
                valueField: 'id',
                displayField: 'text',
                allowBlank:false
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
                            url: '/enter/add_rolepermissions_info',
                            waitMsg: '正在保存数据...',
                            success: function(form, action){
                                Ext.Msg.alert("成功", "数据保存成功!");
                                //重新载入渠道信息
                                Ext.getCmp('actgridview_id').getStore().reload();
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
