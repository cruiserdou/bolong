/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.refimosf.RefiropfGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'refiropfgridview',
    columnLines: true,
    requires: [
        'app.store.workmgr.refimosf.RefiropStore',
        'Ext.grid.filters.Filters'
    ],

    store: {
        type: 'refiropstore'
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
        {text: '融资进度ID', width: 220, dataIndex: 'rop_id',hidden:true},
        {text: '融资服务ID',  width: 220, dataIndex: 'rop_mos_id',hidden:true},
        {text: '事项',  width: 150, dataIndex: 'rop_items'},
        {text: '具体内容', width: 150, dataIndex: 'rop_desc'},
        {text: '完成时间',  width: 120, dataIndex: 'rop_endt'},
        {text: '需解决问题', width: 120, dataIndex: 'rop_crb'},
        {text: '是否完成', width: 100, dataIndex: 'rop_stat'},
        {text: '备注', flex: 1, dataIndex: 'rop_remark'}
    ]
});
