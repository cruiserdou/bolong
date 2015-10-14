/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.sec.SecGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'secgridview',
    columnLines: true,
    requires: [
        'app.view.system.sec.SecController',
        'app.store.system.SecStore',
        'Ext.grid.filters.Filters'
    ],

    controller: 'seccontroller',
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
        checkboxSelect: true,
        pruneRemoved: false,
        extensible: 'y'
    },

    columns: [
        {text: '角色ID', width: 120, dataIndex: 'roleid',hidden:true},
        {text: '用户ID', flex: 1, dataIndex: 'userid',hidden:true},
        {text: '角色名称', width: 120, dataIndex: 'rolename'},
        {text: '用户名', flex: 1, dataIndex: 'username'}
    ]
});
