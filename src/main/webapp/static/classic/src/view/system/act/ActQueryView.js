/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.act.ActQueryView', {
    extend: 'Ext.form.Panel',
    xtype: 'actqueryview',

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
            name: 'rolename',
            id: 'rm_query_rolename_id'
        },
        {
            xtype: 'button',
            text: '查找',
            handler: 'btnFind'
        },
        {
            xtype: 'textfield',
            anchor: '-5',
            fieldLabel: '菜单名',
            name: 'text',
            id: 'rm_query_text_id'
        },
        {
            xtype: 'button',
            text: '重置',
            handler: 'btnReset'
        }
    ]
});
