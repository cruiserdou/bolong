/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.refimosf.RefimosfAddView', {
    extend: 'Ext.window.Window',
    xtype: 'refimosfaddview',
    width: 500,
    title: '添加融资服务信息',
    constrain: true,
    closable: true,
    modal: true,
    layout: 'fit',
    requires: [
        'app.view.workmgr.corp_basic.corp_basic_grid',
        'app.view.workmgr.corp_basic.corp_basic_query'
    ],
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'form',
        bodyPadding: 10,
        layout: 'form',

        items: [{
            xtype: 'textfield',
            name: 'mos_corp_id',
            id: 'corp_id',
            hidden: true
        }, {
            xtype: "fieldcontainer", layout: "hbox",
            items: [
                {
                    readOnly:true,
                    allowBlank:false,
                    fieldLabel: '企业名称',
                    name: 'corp_name',
                    xtype: 'textfield',
                    labelAlign: 'right',
                    id: 'corp_name_id'
                },
                {
                    xtype: "button", text: "...",
                    handler: function () {

                        Ext.create('widget.window', {
                            title: '企业',
                            id: 'corp_find_window',
                            width: 800,
                            height: 600,
                            iconCls: 'icon_search',
                            modal: true,
                            border: false,
                            layout: 'border',
                            items: [

                                {
                                    xtype: 'corp_basic_queryf',
                                    region: 'north'
                                },
                                {
                                    xtype: 'corp_basic_gridf',
                                    region: 'center',
                                    height: 120
                                }
                            ]
                        }).show(Ext.get('corp_name_id'));
                    }
                }
            ]
        },{
            xtype: 'textfield',
            name: 'mos_cots',
            fieldLabel: '融资产品',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'mos_amounts',
            fieldLabel: '融资金额',
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'mos_mop',
            fieldLabel: '项目经理',
            allowBlank: false
        },{
            xtype: 'textareafield',
            name: 'mos_rop',
            fieldLabel: '融资进度'
        }
        ],
        buttonAlign: "center",
        buttons: [
            {
                text: '重置',
                handler: function () {
                    this.up('form').getForm().reset();
                }
            },
            {
                text: '保存',
                handler: function () {
                    var form = this.up('form').getForm();
                    if (form.isValid()){
                        form.submit({
                            url: '/enter/add_refi_mos_info',
                            waitMsg: '正在保存数据...',
                            success: function(form, action){
                                Ext.Msg.alert("成功", "数据保存成功!");
                                //重新载入渠道信息
                                Ext.getCmp('refimosfgridview_id').getStore().reload();
                            },
                            failure: function(form, action){
                                Ext.Msg.alert("失败", "数据保存失败!");
                            }
                        });
                    }
                }
            }
        ]
    }
});
