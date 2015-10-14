/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.refi.RefiDetailView', {
    extend: 'Ext.panel.Panel',
    xtype: 'refidetailview',

    scrollable: true,
    requires: [
        'app.view.maintain.refi.RefiModel',
        'app.view.maintain.refi.RefiController'
    ],

    controller: 'reficontroller',
    viewModel: 'refimodel',
    listeners: {
        afterrender: function (_this) {
            var data = {};
            _this.updateDetail(data);
        }
    },
    tpl: Ext.create('Ext.XTemplate', [
        '<div class="wrapper_div">' +
        '<div><span>营业执照号码</span><span>{refi_id}</span></div>' +
        '<div><span>企业名称</span><span>{refi_nm}</span></div>' +
        '<div><span>公司简介</span><span>{name}</span></div>' +
        '<div><span>单位名称</span><span>{remark}</span></div>' +
        '<div><span>融资金额</span><span>{refi_amounts}</span></div>' +
        '<div><span>融资用途</span><span>{refi_use}</span></div>' +
        '<div><span>股份融资/债券融资</span><span>{refi_financ}</span></div>' +
        '<div><span>偿付保障</span><span>{refi_security}</span></div>' +
        '<div><span>可接受成本（%/年）</span><span>{refi_acc_cost}</span></div>' +
        '<div><span>融资期限</span><span>{refi_deadline}</span></div>' +
        '<div><span>融资用途详细说明</span><span>{refi_desc}</span></div>' +
        '</div>'
    ]),
    updateDetail: function (data) {
        this.tpl.overwrite(this.body, data);
    },
    bind: {
        html: '{loremIpsum}'

    }
});
