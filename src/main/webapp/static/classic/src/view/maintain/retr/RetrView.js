/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.retr.RetrView', {
    extend: 'Ext.panel.Panel',
    xtype: 'retrview',
    closable: true,
    requires: [
        'app.view.maintain.retr.RetrController',
        'app.view.maintain.retr.RetrGridView',
        'app.view.maintain.retr.RetrDetailView',
        'app.view.maintain.retr.RetrQueryView'
    ],

    controller: 'retrcontroller',
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
        xtype: 'retrgridview',
        region: 'center',
        id: 'retrgridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'retrdetailview',
        region: 'east',
        id: 'retrdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
