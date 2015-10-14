/**
 * Created by xwq on 15-9-03.
 */
Ext.define('app.store.investor.InvestorStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.CorpAll',
    alias: 'store.investorstore',
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
