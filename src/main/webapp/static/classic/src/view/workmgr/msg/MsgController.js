/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.workmgr.msg.MsgController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.msgcontroller',

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('msgdetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);
    },

    btnAdd: function(){
        Ext.create('app.view.workmgr.msg.MsgAddView',{
        }).show(Ext.get('msg_add_id'));
    },

    refresh: function () {
        Ext.getCmp('msggridview_id').getStore().load();
    },

    btnFind: function(){
        Ext.getCmp('msggridview_id').getStore().load({
            params: {
                stat: Ext.getCmp('query_msg_stat_id').getValue(),
                user_name: Ext.getCmp('query_msg_user_name_id').getValue()
            }
        });
    },

    btnReset: function(_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('msggridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('msgqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'msgqueryview',
                    id: 'msgqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('msgqueryview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('msggridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var id = row.get('id');
                        Ext.Ajax.request({
                            url: '/enter/deletemsg',
                            params: {
                                "id": id
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('msggridview_id').getStore().load();
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
