/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.refimosf.RefimosfView', {
    extend: 'Ext.panel.Panel',
    xtype: 'refimosfview',
    closable: true,
    requires: [
        'app.view.workmgr.refimosf.RefimosfController',
        'app.view.workmgr.refimosf.RefimosfGridView',
        'app.view.workmgr.refimosf.RefiropfGridView',
        'app.view.workmgr.refimosf.RefimosfDetailView',
        'app.view.workmgr.refimosf.RefimosfAddView',
        'app.view.workmgr.refimosf.RefimosfQueryView'
    ],

    controller: 'refimosfcontroller',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '添加',
                    id: 'refimosf_add_id',
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
        xtype: 'refimosfgridview',
        region: 'center',
        id: 'refimosfgridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },
    //    {
    //    xtype: 'refimosfdetailview',
    //    region: 'east',
    //    id: 'refimosfdetailview_id',
    //    margin: '0 0 0 1',
    //    width:  360
    //}
        {
            xtype: 'refiropfgridview',
            region: 'east',
            id: 'refiropfgridview_id',
            margin: '0 0 0 1',
            width:  700
        }
    ]
});
