Ext.define('app.store.corpall.CorpInvAllStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.CorpAll',
    alias: 'store.corpinvallstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/corpinvlist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
