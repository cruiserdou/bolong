/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.entermt.EnterMtView', {
    extend: 'Ext.panel.Panel',
    xtype: 'entermtview',
    id: 'entermtview_id',
    closable: true,
    requires: [
        'app.view.main.MainModel',
        'app.view.maintain.entermt.innerenter.InnerEnterView',
        'app.view.enter.EnterApplyView'
    ],
    viewModel: 'main',
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
            iconAlign: 'top',
            handler: function () {
                win_enterapplyview.show(Ext.get('add_enter_btn_id'));
            }
        }, {
            xtype: 'button',
            id: 'innerenterview_id',
            text: '已入库企业',
            scale: 'large',
            iconAlign: 'top',
            handler: function () {
                var window_inner = Ext.create('app.view.maintain.entermt.innerenter.InnerEnterView', {
                    maximized: true
                });
                window_inner.show(Ext.get('innerenterview_id'));
            }
        }]
    }

});
