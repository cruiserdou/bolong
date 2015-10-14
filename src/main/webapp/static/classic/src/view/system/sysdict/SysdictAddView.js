/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.sysdict.SysdictAddView', {
    extend: 'Ext.window.Window',
    xtype: 'sysdictaddview',
    width: 360,
    title: '添加字典',
    constrain: true,
    closable: true,
    modal: true,
    layout: 'fit',
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'form',
        bodyPadding: 10,
        layout: 'form',

        items: [{
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
                            url: '/enter/add_dicts_info',
                            waitMsg: '正在保存数据...',
                            success: function(form, action){
                                Ext.Msg.alert("成功", "数据保存成功!");
                                //重新载入渠道信息
                                Ext.getCmp('sysdictgridview_id').getStore().reload();
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
