
Ext.define('app.store.corpall.CorpImg', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.CorpImg',
    alias: 'store.corpimg',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/corpimglist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});