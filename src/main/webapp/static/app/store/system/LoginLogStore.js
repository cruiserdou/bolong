/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.store.system.LoginLogStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.system.LoginLog',
    alias: 'store.loginlogstore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/loginloglist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
