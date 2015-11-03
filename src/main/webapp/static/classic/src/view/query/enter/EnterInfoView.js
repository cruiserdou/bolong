/**
 * This view is an example list of people.
 */
Ext.define('app.view.query.enter.EnterInfoView', {
    extend: 'Ext.panel.Panel',
    xtype: 'enterinfoview',
    id: 'enterinfoview_id',
    closable: true,
    requires: [
        'app.view.query.enter.EnterInfoGridView',
        'app.view.query.enter.EnterInfoEditLogGridView',
        'app.view.query.enter.EnterInfoQueryView',
        'app.view.query.enter.EnterInfoController'
    ],

    title: '企业信息查询',
    controller: 'enterinfocontroller',
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        border: false,
        items: [{
            text: '刷新',
            handler: 'btnClick'
        }, {
            text: '查询',
            handler: 'btnSearch'
        }, {
            text: '变更记录',
            handler: 'btnLog'
        }]
    }],
    layout: 'border',
    items: [{
        xtype: 'entergridview',
        margin: '1 1 0 0',
        region: 'center',
        id: 'enter_grid_id'
    }]
});
