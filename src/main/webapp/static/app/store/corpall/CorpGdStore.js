Ext.define('app.store.corpall.CorpGdStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.ShareHolder',
    alias: 'store.corpgdstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/shareholder_list'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});