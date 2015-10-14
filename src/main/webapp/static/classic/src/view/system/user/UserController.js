/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.system.user.UserController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.usercontroller',

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('userdetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);
    },

    btnAdd: function(){
        Ext.create('app.view.system.user.UserAddView',{
        }).show(Ext.get('user_add_id'));
    },

    btnRefresh: function () {
        Ext.getCmp('usergridview_id').getStore().load();
    },

    btnFind: function(){
        Ext.getCmp('usergridview_id').getStore().load({
            params: {
                name: Ext.getCmp('query_user_name_id').getValue()
            }
        });
    },

    btnReset: function(_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('usergridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('userqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'userqueryview',
                    id: 'userqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('userqueryview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('usergridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var id = row.get('id');
                        Ext.Ajax.request({
                            url: '/enter/deleteuser',
                            params: {
                                "id": id
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('usergridview_id').getStore().load();
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
