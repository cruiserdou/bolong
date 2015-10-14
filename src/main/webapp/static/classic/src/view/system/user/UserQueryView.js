/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.user.UserQueryView', {
    extend: 'Ext.form.Panel',
    xtype: 'userqueryview',

    layout: {
        type: 'table',
        columns: 3,
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
            fieldLabel: '员工姓名',
            id: 'query_user_name_id',
            anchor: '-5',
            name: 'name'
        },
        {
            xtype: 'button',
            text: '查找',
            handler: 'btnFind'
        },
        {
            xtype: 'button',
            text: '重置',
            handler: 'btnReset'
        }
    ]
});
