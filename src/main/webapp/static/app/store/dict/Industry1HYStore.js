

Ext.define('app.store.dict.Industry1HYStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.dict.Industry1',
    alias: 'store.industry1hystore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/industry1hy'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
