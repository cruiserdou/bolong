/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.act.ActGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'actgridview',
    columnLines: true,
    requires: [
        'app.view.system.act.ActController',
        'app.store.system.ActStore',
        'Ext.grid.filters.Filters'
    ],

    controller: 'actcontroller',
    store: {
        type: 'actstore'
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
        {text: "角色ID", width: 105, dataIndex: 'roleid',hidden:true},
        {text: "菜单ID", width: 290, dataIndex: 'treeid',hidden:true},
        {text: "角色名称", width: 300, dataIndex: 'rolename', sortable: true},
        {text: "菜单标题", flex: 1, dataIndex: 'text', sortable: true},
        {text: "父菜单ID",  flex: 1, dataIndex: 'parentid',hidden:true}
    ]
});
