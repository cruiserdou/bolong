/**
 * Created by xwq on 15-9-03.
 */
Ext.define('app.store.gov.BaseDataStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.BaseData',
    alias: 'store.basedatastore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST'
        },
        api: {
            read: '/bolong/basedata/list'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
