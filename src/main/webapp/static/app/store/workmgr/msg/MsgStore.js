/**
 * Created by jj on 14-6-19.
 */
Ext.define('app.store.workmgr.msg.MsgStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.workmgr.msg.MsgModel',
    alias: 'store.msgstore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/bolong/innerinfolist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
