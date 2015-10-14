/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.FinService', {
    extend: 'Ext.grid.Panel',
    xtype: 'finservice',
    columnLines: true,
    closable: true,
    requires: [
        'app.store.workmgr.FinServiceStore',
        'Ext.grid.filters.Filters'
    ],

    title: '融资服务',
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
        type: 'finservicestore'
    },

    columns: [
        {text: '融资服务ID',  width: 220, dataIndex: 'mos_id',hidden:true},
        {text: '企业ID',  width: 220, dataIndex: 'mos_corp_id',hidden:true},
        {text: '企业名称',  width: 220, dataIndex: 'corp_name'},
        {text: '融资产品',  width: 200, dataIndex: 'mos_cots'},
        {text: '融资金额', width: 150, dataIndex: 'mos_amounts'},
        {text: '项目经理', width: 150, dataIndex: 'mos_mop'},
        {
            text: '进度',width: 150, dataIndex: 'mos_id',
            renderer: function (v, m, record) {

                //return "<span style='color: green; cursor: hand;' onclick='add_refi_rop(\"" + v + "\")' >添加</span>"


                return "<span style='color: #FF4444;' onclick='add_refi_rop(\"" + v + "\")' >添加</span>"

            }
        },
        {text: '融资进度', width: 150 , dataIndex: 'mos_rop'}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
