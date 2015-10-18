/**
 * This view is an example list of people.
 */
Ext.define('app.view.query.ListInvestor', {
    extend: 'Ext.grid.Grid',
    xtype: 'listinvestor',

    columnLines: true,
    requires: [
        'app.store.gov.GovStore'
    ],

    title: '投资人信息',

    store: {
        type: 'govstore'
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
        {text: '企业名称', width: 120, dataIndex: 'name'},
        {text: '公司简称', width: 120, dataIndex: 'nos'},
        {text: '单位名称', width: 120, dataIndex: 'gov_domain'},
        {text: '处/室', width: 120, dataIndex: 'gov_office'},
        {text: '职能介绍', width: 120, dataIndex: 'gov_desc'},
        {text: '联系人', width: 120, dataIndex: 'gov_contact'},
        {text: '职务', width: 120, dataIndex: 'gov_psotion'},
        {text: '证件类型', width: 120, dataIndex: 'gov_doctype'},
        {text: '证件号码', width: 120, dataIndex: 'gov_docnum'},
        {text: '手机号码', width: 120, dataIndex: 'gov_phone'},
        {text: '传真', width: 120, dataIndex: 'gov_fax'},
        {text: 'E-mail', width: 120, dataIndex: 'gov_email'},
        {text: 'QQ', width: 120, dataIndex: 'gov_qq'},
        {text: '个人微信号', width: 120, dataIndex: 'gov_webchat'},
        {text: '固定电话', width: 120, dataIndex: 'gov_tel'},
        {text: '营业执照号码', width: 120, dataIndex: 'buslicno'},
        {text: '备注', flex: 1, dataIndex: 'gov_remark'}
    ],

    listeners: {
        painted: function () {
            c_compnent_id = "listinvestor_id";
            Ext.getCmp('listinvestor_id').getStore().load();
        }
    }
});
