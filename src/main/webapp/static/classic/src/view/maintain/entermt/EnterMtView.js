/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.entermt.EnterMtView', {
    extend: 'Ext.panel.Panel',
    xtype: 'entermtview',
    id: 'entermtview_id',
    closable: true,

    requires: [
        'app.view.maintain.entermt.innerenter.InnerEnterView',
        'app.view.maintain.entermt.innerenter.EnterApplyView'
    ],

    viewModel: 'main',
    layout: 'fit',
    bodyPadding: 160,
    items: {
        xtype: 'panel',
        layout: {
            type: 'table',
            columns: 2,
            tdAttrs: {style: 'padding: 10px;'}
        },

        items: [{
            xtype: 'button',
            id: 'add_enter_btn_id',
            text: '新增企业',
            scale: 'large',
            margin: '0 60 0 0',
            iconAlign: 'top',
            handler: function () {
                //win_enterapplyview.show();

                Ext.create('Ext.window.Window', {
                    title: '添加企业信息',
                    height: 700,
                    width: 960,
                    modal: true,
                    layout: 'fit',
                    items: {  // Let's put an empty grid in just to illustrate fit layout
                        xtype: 'form',
                        width: 600,
                        scrollable: true,
                        bodyPadding: 10,
                        defaults: {
                            anchor: '100%',
                            labelWidth: 100
                        },
                        items: [{
                            xtype: 'fieldset',
                            title: '基本信息',
                            collapsible: true,
                            defaults: {
                                labelWidth: 90,
                                xtype: 'textfield',
                                width: 360,
                                anchor: '100%'
                            },
                            layout: {
                                type: 'table',
                                columns: 2,
                                tableAttrs: {
                                    style: {
                                        width: '100%'
                                    }
                                }
                            },
                            items: [{
                                fieldLabel: '营业执照编号'
                            }, {
                                fieldLabel: '企业名称'
                            }, {
                                fieldLabel: '单位类别'
                            }, {
                                fieldLabel: '法定代表人'
                            }, {
                                fieldLabel: '地域'
                            }, {
                                fieldLabel: '公司简介'
                            }, {
                                fieldLabel: '邮政编码'
                            }, {
                                fieldLabel: '企业性质'
                            }, {
                                fieldLabel: '注册资本(万元)'
                            }, {
                                xtype: 'datefield',
                                fieldLabel: '注册日期'
                            }, {
                                xtype: 'datefield',
                                fieldLabel: '营业期限自'
                            }, {
                                xtype: 'datefield',
                                fieldLabel: '营业期限至'
                            }, {
                                fieldLabel: '挂牌区域'
                            }, {
                                xtype: 'datefield',
                                fieldLabel: '挂牌日期'
                            }, {
                                fieldLabel: '挂牌代码'
                            }, {
                                fieldLabel: '挂牌价格 - 元/元出资（股）'
                            }, {
                                fieldLabel: '企业微信号'
                            }, {
                                fieldLabel: '推荐单位'
                            }, {
                                fieldLabel: '登记机关'
                            }, {
                                fieldLabel: '员工人数'
                            }, {
                                xtype: 'textarea',
                                fieldLabel: '注册地址'
                            }, {
                                xtype: 'textarea',
                                fieldLabel: '办公地址'
                            }, {
                                xtype: 'textarea',
                                fieldLabel: '经营范围'
                            }, {
                                xtype: 'textarea',
                                fieldLabel: '主营业务'
                            }, {
                                xtype: 'textarea',
                                fieldLabel: '企业简介'
                            }, {
                                xtype: 'textarea',
                                fieldLabel: '备注'
                            }]
                        }, {
                            xtype: 'fieldset',
                            title: '法定代表人',
                            collapsible: true,
                            defaults: {
                                labelWidth: 90,
                                xtype: 'textfield',
                                width: 360,
                                anchor: '100%'
                            },
                            layout: {
                                type: 'table',
                                columns: 2,
                                tableAttrs: {
                                    style: {
                                        width: '100%'
                                    }
                                }
                            },
                            items: [{
                                fieldLabel: '姓名'
                            }, {
                                fieldLabel: '证件类型'
                            }, {
                                fieldLabel: '职务'
                            }, {
                                fieldLabel: '证件号码'
                            }, {
                                fieldLabel: '手机'
                            }, {
                                fieldLabel: '传真'
                            }, {
                                fieldLabel: 'E-mail'
                            }, {
                                fieldLabel: 'QQ'
                            }, {
                                fieldLabel: '微信号'
                            }, {
                                fieldLabel: '固话'
                            }, {
                                xtype: 'textarea',
                                fieldLabel: '备注'
                            }]
                        }, {
                            xtype: 'fieldset',
                            title: '国民经济行业分类信息',
                            collapsible: true,
                            defaults: {
                                labelWidth: 90,
                                xtype: 'combo',
                                width: 360,
                                anchor: '100%'
                            },
                            layout: {
                                type: 'table',
                                columns: 2,
                                tableAttrs: {
                                    style: {
                                        width: '100%'
                                    }
                                }
                            },
                            items: [{
                                fieldLabel: '行业一级分类'
                            }, {
                                fieldLabel: '行业二级分类'
                            }, {
                                fieldLabel: '行业三级分类'
                            }, {
                                fieldLabel: '行业四级分类'
                            }]
                        }, {
                            xtype: 'fieldset',
                            title: '证监会行业分类信息',
                            collapsible: true,
                            defaults: {
                                labelWidth: 90,
                                xtype: 'combo',
                                width: 360,
                                anchor: '100%'
                            },
                            layout: {
                                type: 'table',
                                columns: 2,
                                tableAttrs: {
                                    style: {
                                        width: '100%'
                                    }
                                }
                            },
                            items: [{
                                fieldLabel: '证监会行业一级分类'
                            }, {
                                fieldLabel: '证监会行业二级分类'
                            }]
                        }, {
                            xtype: 'fieldset',
                            title: '企业最近一次被关注信息',
                            collapsible: true,
                            defaults: {
                                labelWidth: 90,
                                xtype: 'textfield',
                                width: 360,
                                anchor: '100%'
                            },
                            layout: {
                                type: 'table',
                                columns: 2,
                                tableAttrs: {
                                    style: {
                                        width: '100%'
                                    }
                                }
                            },
                            items: [{
                                xtype: 'datefield',
                                fieldLabel: '更新日期'
                            }]
                        }],

                        buttons: [{
                            text: '保存',
                            handler: 'onSaveClick'
                        }, {
                            text: '重置',
                            handler: 'onResetClick'
                        }]
                    }
                }).show(Ext.getCmp('add_enter_btn_id'));
            }
        }, {
            xtype: 'button',
            id: 'innerenterview_id',
            text: '已入库企业',
            scale: 'large',
            iconAlign: 'top',
            handler: function () {
                Ext.create('innerenterview', {maximized: true}).show();
            }
        }]
    }
});
