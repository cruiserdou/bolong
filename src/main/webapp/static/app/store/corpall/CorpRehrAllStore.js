Ext.define('app.store.corpall.CorpRehrAllStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.CorpAll',
    alias: 'store.corprehrallstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/corprehrlist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
