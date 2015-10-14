/**
 * This view is an example list of people.
 */
Ext.define('app.view.statis.DemandStatis', {
    extend: 'Ext.grid.Panel',
    xtype: 'demandstatis',
    columnLines: true,
    closable: true,
    requires: [
        'app.store.system.QuickStartMenuStore',
        'Ext.grid.filters.Filters'
    ],

    title: '企业信息统计',
    animateShadow: true,
    shadow: true,
    shadowOffset: 2,
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '刷新',
                    listeners: {
                        click: function(){
                            alert("Hello")
                        }
                    }
                }
            ]
        }
    ],
    store: {
        type: 'menustore'
    },

    columns: [
        {text: '企业数量', flex: 1, dataIndex: 'unit'}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
