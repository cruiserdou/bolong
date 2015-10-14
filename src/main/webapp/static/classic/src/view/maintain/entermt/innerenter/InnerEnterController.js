/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.maintain.entermt.innerenter.InnerEnterController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.innerentercontroller',
    requires: [
        'app.xtemplate.corp_edit'
    ],
    //itemclick: function (this_, record_) {
    //    var vPanel = Ext.getCmp('enterdetailview_id');
    //    vPanel.tpl.overwrite(vPanel.body, record_.data);
    //
    //    Ext.getCmp('entereditloggridview_id').getStore().load({
    //        params: {
    //            corp_id: record_.get('id')
    //        }
    //    });
    //},
    itemdblclick: function (view, record, item, index, e) {

        //呈现组件
        var mypanel = new Ext.form.FormPanel({
            id: "mypanel",
            width: 820,
            frame: false,
            height: 600,
            border: false,
            bodyStyle: 'overflow-x:hidden; overflow-y:scroll',
            listeners: {
                afterrender: function (_this){
                    corp_edit_con_tpl.append('corp_edit',record.data);
                    //setup();preselect('甘肃省');
                    //setup_cl();preselect_cl('农、林、牧、渔业');
                    //setup_zjh();type_zjh('农、林、牧、渔业');
                    //setup_edit();preselect_edit(record.get("province"));
                }
            },
            autoScroll: true,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start'
            },
            items: [
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_edit_panel',
                    html: '<div id="corp_edit">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_edit_corp_panel',
                    html:
                    '<div id="enter_menu_list" style="position: fixed; top: 7em; right: 6em;">'+

                    '<ul>'+
                    '<li><a href="#table_corp_base" style="font-size:18px;">基本信息</a></li>' +
                    '<li><a href="#table_corp_sh"  style="font-size:18px;">股东名册</a></li>' +
                    '<li><a href="#table_corp_link"  style="font-size:18px;">法定代表人</a></li>' +
                    '<li><a href="#table_corp_acount"  style="font-size:18px;">行业分类</a></li>' +
                    '<li><a href="#table_corp_csrc_type"  style="font-size:18px;">证监会行业分类</a></li>' +
                    '<li><a href="#table_corp_ocompay"  style="font-size:18px;">企业维护信息</a></li>' +
                    '<li><a href="#table_corp_assets_finance"  style="font-size:18px;">企业财务信息</a></li>' +
                    '<li><a href="#table_corp_service"  style="font-size:18px;">服务机构</a></li>' +
                    '<li><a href="#table_corp_investors"  style="font-size:18px;">投资人</a></li>' +
                    '<li><a href="#table_corp_govermt"  style="font-size:18px;">政府部门</a></li>' +
                    '<li><a href="#table_corp_demand_rz"  style="font-size:18px;">融资需求</a></li>' +
                    '<li><a href="#table_corp_demand_px"  style="font-size:18px;">培训需求</a></li>' +
                    '<li><a href="#table_corp_demand_rl"  style="font-size:18px;">人力资源需求</a></li>' +
                    '<li><a href="#" style=" text-align: center; font-size:18px;display: block;  margin-top: 16px;  width: 100%;  font-size: 14px;  border: 1px solid #ffffff;  border-radius: 3px;  padding: 0.6em;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#f27809, #e14100);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);" onclick="win_close_edit()">关闭</a></li>' +

                    '</ul>' +
                    '</div>'
                }
            ]
        });

        var editWindow = new Ext.Window({
            layout: 'fit',
            id: 'enterprise_edit_id',
            width: 830,
            height: 650,
            modal: true,
            title: '企业信息',
            maximized: true,
            maximizable: true,
            items: [mypanel]
        });
        editWindow.show(Ext.get('body'));
    },


    btnClick: function () {
        Ext.getCmp('innerenterqueryview_id').getStore().load();
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
        }else{
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

    onToggleConfig: function (menuitem) {
        var treelist = this.lookupReference('treelist');

        treelist.setConfig(menuitem.config, menuitem.checked);
    },

    onToggleMicro: function (button, pressed) {
        var treelist = this.lookupReference('treelist'),
            navBtn = this.lookupReference('navBtn'),
            ct = treelist.ownerCt;

        treelist.setMicro(pressed);

        if (pressed) {
            navBtn.setPressed(true);
            navBtn.disable();
            this.oldWidth = ct.width;
            ct.setWidth(44);
        } else {
            ct.setWidth(this.oldWidth);
            navBtn.enable();
        }

        // IE8 has an odd bug with handling font icons in pseudo elements;
        // it will render the icon once and not update it when something
        // like text color is changed via style addition or removal.
        // We have to force icon repaint by adding a style with forced empty
        // pseudo element content, (x-sync-repaint) and removing it back to work
        // around this issue.
        // See this: https://github.com/FortAwesome/Font-Awesome/issues/954
        // and this: https://github.com/twbs/bootstrap/issues/13863
        if (Ext.isIE8) {
            this.repaintList(treelist, pressed);
        }
    },

    onToggleNav: function (button, pressed) {
        var treelist = this.lookupReference('treelist'),
            ct = this.lookupReference('treelistContainer');

        treelist.setExpanderFirst(!pressed);
        treelist.setUi(pressed ? 'nav' : null);
        treelist.setHighlightPath(pressed);
        ct[pressed ? 'addCls' : 'removeCls']('treelist-with-nav');

        if (Ext.isIE8) {
            this.repaintList(treelist);
        }
    }
});


function win_close_edit() {
    Ext.getCmp('enterprise_edit_id').close();
}



function save_corp_edit(id,finid,mai_id,gov_id,inv_id,srv_id,refi_id,rehr_id,retra_id){
    var form_obt_edit = document.getElementById("apply_corp_form_edit");

    if (form_obt_edit['buslicno'].value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>营业执照号码不能为空！</span>")
        return;
    }
    if (form_obt_edit['name'].value  == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>企业名称不能为空！</span>")
        return;
    }
    if (form_obt_edit['unit'].value   == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>单位类别不能为空！</span>")
        return;
    }
    if (form_obt_edit['legrep'].value  == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>法定代表人不能为空！</span>")
        return;
    }
    if (form_obt_edit['nature'].value  == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>企业性质不能为空！</span>")
        return;
    }
    if (form_obt_edit['regcap'].value   == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>注册资本不能为空！</span>")
        return;
    }
    if (form_obt_edit['regdt'].value  == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>注册日期不能为空！</span>")
        return;
    }


    obt_corp_update(id);
    //obt_corp_contact_update(cont_id);
    ////obt_corp_shareholder_update(gd_id);
    obt_corp_finance_update(finid);
    //obt_corp_maintain_update(mai_id);
    obt_corp_government_update(gov_id);
    obt_corp_investors_update(inv_id);
    obt_corp_service_update(srv_id);
    obt_corp_refinancing_update(refi_id);
    obt_corp_retrain_update(retra_id);
    obt_corp_rehr_update(rehr_id);

    Ext.getCmp('innerentergridview_id').getStore().reload();
}


function buslicnoCheck(num)
{
    var no_regexp = /\d{6}[123]\d{7}[1-9]/;
    return no_regexp.exec(num) != null;
}

function buslicno_check_edit(id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    if (form_obt_edit['buslicno'].value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>营业执照号码不能为空！</span>");
        return;
    }
    if(document.getElementById('apply_corp_form_edit')['buslicno'].value.length!=15)
    {
        Ext.Msg.alert("提示", "<span style='color: red;'>营业执照号码格式不对！请重新输入！</span>");
        document.getElementById('apply_corp_form_edit')['buslicno'].value="";
        return;
    }
    if (!buslicnoCheck(document.getElementById('apply_corp_form_edit')['buslicno'].value))
    {
        Ext.Msg.alert("提示", "<span style='color: red;'>营业执照号码格式不对！请重新输入！</span>");
        document.getElementById('apply_corp_form_edit')['buslicno'].value="";
        return;
    }


    Ext.Ajax.request({
        method: "POST",
        params: {
            buslicno: form_obt_edit['buslicno'].value,
            id : id
        },
        url: '/enter/check_buslicno_info',
        success: function (response,opts) {
            var obj=Ext.decode(response.responseText);

            if(!obj.success)
            {
                Ext.Msg.alert("提示", "该营业执照号码已用！");
                document.getElementById('apply_corp_form_edit')['buslicno'].value="";
            }
        },
        failure: function (response,opts) {
            Ext.Msg.alert("提示", "错");
        }
    });
}

