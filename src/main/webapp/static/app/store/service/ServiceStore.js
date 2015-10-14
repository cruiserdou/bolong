Ext.define('app.store.service.ServiceStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.CorpAll',
    alias: 'store.servicestore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/corplist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
