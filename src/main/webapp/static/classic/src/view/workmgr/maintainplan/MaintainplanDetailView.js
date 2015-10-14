/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.maintainplan.MaintainplanDetailView', {
    extend: 'Ext.panel.Panel',
    xtype: 'maintainplandetailview',

    scrollable: true,
    requires: [
        'app.view.workmgr.maintainplan.MaintainplanModel',
        'app.view.workmgr.maintainplan.MaintainplanController'
    ],

    controller: 'maintainplancontroller',
    viewModel: 'maintainplanmodel',
    listeners: {
        afterrender: function (_this) {
            var data = {};
            _this.updateDetail(data);
        }
    },
    tpl: Ext.create('Ext.XTemplate', [
        '<div class="wrapper_div">' +
        '<div><span>ID</span><span>{mp_id}</span></div>' +
        '<div><span>企业ID</span><span>{mp_corp_id}</span></div>' +
        '<div><span>企业名称</span><span>{corp_name}</span></div>' +
        '<div><span>挂牌代码</span><span>{mp_listcode}</span></div>' +
        '<div><span>省</span><span>{mp_province}</span></div>' +
        '<div><span>市</span><span>{mp_city}</span></div>' +
        '<div><span>县</span><span>{mp_county}</span></div>' +
        '<div><span>最后一次维护时间</span><span>{mp_last_date}</span></div>' +
        '<div><span>维护内容</span><span>{mp_content}</span></div>' +
        '<div><span>维护结果</span><span>{mp_result}</span></div>' +
        '<div><span>历史记录</span><span>{mp_hisdesc}</span></div>' +
        '<div><span>备注</span><span>{mp_remark}</span></div>' +
        '</div>'
    ]),
    updateDetail: function (data) {
        this.tpl.overwrite(this.body, data);
    },
    bind: {
        html: '{loremIpsum}'

    }
});
