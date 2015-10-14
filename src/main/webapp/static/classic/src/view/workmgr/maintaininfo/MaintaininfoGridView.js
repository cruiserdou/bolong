/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.maintaininfo.MaintaininfoGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'maintaininfogridview',
    columnLines: true,
    requires: [
        'app.view.workmgr.maintaininfo.MaintaininfoController',
        'app.store.workmgr.maintaininfo.MaintaininfoStore',
        'Ext.grid.filters.Filters'
    ],

    controller: 'maintaininfocontroller',
    store: {
        type: 'maintaininfostore'
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
        {text: 'ID', width: 220, dataIndex: 'mi_id',hidden:true},
        {text: '企业ID',  width: 220, dataIndex: 'mi_corp_id',hidden:true},
        {text: '企业名称',  width: 220, dataIndex: 'corp_name'},
        {text: '挂牌代码', width: 100, dataIndex: 'mi_listcode'},
        {text: '省',  width: 80, dataIndex: 'mi_province'},
        {text: '市', width: 80, dataIndex: 'mi_city'},
        {text: '县',  width: 80, dataIndex: 'mi_county'},
        {text: '维护时间',  width: 150, dataIndex: 'mi_mt_date'},
        {text: '企业客户分级(A/B）', width: 220, dataIndex: 'mi_cust_type'},
        {text: '下次维护时间', width: 150, dataIndex: 'mi_next_date'},
        {text: '下次维护计划', width: 220, dataIndex: 'mi_next_plan'},
        {text: '维护结果', flex: 1, dataIndex: 'mi_remark'}
    ]
});
