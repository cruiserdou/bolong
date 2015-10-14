/**
 * Created by jj on 14-6-19.
 */
Ext.define('app.store.changelist.CorpConChangeStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.changelist.corpconchangeModel',
    alias: 'store.corpconchangestore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/corpconchangelist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }

});
