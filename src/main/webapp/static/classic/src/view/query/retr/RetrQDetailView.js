/**
 * This view is an example list of people.
 */
Ext.define('app.view.query.retr.RetrQDetailView', {
    extend: 'Ext.panel.Panel',
    xtype: 'retrqdetailview',

    scrollable: true,
    requires: [
        'app.view.query.retr.RetrQModel',
        'app.view.query.retr.RetrQController'
    ],

    controller: 'retrqcontroller',
    viewModel: 'retrqmodel',
    listeners: {
        afterrender: function (_this) {
            var data = {};
            _this.updateDetail(data);
        }
    },
    tpl: Ext.create('Ext.XTemplate', [
        '<div class="wrapper_div">' +
        '<div><span>营业执照号码</span><span>{retr_id}</span></div>' +
        '<div><span>企业名称</span><span>{retr_nm}</span></div>' +
        '<div><span>公司简介</span><span>{name}</span></div>' +
        '<div><span>单位名称</span><span>{remark}</span></div>' +
        '<div><span>培训方式</span><span>{retra_mode}</span></div>' +
        '<div><span>培训内容</span><span>{retra_content}</span></div>' +
        '<div><span>可接受成本</span><span>{retra_acc_cost}</span></div>' +
        '<div><span>有效时间</span><span>{retra_dt}</span></div>' +
        '<div><span>详细要求</span><span>{retra_requests}</span></div>' +
        '</div>'
    ]),
    updateDetail: function (data) {
        this.tpl.overwrite(this.body, data);
    },
    bind: {
        html: '{loremIpsum}'

    }
});
