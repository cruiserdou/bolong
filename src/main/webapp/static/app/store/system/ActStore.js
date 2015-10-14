/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.store.system.ActStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.system.ActModel',
    alias: 'store.actstore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/actlist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
