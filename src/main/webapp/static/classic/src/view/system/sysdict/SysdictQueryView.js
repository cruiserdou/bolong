/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.sysdict.SysdictQueryView', {
    extend: 'Ext.form.Panel',
    xtype: 'sysdictqueryview',

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
            fieldLabel: '字段名称',
            anchor: '-5',
            id: 'query_dict_fieldnm_id',
            name: 'fieldnm'
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
