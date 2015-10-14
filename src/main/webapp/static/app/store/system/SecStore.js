/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.store.system.SecStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.system.SecModel',
    alias: 'store.secstore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/seclist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
