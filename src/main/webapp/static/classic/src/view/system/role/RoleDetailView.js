/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.role.RoleDetailView', {
    extend: 'Ext.panel.Panel',
    xtype: 'roledetailview',

    scrollable: true,
    requires: [
        'app.view.system.role.RoleModel',
        'app.view.system.role.RoleController'
    ],

    controller: 'rolecontroller',
    viewModel: 'rolemodel',
    listeners: {
        afterrender: function (_this) {
            var data = {};
            _this.updateDetail(data);
        }
    },
    tpl: Ext.create('Ext.XTemplate', [
        '<div class="wrapper_div">' +
        '<div><span>角色ID</span><span>{id}</span></div>' +
        '<div><span>角色名称</span><span>{rolename}</span></div>' +
        '<div><span>角色描述</span><span>{roledesc}</span></div>' +
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
