/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.store.system.QuickStartMenuStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.CorpAll',
    alias: 'store.qmenustore',
    proxy: {
	    type: 'ajax',
	    api: {
	        read: '/bolong/obtain_corp_all_info'
	    },
	    reader: {
	        type: 'json',
			rootProperty:'list'
	    }
	}
});
