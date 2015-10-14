/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.InnerInfo', {
    extend: 'Ext.grid.Panel',
    xtype: 'innerinfo',
    columnLines: true,
    closable: true,
    requires: [
        'app.store.workmgr.InnerInfoStore',
        'Ext.grid.filters.Filters'
    ],

    title: '站内消息',
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
                    listeners: {
                        click: function(){
                            alert("Hello")
                        }
                    }
                }
            ]
        }
    ],
    store: {
        type: 'innerinfostore'
    },

    columns: [
        {text: 'ID', width: 80, dataIndex: 'id',hidden:true},
        {text: '状态', width: 100, dataIndex: 'stat'},
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
        select: 'onItemSelected'
    }
});
