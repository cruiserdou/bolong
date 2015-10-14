/**
 * This view is an example list of people.
 */
Ext.define('app.view.query.retr.RetrQView', {
    extend: 'Ext.panel.Panel',
    xtype: 'retrqview',
    closable: true,
    requires: [
        'app.view.query.retr.RetrQController',
        'app.view.query.retr.RetrQGridView',
        'app.view.query.retr.RetrQEditLogGridView',
        'app.view.query.retr.RetrQDetailView',
        'app.view.query.retr.RetrQQueryView'
    ],

    controller: 'retrqcontroller',
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
    items: [
        {
        xtype: 'retrqgridview',
        region: 'center',
        id: 'retrqgridview_id',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'retrqdetailview',
        region: 'east',
        id: 'retrqdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
