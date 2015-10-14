/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.rehr.RehrDetailView', {
    extend: 'Ext.panel.Panel',
    xtype: 'rehrdetailview',

    scrollable: true,
    requires: [
        'app.view.maintain.rehr.RehrModel',
        'app.view.maintain.rehr.RehrController'
    ],

    controller: 'rehrcontroller',
    viewModel: 'rehrmodel',
    listeners: {
        afterrender: function (_this) {
            var data = {};
            _this.updateDetail(data);
        }
    },
    tpl: Ext.create('Ext.XTemplate', [
        '<div class="wrapper_div">' +
        '<div><span>营业执照号码</span><span>{rehr_id}</span></div>' +
        '<div><span>企业名称</span><span>{rehr_nm}</span></div>' +
        '<div><span>公司简介</span><span>{name}</span></div>' +
        '<div><span>单位名称</span><span>{remark}</span></div>' +
        '<div><span>需求职位</span><span>{rehr_post}</span></div>' +
        '<div><span>职位人数</span><span>{rehr_num}</span></div>' +
        '<div><span>职位薪金</span><span>{rehr_salary}</span></div>' +
        '<div><span>性别要求</span><span>{rehr_sex_req}</span></div>' +
        '<div><span>年龄要求</span><span>{rehr_age_req}</span></div>' +
        '<div><span>经验要求</span><span>{rehr_requests}</span></div>' +
        '</div>'
    ]),
    updateDetail: function (data) {
        this.tpl.overwrite(this.body, data);
    },
    bind: {
        html: '{loremIpsum}'

    }
});
