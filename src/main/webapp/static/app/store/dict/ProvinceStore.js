/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.store.dict.ProvinceStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.dict.Province',
    alias: 'store.provincestore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST'
        },
        api: {
            read: '/bolong/province'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
