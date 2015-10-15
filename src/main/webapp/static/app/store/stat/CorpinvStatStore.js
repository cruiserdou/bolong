Ext.define('app.store.stat.CorpInvStatStore', {
    extend: 'Ext.data.Store',
    model:  'app.model.stat.CorpStatModel',
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
