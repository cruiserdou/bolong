/**
/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.role.RoleGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'rolegridview',
    columnLines: true,
    requires: [
        'app.view.system.role.RoleController',
        'app.store.system.RoleMtStore',
        'Ext.grid.filters.Filters'
    ],

    controller: 'rolecontroller',
    store: {
        type: 'rolestore'
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
        {text: '角色ID', width: 80, dataIndex: 'id' ,hidden:true},
        {text: '角色名称', width: 120, dataIndex: 'rolename' },
        {text: '角色描述', width: 800, dataIndex: 'roledesc'},
        {text: '备注',  flex: 1, dataIndex: 'remark'}
    ]
});
