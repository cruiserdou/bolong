/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.store.workmgr.FinServiceStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.workmgr.FinServiceModel',
    alias: 'store.finservicestore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/finservicelist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
