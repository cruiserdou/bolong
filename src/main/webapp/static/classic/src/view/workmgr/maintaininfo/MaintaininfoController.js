/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.workmgr.maintaininfo.MaintaininfoController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.maintaininfocontroller',

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('maintaininfodetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);
    },

    btnAdd: function(){
        Ext.create('app.view.workmgr.maintaininfo.MaintaininfoAddView',{
        }).show(Ext.get('maintaininfo_add_id'));
    },

    refresh: function () {
        Ext.getCmp('maintaininfogridview_id').getStore().load();
    },

    btnFind: function(){
        Ext.getCmp('maintaininfogridview_id').getStore().load({
            params: {
                corp_name: Ext.getCmp('query_maintain_info_corp_name_id').getValue()
            }
        });
    },

    btnReset: function(_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('maintaininfogridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('maintaininfoqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'maintaininfoqueryview',
                    id: 'maintaininfoqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('maintaininfoqueryview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('maintaininfogridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var mi_id = row.get('mi_id');
                        Ext.Ajax.request({
                            url: '/enter/deletemaintaininfo',
                            params: {
                                "mi_id": mi_id
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('maintaininfogridview_id').getStore().load();
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
