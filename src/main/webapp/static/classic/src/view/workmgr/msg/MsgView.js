/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.msg.MsgView', {
    extend: 'Ext.panel.Panel',
    xtype: 'msgview',
    closable: true,
    requires: [
        'app.view.workmgr.msg.MsgController',
        'app.view.workmgr.msg.MsgGridView',
        'app.view.workmgr.msg.MsgDetailView',
        'app.view.workmgr.msg.MsgAddView',
        'app.view.workmgr.msg.MsgQueryView'
    ],

    controller: 'msgcontroller',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '添加',
                    id: 'msg_add_id',
                    handler: 'btnAdd'
                },
                {
                    text: '删除',
                    handler: 'delete'
                },
                {
                    text: '刷新',
                    handler: 'refresh'  },
                {
                    text: '查询', 
                    handler: 'btnSearch'
                }
            ]
        }
    ],
    layout: 'border',
    items: [{
        xtype: 'msggridview',
        region: 'center',
        id: 'msggridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'msgdetailview',
        region: 'east',
        id: 'msgdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
