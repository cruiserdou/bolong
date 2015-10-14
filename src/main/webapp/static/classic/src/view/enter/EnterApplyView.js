/**
 * This view is an example list of people.
 */
var enterapplyview_new = Ext.create('Ext.panel.Panel', {
    id: 'applyf_panel_id',
    bodyPadding: 10,
    bodyStyle: 'overflow-y:scroll',
    listeners: {
        afterrender: function () {
            var obtain_panel = Ext.getCmp('applyf_panel_id');
            corp_apply_con_tpl.overwrite(obtain_panel.body, {});
        }
    },
    border: false,
    autoScroll: true,
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    }
});

Ext.define('app.view.enter.EnterApplyView', {
    requires: [
        'app.xtemplate.corp_apply'
    ]
});

function areaCh(){
    alert("Hello");
}

var win_enterapplyview = new Ext.Window({
    id: 'cust_add_id',
    modal: true,
    title: '新增企业',
    closeAction: 'hide',
    border: false,
    maximizable: true,
    maximized: true,
    layout: 'fit',
    items: [
        enterapplyview_new
    ]
});

function win_close() {
    Ext.getCmp('cust_add_id').close();
};

function save_cust_add() {
    if (document.getElementById("buslicno").value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>营业执照号码不能为空！</span>")
        return;
    }
    if (document.getElementById("name").value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>企业名称不能为空！</span>")
        return;
    }
    if (document.getElementById("unit").value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>单位类别不能为空！</span>")
        return;
    }
    if (document.getElementById("legrep").value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>法定代表人不能为空！</span>")
        return;
    }
    if (document.getElementById("nature").value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>企业性质不能为空！</span>")
        return;
    }
    if (document.getElementById("regcap").value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>注册资本不能为空！</span>")
        return;
    }
    if (document.getElementById("regdt").value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>注册日期不能为空！</span>")
        return;
    }
    var corp_id;
    if (document.getElementById('apply_form')['buslicno'].value == null && document.getElementById('apply_form')['buslicno'].value == "") {
        Ext.Msg.alert("提示", "请填写营业执照号码！");
        return;
    } else {
        Ext.Ajax.request({
            method: "POST",
            url: 'checked_corp_id_info',
            success: function (response, opts) {
                var obj = Ext.decode(response.responseText);

                if (obj.success) {
                    corp_id = parseInt(obj.name);
                }
                obt_corp_add(corp_id);
                obt_corp_contact_add(corp_id);
                obt_corp_shareholder_add(corp_id);
                obt_corp_finance_add(corp_id);
                obt_corp_maintain_add(corp_id);
                obt_corp_government_add(corp_id);
                obt_corp_investors_add(corp_id);
                obt_corp_service_add(corp_id);
                obt_corp_refinancing_add(corp_id);
                obt_corp_rehr_add(corp_id);
                obt_corp_retrain_add(corp_id);
            },
            failure: function (form, action) {
                Ext.Msg.alert("失败", "企业ID检验失败!");
            }
        });
    }
};

function NumberCheck(num) {
    var no_regexp = /\d{6}[123]\d{7}[1-9]/;
    return no_regexp.exec(num) != null;
};

function card_check_apply() {
    if (document.getElementById("buslicno").value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>营业执照号码不能为空！</span>")
        return;
    }
    if (document.getElementById('buslicno').value.length != 15) {
        Ext.Msg.alert("提示", "<span style='color: red;'>营业执照号码格式不对！请重新输入！</span>");
        document.getElementById('apply_form')['buslicno'].value = "";
        return;
    }
    if (!NumberCheck(document.getElementById('buslicno').value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>营业执照号码格式不对！请重新输入！</span>")
        document.getElementById('apply_form')['buslicno'].value = "";
        return;
    }

    var form_obt_apply = document.getElementById("apply_form");

    Ext.Ajax.request({
        method: "POST",
        params: {
            buslicno: form_obt_apply['buslicno'].value,
            id: 0
        },
        url: 'check_buslicno_info',
        success: function (response, opts) {
            var obj = Ext.decode(response.responseText);

            if (!obj.success) {
                Ext.Msg.alert("提示", "该营业执照号码已用！");
                document.getElementById('apply_form')['buslicno'].value = "";
            }
        },
        failure: function (response, opts) {
            Ext.Msg.alert("提示", "错");
        }
    });
};

function corp_img_upload(id) {

    Ext.create('widget.window', {
        title: '企业图片',
        id: 'corp_find_window',
        width: 800,
        height: 600,
        modal: true,
        frame: true,
        border: false,
        layout: 'border',
        dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'top',
                border: true,
                items: [
                    {
                        text: '上传',
                        id: 'corp_update_img_id',
                        listeners: {
                            click: function () {
                                //Ext.Msg.alert("提示", "请填写营业执照号码！");

                                Ext.create('widget.window', {
                                    title: '资料上传',
                                    width: 280,
                                    height: 160,
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
                                                                var img = Ext.getCmp('file');
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
                                                                url: 'add_corp_img_info',
                                                                params: {
                                                                    img_corp_id: id
                                                                },
                                                                waitMsg: '正在保存数据...',
                                                                success: function (response, action) {
                                                                    Ext.Msg.alert("成功", "文件上传成功!");
                                                                    Ext.getCmp('grid_corp_img').getStore().reload();
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
                                }).show(Ext.get(corp_update_img_id));


                            }
                        }
                    }
                ]
            }
        ],
        items: [
            {
                xtype: 'corp_img_gridf',
                region: 'center',
                listeners: {
                    afterrender: function () {
                        Ext.getCmp('grid_corp_img').getStore().load();
                        var store = Ext.getCmp('grid_corp_img').getStore();
                        store.load({
                            params: {
                                img_corp_id: id
                            }
                        })
                    }
                }
            }
        ]
    }).show(Ext.get('corp_find_window'));
};
