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
            read: 'GET'
        },
        api: {
            read: '/bolong/dict/city'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
