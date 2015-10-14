/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.msg.MsgQueryView', {
    extend: 'Ext.form.Panel',
    xtype: 'msgqueryview',

    layout: {
        type: 'table',
        columns: 2,
        tableAttrs: {
            style: {
                width: '100%'
            }
        },
        tdAttrs: {
            valign: 'top'
        }
    },

    bodyPadding: 10,
    defaults: {
        bodyPadding: '15 20',
        border: true
    },



    items: [
        {
            xtype: 'textfield',
            anchor: '-5',
            fieldLabel: '消息状态',
            id: 'query_msg_stat_id',
            name: 'msg_stat'
        },
        {
            xtype: 'button',
            text: '查找',
            handler: 'btnFind'
        },
        {
            xtype: 'textfield',
            anchor: '-5',
            fieldLabel: '发送人',
            id: 'query_msg_user_name_id',
            name: 'msg_user_name'
        },
        {
            xtype: 'button',
            text: '重置',
            handler: 'btnReset'
        }
    ]
});
