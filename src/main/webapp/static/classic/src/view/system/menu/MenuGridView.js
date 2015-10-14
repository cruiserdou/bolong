/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.menu.MenuGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'menugridview',
    columnLines: true,
    requires: [
        'app.view.system.menu.MenuController',
        'app.store.system.MenuMtStore',
        'Ext.grid.filters.Filters'
    ],

    controller: 'menucontroller',
    store: {
        type: 'menustore'
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
        {text: '菜单ID', width: 100, dataIndex: 'id', sortable: true},
        {text: '菜单标题', width: 120, dataIndex: 'text'},
        {text: '是否叶子', width: 100, dataIndex: 'leaf'},
        {text: '菜单父ID', width: 120, dataIndex: 'parent_id'},
        {text: '菜单链接地址', width: 300, dataIndex: 'itype'},
        {text: '图标', width: 100, dataIndex: 'iconcls'},
        {text: '根（元）', width: 100, dataIndex: 'root'},
        {text: '备注', flex: 1, dataIndex: 'remark'}
    ]
});
