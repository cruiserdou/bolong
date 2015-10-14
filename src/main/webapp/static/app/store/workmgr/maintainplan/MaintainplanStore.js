/**
 * Created by jj on 14-6-19.
 */
Ext.define('app.store.workmgr.maintainplan.MaintainplanStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.workmgr.maintainplan.MaintainplanModel',
    alias: 'store.maintainplanstore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/maintainplanlist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
