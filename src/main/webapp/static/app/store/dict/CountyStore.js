/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.store.dict.CountyStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.dict.County',
    alias: 'store.countystore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/dict/county'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
