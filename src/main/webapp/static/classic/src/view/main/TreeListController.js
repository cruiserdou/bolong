/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.main.TreeListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.tree-list',

    onToggleConfig: function (menuitem) {
        var treelist = this.lookupReference('treelist');

        treelist.setConfig(menuitem.config, menuitem.checked);
    },

    onQrBtn: function (menuitem) {
        if (window.localStorage) {
            localStorage.qr_dis = menuitem.checked;
        }
    },

    onLogin: function () {
        Ext.fly("h3_text").setStyle({display: "none"});
        var loginWindow = Ext.create('Ext.window.Window', {
            height: 230,
            width: 320,
            id: 'loginwindow',
            title: '甘肃中小企业信息系统（登录窗口）',
            constrain: true,
            closable: false,
            layout: 'fit',
            items: {
                xtype: 'form',
                defaultType: 'textfield',
                bodyPadding: 20,
                defaults: {
                    labelWidth: 80,
                    anchor: '100%'
                },
                items: [{
                    allowBlank: false,
                    fieldLabel: '用户名',
                    id: 'account_id',
                    value: localStorage.getItem('account'),
                    emptyText: '用户名'
                }, {
                    allowBlank: false,
                    fieldLabel: '密码',
                    id: 'password_id',
                    emptyText: 'password',
                    inputType: 'password'
                }, {
                    xtype: 'checkbox',
                    id: 'rem_id',
                    checked: true,
                    name: 'rem',
                    fieldLabel: '记住我'
                }],
                buttons: [{
                    text: '重置',
                    handler: function () {
                        this.up('form').getForm().reset();
                    }
                }, {
                    text: '登 录',
                    handler: function () {
                        if (Ext.getCmp('rem_id').getValue() == true) {
                            if (window.localStorage) {
                                localStorage.account = Ext.getCmp('account_id').getValue();
                            }
                        }

                        Ext.Ajax.request({
                            url: '/bolong/user_valid',
                            method: 'POST',
                            params: {
                                account: Ext.getCmp('account_id').getValue(),
                                password: Ext.getCmp('password_id').getValue()
                            },
                            success: function (response, opts) {
                                var obj = Ext.decode(response.responseText);
                                if (obj.success == false) {
                                    Ext.Msg.alert('失败', '用户名或密码错误!');
                                    return;
                                }

                                Ext.getCmp('main_window').add({
                                    region: 'west',
                                    width: 240,
                                    reference: 'treelistContainer',
                                    layout: 'border',
                                    border: false,
                                    scrollable: 'y',
                                    items: [{
                                        xtype: 'panel',
                                        region: 'center',
                                        layout: 'fit',
                                        items: [{
                                            xtype: 'treepanel',
                                            region: 'east',
                                            id: 'menutree_id',
                                            lines: true,
                                            width: 240,
                                            store: new Ext.data.TreeStore({
                                                proxy: {
                                                    type: 'ajax',
                                                    actionMethods: {
                                                        read: 'POST'
                                                    },
                                                    url: '/bolong/ojson'
                                                }
                                            }),
                                            rootVisible: false,
                                            listeners: {
                                                itemclick: function (view, rec) {
                                                    var itemid = rec.get('itype') + '_id';
                                                    var tabitem = Ext.getCmp(itemid);
                                                    if (!tabitem && rec.get('itype') != "no") {
                                                        tabitem = Ext.getCmp('mTabpanel').add({
                                                            xtype: rec.get('itype'),
                                                            id: itemid,
                                                            title: rec.get('text'),
                                                            closable: true
                                                        });
                                                    }
                                                    Ext.getCmp('mTabpanel').setActiveTab(tabitem);
                                                }
                                            }
                                        }]
                                    }]
                                });

                                loginWindow.close();
                                Ext.getCmp('main_header').show();
                                Ext.getCmp('main_window').setTitle("甘肃中小企业信息管理系统")

                                Ext.Ajax.request({
                                    url: '/bolong/getuser',
                                    method: 'POST',
                                    success: function (response, opts) {
                                        var obj = Ext.decode(response.responseText);
                                        Ext.getCmp('login_user_btn').setText("登陆人：" + obj.name)
                                    }
                                });
                                Ext.getCmp('mTabpanel').show();
                            },
                            failure: function (response, opts) {
                                console.log('Valid failure');
                            }
                        });
                    }
                }]
            }
        }).show();
    },

    onLogout: function () {
        Ext.fly("h3_text").setStyle({display: "none"});
        var loginWindow = Ext.create('Ext.window.Window', {
            height: 230,
            width: 320,
            id: 'loginwindow',
            title: '登录窗口',
            constrain: true,
            closable: false,
            modal: true,
            layout: 'fit',
            items: {
                xtype: 'form',
                defaultType: 'textfield',
                bodyPadding: 20,
                defaults: {
                    labelWidth: 80,
                    anchor: '100%'
                },
                items: [{
                    allowBlank: false,
                    fieldLabel: '用户名',
                    id: 'account_id',
                    value: localStorage.getItem('account'),
                    emptyText: '用户名'
                }, {
                    allowBlank: false,
                    fieldLabel: '密码',
                    id: 'password_id',
                    emptyText: 'password',
                    inputType: 'password'
                }, {
                    xtype: 'checkbox',
                    id: 'rem_id',
                    checked: true,
                    name: 'rem',
                    fieldLabel: '记住我'
                }],
                buttons: [
                    {
                        text: '重置',
                        handler: function () {
                            this.up('form').getForm().reset();
                        }
                    },
                    {
                        text: '登 录',
                        handler: function () {
                            if (Ext.getCmp('rem_id').getValue() == true) {
                                if (window.localStorage) {
                                    localStorage.account = Ext.getCmp('account_id').getValue();
                                }
                            }

                            Ext.Ajax.request({
                                url: '/bolong/user_valid',
                                method: 'POST',
                                params: {
                                    account: Ext.getCmp('account_id').getValue(),
                                    password: Ext.getCmp('password_id').getValue()
                                },
                                success: function (response, opts) {
                                    var obj = Ext.decode(response.responseText);
                                    console.log(obj);
                                    if (obj.success == false) {
                                        Ext.Msg.alert('失败', '用户名或密码错误!');
                                        return;
                                    }

                                    loginWindow.close();

                                    //重新加载树形菜单
                                    Ext.getCmp('menutree_id').getStore().load();
                                    Ext.getCmp('mTabpanel').removeAll(true);
                                    var panelt = Ext.create('app.view.query.enter.EnterInfoView', {});
                                    Ext.getCmp('mTabpanel').add(panelt);
                                    Ext.getCmp('mTabpanel').setActiveTab(panelt);

                                    //更新登陆人信息
                                    Ext.Ajax.request({
                                        url: '/bolong/getuser',
                                        method: 'POST',
                                        success: function (response, opts) {
                                            var obj = Ext.decode(response.responseText);
                                            Ext.getCmp('login_user_btn').setText("登陆人：" + obj.name)
                                        }
                                    });
                                },
                                failure: function (response, opts) {
                                    console.log('Valid failure');
                                }
                            });
                        }
                    }
                ]
            }
        }).show();
    },

    onToggleMicro: function (button, pressed) {
        var treelist = this.lookupReference('treelist'),
            navBtn = this.lookupReference('navBtn'),
            ct = treelist.ownerCt;

        treelist.setMicro(pressed);

        if (pressed) {
            navBtn.setPressed(true);
            navBtn.disable();
            this.oldWidth = ct.width;
            ct.setWidth(44);
        } else {
            ct.setWidth(this.oldWidth);
            navBtn.enable();
        }

        // IE8 has an odd bug with handling font icons in pseudo elements;
        // it will render the icon once and not update it when something
        // like text color is changed via style addition or removal.
        // We have to force icon repaint by adding a style with forced empty
        // pseudo element content, (x-sync-repaint) and removing it back to work
        // around this issue.
        // See this: https://github.com/FortAwesome/Font-Awesome/issues/954
        // and this: https://github.com/twbs/bootstrap/issues/13863
        if (Ext.isIE8) {
            this.repaintList(treelist, pressed);
        }
    },

    onToggleNav: function (button, pressed) {
        var treelist = this.lookupReference('treelist'),
            ct = this.lookupReference('treelistContainer');

        treelist.setExpanderFirst(!pressed);
        treelist.setUi(pressed ? 'nav' : null);
        treelist.setHighlightPath(pressed);
        ct[pressed ? 'addCls' : 'removeCls']('treelist-with-nav');

        if (Ext.isIE8) {
            this.repaintList(treelist);
        }
    },

    repaintList: function (treelist, microMode) {
        treelist.getStore().getRoot().cascadeBy(function (node) {
            var item, toolElement;

            item = treelist.getItem(node);

            if (item && item.isTreeListItem) {
                if (microMode) {
                    toolElement = item.getToolElement();

                    if (toolElement && toolElement.isVisible(true)) {
                        toolElement.syncRepaint();
                    }
                }
                else {
                    if (item.element.isVisible(true)) {
                        item.iconElement.syncRepaint();
                        item.expanderElement.syncRepaint();
                    }
                }
            }
        });
    }
});
