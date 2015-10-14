Ext.define('app.store.stat.CorpServiceStatStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.stat.CorpServiceStatModel',
    alias: 'store.corpservicestatstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/statserverlist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
