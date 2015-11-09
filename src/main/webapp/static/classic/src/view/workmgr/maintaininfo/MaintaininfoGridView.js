/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.maintaininfo.MaintaininfoGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'maintaininfogridview',
    columnLines: true,
    requires: [
        'app.view.workmgr.maintaininfo.MaintaininfoController',
        'app.store.workmgr.maintaininfo.MaintaininfoStore',
        'Ext.grid.filters.Filters'
    ],

    controller: 'maintaininfocontroller',
    store: {
        type: 'maintaininfostore'
    },
    listeners: {
        itemclick: 'itemclick'
    },

    selModel: {
        type: 'spreadsheet',
        // Disables sorting by header click, though it will be still available via menu
        columnSelect: true,
        checkboxSelect: true,
        pruneRemoved: false,
        extensible: 'y'
    },

    columns: [
        {text: 'ID', width: 220, dataIndex: 'mi_id',hidden:true},
        {text: '企业ID',  width: 220, dataIndex: 'mi_corp_id',hidden:true},
        {text: '企业名称',  width: 220, dataIndex: 'corp_name',hidden:true},
        {text: '挂牌代码', width: 100, dataIndex: 'mi_listcode',hidden:true},
        {text: '省',  width: 80, dataIndex: 'mi_province',hidden:true},
        {text: '市', width: 80, dataIndex: 'mi_city',hidden:true},
        {text: '县',  width: 80, dataIndex: 'mi_county',hidden:true},
        {text: '维护时间',  width: 100, dataIndex: 'mi_mt_date'},
        {text: '企业客户分级(A/B）', width: 140, dataIndex: 'mi_cust_type'},
        {text: '下次维护时间', width: 100, dataIndex: 'mi_next_date'},
        {text: '下次维护计划', width: 125, dataIndex: 'mi_next_plan'},
        {text: '维护结果',width: 125,  dataIndex: 'mi_remark'},
        {
            text: "删除",
            flex: 1,
            dataIndex: 'mi_id',
            align: "center",
            renderer: function (v, cellmeta) {
                var returnStr = "<INPUT type='button' value='删除'  onclick='delete_maintain_info(\""+v+"\")'>";
                return returnStr;
            }
        }
    ]
});


function delete_maintain_info(id) {
    Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
        if (btn == 'yes') {
            Ext.Ajax.request({
                url: '/bolong/deletemaintaininfo',
                params: {
                    "mi_id": id
                },
                waitMsg: '正在删除数据...',
                success: function () {
                    Ext.Msg.alert("成功", "数据删除成功!");
                    Ext.getCmp('maintainplangridview_id').getStore().load();
                },
                failure: function () {
                    Ext.Msg.alert("失败", "数据删除失败!");
                }
            });
        }
    });
}
