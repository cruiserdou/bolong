/**
 * This view is an example list of people.
 */
Ext.define('app.view.statis.demand.TrainDmStatis', {
    extend: 'Ext.panel.Panel',
    xtype: 'traindmstatis',
    closable: true,
    title: '培训需求需求统计',
    requires: [
        'app.store.stat.CorpRetrStatStore',
        'app.xtemplate.stat_view',
        'Ext.grid.filters.Filters'
    ],
    store: {
        type: 'corpretrstatstore'
    },

       listeners: {
           afterrender: function (_this) {

            var store = Ext.create('Ext.data.Store', {
                extend: 'Ext.data.Store',
                model: 'app.model.stat.CorpStatModel',
                proxy: {
                    type: 'ajax',
                    api: {
                        read: '/bolong/statretrlist'
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
                           traindmstatis_tpl.append('train_statis',item.getData());
                       });
                   }
               });

        }
    },
    html: '<div id="train_statis"></div>'
});


