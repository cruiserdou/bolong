/**
 * Created by xwq on 15-9-03.
 */
Ext.define('app.store.changelist.CorpChangeStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.changelist.CorpChangeModel',
    alias: 'store.corpchangestore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/corpchangelist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
