/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.store.dict.DistrictStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.dict.District',
    alias: 'store.districtstore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST'
        },
        api: {
            read: '/bolong/dict/district'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
