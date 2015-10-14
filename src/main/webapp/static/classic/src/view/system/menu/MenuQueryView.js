/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.menu.MenuQueryView', {
    extend: 'Ext.form.Panel',
    xtype: 'menuqueryview',

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
            anchor: '-5',
            fieldLabel: '菜单标题',
            name: 'text',
            id: 'query_menu_text_id'
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
