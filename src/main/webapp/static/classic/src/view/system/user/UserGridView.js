/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.user.UserGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'usergridview',
    columnLines: true,
    requires: [
        'app.view.system.user.UserController',
        'app.store.system.UserMtStore',
        'Ext.grid.filters.Filters'
    ],

    controller: 'usercontroller',
    store: {
        type: 'userstore'
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
        {text: '用户ID', width: 80, dataIndex: 'id', hidden:true},
        {text: '员工姓名', width: 90, dataIndex: 'name'},
        {text: '性别', width: 80, dataIndex: 'sex'},
        {text: '手机号', width: 100, dataIndex: 'phone'},
        {text: '员工账号', width: 120, dataIndex: 'account', sortable: true},
        {text: '用户密码', width: 100, dataIndex: 'password',hidden:true},
        {text: '用户照片', width: 100, dataIndex: 'img',hidden:true},
        {text: '联系地址', width: 200, dataIndex: 'address'},
        {text: '备注',flex: 1, dataIndex: 'remark'}
    ]
});
