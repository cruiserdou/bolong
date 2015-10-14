/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.investormt.InvestorMtDetailView', {
    extend: 'Ext.panel.Panel',
    xtype: 'investormtdetailview',

    scrollable: true,
    requires: [
        'app.view.maintain.investormt.InvestorMtModel',
        'app.view.maintain.investormt.InvestorMtController'
    ],

    controller: 'investormtcontroller',
    viewModel: 'investormtmodel',
    listeners: {
        afterrender: function (_this) {
            var data = {};
            _this.updateDetail(data);
        }
    },
    tpl: Ext.create('Ext.XTemplate', [
        '<div class="wrapper_div">' +
        '<div><span>营业执照号码</span><span>{investormt_id}</span></div>' +
        '<div><span>企业名称</span><span>{investormt_nm}</span></div>' +
        '<div><span>公司简介</span><span>{name}</span></div>' +
        '<div><span>单位名称</span><span>{remark}</span></div>' +
        '<div><span>处／室</span><span>{remark}</span></div>' +
        '<div><span>只能介绍</span><span>{remark}</span></div>' +
        '<div><span>联系人</span><span>{remark}</span></div>' +
        '<div><span>职务</span><span>{remark}</span></div>' +
        '<div><span>证件类型</span><span>{remark}</span></div>' +
        '<div><span>证件号码</span><span>{remark}</span></div>' +
        '<div><span>手机号码</span><span>{remark}</span></div>' +
        '<div><span>传真</span><span>{remark}</span></div>' +
        '<div><span>Email</span><span>{remark}</span></div>' +
        '<div><span>QQ号</span><span>{remark}</span></div>' +
        '<div><span>个人微信号</span><span>{remark}</span></div>' +
        '</div>'
    ]),
    updateDetail: function (data) {
        this.tpl.overwrite(this.body, data);
    },
    bind: {
        html: '{loremIpsum}'

    }
});
