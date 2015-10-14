/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.store.system.UserMtStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.system.UserMt',
    alias: 'store.userstore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/userslist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
