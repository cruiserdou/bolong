Ext.define('app.store.corpall.CorpAll', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.CorpAll',
    alias: 'store.corpallstorebak',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/corplist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});

//Ext.define('app.store.corpall.CorpAll', {
//    extend: 'Ext.data.Store',
//    autoLoad: true,
//    model: 'app.model.corpall.CorpAll',
//    alias: 'store.corpallstore',
//    proxy: {
//        type: 'ajax',
//        actionMethods: {
//            read: 'POST'
//        },
//        url: '/sdragon/obtain_corp_all_info',
//        reader: {
//            type: 'json',
//            rootProperty: 'list'
//        }
//    }
//});




