/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.entermt.innerenter.InnerEnterGdGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'innerentergdgridview',
    columnLines: true,
    requires: [
        'app.store.corpall.CorpGdStore',
        'Ext.grid.filters.Filters'
    ],
    store: {
        type: 'corpgdstore'
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
        {
            text: '操作', width: 100, dataIndex: 'gd_id',
            renderer: function (val) {
                var return_del = "<INPUT type='button' value='删除'  onclick='delete_corp_gd(" + val + ")'>";
                return return_del
            }
        },
        {text: '企业股东ID',  width: 150, dataIndex: 'gd_id', hidden: true},
        {text: '企业ID',  width: 150, dataIndex: 'gd_corp_id', hidden: true},
        {text: '股东类型',  width: 100, dataIndex: 'gd_shtype'},
        {text: '股东',  width: 100, dataIndex: 'gd_shname'},
        {text: '证照/证件类型',  width: 150, dataIndex: 'gd_shdoctype'},
        {text: '证照/证件号码',  width: 150, dataIndex: 'gd_shdocnum'},
        {text: '持股数量',  width: 100, dataIndex: 'gd_shareholdnum'},
        {text: '流通数量',  width: 100, dataIndex: 'gd_currencynum'},
        {text: '冻结数量',  width: 100, dataIndex: 'gd_freezenum'},
        {text: '职务',  width: 100, dataIndex: 'gd_psotion'},
        {text: '手机号码',  width: 120, dataIndex: 'gd_phone'},
        {text: '传真',  width: 120, dataIndex: 'gd_fax'},
        {text: 'E-mail',  width: 150, dataIndex: 'gd_email'},
        {text: 'QQ',  width: 120, dataIndex: 'gd_qq'},
        {text: '个人微信号',  width: 120, dataIndex: 'gd_webchat'},
        {text: '固定电话',  width: 120, dataIndex: 'gd_tel'},
        {text: '备注',  flex: 1, dataIndex: 'gd_remark'}

    ]
});


function delete_corp_gd(id){
    Ext.Ajax.request({
        url: '/bolong/delete_corp_shareholder_info',
        params: {
            "gd_id": id
        },
        waitMsg: '正在删除附件...',
        success: function (form, action) {
            Ext.Msg.alert("成功", "删除成功!");
            Ext.getCmp('innerentergdgridview_id').getStore().load(
                {
                    params: {
                        corp_id: Ext.getCmp('corp_id').getValue()
                    }
                }
            );
        },
        failure: function (form, action) {
            Ext.Msg.alert("失败", "删除失败!");
        }
    });
}
