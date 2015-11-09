/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.maintainplan.MaintainplanGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'maintainplangridview',
    columnLines: true,
    requires: [
        'app.view.workmgr.maintainplan.MaintainplanController',
        'app.store.workmgr.maintainplan.MaintainplanStore',
        'Ext.grid.filters.Filters'
    ],

    controller: 'maintainplancontroller',
    store: {
        type: 'maintainplanstore'
    },
    listeners: {
        itemclick: 'itemclick'
    },

    selModel: {
        type: 'spreadsheet',
        // Disables sorting by header click, though it will be still available via menu
        columnSelect: true,
        checkboxSelect: true,
        pruneRemoved: false,
        extensible: 'y'
    },

    columns: [
        {text: 'ID',  width: 220, dataIndex: 'mp_id',hidden:true},
        {text: '企业ID',  width: 220, dataIndex: 'mp_corp_id',hidden:true},
        {text: '企业名称',  width: 220, dataIndex: 'corp_name'},
        {text: '挂牌代码',  width: 100, dataIndex: 'mp_listcode'},
        {text: '省', width: 80, dataIndex: 'mp_province',hidden:true},
        {text: '市', width: 80, dataIndex: 'mp_city',hidden:true},
        {text: '县', width: 80, dataIndex: 'mp_county',hidden:true},
        {text: '最后一次维护时间', width: 150, dataIndex: 'mp_last_date'},
        {text: '维护内容', width: 220, dataIndex: 'mp_content'},
        {text: '维护结果', width: 220, dataIndex: 'mp_result',hidden:true},
        {text: '历史记录', width: 220, dataIndex: 'mp_hisdesc' ,hidden:true},
        {text: '备注',flex: 1, dataIndex: 'mp_remark'},
        {
            text: "维护",
            width: 130,
            dataIndex: 'mp_id',
            align: "center",
            renderer: function (v, cellmeta) {
                var returnStr = "<INPUT type='button' value='添加'  onclick='add_maintain_info(\""+v+"\")'>";
                return returnStr;
            }
        }
    ]
});

function add_maintain_info(id) {

    Ext.create('widget.window', {
        title: '添加维护信息',
        modal: true,
        id:'add_maintain_info_windows',
        width: 500,
        height: 500,
        border: false,
        layout: 'fit',
        defaults: {
            width: 250,
            allowBlank: false
        },
        items: [
            {
                xtype: 'form',
                frame: true,
                bodyPadding: 10,
                fieldDefaults: {
                    labelAlign: 'left',
                    labelWidth:100
                },
                defaults: {
                    labelAlign: 'left',
                    xtype: 'textfield'
                },
                items: [

                    {  anchor: '100%',
                        xtype: 'datefield',
                        name: 'mi_mt_date',
                        fieldLabel: '维护时间',
                        value: new Date(),
                        format: 'Y-m-d',
                        allowBlank: false
                    },
                    {  anchor: '100%',
                        xtype: 'combo',
                        name: 'mi_cust_type',
                        fieldLabel: '企业客户分级（A/B）',
                        autoRender: true,
                        autoShow: true,
                        store: Ext.create('Ext.data.Store', {
                            fields: ['type'],
                            data: [{'type': 'A'}, {'type': 'B'}]
                        }),
                        displayField: 'type',
                        valueField: 'type',
                        allowBlank: false
                    },
                    {  anchor: '100%',
                        xtype: 'datefield',
                        name: 'mi_next_date',
                        fieldLabel: '下次维护时间',
                        value: new Date(),
                        format: 'Y-m-d',
                        allowBlank: false
                    },
                    {  anchor: '100%',
                        xtype: 'textareafield',
                        name: 'mi_next_plan',
                        fieldLabel: '下次维护计划',
                        allowBlank: false
                    },
                    {  anchor: '100%',
                        xtype: 'textareafield',
                        name: 'mi_remark',
                        fieldLabel: '维护结果',
                        allowBlank: false
                    }
                ],
                buttonAlign: "center",
                buttons: [
                    {
                        text: '保存',
                        handler: function () {
                            var form = this.up('form').getForm();
                            if (form.isValid()) {
                                form.submit({
                                    url: '/bolong/add_maintain_info',
                                    params: {
                                        mi_mp_id: id
                                    },
                                    waitMsg: '正在保存数据...',
                                    success: function (form, action) {
                                        Ext.Msg.alert("成功", "数据保存成功!");
                                        //重新载入渠道信息
                                        Ext.getCmp('maintaininfogridview_id').getStore().load({
                                            params: {
                                                mi_mp_id: id
                                            }
                                        });
                                    },
                                    failure: function (form, action) {
                                        Ext.Msg.alert("失败", "数据保存失败!");
                                    }
                                });
                            }
                        }
                    },
                    {
                        text: '重置',
                        handler: function () {
                            this.up('form').getForm().reset();
                        }
                    }
                ]
            }
        ]
    }).show(Ext.get('add_maintain_info_windows'));
};
