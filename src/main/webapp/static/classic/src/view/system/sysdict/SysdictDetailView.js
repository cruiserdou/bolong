/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.sysdict.SysdictDetailView', {
    extend: 'Ext.panel.Panel',
    xtype: 'sysdictdetailview',

    scrollable: true,
    requires: [
        'app.view.system.sysdict.SysdictModel',
        'app.view.system.sysdict.SysdictController'
    ],

    controller: 'sysdictcontroller',
    viewModel: 'sysdictmodel',
    listeners: {
        afterrender: function (_this) {
            var data = {};
            _this.updateDetail(data);
        }
    },
    tpl: Ext.create('Ext.XTemplate', [
        '<div class="wrapper_div">' +
        '<div><span>字典ID</span><span>{id}</span></div>' +
        '<div><span>字段</span><span>{field}</span></div>' +
        '<div><span>字段名称</span><span>{fieldnm}</span></div>' +
        '<div><span>字段值</span><span>{fieldval}</span></div>' +
        '<div><span>字段显示名称</span><span>{fieldvaldis}</span></div>' +
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
