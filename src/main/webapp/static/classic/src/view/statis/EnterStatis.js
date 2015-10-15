/**
 * This view is an example list of people.
 */
Ext.define('app.view.statis.EnterStatis', {
    extend: 'Ext.panel.Panel',
    xtype: 'enterstatis',
    closable: true,
    title: '企业信息统计',

    requires: [
        'app.store.stat.CorpStatStore',
        'app.xtemplate.stat_view',
        'Ext.grid.filters.Filters'
    ],
    store: {
        type: 'corpstatstore'
    },

    listeners: {
        afterrender: function (_this) {

            var store = Ext.create('Ext.data.Store', {
                extend: 'Ext.data.Store',
                model: 'app.model.stat.CorpStatModel',
                proxy: {
                    type: 'ajax',
                    api: {
                        read: '/bolong/statlist'
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
                        //record=item.get('corp_num');
                        corpdmstatis_tpl.append('corp_statis',item.getData());
                    });
                }
            });

        }
    },
    html: '<div id="corp_statis"></div>'
});
