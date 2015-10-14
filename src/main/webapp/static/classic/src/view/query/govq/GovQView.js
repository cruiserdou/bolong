/**
 * This view is an example list of people.
 */
Ext.define('app.view.query.govq.GovQView', {
    extend: 'Ext.panel.Panel',
    xtype: 'govqview',
    closable: true,
    requires: [
        'app.view.query.govq.GovQController',
        'app.view.query.govq.GovQGridView',
        'app.view.query.govq.GovQEditLogGridView',
        'app.view.query.govq.GovQDetailView',
        'app.view.query.govq.GovQQueryView'
    ],

    controller: 'govqcontroller',
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
        xtype: 'govqgridview',
        region: 'center',
        id: 'govqgridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'govqdetailview',
        region: 'east',
        id: 'govqdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]

});
