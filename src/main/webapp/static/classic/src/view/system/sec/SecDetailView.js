/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.sec.SecDetailView', {
    extend: 'Ext.panel.Panel',
    xtype: 'secdetailview',

    scrollable: true,
    requires: [
        'app.view.system.sec.SecModel',
        'app.view.system.sec.SecController'
    ],

    controller: 'seccontroller',
    viewModel: 'secmodel',
    listeners: {
        afterrender: function (_this) {
            var data = {};
            _this.updateDetail(data);
        }
    },
    tpl: Ext.create('Ext.XTemplate', [
        '<div class="wrapper_div">' +
        '<div><span>角色ID</span><span>{roleid}</span></div>' +
        '<div><span>用户ID</span><span>{userid}</span></div>' +
        '<div><span>角色名称</span><span>{rolename}</span></div>' +
        '<div><span>用户名</span><span>{username}</span></div>' +
        '</div>'
    ]),
    updateDetail: function (data) {
        this.tpl.overwrite(this.body, data);
    },
    bind: {
        html: '{loremIpsum}'

    }
});
