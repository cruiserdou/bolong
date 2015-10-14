/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.sysdict.SysdictGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'sysdictgridview',
    columnLines: true,
    requires: [
        'app.view.system.sysdict.SysdictController',
        'app.store.system.DictsMtStore',
        'Ext.grid.filters.Filters'
    ],

    controller: 'sysdictcontroller',
    store: {
        type: 'dictsstore'
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
        {text: '字典ID', width: 80, dataIndex: 'id',hidden:true},
        {text: '字段', width: 220, dataIndex: 'field'},
        {text: '字段名称', width: 220, dataIndex: 'fieldnm'},
        {text: '字段值', width: 220, dataIndex: 'fieldval'},
        {text: '字段显示名称', width: 220, dataIndex: 'fieldvaldis'},
        {text: '备注', flex: 1, dataIndex: 'remark'}
    ]
});
