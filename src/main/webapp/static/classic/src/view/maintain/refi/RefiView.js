/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.refi.RefiView', {
    extend: 'Ext.panel.Panel',
    xtype: 'refiview',
    closable: true,
    requires: [
        'app.view.maintain.refi.RefiController',
        'app.view.maintain.refi.RefiGridView',
        'app.view.maintain.refi.RefiDetailView',
        'app.view.maintain.refi.RefiQueryView'
    ],

    controller: 'reficontroller',
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
        xtype: 'refigridview',
        region: 'center',
        id: 'refigridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'refidetailview',
        region: 'east',
        id: 'refidetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
