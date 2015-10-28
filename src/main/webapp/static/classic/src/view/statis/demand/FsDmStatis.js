/**
 * This view is an example list of people.
 */
Ext.define('app.view.statis.demand.FsDmStatis', {
    extend: 'Ext.panel.Panel',
    xtype: 'fsdmstatis',
    closable: true,
    title: '融资需求统计',

    requires: [
        'app.store.stat.CorpRefiStatStore',
        'app.xtemplate.stat_view',
        'Ext.grid.filters.Filters'
    ],
    store: {
        type: 'corprefistatstore'
    },

    listeners: {
        afterrender: function (_this) {
            var store = Ext.create('Ext.data.Store', {
                extend: 'Ext.data.Store',
                model: 'app.model.stat.CorpStatModel',
                proxy: {
                    type: 'ajax',
                    api: {
                        read: '/bolong/statrefilist'
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
                        refidmstatis_tpl.append('refi_statis', item.getData());
                    });
                }
            });

        }
    },
    html: '<div id="refi_statis"></div>'
});
