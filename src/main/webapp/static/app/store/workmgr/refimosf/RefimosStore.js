/**
 * Created by jj on 14-6-19.
 */
Ext.define('app.store.workmgr.refimosf.RefimosStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.workmgr.refimosf.RefimosModel',
    alias: 'store.refimosstore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/refimosflist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
