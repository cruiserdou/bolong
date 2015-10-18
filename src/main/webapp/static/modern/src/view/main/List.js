/**
 * This view is an example list of people.
 */
Ext.define('app.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'app.store.Personnel',
        'app.store.workmgr.msg.MsgStore'
    ],

    title: '站内信息',

    store: {
        type: 'msgstore'
    },

    columns: [
        {text: 'ID', width: 80, dataIndex: 'id',hidden:true},
        {text: '状态', width: 101, dataIndex: 'stat'},
        {text: '接收人', width: 100, dataIndex: 'ruser_id',hidden:true},
        {text: '发送人', width: 80, dataIndex: 'user_id',hidden:true},
        {text: '发送人', width: 120, dataIndex: 'user_name'},
        {text: '内容', flex: 1, dataIndex: 'content'},
        {text: '期限', width: 100, dataIndex: 'deadline',hidden:true},
        {text: '发送时间', width: 200, dataIndex: 'rtdate'},
        {text: '类型', width: 100, dataIndex: 'type'},
        {text: '备注', width: 100, dataIndex: 'remark',hidden:true}
    ],

    listeners: {
        select: 'onItemSelected',
        painted: function () {
            c_compnent_id = "grid_t";
            Ext.getCmp('grid_t').getStore().load();
        }
    }
});
