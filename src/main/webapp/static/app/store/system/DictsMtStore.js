/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.store.system.DictsMtStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.system.SysDict',
    alias: 'store.dictsstore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/dictslist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    },
    autoLoad: false
});
