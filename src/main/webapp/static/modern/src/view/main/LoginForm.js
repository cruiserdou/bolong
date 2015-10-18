/**
 * This view is an example list of people.
 */
Ext.define('app.view.main.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',

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
        title: '登录信息',
        instructions: '请在以上输入框输入用户名和密码.',
        defaults: {
            labelWidth: '90'
        },
        listeners: {
            painted: function () {
                c_compnent_id = 'loginform_id';
            }
        },
        items: [
            {
                xtype: 'textfield',
                label: '用户名',
                required: true,
                id: 'user_id'
            },
            {
                xtype: 'passwordfield',
                required: true,
                label: '密码',
                value: '',
                id: 'password'
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
                text: '登 录',
                ui: 'action',
                scope: this,
                hasDisabled: false,
                handler: function (btn) {
                    if (Ext.getCmp('user_id').getValue() != 'admin') {
                        Ext.Msg.alert("错误", "用户名或密码错误！");
                        return;
                    }
                    if (Ext.getCmp('password').getValue() != '1') {
                        Ext.Msg.alert("错误", "用户名或密码错误！");
                        return;
                    }
                    Ext.getCmp('mobile_id').add({
                        xtype: 'toolbar',
                        id: 'top_toolbar_id',
                        docked: 'top'
                    });
                    if (Ext.getCmp('menu_menu_id') == null) {
                        Ext.getCmp('top_toolbar_id').add(
                            {
                                text: '菜 单',
                                iconCls: 'x-fa fa-list',
                                id: 'menu_menu_id',
                                ui: 'back',
                                hidden: (Ext.theme.name == "Blackberry") ? true : false,
                                handler: function () {
                                    Ext.Viewport.toggleMenu('left');
                                }
                            }
                        );
                    }

                    if (Ext.getCmp('grid_t') == null) {
                        Ext.getCmp('mobile_id').remove(Ext.getCmp(c_compnent_id));
                        Ext.getCmp('mobile_id').add({
                            xtype: 'mainlist',
                            id: 'grid_t',
                            flex: 1
                        });
                    }
                }
            },
            {
                text: '重 置',
                ui: 'action',
                handler: function () {
                    Ext.getCmp('loginform_id').reset();
                }
            }
        ]
    }]
});
