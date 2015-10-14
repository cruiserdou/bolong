/**
 * This view is an example list of people.
 */
Ext.define('app.view.enter.EnterInfoView', {
    extend: 'Ext.panel.Panel',
    xtype: 'enterinfoview',
    id: 'enterinfoview_id',
    closable: true,
    requires: [
        'app.view.enter.EnterInfoGridView',
        'app.view.enter.EnterInfoEditLogGridView',
        'app.view.enter.EnterInfoQueryView',
        'app.view.enter.EnterInfoController',
        'app.view.enter.EnterDetailView'
    ],

    title: '企业信息查询',
    controller: 'enterinfocontroller',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '刷新',
                    handler: 'btnClick'
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
        xtype: 'entergridview',
        margin : '1 1 0 0',
        region: 'center',
        id: 'enter_grid_id'
    },{
        xtype: 'enterdetailview',
        id: 'enterdetailview_id',
        region: 'east',
        margin: '1 0 0 0',
        width:  360
    }]
});
