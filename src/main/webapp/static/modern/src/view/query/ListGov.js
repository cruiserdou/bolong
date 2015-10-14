/**
 * This view is an example list of people.
 */
Ext.define('app.view.query.ListGov', {
    extend: 'Ext.grid.Grid',
    xtype: 'listgov',

    columnLines: true,
    requires: [
        'app.store.gov.BaseDataStore'
    ],

    title: '结果数据',

    store: {
        type: 'basedatastore'
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
        {text: '编号', width: 50, dataIndex: 'id'},
        {
            text: '开奖时间', width: 100, dataIndex: 'open_time',
            renderer: function (v) {
                return v;
            }
        },
        {text: '万', width: 40, dataIndex: 'five'},
        {text: '千', width: 40, dataIndex: 'four'},
        {text: '百', width: 40, dataIndex: 'three'},
        {text: '十', width: 40, dataIndex: 'two'},
        {text: '个', width: 40, dataIndex: 'one'},
        {text: '期数', width: 90, dataIndex: 'periods'}
    ],

    listeners: {
        painted: function () {
            c_compnent_id = "listgov_id";
            Ext.getCmp('listgov_id').getStore().load();
        }
    }
});
