/**
 * This view is an example list of people.
 */
Ext.define('app.view.enter.EnterAddView', {
    extend: 'Ext.window.Window',
    xtype: 'enteraddview',
    width: 300,
    title: '添加数据',
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
            fieldLabel: '期数',
            name: 'periods',
            required: true
        }, {
            xtype: 'numberfield',
            require: true,
            name: 'five',
            fieldLabel: '万'
        }, {
            xtype: 'numberfield',
            require: true,
            name: 'four',
            fieldLabel: '千'
        }, {
            xtype: 'numberfield',
            require: true,
            name: 'three',
            fieldLabel: '百'
        }, {
            xtype: 'numberfield',
            require: true,
            name: 'two',
            fieldLabel: '十'
        }, {
            xtype: 'numberfield',
            require: true,
            name: 'one',
            fieldLabel: '个'
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
                    form.submit({
                        url: '/sn/basedata/insert',
                        method: 'Post',
                        success: function () {
                            form.reset();
                            Ext.getCmp('enter_grid_id').getStore().load();
                            Ext.Msg.alert("成功", "数据保存成功!");
                        }, failure: function () {
                            Ext.Msg.alert("失败", "数据保存失败!");
                        }
                    });
                }
            }
        ]
    }
});
