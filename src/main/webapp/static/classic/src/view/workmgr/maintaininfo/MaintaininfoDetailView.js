/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.maintaininfo.MaintaininfoDetailView', {
    extend: 'Ext.panel.Panel',
    xtype: 'maintaininfodetailview',

    scrollable: true,
    requires: [
        'app.view.workmgr.maintaininfo.MaintaininfoModel',
        'app.view.workmgr.maintaininfo.MaintaininfoController'
    ],

    controller: 'maintaininfocontroller',
    viewModel: 'maintaininfomodel',
    listeners: {
        afterrender: function (_this) {
            var data = {};
            _this.updateDetail(data);
        }
    },
    tpl: Ext.create('Ext.XTemplate', [
        '<div class="wrapper_div">' +
        '<div><span>ID</span><span>{mi_id}</span></div>' +
        '<div><span>企业ID</span><span>{mi_corp_id}</span></div>' +
        '<div><span>企业名称</span><span>{corp_name}</span></div>' +
        '<div><span>挂牌代码</span><span>{mi_listcode}</span></div>' +
        '<div><span>省</span><span>{mi_province}</span></div>' +
        '<div><span>市</span><span>{mi_city}</span></div>' +
        '<div><span>县</span><span>{mi_county}</span></div>' +
        '<div><span>维护时间</span><span>{mi_mt_date}</span></div>' +
        '<div><span>企业客户分级(A/B）</span><span>{mi_cust_type}</span></div>' +
        '<div><span>下次维护时间</span><span>{mi_next_date}</span></div>' +
        '<div><span>下次维护计划</span><span>{mi_next_plan}</span></div>' +
        '<div><span>维护结果</span><span>{mi_remark}</span></div>' +
        '</div>'
    ]),
    updateDetail: function (data) {
        this.tpl.overwrite(this.body, data);
    },
    bind: {
        html: '{loremIpsum}'

    }
});
