Ext.define('app.store.corpall.CorpServiceAllStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.CorpAll',
    alias: 'store.corpserviceallstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/corpserverlist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
