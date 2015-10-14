/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.refimosf.RefimosfDetailView', {
    extend: 'Ext.panel.Panel',
    xtype: 'refimosfdetailview',

    scrollable: true,
    requires: [
        'app.view.workmgr.refimosf.RefimosfModel',
        'app.view.workmgr.refimosf.RefimosfController'
    ],

    controller: 'refimosfcontroller',
    viewModel: 'refimosfmodel',
    listeners: {
        afterrender: function (_this) {
            var data = {};
            _this.updateDetail(data);
        }
    },
    tpl: Ext.create('Ext.XTemplate', [
        '<div class="wrapper_div">' +
        '<div><span>融资服务ID</span><span>{mos_id}</span></div>' +
        '<div><span>企业ID</span><span>{mos_corp_id}</span></div>' +
        '<div><span>企业名称</span><span>{corp_name}</span></div>' +
        '<div><span>融资产品</span><span>{mos_cots}</span></div>' +
        '<div><span>融资金额</span><span>{mos_amounts}</span></div>' +
        '<div><span>项目经理</span><span>{mos_mop}</span></div>' +
        '<div><span>融资进度</span><span>{mos_rop}</span></div>' +
        '</div>'
    ]),
    updateDetail: function (data) {
        this.tpl.overwrite(this.body, data);
    },
    bind: {
        html: '{loremIpsum}'

    }
});
