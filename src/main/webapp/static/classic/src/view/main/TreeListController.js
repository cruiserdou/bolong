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

    onLogin: function(){
        var loginWindow = Ext.create('Ext.window.Window', {
            height: 230,
            width: 320,
            id: 'loginwindow',
            title: '登录窗口',
            constrain: true,
            closable: false,
            modal: true,
            layout: 'fit',
            items: {  // Let's put an empty grid in just to illustrate fit layout
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
                    name: 'account',
                    value: localStorage.getItem('account'),
                    emptyText: '用户名'
                }, {
                    allowBlank: false,
                    fieldLabel: '密码',
                    id: 'password_id',
                    name: 'password',
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

                            if (Ext.getCmp('account_id').getValue() != 'admin') {
                                Ext.Msg.alert('失败', '用户名或密码错误!');
                                return;
                            }
                            if (Ext.getCmp('password_id').getValue() != '1') {
                                Ext.Msg.alert('失败', '用户名或密码错误!')
                                return;
                            }

                            Ext.getCmp('enter_grid_id').getStore().load();
                            loginWindow.close();
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

    repaintList: function(treelist, microMode) {
        treelist.getStore().getRoot().cascadeBy(function(node) {
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
