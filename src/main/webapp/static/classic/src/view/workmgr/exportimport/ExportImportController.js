/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.workmgr.exportimport.ExportImportController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.exportimportcontroller',

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('exportimportdetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);
    },

    import: function () {
        Ext.create('widget.window', {
            title: '导入企业信息',
            modal: true,
            width: 300,
            height: 200,
            border: false,
            layout: 'fit',
            defaults: {
                width: 200,
                allowBlank: false
            },
            items: [
                {
                    xtype: 'form',
                    frame: true,
                    bodyPadding: 10,
                    fieldDefaults: {
                        labelAlign: 'left',
                        labelWidth: 70
                    },
                    defaults: {
                        labelAlign: 'right',
                        xtype: 'textfield'
                    },
                    items: [
                        {
                            anchor: '100%',
                            xtype: 'filefield',
                            fieldLabel: '导入文件',
                            buttonText:'选择文件',
                            name: 'file',
                            allowBlank:false
                        }
                    ],
                    buttonAlign : "center",
                    buttons: [
                        {
                            text: '导入',
                            handler: function(){
                                var form = this.up('form').getForm();
                                if (form.isValid()){
                                    form.submit({
                                        url: '/enter/import_corp_xlsa',
                                        waitMsg: '正在保存数据...',
                                        success: function(form, action){
                                            Ext.Msg.alert("成功", "数据保存成功!");
                                            Ext.getCmp('exportimportgridview_id').getStore().reload();
                                        },
                                        failure: function(form, action){
                                            Ext.Msg.alert("失败", "数据保存失败!");
                                        }
                                    });
                                }
                            }
                        },
                        {
                            text: '重置',
                            glyph: 0xf021,
                            handler: function () {
                                this.up('form').getForm().reset();
                            }
                        }
                    ]
                }

            ]
        }).show(Ext.get('corp_import'));
    },

    export: function () {
        var sm = Ext.getCmp('exportimportgridview_id').getSelectionModel();
        var rows = sm.getSelection();
        var id_list = "";
        if (rows.length > 0) {
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];
                id_list = id_list + ',' + row.get('id');
            }
            alert(id_list)
            Ext.create('widget.window', {
                xtype: 'form',
                frame: true,
                modal: true,
                width: 200,
                height: 200,
                title: '导出',
                layout: {
                    type: 'vbox',
                    align: 'stretch',
                    pack: 'start'
                },
                items: [
                    {
                        xtype: 'panel',
                        bodyPadding: '20',
                        flex: 1,
                        html: '<a onclick="corp_s_export(id_list);"  href="#"><img style="height: 32px; margin-left: 50px;" />导出</a><br/>'
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        bodyPadding: '20',
                        html: '<a href="upload/coprs.xls"><img style="width: 32px; margin-left: 50px;"  />下载</a>'
                    }
                ]

            }).show(Ext.get('corp_export'));

        }else{
            Ext.Msg.alert('提示', '请选择要导出数据！');
        }
    },

    refresh: function () {
        Ext.getCmp('exportimportgridview_id').getStore().load();
    },

    btnFind: function(){
        Ext.getCmp('exportimportgridview_id').getStore().load({
            params: {
                name: Ext.getCmp('query_exportimport_name_id').getValue(),
                nos: Ext.getCmp('query_exportimport_nos_id').getValue(),
                buslicno: Ext.getCmp('query_exportimport_buslicno_id').getValue(),
                listcode: Ext.getCmp('query_exportimport_listcode_id').getValue()
            }
        });
    },

    btnReset: function(_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('exportimportgridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('exportimportqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'exportimportqueryview',
                    id: 'exportimportqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('exportimportqueryview_id'));
        }
    }
});

function corp_s_export(id_list) {
    Ext.Ajax.request({
        url: '/enter/import_corp_s',
        params: {
            "id_list": id_list,
            "fileName":"coprs.xls"
        },
        waitMsg: '正在导出数据...',
        success: function () {
            Ext.getCmp('exportimportgridview_id').getStore().load();
            Ext.Msg.alert("成功", "数据导出成功!");
        },
        failure: function () {
            Ext.Msg.alert("失败", "数据导出失败!");
        }
    });

}
