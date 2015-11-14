/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.store.dict.Industry2Store', {
    extend: 'Ext.data.Store',
    model: 'app.model.dict.Industry2',
    alias: 'store.industry2store',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/industry2'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    },
    autoLoad: false
});

