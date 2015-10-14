/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.investormt.InvestorMtView', {
    extend: 'Ext.panel.Panel',
    xtype: 'investormtview',
    closable: true,
    requires: [
        'app.view.maintain.investormt.InvestorMtController',
        'app.view.maintain.investormt.InvestorMtGridView',
        'app.view.maintain.investormt.InvestorMtDetailView',
        'app.view.maintain.investormt.InvestorMtQueryView'
    ],

    controller: 'investormtcontroller',
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
        xtype: 'investormtgridview',
        region: 'center',
        id: 'investormtgridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'investormtdetailview',
        region: 'east',
        id: 'investormtdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
