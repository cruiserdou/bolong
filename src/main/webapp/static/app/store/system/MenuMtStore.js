/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.store.system.MenuMtStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.system.MenuModel',
    alias: 'store.menustore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/menulist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
