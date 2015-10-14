Ext.define('app.store.changelist.CorpRehrChangeStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.changelist.CorpRehrChangeModel',
    alias: 'store.corprehrchangestore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/corprehrchangelist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
