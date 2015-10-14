/**
 * Created by jj on 14-6-19.
 */
Ext.define('app.store.workmgr.maintaininfo.MaintaininfoStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.workmgr.maintaininfo.MaintaininfoModel',
    alias: 'store.maintaininfostore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/maintaininfolist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
