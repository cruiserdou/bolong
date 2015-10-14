/**
* This view is an example list of people.
*/
Ext.define('app.view.query.investorq.InvQEditLogGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'corpinveditloggridview',
    id: 'corpinveditloggridview_id',
    bodyStyle: 'margin: 0 2px',
    columnLines: true,
    requires: [
        'app.view.query.investorq.InvestorQController',
        'app.store.changelist.CorpInvChangeStore',
        'Ext.grid.filters.Filters'
    ],
    controller: 'investorqcontroller',
    store: {
        type: 'corpinvchangestore'
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
        {text: 'ID', width: 60, dataIndex: 'id',hidden:true},
        {text: '数据ID', width: 60, dataIndex: 'inv_id',hidden:true},
        {text: '企业ID', width: 60, dataIndex: 'inv_corp_id',hidden:true},
        {text: '字段', width: 180, dataIndex: 'field',hidden:true},
        {text: '变更内容', width: 250, dataIndex: 'field_name'},
        {text: '变更前内容', width: 300, dataIndex: 'c_before'},
        {text: '变更后内容', width: 300, dataIndex: 'c_after'},
        {text: '变更人',  flex: 1, dataIndex: 'changer_id',hidden:true}
    ]
});
