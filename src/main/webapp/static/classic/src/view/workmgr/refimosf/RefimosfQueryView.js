/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.refimosf.RefimosfQueryView', {
    extend: 'Ext.form.Panel',
    xtype: 'refimosfqueryview',

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
            fieldLabel: '企业名称',
            id: 'query_refi_mos_corp_name_id',
            name: 'corp_name'
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
