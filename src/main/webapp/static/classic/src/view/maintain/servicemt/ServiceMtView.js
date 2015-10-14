/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.servicemt.ServiceMtView', {
    extend: 'Ext.panel.Panel',
    xtype: 'servicemtview',
    closable: true,
    requires: [
        'app.view.maintain.servicemt.ServiceMtController',
        'app.view.maintain.servicemt.ServiceMtGridView',
        'app.view.maintain.servicemt.ServiceMtDetailView',
        'app.view.maintain.servicemt.ServiceMtQueryView'
    ],

    controller: 'servicemtcontroller',
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
        xtype: 'servicemtgridview',
        region: 'center',
        id: 'servicemtgridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'servicemtdetailview',
        region: 'east',
        id: 'servicemtdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
