/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.entermt.innerenter.InnerEnterAddCorp', {
    extend: 'Ext.form.Panel',
    xtype: 'innerenteraddcorp',
    requires: [
        'app.store.dict.ProvinceStore',
        'app.store.dict.CityStore',
        'app.store.dict.DistrictStore',
        'app.store.dict.Industry1Store',
        'app.store.dict.Industry2Store'
    ],
    width: 960,
    id: 'inner_corp_edit_form_id',
    scrollable: true,
    bodyPadding: 20,
    defaults: {
        anchor: '100%',
        labelWidth: 100
    },

    listeners: {
        afterrender: function () {
            //基本信息
            var e = Ext.get('edit_corp_base_id');
            e.on("click", function () {
                Ext.getCmp('inner_corp_edit_form_id').scrollTo(0, 0, true)
            });
            //法定代表人
            var e = Ext.get('edit_corp_contact_id');
            e.on("click", function () {
                Ext.getCmp('inner_corp_edit_form_id').scrollTo(0, 818 + 30, true)
            });
            //行业分类
            var e = Ext.get('edit_corp_ind_id');
            e.on("click", function () {
                Ext.getCmp('inner_corp_edit_form_id').scrollTo(0, 1200 + 20, true)
            });
            //证监会行业分类
            var e = Ext.get('edit_corp_csrc_id');
            e.on("click", function () {
                Ext.getCmp('inner_corp_edit_form_id').scrollTo(0, 1350 + 20, true)
            });
            //企业维护信息
            var e = Ext.get('edit_corp_mai_id');
            e.on("click", function () {
                Ext.getCmp('inner_corp_edit_form_id').scrollTo(0, 1460 + 20, true)
            });
            //企业维护信息
            var e = Ext.get('edit_corp_fin_id');
            e.on("click", function () {
                Ext.getCmp('inner_corp_edit_form_id').scrollTo(0, 2000 + 30, true)
            });
            //服务机构信息
            var e = Ext.get('edit_corp_service_id');
            e.on("click", function () {
                Ext.getCmp('inner_corp_edit_form_id').scrollTo(0, 3980 + 30, true)
            });
            //投资人信息
            var e = Ext.get('edit_corp_investor_id');
            e.on("click", function () {
                Ext.getCmp('inner_corp_edit_form_id').scrollTo(0, 4300 + 30, true)
            });
            //政府部门信息
            var e = Ext.get('edit_corp_gov_id');
            e.on("click", function () {
                Ext.getCmp('inner_corp_edit_form_id').scrollTo(0, 4850 + 30, true)
            });
            //融资需求
            var e = Ext.get('edit_corp_refi_id');
            e.on("click", function () {
                Ext.getCmp('inner_corp_edit_form_id').scrollTo(0, 5330, true)
            });
            //培训需求
            var e = Ext.get('edit_corp_retra_id');
            e.on("click", function () {
                Ext.getCmp('inner_corp_edit_form_id').scrollTo(0, -1, true)
            });
            //人力资源需求
            var e = Ext.get('edit_corp_rehr_id');
            e.on("click", function () {
                Ext.getCmp('inner_corp_edit_form_id').scrollTo(0, -1, true)
            });
        }
    },
    items: [
        {
        xtype: 'fieldset',
        id: 'fieldset_inner_inner_base_id',
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
        items: [
            {
                hidden: true,
                name: 'id',
                id:"corp_id",
                fieldLabel: 'ID'
            },{
            allowBlank: false,
            name: 'buslicno',
            fieldLabel: '营业执照编号',
            regex: /\d{15}/,
            regexText: '请输入15位营业执照编号'
        }, {
            allowBlank: false,
            name: 'name',
            fieldLabel: '企业名称'
        }, {
            allowBlank: false,
            name: 'unit',
            fieldLabel: '单位类别'
        }, {
            allowBlank: false,
            name: 'legrep',
            fieldLabel: '法定代表人'
        }, {
            name: 'province',
            fieldLabel: '省',
            xtype: 'combobox',
            allowBlank: false,
            store: {
                type: 'provincestore'
            },
            autoRender: true,
            autoShow: true,
            displayField: 'name',
            valueField: 'name',
            listConfig: {
                getInnerTpl: function () {
                    return '<div><span style="color: green;">' + '({name})</span></div>'
                }
            }
        }, {
            name: 'city',
            fieldLabel: '市',
            xtype: 'combobox',
            allowBlank: false,
            store: {
                type: 'citystore'
            },
            autoRender: true,
            autoShow: true,
            displayField: 'name',
            valueField: 'name',
            listConfig: {
                getInnerTpl: function () {
                    return '<div><span style="color: green;">' + '({name})</span></div>'
                }
            }
        }, {
            name: 'county',
            fieldLabel: '县',
            xtype: 'combobox',
            allowBlank: false,
            store: {
                type: 'districtstore'
            },
            autoRender: true,
            autoShow: true,
            displayField: 'name',
            valueField: 'name',
            listConfig: {
                getInnerTpl: function () {
                    return '<div><span style="color: green;">' + '({name})</span></div>'
                }
            }
        }, {
            name: 'nos',
            fieldLabel: '公司简介'
        }, {
            name: 'postal',
            fieldLabel: '邮政编码'
        }, {
            allowBlank: false,
            name: 'nature',
            fieldLabel: '企业性质'
        }, {
            allowBlank: false,
            name: 'regcap',
            fieldLabel: '注册资本(万元)'
        }, {
            allowBlank: false,
            name: 'regdt',
            xtype: 'datefield',
            format: 'Y-m-d',
            fieldLabel: '注册日期'
        }, {
            allowBlank: false,
            name: 'bustermfdt',
            xtype: 'datefield',
            format: 'Y-m-d',
            fieldLabel: '营业期限自'
        }, {
            allowBlank: false,
            name: 'bustremtdt',
            xtype: 'datefield',
            format: 'Y-m-d',
            fieldLabel: '营业期限至'
        }, {
            allowBlank: false,
            name: 'list_area',
            fieldLabel: '挂牌区域'
        }, {
            name: 'listdt',
            xtype: 'datefield',
            format: 'Y-m-d',
            fieldLabel: '挂牌日期'
        }, {
            allowBlank: false,
            name: 'listcode',
            fieldLabel: '挂牌代码'
        }, {
            name: 'listprice',
            fieldLabel: '挂牌价格 - 元/元出资（股）'
        }, {
            name: 'webchat',
            fieldLabel: '企业微信号'
        }, {
            name: 'channels',
            fieldLabel: '推荐单位'
        }, {
            name: 'regist_organ',
            fieldLabel: '登记机关'
        }, {
            name: 'staffnum',
            fieldLabel: '员工人数'
        }, {
            name: 'regaddr',
            xtype: 'textarea',
            fieldLabel: '注册地址'
        }, {
            name: 'offaddr',
            xtype: 'textarea',
            fieldLabel: '办公地址'
        }, {
            name: 'scope',
            xtype: 'textarea',
            fieldLabel: '经营范围'
        }, {
            name: 'mbus',
            xtype: 'textarea',
            fieldLabel: '主营业务'
        }, {
            name: 'eprofile',
            xtype: 'textarea',
            fieldLabel: '企业简介'
        }, {
            name: 'remark',
            xtype: 'textarea',
            fieldLabel: '备注'
        }]
    },
        {
            xtype: 'fieldset',
            id: 'fieldset_inner_gd_id',
            title: '企业股东信息',
            collapsible: true,
            defaults: {
                labelWidth: 90,
                width: 50
                //anchor: '100%'
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
            items: [
                {
                    xtype: 'panel',
                    border: false,
                    html: '<button type="button" onclick="corp_imgs_upload()">图片管理</button>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    html: '<button type="button" onclick="corp_gd_add()">股东管理</button>'
                }

            ]
        },
        {
        xtype: 'fieldset',
        id: 'fieldset_inner_contact_id',
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
        items: [
            {
                hidden: true,
                name: 'cont_id',
                fieldLabel: 'cont_id'
            }, {
            name: 'cont_name',
            fieldLabel: '姓名'
        }, {
            name: 'cont_edoctype',
            fieldLabel: '证件类型'
        }, {
            name: 'cont_psotion',
            fieldLabel: '职务'
        }, {
            name: 'cont_edocnum',
            fieldLabel: '证件号码'
        }, {
            name: 'cont_ephone',
            fieldLabel: '手机',
            regex: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
            regexText: '请输入正确的手机号'
        }, {
            name: 'cont_efax',
            fieldLabel: '传真',
            regex: /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/,
            regexText: '请输入正确的传真'
        }, {
            name: 'cont_eemail',
            fieldLabel: 'E-mail',
            regex: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            regexText: '请输入正确的E-mail'
        }, {
            name: 'cont_eqq',
            fieldLabel: 'QQ',
            regex: /^\d{5,10}$/,
            regexText: '请输入正确的QQ'
        }, {
            name: 'cont_webchat',
            fieldLabel: '微信号'
        }, {
            name: 'cont_tel',
            fieldLabel: '固话',
            regex: /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/,
            regexText: '请输入正确的固话'
        }, {
            name: 'cont_bz',
            xtype: 'textarea',
            fieldLabel: '备注'
        }]
    },
        {
        xtype: 'fieldset',
        id: 'fieldset_inner_ind_id',
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
        items: [
            {
                id: 'indclass1_id',
                xtype: 'combobox',
                name: 'indclass1',
                fieldLabel: '行业一级分类',
                allowBlank: false,
                store: {
                    type: 'industry1store'
                },
                autoRender: true,
                autoShow: true,
                displayField: 'name',
                valueField: 'id',
                listConfig: {
                    getInnerTpl: function () {
                        return '<div><span style="color: green;">' + '({name})</span></div>'
                    }
                },
                listeners: {
                    select: function (combo, record, index) {
                        try {
                            var indclass2 = Ext.getCmp('indclass2_id');
                            indclass2.clearValue();
                            indclass2.store.load(
                                {
                                    params: {
                                        parentid: Ext.getCmp('indclass1_id').getValue("id")
                                    }
                                }
                            );
                        } catch (ex) {
                            alert("数据加载失败！");
                        }
                    }
                }
            },
            {
                id: 'indclass2_id',
                name: 'indclass2',
                fieldLabel: '行业二级分类',
                xtype: 'combobox',
                allowBlank: false,
                store: {
                    type: 'industry2store'
                },
                autoRender: true,
                autoShow: true,
                displayField: 'name',
                valueField: 'id',
                listConfig: {
                    getInnerTpl: function () {
                        return '<div><span style="color: green;">' + '({name})</span></div>'
                    }
                },
                listeners: {
                    select: function (combo, record, index) {
                        try {
                            var indclass3 = Ext.getCmp('indclass3_id');
                            indclass3.clearValue();
                            indclass3.store.load(
                                {
                                    params: {
                                        parentid: Ext.getCmp('indclass2_id').getValue("id")
                                    }
                                }
                            );
                        } catch (ex) {
                            alert("数据加载失败！");
                        }
                    }
                }
            }, {
                id: 'indclass3_id',
                name: 'indclass3',
                fieldLabel: '行业三级分类',
                xtype: 'combobox',
                allowBlank: false,
                store: {
                    type: 'industry2store'
                },
                autoRender: true,
                autoShow: true,
                displayField: 'name',
                valueField: 'id',
                listConfig: {
                    getInnerTpl: function () {
                        return '<div><span style="color: green;">' + '({name})</span></div>'
                    }
                },
                listeners: {
                    select: function (combo, record, index) {
                        try {
                            var indclass4 = Ext.getCmp('indclass4_id');
                            indclass4.clearValue();
                            indclass4.store.load(
                                {
                                    params: {
                                        parentid: Ext.getCmp('indclass3_id').getValue("id")
                                    }
                                }
                            );
                        } catch (ex) {
                            alert("数据加载失败！");
                        }
                    }
                }
            }, {
                id: 'indclass4_id',
                name: 'indclass4',
                fieldLabel: '行业四级分类',
                xtype: 'combobox',
                allowBlank: false,
                store: {
                    type: 'industry2store'
                },
                autoRender: true,
                autoShow: true,
                displayField: 'name',
                valueField: 'id',
                listConfig: {
                    getInnerTpl: function () {
                        return '<div><span style="color: green;">' + '({name})</span></div>'
                    }
                }
            }]
    },
        {
        xtype: 'fieldset',
        id: 'fieldset_inner_csrc_id',
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
            id: 'csrc_type1_id',
            name: 'csrc_type1',
            fieldLabel: '证监会行业一级分类',
            xtype: 'combobox',
            allowBlank: false,
            store: {
                type: 'industry1store'
            },
            autoRender: true,
            autoShow: true,
            displayField: 'name',
            valueField: 'id',
            listConfig: {
                getInnerTpl: function () {
                    return '<div><span style="color: green;">' + '({name})</span></div>'
                }
            },
            listeners: {
                select: function (combo, record, index) {
                    try {
                        var csrc_type2 = Ext.getCmp('csrc_type2_id');
                        csrc_type2.clearValue();
                        csrc_type2.store.load(
                            {
                                params: {
                                    parentid: Ext.getCmp('csrc_type1_id').getValue("id")
                                }
                            }
                        );
                    } catch (ex) {
                        alert("数据加载失败！");
                    }
                }
            }
        },
            {
                id: 'csrc_type2_id',
                name: 'csrc_type2',
                fieldLabel: '证监会行业二级分类',
                xtype: 'combobox',
                allowBlank: false,
                store: {
                    type: 'industry2store'
                },
                autoRender: true,
                autoShow: true,
                displayField: 'name',
                valueField: 'id',
                listConfig: {
                    getInnerTpl: function () {
                        return '<div><span style="color: green;">' + '({name})</span></div>'
                    }
                }
            }

        ]
    },
        {
        xtype: 'fieldset',
        id: 'fieldset_inner_mai_id',
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
            hidden: true,
            name: 'mai_id',
            fieldLabel: 'mai_id'
        },{
            name: 'mai_changer_dt',
            xtype: 'datefield',
            format: 'Y-m-d',
            fieldLabel: '更新日期'
        }, {
            name: 'mai_recomdt',
            xtype: 'datefield',
            format: 'Y-m-d',
            fieldLabel: '推荐日期'
        }, {
            name: 'mai_trusteeship',
            fieldLabel: '托管状态'
        }, {
            name: 'mai_listst',
            fieldLabel: '挂牌状态'
        }, {
            name: 'mai_eclass',
            fieldLabel: '企业等级'
        }, {
            name: 'mai_maintain',
            fieldLabel: '企业维护状态'
        }, {
            name: 'mai_reserve',
            fieldLabel: '所属后备库'
        }, {
            name: 'mai_emaint',
            fieldLabel: '企业接待人'
        }, {
            name: 'mai_dept',
            fieldLabel: '部门'
        }, {
            name: 'mai_post',
            fieldLabel: '职务'
        }, {
            name: 'mai_tel',
            fieldLabel: '固定电话',
            regex: /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/,
            regexText: '请输入正确的固话'
        }, {
            name: 'mai_phone',
            fieldLabel: '手机号码',
            regex: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
            regexText: '请输入正确的手机号'
        }, {
            name: 'mai_fax',
            fieldLabel: '传真',
            regex: /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/,
            regexText: '请输入正确的传真'
        }, {
            name: 'mai_email',
            fieldLabel: 'E-mail',
            regex: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            regexText: '请输入正确的E-mail'
        }, {
            name: 'mai_qq',
            fieldLabel: 'QQ',
            regex: /^\d{5,10}$/,
            regexText: '请输入正确的QQ'
        }, {
            name: 'mai_webchat',
            fieldLabel: '微信号'
        }, {
            name: 'mai_bz',
            xtype: 'textarea',
            fieldLabel: '备注'
        }]
    },
        {
        xtype: 'fieldset',
        id: 'fieldset_inner_fin_id',
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
            hidden: true,
            name: 'finid',
            fieldLabel: 'finid'
        },
            {
                name: 'start_time',
                xtype: 'datefield',
                format: 'Y-m-d',
                fieldLabel: '时间始',
                colspan: 3
            }, {
                name: 'end_time',
                xtype: 'datefield',
                format: 'Y-m-d',
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
            }, {
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
                xtype: 'numberfield',
                name: 'st_money_fund'
            }, {
                xtype: 'numberfield',
                name: 'end_money_fund'
            }, {
                xtype: 'displayfield',
                value: '短期借款'
            }, {
                xtype: 'numberfield',
                name: 'st_short_borrow'
            }, {
                xtype: 'numberfield',
                name: 'end_short_borrow'
            }, {
                xtype: 'displayfield',
                value: '交易性金融资产'
            }, {
                xtype: 'numberfield',
                name: 'st_jyxjr_assets'

            }, {
                xtype: 'numberfield',
                name: 'end_jyxjr_assets'
            }, {
                xtype: 'displayfield',
                value: '交易性金融负债'
            }, {
                xtype: 'numberfield',
                name: 'st_jyx_finance_fz'
            }, {
                xtype: 'numberfield',
                name: 'end_jyx_finance_fz'
            }, {
                xtype: 'displayfield',
                value: '应收票据'
            }, {
                xtype: 'numberfield',
                name: 'st_ys_bill'
            }, {
                xtype: 'numberfield',
                name: 'end_ys_bill'
            }, {
                xtype: 'displayfield',
                value: '应付票据'
            }, {
                xtype: 'numberfield',
                name: 'st_yf_bill'
            }, {
                xtype: 'numberfield',
                name: 'end_yf_bill'
            }, {
                xtype: 'displayfield',
                value: '应收账款'
            }, {
                xtype: 'numberfield',
                name: 'st_ys_account'
            }, {
                xtype: 'numberfield',
                name: 'end_ys_account'
            }, {
                xtype: 'displayfield',
                value: '应付账款'
            }, {
                xtype: 'numberfield',
                name: 'st_yf_account'
            }, {
                xtype: 'numberfield',
                name: 'end_yf_account'
            }, {
                xtype: 'displayfield',
                value: '预付款项'
            }, {
                xtype: 'numberfield',
                name: 'st_yf_money'
            }, {
                xtype: 'numberfield',
                name: 'end_yf_money'
            }, {
                xtype: 'displayfield',
                value: '预收款项'
            }, {
                xtype: 'numberfield',
                name: 'st_ys_money'
            }, {
                xtype: 'numberfield',
                name: 'end_ys_money'
            }, {
                xtype: 'displayfield',
                value: '应收利息'
            }, {
                xtype: 'numberfield',
                name: 'st_ys_interest'
            }, {
                xtype: 'numberfield',
                name: 'end_ys_interest'
            }, {
                xtype: 'displayfield',
                value: '应付职工薪酬'
            }, {
                xtype: 'numberfield',
                name: 'st_yf_staff_pay'
            }, {
                xtype: 'numberfield',
                name: 'end_yf_staff_pay'
            }, {
                xtype: 'displayfield',
                value: '应收股利'
            }, {
                xtype: 'numberfield',
                name: 'st_ys_dividends'
            }, {
                xtype: 'numberfield',
                name: 'end_ys_dividends'
            }, {
                xtype: 'displayfield',
                value: '应缴税费'
            }, {
                xtype: 'numberfield',
                name: 'st_yj_tax'
            }, {
                xtype: 'numberfield',
                name: 'end_yj_tax'
            }, {
                xtype: 'displayfield',
                value: '其他应收款'
            }, {
                xtype: 'numberfield',
                name: 'st_other_ys_money'
            }, {
                xtype: 'numberfield',
                name: 'end_other_ys_money'
            }, {
                xtype: 'displayfield',
                value: '应付利息'
            }, {
                xtype: 'numberfield',
                name: 'st_yf_interest'
            }, {
                xtype: 'numberfield',
                name: 'end_yf_interest'
            }, {
                xtype: 'displayfield',
                value: '存货'
            }, {
                xtype: 'numberfield',
                name: 'st_inventory'
            }, {
                xtype: 'numberfield',
                name: 'end_inventory'
            }, {
                xtype: 'displayfield',
                value: '应付股利'
            }, {
                xtype: 'numberfield',
                name: 'st_yf_dividends'
            }, {
                xtype: 'numberfield',
                name: 'end_yf_dividends'
            }, {
                xtype: 'displayfield',
                value: '一年内非到期流动资产'
            }, {
                xtype: 'numberfield'
            }, {
                xtype: 'numberfield'
            }, {
                xtype: 'displayfield',
                value: '一年内到期非流动负债'
            }, {
                xtype: 'numberfield',
                name: 'st_ynndq_no_assets'
            }, {
                xtype: 'numberfield',
                name: 'end_ynndq_no_assets'
            }, {
                xtype: 'displayfield',
                value: '其他流动资产'
            }, {
                xtype: 'numberfield',
                name: 'st_other_assets'
            }, {
                xtype: 'numberfield',
                name: 'end_other_assets'
            }, {
                xtype: 'displayfield',
                value: '其他应付款'
            }, {
                xtype: 'numberfield',
                name: 'st_other_yf_money'
            }, {
                xtype: 'numberfield',
                name: 'end_other_yf_money'
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
                xtype: 'numberfield',
                name: 'st_other_fz'
            }, {
                xtype: 'numberfield',
                name: 'end_other_fz'
            }, {
                xtype: 'displayfield',
                value: '流动资产合计'
            }, {
                xtype: 'numberfield',
                name: 'st_hj_assets'
            }, {
                xtype: 'numberfield',
                name: 'end_hj_assets'
            }, {
                xtype: 'displayfield',
                value: '流动负债合计'
            }, {
                xtype: 'numberfield',
                name: 'st_hj_fz'
            }, {
                xtype: 'numberfield',
                name: 'end_hj_fz'

            }, {
                xtype: 'displayfield',
                value: '非流动资产：',
                colspan: 3
            }, {
                xtype: 'displayfield',
                value: '非流动负债：',
                colspan: 3
            }, {
                xtype: 'displayfield',
                value: '可供出售金融资产'
            }, {
                xtype: 'numberfield',
                name: 'st_kgcs_assets'
            }, {
                xtype: 'numberfield',
                name: 'end_kgcs_assets'
            }, {
                xtype: 'displayfield',
                value: '长期借款'
            }, {
                xtype: 'numberfield',
                name: 'st_long_borrow'
            }, {
                xtype: 'numberfield',
                name: 'end_long_borrow'
            }, {
                xtype: 'displayfield',
                value: '持有至到期投资'
            }, {
                xtype: 'numberfield',
                name: 'st_cyzdq_investment'
            }, {
                xtype: 'numberfield',
                name: 'end_cyzdq_investment'
            }, {
                xtype: 'displayfield',
                value: '应付债券'
            }, {
                xtype: 'numberfield',
                name: 'st_yf_bond'
            }, {
                xtype: 'numberfield',
                name: 'end_yf_bond'
            }, {
                xtype: 'displayfield',
                value: '长期应收款'
            }, {
                xtype: 'numberfield',
                name: 'st_long_ys_money'
            }, {
                xtype: 'numberfield',
                name: 'end_long_ys_money'
            }, {
                xtype: 'displayfield',
                value: '长期应付款'
            }, {
                xtype: 'numberfield',
                name: 'st_long_yf_money'
            }, {
                xtype: 'numberfield',
                name: 'end_long_yf_money'
            }, {
                xtype: 'displayfield',
                value: '长期股权投资'
            }, {
                xtype: 'numberfield',
                name: 'st_long_gq_investment'
            }, {
                xtype: 'numberfield',
                name: 'end_long_gq_investment'
            }, {
                xtype: 'displayfield',
                value: '专项应付款'
            }, {
                xtype: 'numberfield',
                name: 'st_zx_yf_money'
            }, {
                xtype: 'numberfield',
                name: 'end_zx_yf_money'
            }, {
                xtype: 'displayfield',
                value: '投资性房地产'
            }, {
                xtype: 'numberfield',
                name: 'st_invest_house'
            }, {
                xtype: 'numberfield',
                name: 'end_invest_house'
            }, {
                xtype: 'displayfield',
                value: '预计负债'
            }, {
                xtype: 'numberfield',
                name: 'st_yj_fz'
            }, {
                xtype: 'numberfield',
                name: 'end_yj_fz'
            }, {
                xtype: 'displayfield',
                value: '固定资产'
            }, {
                xtype: 'numberfield',
                name: 'st_gd_assets'
            }, {
                xtype: 'numberfield',
                name: 'end_gd_assets'
            }, {
                xtype: 'displayfield',
                value: '递延所得税负债'
            }, {
                xtype: 'numberfield',
                name: 'st_dysds_fz'
            }, {
                xtype: 'numberfield',
                name: 'end_dysds_fz'
            }, {
                xtype: 'displayfield',
                value: '减：累计折旧'
            }, {
                xtype: 'numberfield',
                name: 'st_accu_deprec'
            }, {
                xtype: 'numberfield',
                name: 'end_accu_deprec'
            }, {
                xtype: 'displayfield',
                value: '其他非流动负债'
            }, {
                xtype: 'numberfield',
                name: 'st_other_no_fz'
            }, {
                xtype: 'numberfield',
                name: 'end_other_no_fz'
            }, {
                xtype: 'displayfield',
                value: '固定资产净值'
            }, {
                xtype: 'numberfield',
                name: 'st_gd_assets_jz'
            }, {
                xtype: 'numberfield',
                name: 'end_gd_assets_jz'
            }, {
                xtype: 'displayfield',
                value: '非流动负债合计'
            }, {
                xtype: 'numberfield',
                name: 'st_hj_no_fz'
            }, {
                xtype: 'numberfield',
                name: 'end_hj_no_fz'
            }, {
                xtype: 'displayfield',
                value: '减：固定资产减值准备'
            }, {
                xtype: 'numberfield',
                name: 'st_gd_assets_ready'
            }, {
                xtype: 'numberfield',
                name: 'end_gd_assets_ready'
            }, {
                xtype: 'displayfield',
                value: '负债合计'
            }, {
                xtype: 'numberfield',
                name: 'st_hj_total_fz'
            }, {
                xtype: 'numberfield',
                name: 'end_hj_total_fz'
            }, {
                xtype: 'displayfield',
                value: '固定资产净额'
            }, {
                xtype: 'numberfield',
                name: 'st_gd_assets_je'
            }, {
                xtype: 'numberfield',
                name: 'end_gd_assets_je'
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
                value: '在建工程'
            }, {
                xtype: 'numberfield',
                name: 'st_now_project'
            }, {
                xtype: 'numberfield',
                name: 'end_now_project'
            }, {
                xtype: 'displayfield',
                value: '所有者权益(或股东权益)'
            }, {
                xtype: 'numberfield',
                name: 'st_paid_assets'
            }, {
                xtype: 'numberfield',
                name: 'end_paid_assets'
            }, {
                xtype: 'displayfield',
                value: '工程物资'
            }, {
                xtype: 'numberfield',
                name: 'st_project_material'
            }, {
                xtype: 'numberfield',
                name: 'end_project_material'
            }, {
                xtype: 'displayfield',
                value: '实收资本(或股本)'
            }, {
                xtype: 'numberfield',
                name: 'st_zb_reserve'
            }, {
                xtype: 'numberfield',
                name: 'end_zb_reserve'
            }, {
                xtype: 'displayfield',
                value: '固定资产清理'
            }, {
                xtype: 'numberfield',
                name: 'st_gd_assets_ql'
            }, {
                xtype: 'numberfield',
                name: 'end_gd_assets_ql'
            }, {
                xtype: 'displayfield',
                value: '资本公积'
            }, {
                xtype: 'numberfield',
                name: 'st_zb_reserve'
            }, {
                xtype: 'numberfield',
                name: 'end_zb_reserve'
            }, {
                xtype: 'displayfield',
                value: '生产性生物资产'
            }, {
                xtype: 'numberfield',
                name: 'st_scx_investment'
            }, {
                xtype: 'numberfield',
                name: 'end_scx_investment'
            }, {
                xtype: 'displayfield',
                value: '减：库存股'
            }, {
                xtype: 'numberfield',
                name: 'st_kc_stock'
            }, {
                xtype: 'numberfield',
                name: 'end_kc_stock'
            }, {
                xtype: 'displayfield',
                value: '无形资产'
            }, {
                xtype: 'numberfield',
                name: 'st_wx_assets'
            }, {
                xtype: 'numberfield',
                name: 'end_wx_assets'
            }, {
                xtype: 'displayfield',
                value: '专项储备'
            }, {
                xtype: 'numberfield',
                name: 'st_zx_reserve'
            }, {
                xtype: 'numberfield',
                name: 'end_zx_reserve'
            }, {
                xtype: 'displayfield',
                value: '商誉'
            }, {
                xtype: 'numberfield',
                name: 'st_goodwill'
            }, {
                xtype: 'numberfield',
                name: 'end_goodwill'
            }, {
                xtype: 'displayfield',
                value: '盈余公积'
            }, {
                xtype: 'numberfield',
                name: 'st_yy_reserve'
            }, {
                xtype: 'numberfield',
                name: 'end_yy_reserve'
            }, {
                xtype: 'displayfield',
                value: '长期待摊费用'
            }, {
                xtype: 'numberfield',
                name: 'st_cqdt_cost'
            }, {
                xtype: 'numberfield',
                name: 'end_cqdt_cost'
            }, {
                xtype: 'displayfield',
                value: '未分配利润'
            }, {
                xtype: 'numberfield',
                name: 'st_wfp_profit'
            }, {
                xtype: 'numberfield',
                name: 'end_wfp_profit'
            }, {
                xtype: 'displayfield',
                value: '递延所得税资产'
            }, {
                xtype: 'numberfield',
                name: 'st_dysds_assets'
            }, {
                xtype: 'numberfield',
                name: 'end_dysds_assets'
            }, {
                xtype: 'displayfield',
                value: '所有者权益合计'
            }, {
                xtype: 'numberfield',
                name: 'st_hj_owner_right'
            }, {
                xtype: 'numberfield',
                name: 'end_hj_owner_right'
            }, {
                xtype: 'displayfield',
                value: '其他非流动资产'
            }, {
                xtype: 'numberfield',
                name: 'st_other_no_assets'
            }, {
                xtype: 'numberfield',
                name: 'end_other_no_assets'
            }, {
                xtype: 'displayfield',
                value: '',
                colspan: 3
            }, {
                xtype: 'displayfield',
                value: '非流动资产合计'
            }, {
                xtype: 'numberfield',
                name: 'st_hj_no_asset'
            }, {
                xtype: 'numberfield',
                name: 'end_hj_no_asset'
            }, {
                xtype: 'displayfield',
                value: '',
                colspan: 3
            }, {
                xtype: 'displayfield',
                value: '资产总计'
            }, {
                xtype: 'numberfield',
                name: 'st_hj_total_asset'
            }, {
                xtype: 'numberfield',
                name: 'end_hj_total_asset'
            }, {
                xtype: 'displayfield',
                value: '负债和所有者权益合计'
            }, {
                xtype: 'numberfield',
                name: 'st_hj_fz_owner_right'
            }, {
                xtype: 'numberfield',
                name: 'end_hj_fz_owner_right'
            }]
    }, {
        xtype: 'fieldset',
        id: 'fieldset_inner_service_id',
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
            hidden: true,
            name: 'srv_id',
            fieldLabel: 'srv_id'
        },{
            name: 'srv_name',
            fieldLabel: '服务机构名称'
        }, {
            name: 'srv_type',
            fieldLabel: '服务机构类别'
        }, {
            name: 'srv_content',
            fieldLabel: '业务内容'
        }, {
            name: 'srv_levels',
            fieldLabel: '级别'
        }, {
            name: 'srv_penalty',
            fieldLabel: '惩罚记录'
        }, {
            name: 'srv_domain',
            fieldLabel: '专属领域'
        }, {
            name: 'srv_examiner',
            fieldLabel: '专申委员'
        }, {
            name: 'srv_post',
            fieldLabel: '兼任职务'
        }, {
            name: 'srv_descs',
            xtype: 'textarea',
            fieldLabel: '简介'
        }, {
            name: 'srv_remark',
            xtype: 'textarea',
            fieldLabel: '备注'
        }]
    }, {
        xtype: 'fieldset',
        id: 'fieldset_inner_investor_id',
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
            hidden: true,
            name: 'inv_id',
            fieldLabel: 'inv_id'
        },{
            name: 'inv_domain',
            fieldLabel: '投资领域',
            colspan: 2
        },
            {
                id: 'inv_csrc_type1_id',
                name: 'inv_csrc_type1',
                fieldLabel: '行业一级分类',
                xtype: 'combobox',
                allowBlank: false,
                store: {
                    type: 'industry1store'
                },
                autoRender: true,
                autoShow: true,
                displayField: 'name',
                valueField: 'id',
                listConfig: {
                    getInnerTpl: function () {
                        return '<div><span style="color: green;">' + '({name})</span></div>'
                    }
                },
                listeners: {
                select: function (combo, record, index) {
                    try {
                        var inv_csrc_type2 = Ext.getCmp('inv_csrc_type2_id');
                        inv_csrc_type2.clearValue();
                        inv_csrc_type2.store.load(
                            {
                                params: {
                                    parentid: Ext.getCmp('inv_csrc_type1_id').getValue("id")
                                }
                            }
                        );
                    } catch (ex) {
                        alert("数据加载失败！");
                    }
                }
            }
            },
            {
                id: 'inv_csrc_type2_id',
                name: 'inv_csrc_type2',
                fieldLabel: '行业二级分类',
                xtype: 'combobox',
                allowBlank: false,
                store: {
                    type: 'industry2store'
                },
                autoRender: true,
                autoShow: true,
                displayField: 'name',
                valueField: 'name',
                listConfig: {
                    getInnerTpl: function () {
                        return '<div><span style="color: green;">' + '({name})</span></div>'
                    }
                },
                listeners: {
                    select: function (combo, record, index) {
                        try {
                            var inv_csrc_type3 = Ext.getCmp('inv_csrc_type3_id');
                            inv_csrc_type3.clearValue();
                            inv_csrc_type3.store.load(
                                {
                                    params: {
                                        parentid: Ext.getCmp('inv_csrc_type2_id').getValue("id")
                                    }
                                }
                            );
                        } catch (ex) {
                            alert("数据加载失败！");
                        }
                    }
                }
            }, {
                id: 'inv_csrc_type3_id',
                name: 'inv_csrc_type3',
                fieldLabel: '行业三级分类',
                xtype: 'combobox',
                allowBlank: false,
                store: {
                    type: 'industry2store'
                },
                autoRender: true,
                autoShow: true,
                displayField: 'name',
                valueField: 'id',
                listConfig: {
                    getInnerTpl: function () {
                        return '<div><span style="color: green;">' + '({name})</span></div>'
                    }
                },
                listeners: {
                    select: function (combo, record, index) {
                        try {
                            var inv_csrc_type4 = Ext.getCmp('inv_csrc_type4_id');
                            inv_csrc_type4.clearValue();
                            inv_csrc_type4.store.load(
                                {
                                    params: {
                                        parentid: Ext.getCmp('inv_csrc_type3_id').getValue("id")
                                    }
                                }
                            );
                        } catch (ex) {
                            alert("数据加载失败！");
                        }
                    }
                }
            }, {
                id: 'inv_csrc_type4_id',
                name: 'inv_csrc_type4',
                fieldLabel: '行业四级分类',
                xtype: 'combobox',
                allowBlank: false,
                store: {
                    type: 'industry2store'
                },
                autoRender: true,
                autoShow: true,
                displayField: 'name',
                valueField: 'id',
                listConfig: {
                    getInnerTpl: function () {
                        return '<div><span style="color: green;">' + '({name})</span></div>'
                    }
                }
            }, {
                id: 'inv_indclass1_id',
                name: 'inv_indclass1',
                fieldLabel: '证监会行业一级分类',
                xtype: 'combobox',
                allowBlank: false,
                store: {
                    type: 'industry1store'
                },
                autoRender: true,
                autoShow: true,
                displayField: 'name',
                valueField: 'id',
                listConfig: {
                    getInnerTpl: function () {
                        return '<div><span style="color: green;">' + '({name})</span></div>'
                    }
                },
                listeners: {
                    select: function (combo, record, index) {
                        try {
                            var inv_indclass2 = Ext.getCmp('inv_indclass2_id');
                            inv_indclass2.clearValue();
                            inv_indclass2.store.load(
                                {
                                    params: {
                                        parentid: Ext.getCmp('inv_indclass1_id').getValue("id")
                                    }
                                }
                            );
                        } catch (ex) {
                            alert("数据加载失败！");
                        }
                    }
                }
            }, {
                id: 'inv_indclass2_id',
                name: 'inv_indclass2',
                fieldLabel: '证监会行业二类分类',
                xtype: 'combobox',
                allowBlank: false,
                store: {
                    type: 'industry2store'
                },
                autoRender: true,
                autoShow: true,
                displayField: 'name',
                valueField: 'id',
                listConfig: {
                    getInnerTpl: function () {
                        return '<div><span style="color: green;">' + '({name})</span></div>'
                    }
                }
            }, {
                name: 'inv_contact',
                fieldLabel: '姓名'
            }, {
                name: 'inv_doctype',
                fieldLabel: '证件类型'
            }, {
                name: 'inv_psotion',
                fieldLabel: '职务'
            }, {
                name: 'inv_docnum',
                fieldLabel: '证件号码'
            }, {
                name: 'inv_phone',
                fieldLabel: '手机',
                regex: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
                regexText: '请输入正确的手机号'
            }, {
                name: 'inv_fax',
                fieldLabel: '传真',
                regex: /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/,
                regexText: '请输入正确的传真'
            }, {
                name: 'inv_email',
                fieldLabel: 'E-mail',
                regex: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                regexText: '请输入正确的E-mail'
            }, {
                name: 'inv_qq',
                fieldLabel: 'QQ',
                regex: /^\d{5,10}$/,
                regexText: '请输入正确的QQ'
            }, {
                name: 'inv_webchat',
                fieldLabel: '微信号'
            }, {
                name: 'inv_tel',
                fieldLabel: '固话',
                regex: /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/,
                regexText: '请输入正确的固话'
            }, {
                name: 'inv_remark',
                xtype: 'textarea',
                fieldLabel: '备注',
                colspan: 2
            }]
    }, {
        xtype: 'fieldset',
        id: 'fieldset_inner_gov_id',
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
            hidden: true,
            name: 'gov_id',
            fieldLabel: 'gov_id'
        },{
            name: 'gov_domain',
            fieldLabel: '单位名称'
        }, {
            name: 'gov_office',
            fieldLabel: '处/室'
        }, {
            name: 'gov_desc',
            xtype: 'textarea',
            fieldLabel: '职能介绍',
            colspan: 2
        }, {
            name: 'gov_contact',
            fieldLabel: '姓名'
        }, {
            name: 'gov_doctype',
            fieldLabel: '证件类型'
        }, {
            name: 'gov_psotion',
            fieldLabel: '职务'
        }, {
            name: 'gov_docnum',
            fieldLabel: '证件号码'
        }, {
            name: 'gov_phone',
            fieldLabel: '手机',
            regex: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
            regexText: '请输入正确的手机号'
        }, {
            name: 'gov_fax',
            fieldLabel: '传真',
            regex: /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/,
            regexText: '请输入正确的传真'
        }, {
            name: 'gov_email',
            fieldLabel: 'E-mail',
            regex: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            regexText: '请输入正确的E-mail'
        }, {
            name: 'gov_qq',
            fieldLabel: 'QQ',
            regex: /^\d{5,10}$/,
            regexText: '请输入正确的QQ'
        }, {
            name: 'gov_webchat',
            fieldLabel: '微信号'
        }, {
            name: 'gov_tel',
            fieldLabel: '固话',
            regex: /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/,
            regexText: '请输入正确的固话'
        }, {
            name: 'gov_remark',
            xtype: 'textarea',
            fieldLabel: '备注'
        }]
    }, {
        xtype: 'fieldset',
        id: 'fieldset_inner_refi_id',
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
        items: [
            {
                hidden: true,
                name: 'refi_id',
                fieldLabel: 'refi_id'
            },
            {
                name: 'refi_amounts',
                fieldLabel: '融资金额'
            }, {
                name: 'refi_use',
                fieldLabel: '融资用途'
            }, {
                name: 'refi_financ',
                fieldLabel: '股份融资/债券融资'
            }, {
                name: 'refi_security',
                fieldLabel: '偿付保障'
            }, {
                name: 'refi_acc_cost',
                fieldLabel: '可接受成本(%/年)'
            }, {
                name: 'refi_deadline',
                fieldLabel: '融资期限',
                xtype: 'datefield',
                format: 'Y-m-d'
            }, {
                name: 'refi_desc',
                fieldLabel: '融资用途详细说明',
                colspan: 2
            }]
    }, {
        xtype: 'fieldset',
        id: 'fieldset_inner_retra_id',
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
        items: [
            {
                hidden: true,
                name: 'retra_id',
                fieldLabel: 'retra_id'
            },
            {
                fieldLabel: '培训方式',
                name: 'retra_mode',
                colspan: 2
            }, {

                name: 'retra_dt',
                fieldLabel: '有效时间',
                xtype: 'datefield',
                format: 'Y-m-d'
            }, {
                name: 'retra_acc_cost',
                fieldLabel: '可接受成本',
                xtype: 'numberfield'
            }, {
                name: 'retra_content',
                xtype: 'textarea',
                fieldLabel: '培训内容'
            }, {
                name: 'retra_requests',
                xtype: 'textarea',
                fieldLabel: '详细要求'
            }]

    }, {
        xtype: 'fieldset',
        id: 'fieldset_inner_rehr_id',
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
        items: [
            {
                hidden: true,
                name: 'rehr_id',
                fieldLabel: 'rehr_id'
            },
            {
            name: 'rehr_post',
            fieldLabel: '需求职位'
        }, {
            name: 'rehr_num',
            fieldLabel: '职位人数'
        }, {
            name: 'rehr_salary',
            fieldLabel: '职位薪金',
            xtype: 'numberfield'
        }, {
            name: 'rehr_sex_req',
            fieldLabel: '性别要求'
        }, {
            name: 'rehr_age_req',
            fieldLabel: '年龄要求'
        }, {
            name: 'rehr_requests',
            fieldLabel: '经验要求'
        }]
    }]
})
