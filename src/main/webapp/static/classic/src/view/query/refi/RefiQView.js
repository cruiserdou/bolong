/**
 * This view is an example list of people.
 */
Ext.define('app.view.query.refi.RefiQView', {
    extend: 'Ext.panel.Panel',
    xtype: 'refiqview',
    closable: true,
    requires: [
        'app.view.query.refi.RefiQController',
        'app.view.query.refi.RefiQGridView',
        'app.view.query.refi.RefiQEditLogGridView',
        'app.view.query.refi.RefiQDetailView',
        'app.view.query.refi.RefiQQueryView'
    ],

    controller: 'refiqcontroller',
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
        xtype: 'refiqgridview',
        region: 'center',
        id: 'refiqgridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'refiqdetailview',
        region: 'east',
        id: 'refiqdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
