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
                    maximizable: true,
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
                            }, {
                                fieldLabel: '更新人'
                            }, {
                                fieldLabel: '更新单位'
                            }, {
                                xtype: 'datefield',
                                fieldLabel: '推荐日期'
                            }, {
                                fieldLabel: '托管状态'
                            }, {
                                fieldLabel: '挂牌状态'
                            }, {
                                fieldLabel: '企业等级'
                            }, {
                                fieldLabel: '企业维护状态'
                            }, {
                                fieldLabel: '所属后备库'
                            }, {
                                fieldLabel: '企业接待人'
                            }, {
                                fieldLabel: '部门'
                            }, {
                                fieldLabel: '职务'
                            }, {
                                fieldLabel: '固定电话'
                            }, {
                                fieldLabel: '手机号码'
                            }, {
                                fieldLabel: '传真'
                            }, {
                                fieldLabel: 'E-mail'
                            }, {
                                fieldLabel: 'QQ'
                            }, {
                                fieldLabel: '微信号'
                            }, {
                                xtype: 'textarea',
                                fieldLabel: '备注'
                            }]
                        }, {
                            xtype: 'fieldset',
                            title: '企业财务信息',
                            collapsible: true,
                            defaults: {
                                xtype: 'textfield',
                                labelWidth: 90,
                                anchor: '100%'
                            },
                            layout: {
                                type: 'table',
                                columns: 6,
                                tableAttrs: {
                                    style: {
                                        width: '100%'
                                    }
                                }
                            },
                            items: [{
                                xtype: 'datefield',
                                fieldLabel: '时间始',
                                colspan: 3
                            },{
                                xtype: 'datefield',
                                fieldLabel: '时间至',
                                colspan: 3
                            }, {
                                xtype: 'displayfield',
                                value: '资产'
                            }, {
                                xtype: 'displayfield',
                                value: '年初余额（元）'
                            }, {
                                xtype: 'displayfield',
                                value: '期末余额'
                            }, {
                                xtype: 'displayfield',
                                value: '负债和所有者权益'
                            }, {
                                xtype: 'displayfield',
                                value: '年初余额（元）'
                            }, {
                                xtype: 'displayfield',
                                value: '期末余额（元）'
                            },{
                                xtype: 'displayfield',
                                value: '流动资产：',
                                colspan: 3
                            }, {
                                xtype: 'displayfield',
                                value: '流动负债：',
                                colspan: 3
                            }, {
                                xtype: 'displayfield',
                                value: '货币资金'
                            }, {

                            }, {

                            },{
                                xtype: 'displayfield',
                                value: '短期借款'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '交易性金融资产'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '交易性金融负债'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '应收票据'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '应付票据'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '应收账款'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '应付账款'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '预付款项'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '预收款项'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '应收利息'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '应付职工薪酬'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '应收股利'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '应缴税费'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '其他应收款'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '应付利息'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '存货'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '应付股利'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '一年内非到期流动资产'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '一年内到期非流动负债'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '其他流动资产'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '其他应付款'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: ''
                            }, {
                                xtype: 'displayfield',
                                value: ''
                            }, {
                                xtype: 'displayfield',
                                value: ''
                            }, {
                                xtype: 'displayfield',
                                value: '其他流动负债'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '流动资产合计'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '流动负债合计'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '非流动资产：',
                                colspan: 3
                            }, {
                                xtype: 'displayfield',
                                value: '非流动负债：',
                                colspan: 3
                            },{
                                xtype: 'displayfield',
                                value: '可供出售金融资产'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '长期借款'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '持有至到期投资'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '应付债券'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '长期应收款'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '长期应付款'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '长期股权投资'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '专项应付款'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '投资性房地产'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '预计负债'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '固定资产'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '递延所得税负债'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '减：累计折旧'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '其他非流动负债'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '固定资产净值'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '非流动负债合计'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '减：固定资产减值准备'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '负债合计'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '固定资产净额'
                            }, {

                            }, {

                            },{
                                xtype: 'displayfield',
                                value: ''
                            }, {
                                xtype: 'displayfield',
                                value: ''
                            }, {
                                xtype: 'displayfield',
                                value: ''
                            }, {
                                xtype: 'displayfield',
                                value: '在建工程'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '所有者权益(或股东权益)'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '工程物资'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '实收资本(或股本)'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '固定资产清理'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '资本公积'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '生产性生物资产'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '减：库存股'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '无形资产'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '专项储备'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '商誉'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '盈余公积'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '长期待摊费用'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '未分配利润'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '递延所得税资产'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '所有者权益合计'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '其他非流动资产'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '',
                                colspan: 3
                            }, {
                                xtype: 'displayfield',
                                value: '非流动资产合计'
                            }, {
                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '',
                                colspan: 3
                            }, {
                                xtype: 'displayfield',
                                value: '资产总计'
                            }, {

                            }, {

                            }, {
                                xtype: 'displayfield',
                                value: '负债和所有者权益合计'
                            }, {

                            }, {

                            }]
                        }, {
                            xtype: 'fieldset',
                            title: '服务机构信息',
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
                                fieldLabel: '服务机构名称'
                            }, {
                                fieldLabel: '服务机构类别'
                            }, {
                                fieldLabel: '业务内容'
                            }, {
                                fieldLabel: '级别'
                            }, {
                                fieldLabel: '惩罚记录'
                            }, {
                                fieldLabel: '专属领域'
                            }, {
                                fieldLabel: '专申委员'
                            }, {
                                fieldLabel: '兼任职务'
                            }, {
                                xtype: 'textarea',
                                fieldLabel: '简介'
                            }, {
                                xtype: 'textarea',
                                fieldLabel: '备注'
                            }]
                        }, {
                            xtype: 'fieldset',
                            title: '投资人信息',
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
                                fieldLabel: '投资领域',
                                colspan: 2
                            }, {
                                xtype: 'combo',
                                fieldLabel: '行业一级分类'
                            }, {
                                xtype: 'combo',
                                fieldLabel: '行业二级分类'
                            }, {
                                xtype: 'combo',
                                fieldLabel: '行业三级分类'
                            }, {
                                xtype: 'combo',
                                fieldLabel: '行业四级分类'
                            },{
                                xtype: 'combo',
                                fieldLabel: '证监会行业一级分类'
                            }, {
                                xtype: 'combo',
                                fieldLabel: '证监会行业二类分类'
                            }, {
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
                                fieldLabel: '备注',
                                colspan: 2
                            }]
                        }, {
                            xtype: 'fieldset',
                            title: '政府部门信息',
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
                                fieldLabel: '单位名称'
                            }, {
                                fieldLabel: '处/室'
                            }, {
                                xtype: 'textarea',
                                fieldLabel: '职能介绍',
                                colspan: 2
                            }, {
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
                            title: '融资需求',
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
                                fieldLabel: '融资金额'
                            }, {
                                fieldLabel: '融资用途'
                            }, {
                                fieldLabel: '股份融资/债券融资'
                            }, {
                                fieldLabel: '偿付保障'
                            }, {
                                fieldLabel: '可接受成本(%/年)'
                            }, {
                                fieldLabel: '融资期限'
                            },{
                                fieldLabel: '融资用途详细说明',
                                colspan: 2
                            }]
                        }, {
                            xtype: 'fieldset',
                            title: '培训需求',
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
                                fieldLabel: '培训方式',
                                colspan: 2
                            }, {
                                fieldLabel: '有效时间'
                            }, {
                                fieldLabel: '可接受成本'
                            }, {
                                xtype: 'textarea',
                                fieldLabel: '培训内容'
                            }, {
                                xtype: 'textarea',
                                fieldLabel: '详细要求'
                            }]
                        }, {
                            xtype: 'fieldset',
                            title: '人力需求',
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
                                fieldLabel: '需求职位'
                            }, {
                                fieldLabel: '职位人数'
                            }, {
                                fieldLabel: '职位薪金'
                            }, {
                                fieldLabel: '性别要求'
                            }, {
                                fieldLabel: '年龄要求'
                            }, {
                                fieldLabel: '经验要求'
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
