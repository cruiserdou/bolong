/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.secb.SecBGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'secbgridview',
    columnLines: true,
    requires: [
        'app.view.system.secb.SecBController',
        'app.store.system.SecStore',
        'Ext.grid.filters.Filters'
    ],

    controller: 'secbcontroller',
    store: {
        type: 'secstore'
    },
    listeners: {
        itemclick: 'itemclick'
    },

    selModel: {
        type: 'spreadsheet',
        // Disables sorting by header click, though it will be still available via menu
        columnSelect: true,
        pruneRemoved: false,
        extensible: 'y'
    },

    columns: [
        {text: '角色ID', width: 120, dataIndex: 'roleid',hidden:true},
        {text: '用户ID', width: 120, dataIndex: 'userid',hidden:true},
        {text: '角色名称', flex: 1, dataIndex: 'rolename'},
        {text: '用户名', flex: 1, dataIndex: 'username'}
    ]
});
