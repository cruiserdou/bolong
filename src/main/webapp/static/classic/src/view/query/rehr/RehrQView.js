/**
 * This view is an example list of people.
 */
Ext.define('app.view.query.rehr.RehrQView', {
    extend: 'Ext.panel.Panel',
    xtype: 'rehrqview',
    closable: true,
    requires: [
        'app.view.query.rehr.RehrQController',
        'app.view.query.rehr.RehrQGridView',
        'app.view.query.rehr.RehrQEditLogGridView',
        'app.view.query.rehr.RehrQDetailView',
        'app.view.query.rehr.RehrQQueryView'
    ],

    controller: 'rehrqcontroller',
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
        xtype: 'rehrqgridview',
        region: 'center',
        id: 'rehrqgridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'rehrqdetailview',
        region: 'east',
        id: 'rehrqdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
