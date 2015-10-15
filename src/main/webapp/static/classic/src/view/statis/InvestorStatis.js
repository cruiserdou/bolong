/**
 * This view is an example list of people.
 */
Ext.define('app.view.statis.InvestorStatis', {
    extend: 'Ext.panel.Panel',
    xtype: 'investorstatis',
    closable: true,

    requires: [
        'app.store.stat.CorpInvStatStore',
        'app.xtemplate.stat_view',
        'Ext.grid.filters.Filters'
    ],
    store: {
        type: 'corpinvstatstore'
    },

    listeners: {
        afterrender: function (_this) {

            var store = Ext.create('Ext.data.Store', {
                extend: 'Ext.data.Store',
                model: 'app.model.stat.CorpStatModel',
                proxy: {
                    type: 'ajax',
                    api: {
                        read: '/bolong/statinvlist'
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
                        invdmstatis_tpl.append('inv_statis',item.getData());
                    });
                }
            });

        }
    },
    html: '<div id="inv_statis"></div>'
});
