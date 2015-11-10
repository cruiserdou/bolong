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
        'app.view.system.log.LoginLogController',
        'Ext.grid.selection.SpreadsheetModel',
        'Ext.grid.filters.Filters'
    ],

    title: '登录日志',
    controller: 'loginlog',
    animateShadow: true,
    shadow: true,
    shadowOffset: 2,
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        border: false,
        items: [
            {
                text: '刷新',
                handler: 'onClick'
            }
        ]
    }],
    selModel: {
        type: 'spreadsheet',
        columnSelect: true,
        checkboxSelect: true,
        pruneRemoved: false,
        extensible: 'y'
    },
    columns: [
        {text: 'ID', width: 80, dataIndex: 'login_log_id', hidden: true},
        {text: '登录人', flex: 1, dataIndex: 'name'},
        {text: 'IP', flex: 1, dataIndex: 'ip'},
        {text: '登录日期', flex: 1, dataIndex: 'login_datetime'}
    ],

    listeners: {
        afterrender: 'onAfterrender'
    },

    initComponent: function () {
        var store = Ext.create('Ext.data.Store', {
            extend: 'Ext.data.Store',
            model: 'app.model.corpall.CorpAll',
            alias: 'store.corpallstore',
            pageSize: 30,
            proxy: {
                type: 'ajax',
                actionMethods: {
                    read: 'POST'
                },
                api: {
                    read: '/bolong/loginloglist'
                },
                reader: {
                    type: 'json',
                    totalProperty: 'total',
                    rootProperty: 'list'
                }
            }
        });
        Ext.apply(this, {
            store: store,
            bbar: Ext.create('Ext.PagingToolbar', {
                store: store,
                displayInfo: true,
                displayMsg: '显示第 {0} - {1} 共 {2}',
                emptyMsg: "无数据显示"
            })
        });
        this.callParent();
    }
});
