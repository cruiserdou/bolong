/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.act.ActDetailView', {
    extend: 'Ext.panel.Panel',
    xtype: 'actdetailview',

    scrollable: true,
    requires: [
        'app.view.system.act.ActModel',
        'app.view.system.act.ActController'
    ],

    controller: 'actcontroller',
    viewModel: 'actmodel',
    listeners: {
        afterrender: function (_this) {
            var data = {};
            _this.updateDetail(data);
        }
    },
    tpl: Ext.create('Ext.XTemplate', [
        '<div class="wrapper_div">' +
        '<div><span>角色ID</span><span>{roleid}</span></div>' +
        '<div><span>菜单ID</span><span>{treeid}</span></div>' +
        '<div><span>角色名称</span><span>{rolename}</span></div>' +
        '<div><span>菜单标题</span><span>{text}</span></div>' +
        '<div><span>父菜单ID</span><span>{parentid}</span></div>' +
        '</div>'
    ]),
    updateDetail: function (data) {
        this.tpl.overwrite(this.body, data);
    },
    bind: {
        html: '{loremIpsum}'

    }
});
