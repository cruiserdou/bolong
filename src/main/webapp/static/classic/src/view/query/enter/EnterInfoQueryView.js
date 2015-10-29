/**
 * This view is an example list of people.
 */
Ext.define('app.view.query.enter.EnterInfoQueryView', {
    extend: 'Ext.form.Panel',
    xtype: 'enterinfoqueryview',

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
            fieldLabel: '公司名称',
            id: 'query_name_id',
            name: 'name'
        },
        {
            xtype: 'textfield',
            anchor: '-5',
            fieldLabel: '公司简称',
            id: 'query_nos_id',
            name: 'nos'
        },
        {
            xtype: 'button',
            text: '查找',
            handler: 'btnFind'
        },
        {
            xtype: 'textfield',
            anchor: '-5',
            fieldLabel: '营业执照号码',
            id: 'query_buslicno_id',
            name: 'buslicno'
        },
        {
            xtype: 'textfield',
            anchor: '-5',
            fieldLabel: '挂牌代码',
            id: 'query_listcode_id',
            name: 'listcode'
        },
        {
            xtype: 'button',
            text: '重置',
            handler: 'btnReset'
        }
    ]
});