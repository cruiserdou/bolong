/**
 * This view is an example list of people.
 */
Ext.define('app.view.query.investorq.InvestorQView', {
    extend: 'Ext.panel.Panel',
    xtype: 'investorqview',
    closable: true,
    requires: [
        'app.view.query.investorq.InvestorQController',
        'app.view.query.investorq.InvestorQGridView',
        'app.view.query.investorq.InvestorQDetailView',
        'app.view.query.investorq.InvQEditLogGridView',
        'app.view.query.investorq.InvestorQQueryView'
    ],

    controller: 'investorqcontroller',
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
        xtype: 'investorqgridview',
        region: 'center',
        id: 'investorqgridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'investorqdetailview',
        region: 'east',
        id: 'investorqdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
