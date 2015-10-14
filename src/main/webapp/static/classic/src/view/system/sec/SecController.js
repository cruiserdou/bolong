/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.system.sec.SecController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.seccontroller',

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('secdetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);
    },

    btnAdd: function(){
        Ext.create('app.view.system.sec.SecAddView',{
        }).show(Ext.get('sec_add_id'));
    },

    btnRefresh: function () {
        Ext.getCmp('secgridview_id').getStore().load();
    },

    btnFind: function(){
        Ext.getCmp('secgridview_id').getStore().load({
            params: {
                rolename: Ext.getCmp('query_sec_rolename_id').getValue(),
                username: Ext.getCmp('query_sec_username_id').getValue()
            }
        });
    },

    btnReset: function(_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('secgridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('secqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'secqueryview',
                    id: 'secqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('secqueryview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('secgridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var roleid = row.get('roleid');
                        var userid = row.get('userid');
                        Ext.Ajax.request({
                            url: '/enter/deleteuserroles',
                            params: {
                                "roleid": roleid,
                                "userid": userid
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('secgridview_id').getStore().load();
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
