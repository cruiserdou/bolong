/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.maintainplan.MaintainplanGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'maintainplangridview',
    columnLines: true,
    requires: [
        'app.view.workmgr.maintainplan.MaintainplanController',
        'app.store.workmgr.maintainplan.MaintainplanStore',
        'Ext.grid.filters.Filters'
    ],

    controller: 'maintainplancontroller',
    store: {
        type: 'maintainplanstore'
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
        {text: 'ID',  width: 220, dataIndex: 'mp_id',hidden:true},
        {text: '企业ID',  width: 220, dataIndex: 'mp_corp_id',hidden:true},
        {text: '企业名称',  width: 220, dataIndex: 'corp_name'},
        {text: '挂牌代码',  width: 100, dataIndex: 'mp_listcode'},
        {text: '省', width: 80, dataIndex: 'mp_province'},
        {text: '市', width: 80, dataIndex: 'mp_city'},
        {text: '县', width: 80, dataIndex: 'mp_county'},
        {text: '最后一次维护时间', width: 150, dataIndex: 'mp_last_date'},
        {text: '维护内容', width: 220, dataIndex: 'mp_content'},
        {text: '维护结果', width: 220, dataIndex: 'mp_result',hidden:true},
        {text: '历史记录', width: 220, dataIndex: 'mp_hisdesc' ,hidden:true},
        {text: '备注',flex: 1, dataIndex: 'mp_remark'}
    ]
});
