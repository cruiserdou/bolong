/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.sec.SecView', {
    extend: 'Ext.panel.Panel',
    xtype: 'secview',
    closable: true,
    requires: [
        'app.view.system.sec.SecController',
        'app.view.system.sec.SecGridView',
        'app.view.system.sec.SecDetailView',
        'app.view.system.sec.SecAddView',
        'app.view.system.sec.SecModel',
        'app.view.system.sec.SecQueryView',
        'app.store.tree.MenuTree'
    ],

    controller: 'seccontroller',
    viewModel: {
        type: 'checktree'
    },
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '添加',
                    id: 'sec_add_id',
                    handler: 'btnAdd'
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
        xtype: 'secgridview',
        region: 'center',
        id: 'secgridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    }, {
        xtype: 'treepanel',
        region: 'east',
        id: 'sectree_id',
        margin : '1 1 0 0',
        width: 460,
        store: new Ext.data.TreeStore({
            proxy: {
                type: 'ajax',
                actionMethods: {
                    read: 'POST'
                },
                url: '/bolong/ojson'
            },
            sorters: [{
                property: 'leaf',
                direction: 'ASC'
            }, {
                property: 'text',
                direction: 'ASC'
            }]
        }),
        rootVisible: false
    }]
});
