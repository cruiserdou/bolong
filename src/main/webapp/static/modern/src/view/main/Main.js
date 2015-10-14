/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
var c_compnent_id = "";

Ext.define('app.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',
    id: 'mobile_id',

    requires: [
        'Ext.Menu',
        'Ext.MessageBox',
        'Ext.data.request.Ajax',
        'Ext.carousel.Carousel',
        'app.view.main.MainController',
        'app.view.main.MainModel',
        'app.view.main.List',
        'app.view.query.ListGov',
        'app.view.main.InputNum',
        'app.view.main.LoginForm'
    ],

    controller: 'main',
    fullscreen: true,
    layout: 'vbox',
    config: {
        scrollable: true,
        items: [
            {
                xtype: 'loginform',
                id: 'loginform_id',
                flex: 1
            }]
    },
    updateHidden: function (hidden) {
        this.callParent(arguments);

        if (hidden) {
            Ext.Viewport.removeMenu('left');
            Ext.Viewport.removeMenu('right');
            Ext.Viewport.removeMenu('bottom');
            Ext.Viewport.removeMenu('top');
        } else {
            Ext.Viewport.setMenu(this.getMenuCfg('top'), {
                side: 'top'
            });

            Ext.Viewport.setMenu(this.getMenuCfg('bottom'), {
                side: 'bottom',
                cover: false
            });

            Ext.Viewport.setMenu(this.getMenuCfg('left'), {
                side: 'left',
                reveal: true
            });

            Ext.Viewport.setMenu(this.getMenuCfg('right'), {
                side: 'right',
                reveal: true
            });
        }
    },
    getMenuCfg: function (side) {
        return {
            items: [{
                text: '输入数据',
                iconCls: 'x-fa fa-edit',
                scope: this,
                handler: function () {
                    if (Ext.getCmp('inputnum_id') == null) {
                        Ext.getCmp('mobile_id').remove(Ext.getCmp(c_compnent_id));
                        Ext.getCmp('mobile_id').add({
                            xtype: 'inputnum',
                            id: 'inputnum_id',
                            flex: 1
                        });
                    }
                    Ext.Viewport.hideMenu(side);
                }
            }, {
                text: '生成数据',
                iconCls: 'x-fa fa-gear',
                scope: this,
                handler: function () {
                    if (Ext.getCmp('listenter_id') == null) {
                        Ext.getCmp('mobile_id').remove(Ext.getCmp(c_compnent_id));
                        Ext.getCmp('mobile_id').add({
                            xtype: 'mainlist',
                            id: 'listenter_id',
                            flex: 1
                        });
                        Ext.Viewport.hideMenu(side);
                    }
                }
            }, {
                text: '统计',
                iconCls: 'x-fa fa-line-chart',
                scope: this,
                handler: function () {
                    if (Ext.getCmp('listgov_id') == null) {
                        Ext.getCmp('mobile_id').remove(Ext.getCmp(c_compnent_id));
                        Ext.getCmp('mobile_id').add({
                            xtype: 'listgov',
                            id: 'listgov_id',
                            flex: 1
                        });
                        Ext.Viewport.hideMenu(side);
                    }
                }
            }, {
                xtype: 'button',
                text: '注 销',
                iconCls: 'x-fa fa-close',
                scope: this,
                handler: function () {
                    if (Ext.getCmp('loginform_id') == null) {
                        Ext.getCmp('mobile_id').remove(Ext.getCmp(c_compnent_id));
                        Ext.getCmp('mobile_id').remove(Ext.getCmp('top_toolbar_id'));
                        Ext.getCmp('mobile_id').add({
                            xtype: 'loginform',
                            id: 'loginform_id',
                            flex: 1
                        });
                        Ext.Viewport.hideMenu(side);
                    }
                }
            }]
        };
    }
});
