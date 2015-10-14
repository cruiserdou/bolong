Ext.define('app.store.stat.CorpInvStatStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.stat.CorpInvStatModel',
    alias: 'store.corpinvstatstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/statinvlist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
