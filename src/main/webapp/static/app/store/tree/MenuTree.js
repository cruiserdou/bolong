Ext.define('app.store.tree.MenuTree', {
    extend: 'Ext.data.TreeStore',
    model: 'app.model.tree.MenuTree',
    alias: 'store.menutreestore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST'
        },
        url: 'ojson'
    },
    autoLoad: true
});
