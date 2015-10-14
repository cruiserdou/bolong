/**
 * This view is an example list of people.
 */
Ext.define('app.view.query.serviceq.ServiceQView', {
    extend: 'Ext.panel.Panel',
    xtype: 'serviceqview',
    closable: true,
    requires: [
        'app.view.query.serviceq.ServiceQController',
        'app.view.query.serviceq.ServiceQGridView',
        'app.view.query.serviceq.ServerQEditLogGridView',
        'app.view.query.serviceq.ServiceQDetailView',
        'app.view.query.serviceq.ServiceQQueryView'
    ],

    controller: 'serviceqcontroller',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '刷新',
                    handler: 'refresh'
                },
                {
                    text: '查询',
                    handler: 'btnSearch'
                },
                {
                    text: '变更记录',
                    handler: 'btnLog'
                }
            ]
        }
    ],
    layout: 'border',
    items: [ {
        xtype: 'serviceqgridview',
        region: 'center',
        margin : '1 1 0 0',
        id: 'serviceqgridview_id',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'serviceqdetailview',
        region: 'east',
        id: 'serviceqdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
