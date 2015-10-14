/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.entermt.innerenter.InnerEnterView', {
    extend: 'Ext.window.Window',
    xtype: 'innerenterview',
    requires: [
        'app.view.maintain.entermt.innerenter.InnerEnterController',
        'app.view.maintain.entermt.innerenter.InnerEnterGridView',
        'app.view.maintain.entermt.innerenter.InnerEnterQueryView'
    ],
    controller: 'innerentercontroller',
    width: 960,
    title: '已入库企业',
    constrain: true,
    closable: true,
    modal: true,
    layout: 'border',
    items: [{
        xtype: 'innerenterqueryview',
        id: 'innerenterqueryview_id',
        region: 'north'
    }, {
        xtype: 'innerentergridview',
        id: 'innerentergridview_id',
        margin : '1 1 0 0',
        region: 'center',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    }]
});
