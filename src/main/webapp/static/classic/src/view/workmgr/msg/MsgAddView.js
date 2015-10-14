/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.msg.MsgAddView', {
    extend: 'Ext.window.Window',
    xtype: 'msgaddview',
    width: 400,
    title: '添加站内',
    constrain: true,
    closable: true,
    modal: true,
    layout: 'fit',
    requires: [
        'app.store.system.UserMtStore'
    ],


    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'form',
        bodyPadding: 10,
        layout: 'form',

        items: [{
            xtype: 'combobox',
            name: 'ruser_id',
            fieldLabel: '用户',
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
        }, {
            xtype: 'datefield',
            name: 'deadline',
            fieldLabel: '期限',
            value: new Date(),
            hidden: true,
            format: 'Y-m-d H:i:s',
            allowBlank: false
        }, {
            xtype: 'textareafield',
            name: 'content',
            fieldLabel: '消息内容',
            allowBlank: false
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
                            url: '/enter/add_msg_info',
                            waitMsg: '正在保存数据...',
                            success: function(form, action){
                                Ext.Msg.alert("成功", "数据保存成功!");
                                //重新载入渠道信息
                                Ext.getCmp('msggridview_id').getStore().reload();
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
