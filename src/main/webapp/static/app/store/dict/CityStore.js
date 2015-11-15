/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.store.dict.CityStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.dict.City',
    alias: 'store.citystore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST'
        },
        api: {
            read: '/bolong/city'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
    //,
    //listeners: {
    //    load: function(store, operation, eOpts){
    //        var provinceCode=Ext.getCmp('province_id').getValue();
    //        store.filterBy(function(record) {
    //            return record.get('provinceid') == provinceCode;
    //        });
    //    }
    //}
});
