/**
 * This view is an example list of people.
 */
Ext.define('app.view.statis.demand.HrDmStatis', {
    extend: 'Ext.panel.Panel',
    xtype: 'hrdmstatis',
    closable: true,
    title: '人力资源需求需求统计',

    requires: [
        'app.store.stat.CorpRehrStatStore',
        'app.xtemplate.stat_view',
        'Ext.grid.filters.Filters'
    ],
    store: {
        type: 'corprehrstatstore'
    },

    listeners: {
        afterrender: function (_this) {
            var store = Ext.create('Ext.data.Store', {
                extend: 'Ext.data.Store',
                model: 'app.model.stat.CorpStatModel',
                proxy: {
                    type: 'ajax',
                    api: {
                        read: '/bolong/statrehrlist'
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
                        rehrdmstatis_tpl.append('rehr_statis', item.getData());
                    });
                }
            });
        }
    },
    html: '<div id="rehr_statis"></div>'
});
