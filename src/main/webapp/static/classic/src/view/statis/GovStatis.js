/**
 * This view is an example list of people.
 */
Ext.define('app.view.statis.GovStatis', {
    extend: 'Ext.panel.Panel',
    xtype: 'govstatis',
    closable: true,

    requires: [
        'app.store.stat.CorpGovStatStore',
        'app.xtemplate.stat_view',
        'Ext.grid.filters.Filters'
    ],
    store: {
        type: 'corpgovstatstore'
    },

    listeners: {
        afterrender: function (_this) {
            var store = Ext.create('Ext.data.Store', {
                extend: 'Ext.data.Store',
                model: 'app.model.stat.CorpStatModel',
                proxy: {
                    type: 'ajax',
                    api: {
                        read: '/bolong/statgovlist'
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
                        govdmstatis_tpl.append('gov_statis', item.getData());
                    });
                }
            });

        }
    },
    html: '<div id="gov_statis"></div>'
});
