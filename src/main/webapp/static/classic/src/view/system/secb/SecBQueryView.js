/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.secb.SecBQueryView', {
    extend: 'Ext.form.Panel',
    xtype: 'secbqueryview',

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
            fieldLabel: '角色名称',
            id: 'query_secb_rolename_id',
            name: 'rolename'
        },

        {
            xtype: 'button',
            text: '查找',
            handler: 'btnFind'
        },
        {
            xtype: 'textfield',
            anchor: '-5',
            fieldLabel: '用户名',
            id: 'query_secb_username_id',
            name: 'username'
        },
        {
            xtype: 'button',
            text: '重置',
            handler: 'btnReset'
        }
    ]
});
