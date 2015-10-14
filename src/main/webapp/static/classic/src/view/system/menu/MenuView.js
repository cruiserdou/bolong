/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.menu.MenuView', {
    extend: 'Ext.panel.Panel',
    xtype: 'menuview',
    closable: true,
    requires: [
        'app.view.system.menu.MenuController',
        'app.view.system.menu.MenuGridView',
        'app.view.system.menu.MenuDetailView',
        'app.view.system.menu.MenuAddView',
        'app.view.system.menu.MenuQueryView'
    ],

    controller: 'menucontroller',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '添加',
                    id: 'menu_add_id',
                    handler: 'btnAdd'
                },
                {
                    text: '编辑',
                    handler: 'btnEdit'
                },
                {
                    text: '删除',
                    handler: 'delete'
                },
                {
                    text: '刷新',
                    handler: 'btnRefresh'  },
                {
                    text: '查询',
                    handler: 'btnSearch'
                }
            ]
        }
    ],
    layout: 'border',
    items: [{
        xtype: 'menugridview',
        region: 'center',
        id: 'menugridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'menudetailview',
        region: 'east',
        id: 'menudetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
