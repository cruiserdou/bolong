/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.govmt.GovMtView', {
    extend: 'Ext.panel.Panel',
    xtype: 'govmtview',
    closable: true,
    requires: [
        'app.view.maintain.govmt.GovMtController',
        'app.view.maintain.govmt.GovMtGridView',
        'app.view.maintain.govmt.GovMtDetailView',
        'app.view.maintain.govmt.GovMtQueryView'
    ],

    controller: 'govmtcontroller',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '删除',
                    handler: 'delete'
                },
                {
                    text: '刷新',
                    handler: 'refresh' },
                {
                    text: '查询',
                    handler: 'btnSearch'
                }
            ]
        }
    ],
    layout: 'border',
    items: [{
        xtype: 'govmtgridview',
        region: 'center',
        id: 'govmtgridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'govmtdetailview',
        region: 'east',
        id: 'govmtdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
