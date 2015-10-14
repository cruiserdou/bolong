Ext.define('app.store.corpall.CorpGovAllStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.CorpAll',
    alias: 'store.corpgovallstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/corpgovlist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
