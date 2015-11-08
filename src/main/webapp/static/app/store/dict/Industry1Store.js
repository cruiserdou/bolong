/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.store.dict.Industry1Store', {
    extend: 'Ext.data.Store',
    model: 'app.model.dict.Industry1',
    alias: 'store.industry1store',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/dict/industry1'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
