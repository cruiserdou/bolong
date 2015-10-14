/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.workmgr.refimosf.RefimosfController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.refimosfcontroller',

    itemclick: function (this_, record) {
        //var vPanel = Ext.getCmp('refimosfdetailview_id');
        //vPanel.tpl.overwrite(vPanel.body, record_.data);
        Ext.getCmp('refiropfgridview_id').getStore().load({
            params: {
                rop_mos_id: record.get('mos_id')
            }
        });
    },

    btnAdd: function(){
        Ext.create('app.view.workmgr.refimosf.RefimosfAddView',{
        }).show(Ext.get('refimosf_add_id'));
    },

    refresh: function () {
        Ext.getCmp('refimosfgridview_id').getStore().load();
    },

    btnFind: function(){
        Ext.getCmp('refimosfgridview_id').getStore().load({
            params: {
                corp_name: Ext.getCmp('query_refi_mos_corp_name_id').getValue()
            }
        });
    },

    btnReset: function(_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('refimosfgridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('refimosfqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'refimosfqueryview',
                    id: 'refimosfqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('refimosfqueryview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('refimosfgridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var mos_id = row.get('mos_id');
                        Ext.Ajax.request({
                            url: '/enter/deleterefimos',
                            params: {
                                "mos_id": mos_id
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('refimosfgridview_id').getStore().load();
                                Ext.Msg.alert("成功", "数据删除成功!");
                            },
                            failure: function () {
                                Ext.Msg.alert("失败", "数据删除失败!");
                            }
                        });
                    }
                } else {
                    Ext.Msg.alert('提示', '请选择要删除的记录');
                }
            }
        });
    }
});
