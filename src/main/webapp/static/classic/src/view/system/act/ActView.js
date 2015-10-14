/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.act.ActView', {
    extend: 'Ext.panel.Panel',
    xtype: 'actview',
    closable: true,
    requires: [
        'app.view.system.act.ActController',
        'app.view.system.act.ActGridView',
        'app.view.system.act.ActDetailView',
        'app.view.system.act.ActAddView',
        'app.view.system.act.ActQueryView'
    ],

    controller: 'actcontroller',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '添加',
                    id: 'act_add_id',
                    handler: 'btnAdd'
                },
                {
                    text: '按钮权限',
                    handler: 'btnEdit'
                },
                {
                    text: '删除',
                    handler: 'delete'
                },
                {
                    text: '刷新',
                    handler: 'btnRefresh'  },
                {
                    text: '查询',
                    handler: 'btnSearch'
                }
            ]
        }
    ],
    layout: 'border',
    items: [{
        xtype: 'actgridview',
        region: 'center',
        id: 'actgridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'actdetailview',
        region: 'east',
        id: 'actdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
