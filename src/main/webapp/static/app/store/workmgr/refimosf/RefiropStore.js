/**
 * Created by jj on 14-6-19.
 */
Ext.define('app.store.workmgr.refimosf.RefiropStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.workmgr.refimosf.RefiropModel',
    alias: 'store.refiropstore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/refiropflist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
