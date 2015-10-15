Ext.define('app.store.stat.CorpRefiStatStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.stat.CorpStatModel',
    alias: 'store.corprefistatstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/statrefilist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
