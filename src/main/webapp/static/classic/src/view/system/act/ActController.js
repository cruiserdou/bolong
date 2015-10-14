/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.system.act.ActController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.actcontroller',

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('actdetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);
    },

    btnAdd: function(){
        Ext.create('app.view.system.act.ActAddView',{
        }).show(Ext.get('act_add_id'));
    },

    btnRefresh: function () {
        Ext.getCmp('actgridview_id').getStore().load();
    },

    btnFind: function(){
        Ext.getCmp('actgridview_id').getStore().load({
            params: {
                rolename: Ext.getCmp('rm_query_rolename_id').getValue(),
                text: Ext.getCmp('rm_query_text_id').getValue()
            }
        });
    },

    btnReset: function(_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('actgridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('actqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'actqueryview',
                    id: 'actqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('actqueryview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('actgridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var roleid = row.get('roleid');
                        var treeid = row.get('treeid');
                        Ext.Ajax.request({
                            url: '/enter/deleteroleperm',
                            params: {
                                "roleid": roleid,
                                "treeid": treeid
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('actgridview_id').getStore().load();
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
