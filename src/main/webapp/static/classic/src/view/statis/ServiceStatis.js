/**
 * This view is an example list of people.
 */
Ext.define('app.view.statis.ServiceStatis', {
    extend: 'Ext.panel.Panel',
    xtype: 'servicestatis',
    closable: true,
    title: '服务机构统计',

    requires: [
        'app.store.stat.CorpServiceStatStore',
        'app.xtemplate.stat_view',
        'Ext.grid.filters.Filters'
    ],
    store: {
        type: 'corpservicestatstore'
    },

    listeners: {
        afterrender: function (_this) {
            var store = Ext.create('Ext.data.Store', {
                extend: 'Ext.data.Store',
                model: 'app.model.stat.CorpStatModel',
                proxy: {
                    type: 'ajax',
                    api: {
                        read: '/bolong/statserverlist'
                    },
                    reader: {
                        type: 'json',
                        rootProperty: 'list'
                    }
                }
            });

            store.load({
                callback: function (records, operation, success) {
                    store.each(function (item) {
                        serverdmstatis_tpl.append('server_statis', item.getData());
                    });
                }
            });
        }
    },
    html: '<div id="server_statis"></div>'
});
