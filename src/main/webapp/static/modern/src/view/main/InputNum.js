/**
 * This view is an example list of people.
 */
Ext.define('app.view.main.InputNum', {
    extend: 'Ext.form.Panel',
    xtype: 'inputnum',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio'
    ],
    items: [{
        xtype: 'fieldset',
        title: '输入信息',
        defaults: {
            labelWidth: '120'
        },
        listeners: {
            painted: function () {
                c_compnent_id = 'inputnum_id';
            }
        },
        items: [{
            xtype: 'numberfield',
            label: '期数',
            name: 'periods',
            required: true
        }, {
            xtype: 'textfield',
            required: true,
            label: '开奖时间',
            name: 'open_time'
        }, {
            xtype: 'textfield',
            require: true,
            name: 'five',
            label: '万'
        }, {
            xtype: 'textfield',
            require: true,
            name: 'four',
            label: '千'
        }, {
            xtype: 'textfield',
            require: true,
            name: 'three',
            label: '百'
        }, {
            xtype: 'textfield',
            require: true,
            name: 'two',
            label: '十'
        }, {
            xtype: 'textfield',
            require: true,
            name: 'one',
            label: '个'
        }]
    }, {
        xtype: 'container',
        defaults: {
            xtype: 'button',
            style: 'margin: 1em',
            flex: 1
        },
        layout: {
            type: 'hbox'
        },
        items: [
            {
                text: '保 存',
                ui: 'action',
                scope: this,
                hasDisabled: false,
                handler: function (_this) {
                    console.log("Hello")
                    //var form = _this.up('form').getForm();
                    var form = Ext.getCmp('inputnum_id');

                    form.submit({
                        url: '/sn/basedata/insert', method: 'Post', success: function () {
                            Ext.Msg.alert("success");
                        }, failure: function () {
                            Ext.Msg.alert("error");
                        }
                    });

                    //form.submit({
                    //    url: '/sn/basedata/insert',
                    //    method: 'POST',
                    //    success: function () {
                    //        Ext.Msg.alert("成功", "数据保存成功!");
                    //        //重新载入数据
                    //        //Ext.getCmp('banks_grid').getStore().reload();
                    //    },
                    //    failure: function () {
                    //        Ext.Msg.alert("失败", "数据保存失败!");
                    //    }
                    //});
                    //Ext.Msg.alert("成功", "数据保存成功!");
                }
            },
            {
                text: '重 置',
                ui: 'action',
                handler: function () {
                    Ext.getCmp('inputnum_id').reset();
                }
            }
        ]
    }]
});
