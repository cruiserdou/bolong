/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.system.role.RoleController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.rolecontroller',

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('roledetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);
    },

    btnAdd: function(){
        Ext.create('app.view.system.role.RoleAddView',{
        }).show(Ext.get('role_add_id'));
    },

    btnRefresh: function () {
        Ext.getCmp('rolegridview_id').getStore().load();
    },

    btnFind: function(){
        Ext.getCmp('rolegridview_id').getStore().load({
            params: {
                rolename: Ext.getCmp('query_rolename_id').getValue()
            }
        });
    },

    btnReset: function(_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('rolegridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('rolequeryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'rolequeryview',
                    id: 'rolequeryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('rolequeryview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('rolegridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var id = row.get('id');
                        Ext.Ajax.request({
                            url: '/enter/deleterole',
                            params: {
                                "id": id
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('rolegridview_id').getStore().load();
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
