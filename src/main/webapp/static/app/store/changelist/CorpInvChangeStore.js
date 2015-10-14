Ext.define('app.store.changelist.CorpInvChangeStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.changelist.CorpInvChangeModel',
    alias: 'store.corpinvchangestore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/corpinvchangelist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
