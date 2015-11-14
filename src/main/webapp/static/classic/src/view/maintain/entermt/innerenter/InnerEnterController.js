/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.maintain.entermt.innerenter.InnerEnterController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.innerentercontroller',
    requires: [
        'app.xtemplate.corp_edit',
        'app.model.corpall.ShareHolder',
        'app.view.maintain.entermt.innerenter.InnerEnterImgGridView',
        'app.view.maintain.entermt.innerenter.InnerEnterGdGridView',
        'app.view.maintain.entermt.innerenter.InnerEnterAddCorp'

    ],

    itemdblclick: function (view, record) {
        //var mypanel = Ext.create('Ext.panel.Panel', {
        //    id: "mypanel",
        //    width: 820,
        //    frame: false,
        //    height: 600,
        //    border: false,
        //    bodyStyle: 'overflow-x:hidden; overflow-y:scroll',
        //    listeners: {
        //        afterrender: function () {
        //            corp_edit_con_tpl.append('corp_edit', record.data);
        //
        //            //查询股东信息
        //            var sh_store = Ext.create('Ext.data.Store', {
        //                extend: 'Ext.data.Store',
        //                model: 'app.model.corpall.ShareHolder',
        //                alias: 'store.shareholder',
        //                proxy: {
        //                    type: 'ajax',
        //                    actionMethods: {
        //                        read: 'POST'
        //                    },
        //                    api: {
        //                        read: '/bolong/shareholder_list'
        //                    },
        //                    reader: {
        //                        type: 'json',
        //                        rootProperty: 'list'
        //                    }
        //                }
        //            });
        //
        //            sh_store.load({
        //                params: {
        //                    corp_id: record.data.id
        //                },
        //                callback: function (records, operation, success) {
        //                    var data = [];
        //
        //                    sh_store.each(function (record) {
        //                        data.push(record.getData());
        //                    });
        //
        //                    //渲染股东信息
        //                    corp_shareholder_edit_tpl.append('shareholder_edit', data);
        //                }
        //            });
        //
        //            corp_edit_other_tpl.append('corp_edit_other', record.data);
        //        }
        //    },
        //    autoScroll: true,
        //    layout: {
        //        type: 'vbox',
        //        align: 'stretch',
        //        pack: 'start'
        //    },
        //    items: [{
        //        xtype: 'panel',
        //        border: false,
        //        id: 'corp_edit_panel',
        //        html: '<div id="corp_edit"></div>'
        //    }, {
        //        xtype: 'panel',
        //        id: 'shareholder_panel_id',
        //        border: false,
        //        height: 360,
        //        html: '<div id="shareholder_edit"></div>'
        //    }, {
        //        xtype: 'panel',
        //        border: false,
        //        html: '<div id="corp_edit_other"></div>'
        //    }, {
        //        xtype: 'panel',
        //        border: false,
        //        id: 'corp_edit_corp_panel',
        //        html: '<div id="enter_menu_list" style="position: fixed; top: 7em; right: 6em;">' +
        //        '<ul>' +
        //        '<li><a href="#table_corp_base" style="font-size:18px;">基本信息</a></li>' +
        //        '<li><a href="#table_corp_sh"  style="font-size:18px;">股东名册</a></li>' +
        //        '<li><a href="#table_corp_link"  style="font-size:18px;">法定代表人</a></li>' +
        //        '<li><a href="#table_corp_acount"  style="font-size:18px;">行业分类</a></li>' +
        //        '<li><a href="#table_corp_csrc_type"  style="font-size:18px;">证监会行业分类</a></li>' +
        //        '<li><a href="#table_corp_ocompay"  style="font-size:18px;">企业维护信息</a></li>' +
        //        '<li><a href="#table_corp_assets_finance"  style="font-size:18px;">企业财务信息</a></li>' +
        //        '<li><a href="#table_corp_service"  style="font-size:18px;">服务机构</a></li>' +
        //        '<li><a href="#table_corp_investors"  style="font-size:18px;">投资人</a></li>' +
        //        '<li><a href="#table_corp_govermt"  style="font-size:18px;">政府部门</a></li>' +
        //        '<li><a href="#table_corp_demand_rz"  style="font-size:18px;">融资需求</a></li>' +
        //        '<li><a href="#table_corp_demand_px"  style="font-size:18px;">培训需求</a></li>' +
        //        '<li><a href="#table_corp_demand_rl"  style="font-size:18px;">人力资源需求</a></li>' +
        //        '<li><a href="#" class="win_save_btn" onclick="save_corp_edit({id})">保存</a></li>' +
        //        '<li><a href="#" class="win_save_btn" onclick="win_close_edit()">关闭</a></li>' +
        //        '</ul>' +
        //        '</div>'
        //    }]
        //});
        //
        //Ext.create('Ext.window.Window', {
        //    layout: 'fit',
        //    id: 'enterprise_edit_id',
        //    width: 830,
        //    height: 650,
        //    modal: true,
        //    title: '企业信息',
        //    maximized: true,
        //    autoDestroy: true,
        //    closeAction: 'destroy',
        //    items: [mypanel]
        //}).show();


        Ext.create('Ext.window.Window', {
            title: '修改企业信息',
            height: 700,
            width: 1200,
            modal: true,
            closeAction: 'destroy',
            autoDestroy: true,
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'stretch'
            },
            items: [{
                xtype: 'innerenteraddcorp'
            }, {
                html: '<ul class="menu_list">' +
                '<li><a href="#" id="edit_corp_base_id">基本信息</a></li>' +
                '<li><a href="#" id="edit_corp_contact_id">法定代表人</a></li>' +
                '<li><a href="#" id="edit_corp_ind_id">国民经济行业分类</a></li>' +
                '<li><a href="#" id="edit_corp_csrc_id">证监会行业分类</a></li>' +
                '<li><a href="#" id="edit_corp_mai_id">企业维护信息</a></li>' +
                '<li><a href="#" id="edit_corp_fin_id">企业财务信息</a></li>' +
                '<li><a href="#" id="edit_corp_service_id">服务机构信息</a></li>' +
                '<li><a href="#" id="edit_corp_investor_id">投资人信息</a></li>' +
                '<li><a href="#" id="edit_corp_gov_id">政府部门信息</a></li>' +
                '<li><a href="#" id="edit_corp_refi_id">融资需求</a></li>' +
                '<li><a href="#" id="edit_corp_retra_id">培训需求</a></li>' +
                '<li><a href="#" id="edit_corp_rehr_id">人力资源需求</a></li>' +
                '</ul>',
                flex: 1
            }],
            buttonAlign: 'center',
            buttons: [{
                text: '保存',
                handler: function () {
                    var form = Ext.getCmp('inner_corp_edit_form_id').getForm();
                    if (form.isValid()) {
                        form.submit({
                            url: '/bolong/update_corp_form',
                            waitMsg: '正在保存数据...',
                            success: function (form, action) {
                                Ext.Msg.alert("成功", "数据保存成功!");
                            },
                            failure: function (form, action) {
                                Ext.Msg.alert("失败", "数据保存失败!");
                            }
                        });
                    }
                }
            }, {
                text: '重置',
                handler: function () {
                    Ext.getCmp('inner_corp_edit_form_id').getForm().reset();
                }
            }]
        }).show(Ext.get('a_add_href'));

        Ext.getCmp('inner_corp_edit_form_id').getForm().loadRecord(record);
    },

    btnClick: function () {
        Ext.getCmp('innerentergridview_id').getStore().load({
            params: {
                name: Ext.getCmp('innerenter_query_name_id').getValue(),
                nos: Ext.getCmp('innerenter_query_nos_id').getValue(),
                buslicno: Ext.getCmp('innerenter_query_buslicno_id').getValue(),
                listcode: Ext.getCmp('innerenter_query_listcode_id').getValue()

            }
        });
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('innerenterqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'innerenterqueryview',
                    id: 'innerenterqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        } else {
            _this.up().up().remove(Ext.getCmp('innerenterqueryview_id'));
        }
    },


    btnFind: function () {
        Ext.getCmp('innerentergridview_id').getStore().load({
            params: {
                name: Ext.getCmp('innerenter_query_name_id').getValue(),
                nos: Ext.getCmp('innerenter_query_nos_id').getValue(),
                buslicno: Ext.getCmp('innerenter_query_buslicno_id').getValue(),
                listcode: Ext.getCmp('innerenter_query_listcode_id').getValue()

            }
        });
    },

    btnReset: function (_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('innerentergridview_id').getStore().load();
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('innerentergridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var id = row.get('id');
                        Ext.Ajax.request({
                            url: '/bolong/deletecorp',
                            params: {
                                "id": id
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('innerentergridview_id').getStore().load();
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

function win_close_edit() {
    Ext.getCmp('enterprise_edit_id').close();
}
function save_corp_edit(id) {

    var form_obt_edit = document.getElementById("apply_corp_form_edit");

    if (form_obt_edit['buslicno'].value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>营业执照号码不能为空！</span>")
        return;
    }
    if (form_obt_edit['name'].value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>企业名称不能为空！</span>")
        return;
    }
    if (form_obt_edit['unit'].value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>单位类别不能为空！</span>")
        return;
    }
    if (form_obt_edit['legrep'].value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>法定代表人不能为空！</span>")
        return;
    }
    if (form_obt_edit['nature'].value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>企业性质不能为空！</span>")
        return;
    }
    if (form_obt_edit['regcap'].value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>注册资本不能为空！</span>")
        return;
    }
    if (form_obt_edit['regdt'].value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>注册日期不能为空！</span>")
        return;
    }


    obt_corp_update(Ext.get('apply_corp_form_edit').getAttribute('data-corp-id'));
    obt_corp_contact_update(Ext.get('table_corp_link').getAttribute('data-cont-id'));
    obt_corp_shareholder_update(Ext.get('apply_corp_form_edit').getAttribute('data-corp-id'));
    obt_corp_finance_update(Ext.get('table_corp_assets_finance').getAttribute('data-fin-id'));
    obt_corp_maintain_update(Ext.get('table_corp_ocompay').getAttribute('data-mai-id'));
    obt_corp_government_update(Ext.get('type_govermt').getAttribute('data-gov-id'));
    obt_corp_investors_update(Ext.get('type_investors').getAttribute('data-inv-id'));
    obt_corp_service_update(Ext.get('type_server').getAttribute('data-srv-id'));
    obt_corp_refinancing_update(Ext.get('refi_amounts').getAttribute('data-refi-id'));
    obt_corp_retrain_update(Ext.get('retra_mode').getAttribute('data-retra-id'));
    obt_corp_rehr_update(Ext.get('rehr_post').getAttribute('data-rehr-id'));

    Ext.getCmp('innerentergridview_id').getStore().reload();
}
function buslicnoCheck(num) {
    var no_regexp = /\d{15}/;
    return no_regexp.exec(num) != null;
}
function buslicno_check_edit(id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    if (form_obt_edit['buslicno'].value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>营业执照号码不能为空！</span>");
        return;
    }
    if (document.getElementById('apply_corp_form_edit')['buslicno'].value.length != 15) {
        Ext.Msg.alert("提示", "<span style='color: red;'>营业执照号码格式不对！请重新输入！</span>");
        document.getElementById('apply_corp_form_edit')['buslicno'].value = "";
        return;
    }
    if (!buslicnoCheck(document.getElementById('apply_corp_form_edit')['buslicno'].value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>营业执照号码格式不对！请重新输入！</span>");
        document.getElementById('apply_corp_form_edit')['buslicno'].value = "";
        return;
    }


    Ext.Ajax.request({
        method: "POST",
        params: {
            buslicno: form_obt_edit['buslicno'].value,
            id: id
        },
        url: '/bolong/check_buslicno_info',
        success: function (response, opts) {
            var obj = Ext.decode(response.responseText);

            if (!obj.success) {
                Ext.Msg.alert("提示", "该营业执照号码已用！");
                document.getElementById('apply_corp_form_edit')['buslicno'].value = "";
            }
        },
        failure: function (response, opts) {
            Ext.Msg.alert("提示", "错");
        }
    });
}
function corp_imgs_upload() {
    Ext.create('widget.window', {
        title: '企业图片',
        id: 'corp_imgs_window',
        width: 800,
        height: 600,
        modal: true,
        frame: true,
        border: false,
        layout: 'border',
        listeners: {
            afterrender: function () {
                Ext.getCmp('innerenterimggridview_id').getStore().load(
                    {
                        params: {
                            corp_id: Ext.getCmp('corp_id').getValue()
                        }
                    }
                );
            }
        },
        dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'top',
                border: true,
                items: [{
                    text: '上传',
                    id: 'corp_img_update_id',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '资料上传',
                                width: 300,
                                height: 370,
                                modal: true,
                                border: false,
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'form',
                                        frame: true,
                                        bodyPadding: 16,
                                        defaults: {
                                            labelWidth: 50
                                        },
                                        items: [
                                            {
                                                xtype: 'filefield',
                                                allowBlank: false,
                                                fieldLabel: '文件',
                                                name: 'file',
                                                id: 'file',
                                                anchor: '100%',
                                                buttonText: '浏览...',
                                                buttonConfig: {
                                                    iconCls: 'upload'
                                                },
                                                listeners: {
                                                    change: function (btn, value) {
                                                        //是否是规定的图片类型
                                                        var img_reg = /\.([jJ][pP][gG])$|\.([jJ][pP][eE][gG])$|\.([gG][iI][fF])小贝$|\.([pP][nN][gG])$|\.([bB][mM][pP])$/;
                                                        if (img_reg.test(value)) {
                                                            var img = Ext.getCmp('staffavatar');
                                                            var file = btn.fileInputEl.dom.files[0];
                                                            var url = URL.createObjectURL(file);
                                                            img.setSrc(url);
                                                        } else {
                                                            Ext.Msg.alert('提示', '请选择图片类型的文件！');
                                                            Ext.getCmp('file').reset();
                                                            return;
                                                        }
                                                    }
                                                }
                                            }, {
                                                xtype: 'fieldset',
                                                //border: false,
                                                title: '图片预览',
                                                defaults: {margin: '0 0 0 10', width: 150, height: 150},
                                                items: [
                                                    {
                                                        xtype: 'image',
                                                        id: 'staffavatar',
                                                        border: 1,
                                                        src: '/bolong/static/upload/annex/per.png',
                                                        style: {
                                                            borderColor: 'blue',
                                                            borderStyle: 'solid'
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        buttonAlign: "center",
                                        buttons: [
                                            {
                                                text: '保存',
                                                iconCls: 'icon_save',
                                                handler: function () {
                                                    var form = this.up('form').getForm();
                                                    if (form.isValid()) {
                                                        form.submit({
                                                            url: '/bolong/upload_corp_img',
                                                            params: {
                                                                corp_id: Ext.getCmp('corp_id').getValue()
                                                            },
                                                            waitMsg: '正在保存数据...',
                                                            success: function (response, action) {
                                                                Ext.Msg.alert("成功", "文件上传成功!");
                                                                Ext.getCmp('innerenterimggridview_id').getStore().reload();
                                                            },
                                                            failure: function (form, action) {
                                                                Ext.Msg.alert("提示", "文件格式不正确，只能上传jpg,png格式的文件！");
                                                            }
                                                        });
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }).show(Ext.get('corp_img_update_id'));
                        }
                    }
                }]
            }
        ],
        items: [
            {
                xtype: 'innerenterimggridview',
                id: 'innerenterimggridview_id',
                margin: '1 0 0 0',
                region: 'center'
            }
        ]
    }).show(Ext.get('corp_imgs_window'));
}
function corp_gd_add() {
    Ext.create('widget.window', {
        title: '企业股东',
        id: 'corp_gd_window',
        width: 800,
        height: 600,
        modal: true,
        frame: true,
        border: false,
        layout: 'border',
        listeners: {
            afterrender: function () {
                Ext.getCmp('innerentergdgridview_id').getStore().load(
                    {
                        params: {
                            corp_id: Ext.getCmp('corp_id').getValue()
                        }
                    }
                );
            }
        },
        dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'top',
                border: true,
                items: [{
                    text: '股东管理',
                    id: 'corp_gd_add_id',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '股东管理',
                                width: 650,
                                height: 450,
                                modal: true,
                                border: false,
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'form',
                                        frame: true,
                                        bodyPadding: 16,
                                        defaults: {
                                            labelWidth: 90,
                                            xtype: 'textfield',
                                            width: 300,
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
                                                name: 'gd_shtype',
                                                fieldLabel: '股东类型'
                                            }, {
                                                name: 'gd_shname',
                                                fieldLabel: '股东'
                                            }, {
                                                name: 'gd_shdoctype',
                                                fieldLabel: '证照/证件类型'
                                            }, {
                                                name: 'gd_shdocnum',
                                                fieldLabel: '证照/证件号码'
                                            }, {
                                                name: 'gd_shareholdnum',
                                                fieldLabel: '持股数量'
                                            },
                                            {
                                                name: 'gd_currencynum',
                                                fieldLabel: '流通数量'
                                            }, {
                                                name: 'gd_freezenum',
                                                fieldLabel: '冻结数量'
                                            }, {
                                                name: 'gd_psotion',
                                                fieldLabel: '职务'
                                            },
                                            {
                                                name: 'gd_phone',
                                                fieldLabel: '手机号码'
                                            }, {
                                                name: 'gd_fax',
                                                fieldLabel: '传真'
                                            }, {
                                                name: 'gd_email',
                                                fieldLabel: 'E-mail'
                                            }, {
                                                name: 'gd_qq',
                                                fieldLabel: 'QQ'
                                            }, {
                                                name: 'gd_webchat',
                                                fieldLabel: '个人微信号'
                                            }, {
                                                name: 'gd_tel',
                                                fieldLabel: '固定电话'
                                            }, {
                                                name: 'gd_remark',
                                                fieldLabel: '备注'
                                            }
                                        ],
                                        buttonAlign: "center",
                                        buttons: [
                                            {
                                                text: '保存',
                                                iconCls: 'icon_save',
                                                handler: function () {
                                                    var form = this.up('form').getForm();
                                                    if (form.isValid()) {
                                                        form.submit({
                                                            url: '/bolong/add_corp_shareholder_info',
                                                            params: {
                                                                gd_corp_id: Ext.getCmp('corp_id').getValue()
                                                            },
                                                            waitMsg: '正在保存数据...',
                                                            success: function (response, action) {
                                                                Ext.Msg.alert("成功", "文件上传成功!");
                                                                Ext.getCmp('innerentergdgridview_id').getStore().reload();
                                                            },
                                                            failure: function (form, action) {
                                                                Ext.Msg.alert("提示", " ！");
                                                            }
                                                        });
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }).show(Ext.get('corp_gd_add_id'));
                        }
                    }
                }]
            }
        ],
        items: [
            {
                xtype: 'innerentergdgridview',
                id: 'innerentergdgridview_id',
                margin: '1 0 0 0',
                region: 'center'
            }
        ]
    }).show(Ext.get('corp_gd_window'));
}

function corp_maintain_info() {

    var store = Ext.create('Ext.data.Store', {
        extend: 'Ext.data.Store',
        model: 'app.model.system.UserMt',
        alias: 'store.userstore',
        proxy: {
            type: 'ajax',
            actionMethods: {
                read: 'GET'
            },
            api: {
                read: '/bolong/userslist'
            },
            reader: {
                type: 'json',
                rootProperty: 'list'
            }
        }
    });

    var editForm = new Ext.form.FormPanel({
        xtype: 'form',
        frame: true,
        bodyPadding: 16,
        defaults: {
            labelWidth: 90,
            xtype: 'textfield',
            readOnly: true,
            width: 300,
            anchor: '100%'
        },
        items: [
            {
                readOnly: true,
                name: 'account',
                fieldLabel: '帐号'
            }, {
                name: 'name',
                fieldLabel: '姓名'
            }, {
                name: 'sex',
                fieldLabel: '性别'
            }, {
                name: 'phone',
                fieldLabel: '手机号'
            },
            {
                name: 'address',
                fieldLabel: '联系地址'
            },
            {
                name: 'remark',
                fieldLabel: '备注'
            },
            {
                name: 'img',
                id: 'maintain_user_img_id',
                //hidden: true
                fieldLabel: 'img'
            }
            //{
            //    xtype: 'fieldset',
            //    title: '图片预览',
            //    defaults: {margin: '0 0 0 80', width: 100, height: 100},
            //    items: [
            //        {
            //            xtype: 'image',
            //            id: 'staffavatar',
            //            border: 1,
            //            src: 'static/upload/annex/'+Ext.getCmp('maintain_user_img_id').getValue(),
            //            //src: '/bolong/static/resources/per.png',
            //            style: {
            //                borderColor: 'blue',
            //                borderStyle: 'solid'
            //            }
            //        }
            //    ]
            //}
        ],
        buttonAlign: "center",
        buttons: [
            {
                text: '关闭',
                iconCls: 'icon_save',
                listeners: {
                    click: function () {
                        Ext.getCmp('corp_maintain_window').close();
                    }
                }
            }
        ]
    });

    store.load({
        params: {
            id: Ext.getCmp('mai_changer_id').getValue()
        },
        callback: function (records, operation, success) {
            if (success) {
                var myarray = new Array();
                for (var i = 0; i < store.getCount(); i++) {
                }
                editForm.getForm().loadRecord(store.getAt(0));

            }
        }
    });

    var editWindow = new Ext.Window({
        title: '维护人信息',
        id: 'corp_maintain_window',
        width: 350,
        height: 500,
        modal: true,
        frame: true,
        border: false,
        items: [editForm]
    });
    editWindow.show(Ext.get('corp_maintain_window'));
}


