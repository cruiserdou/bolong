Ext.define('app.store.corpall.CorpBase', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.CorpBase',
    alias: 'store.corpbasestore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/corpbaselist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});

