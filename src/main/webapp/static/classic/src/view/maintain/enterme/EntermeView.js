/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.enterme.EntermeView', {
    extend: 'Ext.panel.Panel',
    xtype: 'enterme',
    closable: true,
    requires: [
    ],

    layout: 'center',
    items: {
        xtype: 'panel',
        layout: {
            type: 'table',
            columns: 2,
            tdAttrs: {style: 'padding: 10px;'}
        },

        items: [{
            xtype: 'button',
            id: 'add_enter_btn_id',
            text: '新增企业',
            scale: 'large',
            margin: '0 60 0 0',
            iconAlign: 'top'
        }, {
            xtype: 'button',
            id: 'innerenterview_id',
            text: '已入库企业',
            scale: 'large',
            iconAlign: 'top'
        }]
    }
});
