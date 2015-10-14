/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.maintainplan.MaintainplanAddView', {
    extend: 'Ext.window.Window',
    xtype: 'maintainplanaddview',
    width: 600,
    title: '添加维护计划',
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

        items: [

            {
                xtype: 'textfield',
                fieldLabel: '企业ID',
                name: 'mp_corp_id',
                id:'corp_id',
                hidden:true
            },

            {
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
            },
            {
                readOnly:true,
                xtype: 'textfield',
                fieldLabel: '挂牌代码',
                name: 'mp_listcode',
                id: 'corp_listcode_id'
            },
            {
                readOnly:true,
                xtype: 'textfield',
                fieldLabel: '省',
                name: 'mp_province',
                id:'corp_province_id'
            },
            {
                readOnly:true,
                xtype: 'textfield',
                fieldLabel: '市',
                name: 'mp_city',
                id:'corp_city_id'
            },
            {
                readOnly:true,
                xtype: 'textfield',
                fieldLabel: '县',
                name: 'mp_county',
                id:'corp_county_id'
            },
            {
                xtype: 'datefield',
                fieldLabel: '最后一次维护时间',
                name: 'mp_last_date',
                value: new Date(),
                format: 'Y-m-d H:i:s'
            },
            {
                xtype: 'textareafield',
                fieldLabel: '维护内容',
                name: 'mp_content'
            },
            {
                xtype: 'textareafield',
                hidden:true,
                fieldLabel: '维护结果',
                name: 'mp_result'
            },
            {
                xtype: 'textareafield',
                hidden:true,
                fieldLabel: '历史记录',
                name: 'mp_hisdesc'
            },
            {
                xtype: 'textareafield',
                fieldLabel: '备注',
                name: 'mp_remark'
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
                            url: '/enter/add_maintain_plan_info',
                            waitMsg: '正在保存数据...',
                            success: function(form, action){
                                Ext.Msg.alert("成功", "数据保存成功!");
                                //重新载入渠道信息
                                Ext.getCmp('maintainplangridview_id').getStore().reload();
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
