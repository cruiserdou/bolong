/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.store.system.RoleMtStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.system.RoleMt',
    alias: 'store.rolestore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/rolelist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
