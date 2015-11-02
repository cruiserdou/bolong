/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.secb.SecBView', {
    extend: 'Ext.panel.Panel',
    xtype: 'secbview',
    closable: true,
    requires: [
        'app.view.system.secb.SecBController',
        'app.view.system.secb.SecBGridView',
        'app.view.system.secb.SecBDetailView',
        'app.view.system.secb.SecBAddView',
        'app.view.system.secb.SecBModel',
        'app.view.system.secb.SecBQueryView',
        'app.store.tree.MenuTree'
    ],

    controller: 'secbcontroller',
    viewModel: {
        type: 'checkbtree'
    },
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '添加',
                    id: 'secb_add_id',
                    handler: 'btnAdd'
                },
                {
                    text: '删除',
                    handler: 'delete'
                },
                {
                    text: '刷新',
                    handler: 'btnRefresh'
                },
                {
                    text: '查询',
                    handler: 'btnSearch'
                }
            ]
        }
    ],
    layout: 'border',
    items: [{
        xtype: 'secbgridview',
        region: 'center',
        id: 'secbgridview_id',
        margin: '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    }]
});
