/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.msg.MsgGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'msggridview',
    columnLines: true,
    requires: [
        'app.view.workmgr.msg.MsgController',
        'app.store.workmgr.msg.MsgStore',
        'Ext.grid.filters.Filters'
    ],

    controller: 'msgcontroller',
    store: {
        type: 'msgstore'
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
        {text: 'ID', width: 80, dataIndex: 'id',hidden:true},
        {text: '状态', width: 100, dataIndex: 'stat'},
        {text: '接收人', width: 100, dataIndex: 'ruser_id',hidden:true},
        {text: '发送人', width: 80, dataIndex: 'user_id',hidden:true},
        {text: '发送人', width: 120, dataIndex: 'user_name'},
        {text: '内容', flex: 1, dataIndex: 'content'},
        {text: '期限', width: 100, dataIndex: 'deadline',hidden:true},
        {text: '发送时间', width: 200, dataIndex: 'rtdate'},
        {text: '类型', width: 100, dataIndex: 'type'},
        {text: '备注', width: 100, dataIndex: 'remark',hidden:true}
    ]
});

function add_refi_rop(id) {


    Ext.create('widget.window', {
        title: '添加进度',
        modal: true,
        id:'add_refi_rop_windows',
        width: 370,
        height: 500,
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
                    labelAlign: 'left',
                    xtype: 'textfield'
                },
                items: [

                    {
                        xtype: 'textarea',
                        anchor: '100%',
                        fieldLabel: '事项',
                        name: 'rop_items'
                    },
                    {
                        xtype: 'textarea',
                        anchor: '100%',
                        fieldLabel: '具体内容',
                        name: 'rop_desc'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '完成时间',
                        name: 'rop_endt',
                        xtype: 'datefield',
                        value: new Date(),
                        format: 'Y-m-d H:i:s'
                    },
                    {
                        xtype: 'textarea',
                        anchor: '100%',
                        fieldLabel: '需解决问题',
                        name: 'rop_crb'
                    },
                    {
                        xtype: 'container',
                        anchor: '100%',
                        layout: 'column',
                        items: [

                            {
                                xtype: "panel",
                                layout: "column",
                                fieldLabel: '是否完成',
                                xtype: 'radiogroup', anchor: '220%', columns: 20, items: [
                                {boxLabel: "是", name: 'rop_stat', inputValue: '是',checked: true},
                                {boxLabel: "否", name: 'rop_stat', inputValue: '否'}
                            ]
                            }
                        ]
                    },
                    {
                        xtype: 'textarea',
                        anchor: '100%',
                        fieldLabel: '备注',
                        name: 'rop_remark'
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
                                    url: 'add_refi_rop_info',
                                    method: 'POST',
                                    params: {
                                        rop_mos_id: id
                                    },
                                    waitMsg: '正在保存...',
                                    success: function (form, action) {
                                        Ext.Msg.alert("成功", "保存成功!");
                                        Ext.getCmp('add_refi_rop_windows').close();
                                    },
                                    failure: function (form, action) {
                                        Ext.Msg.alert("失败", "保存失败!");
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
    }).show(Ext.get(id));
};