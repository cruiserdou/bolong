Ext.define('app.store.corpall.CorpStore', {
    extend: 'Ext.data.Store',
    model: 'App.model.corpall.Corp',
    alias: 'store.corpbasestore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/bolong/corpbaselist'
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




