/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.log.LoginLog', {
    extend: 'Ext.grid.Panel',
    xtype: 'loginlog',
    id: 'loginlog_id',
    columnLines: true,
    closable: true,
    requires: [
        'app.store.system.LoginLogStore',
        'app.view.system.log.LoginLogController',
        'Ext.grid.selection.SpreadsheetModel',
        'Ext.grid.filters.Filters'
    ],

    title: '登录日志',
    controller: 'loginlog',
    animateShadow: true,
    shadow: true,
    shadowOffset: 2,
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '刷新',
                    handler: 'onClick'
                }
            ]
        }
    ],
    store: {
        type: 'loginlogstore'
    },

    selModel: {
        type: 'spreadsheet',
        // Disables sorting by header click, though it will be still available via menu
        columnSelect: true,
        checkboxSelect: true,
        pruneRemoved: false,
        //,
        extensible: 'y'
    },
    columns: [
        {text: 'ID', width: 80, dataIndex: 'login_log_id',hidden:true},
        {text: '登录人', flex: 1, dataIndex: 'user_id'},
        {text: 'IP', flex: 1, dataIndex: 'ip'},
        {text: '登录日期',  flex: 1, dataIndex: 'login_datetime'}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
