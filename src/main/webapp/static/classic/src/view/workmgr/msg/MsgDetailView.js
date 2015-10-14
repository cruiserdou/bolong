/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.msg.MsgDetailView', {
    extend: 'Ext.panel.Panel',
    xtype: 'msgdetailview',

    scrollable: true,
    requires: [
        'app.view.workmgr.msg.MsgModel',
        'app.view.workmgr.msg.MsgController'
    ],

    controller: 'msgcontroller',
    viewModel: 'msgmodel',
    listeners: {
        afterrender: function (_this) {
            var data = {};
            _this.updateDetail(data);
        }
    },
    tpl: Ext.create('Ext.XTemplate', [
        '<div class="wrapper_div">' +
        '<div><span>ID</span><span>{id}</span></div>' +
        '<div><span>状态</span><span>{stat}</span></div>' +
        '<div><span>接收人</span><span>{ruser_id}</span></div>' +
        '<div><span>发送人</span><span>{user_id}</span></div>' +
        '<div><span>发送人</span><span>{user_name}</span></div>' +
        '<div><span>内容</span><span>{content}</span></div>' +
        '<div><span>期限</span><span>{deadline}</span></div>' +
        '<div><span>发送时间</span><span>{rtdate}</span></div>' +
        '<div><span>类型</span><span>{type}</span></div>' +
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
