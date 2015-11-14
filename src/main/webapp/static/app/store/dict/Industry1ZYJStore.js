

Ext.define('app.store.dict.Industry1ZYJStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.dict.Industry1',
    alias: 'store.industry1zjystore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/industry1zjy'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
