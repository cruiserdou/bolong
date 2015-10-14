/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.menu.MenuDetailView', {
    extend: 'Ext.panel.Panel',
    xtype: 'menudetailview',

    scrollable: true,
    requires: [
        'app.view.system.menu.MenuModel',
        'app.view.system.menu.MenuController'
    ],

    controller: 'menucontroller',
    viewModel: 'menumodel',
    listeners: {
        afterrender: function (_this) {
            var data = {};
            _this.updateDetail(data);
        }
    },
    tpl: Ext.create('Ext.XTemplate', [
        '<div class="wrapper_div">' +
        '<div><span>菜单ID</span><span>{id}</span></div>' +
        '<div><span>菜单标题</span><span>{text}</span></div>' +
        '<div><span>是否叶子</span><span>{leaf}</span></div>' +
        '<div><span>菜单父ID</span><span>{parent_id}</span></div>' +
        '<div><span>菜单链接地址</span><span>{itype}</span></div>' +
        '<div><span>图标</span><span>{iconcls}</span></div>' +
        '<div><span>根（元）</span><span>{root}</span></div>' +
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
