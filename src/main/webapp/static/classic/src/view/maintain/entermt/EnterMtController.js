/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.maintain.entermt.EnterMtController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.entermtcontroller',

    refresh: function () {
        Ext.getCmp('govmtgridview_id').getStore().load();
    },

    btnFind: function () {
        Ext.getCmp('govmtgridview_id').getStore().load({
            params: {
                name: Ext.getCmp('query_gov_mt_name_id').getValue(),
                nos: Ext.getCmp('query_gov_mt_nos_id').getValue(),
                buslicno: Ext.getCmp('query_gov_mt_buslicno_id').getValue(),
                listcode: Ext.getCmp('query_gov_mt_listcode_id').getValue()
            }
        });
    },

    btnReset: function (_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('govmtgridview_id').getStore().load();
    },

    btnSave: function(){
        alert("Hello");
    }
});
