/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.exportimport.ExportImportView', {
    extend: 'Ext.panel.Panel',
    xtype: 'exportimportview',
    closable: true,
    requires: [
        'app.view.workmgr.exportimport.ExportImportController',
        'app.view.workmgr.exportimport.ExportImportGridView',
        'app.view.workmgr.exportimport.ExportImportDetailView',
        'app.view.workmgr.exportimport.ExportImportQueryView'
    ],

    controller: 'exportimportcontroller',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '导入',
                    handler: 'import'
                },
                {
                    text: '导出',
                    handler: 'export'
                },
                {
                    text: '刷新',
                    handler: 'refresh'  },
                {
                    text: '查询', 
                    handler: 'btnSearch'
                }
            ]
        }
    ],
    layout: 'border',
    items: [{
        xtype: 'exportimportgridview',
        region: 'center',
        id: 'exportimportgridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'exportimportdetailview',
        region: 'east',
        id: 'exportimportdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
