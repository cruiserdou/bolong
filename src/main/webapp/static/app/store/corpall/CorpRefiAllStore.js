Ext.define('app.store.corpall.CorpRefiAllStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.CorpAll',
    alias: 'store.corprefiallstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/corprefilist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
