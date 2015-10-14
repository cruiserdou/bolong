/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.servicemt.ServiceMtDetailView', {
    extend: 'Ext.panel.Panel',
    xtype: 'servicemtdetailview',

    scrollable: true,
    requires: [
        'app.view.maintain.servicemt.ServiceMtModel',
        'app.view.maintain.servicemt.ServiceMtController'
    ],

    controller: 'servicemtcontroller',
    viewModel: 'servicemtmodel',
    listeners: {
        afterrender: function (_this) {
            var data = {};
            _this.updateDetail(data);
        }
    },
    tpl: Ext.create('Ext.XTemplate', [
        '<div class="wrapper_div">' +
        '<div><span>营业执照号码</span><span>{servicemt_id}</span></div>' +
        '<div><span>企业名称</span><span>{servicemt_nm}</span></div>' +
        '<div><span>公司简介</span><span>{name}</span></div>' +
        '<div><span>服务机构名称</span><span>{remark}</span></div>' +
        '<div><span>服务机构类别</span><span>{remark}</span></div>' +
        '<div><span>业务内容</span><span>{remark}</span></div>' +
        '<div><span>级别</span><span>{remark}</span></div>' +
        '<div><span>专属领域</span><span>{remark}</span></div>' +
        '<div><span>惩罚记录</span><span>{remark}</span></div>' +
        '<div><span>专审委员</span><span>{remark}</span></div>' +
        '<div><span>兼任职务</span><span>{remark}</span></div>' +
        '<div><span>简介</span><span>{remark}</span></div>' +
        '<div><span>备注</span><span>{remark}</span></div>' +
        '</div>'
    ]),
    updateDetail: function (data) {
        this.tpl.overwrite(this.body, data);
    },
    bind: {
        html: '{loremIpsum}'

    }
});
