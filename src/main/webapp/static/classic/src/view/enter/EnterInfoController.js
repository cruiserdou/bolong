/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.enter.EnterInfoController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.enterinfocontroller',
    requires: [
        'app.xtemplate.corp_apply',
        'app.xtemplate.corp_edit'
    ],

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('enterdetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);

        //Ext.getCmp('entereditloggridview_id').getStore().load({
        //    params: {
        //        corp_id: record_.get('id')
        //    }
        //});
    },

    itemdblclick: function (view, record, item, index, e) {

        var mypanel = new Ext.form.FormPanel({
            id: "mypanel",
            width: 820,
            frame: false,
            height: 600,
            border: false,
            bodyStyle: 'overflow-x:hidden; overflow-y:scroll',
            listeners: {
                afterrender: function (_this) {
                    corp_tpl.append('corp', record.data);
                    corp_contact_tpl.append('corp_contact', record.data);
                    corp_acount_tpl.append('corp_acount', record.data);
                    corp_maintain_tpl.append('corp_maintain', record.data);
                    corp_finance_tpl.append('corp_finance', record.data);
                    corp_service_tpl.append('corp_service', record.data);
                    corp_investors_tpl.append('corp_investors', record.data);
                    corp_government_tpl.append('corp_government', record.data);
                    corp_refinancing_tpl.append('corp_refinancing', record.data);
                    corp_retrain_tpl.append('corp_retrain', record.data);
                    corp_rehr_tpl.append('corp_rehr', record.data);


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
                    id: 'corp_panel',
                    html: '<div id="corp">' +
                    '</div>'
                },
                //{
                //    xtype: 'panel',
                //    height: 250,
                //    frame: false,
                //    border: false,
                //    bodyStyle: 'overflow-x:hidden; overflow-y:scroll',
                //    listeners: {
                //        afterrender: function (_this) {
                //            corp_shareholder_list_store.load({
                //                params: {
                //                    gd_corp_id: record.get("id")
                //                },
                //                callback: function (records, operation, success) {
                //                    if (success) {
                //                        var myarray = new Array();
                //                        for (var i = 0; i < corp_shareholder_list_store.getCount(); i++) {
                //                            myarray[i] = corp_shareholder_list_store.getAt(i).getData();
                //                        }
                //
                //
                //                        corp_shareholder_list_tpl.overwrite(_this.body, myarray[0]);
                //                    }
                //                }
                //            })
                //        }
                //    }
                //},
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_contact_panel',
                    html: '<div id="corp_contact">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_acount_panel',
                    html: '<div id="corp_acount">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_maintain_panel',
                    html: '<div id="corp_maintain">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_finance_panel',
                    html: '<div id="corp_finance">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_finance_panel',
                    html: '<div id="corp_finance">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_service_panel',
                    html: '<div id="corp_service">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_investors_panel',
                    html: '<div id="corp_investors">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_government_panel',
                    html: '<div id="corp_government">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_refinancing_panel',
                    html: '<div id="corp_refinancing">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_retrain_panel',
                    html: '<div id="corp_retrain">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_rehr_panel',
                    html: '<div id="corp_rehr">' +
                    '</div>'
                },
                {
                    xtype: 'panel',
                    border: false,
                    id: 'corp_top_panel',
                    html: '<div id="enter_menu_list" style="position: fixed; top: 7em; right: 6em;">' +
                    '<ul>' +
                    '<li><a href="#table_base" style="font-size:18px;">基本信息</a></li>' +
                    '<li><a href="#table_sh"  style="font-size:18px;">股东名册</a></li>' +
                    '<li><a href="#table_link"  style="font-size:18px;">法定代表人</a></li>' +
                    '<li><a href="#table_acount"  style="font-size:18px;">行业分类</a></li>' +
                    '<li><a href="#table_csrc_type"  style="font-size:18px;">证监会行业分类</a></li>' +
                    '<li><a href="#table_ocompay"  style="font-size:18px;">企业维护信息</a></li>' +
                    '<li><a href="#table_assets_finance"  style="font-size:18px;">企业财务信息</a></li>' +
                    '<li><a href="#table_service"  style="font-size:18px;">服务机构</a></li>' +
                    '<li><a href="#table_investors"  style="font-size:18px;">投资人</a></li>' +
                    '<li><a href="#table_govermt"  style="font-size:18px;">政府部门</a></li>' +
                    '<li><a href="#table_demand_rz"  style="font-size:18px;">融资需求</a></li>' +
                    '<li><a href="#table_demand_px"  style="font-size:18px;">培训需求</a></li>' +
                    '<li><a href="#table_demand_rl"  style="font-size:18px;">人力资源需求</a></li>' +
                    '<li><a href="#" style=" text-align: center; font-size:18px;display: block;  margin-top: 16px;  width: 100%;  font-size: 14px;  border: 1px solid #ffffff;  border-radius: 3px;  padding: 0.6em;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#f27809, #e14100);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);" onclick="win_close_ch()">关闭</a></li>' +
                    '</ul>' +
                    '</div>'
                }
            ]
        });

        var editWindow = new Ext.Window({
            layout: 'fit',
            id: 'enterprise_ch_id',
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
        Ext.getCmp('enter_grid_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('enterinfoqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'enterinfoqueryview',
                    id: 'enterinfoqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        } else {
            _this.up().up().remove(Ext.getCmp('enterinfoqueryview_id'));
        }
    },

    btnLog: function (_this) {
        if (!Ext.getCmp('entereditloggridview_id')) {
            _this.up().up().add(
                {
                    xtype: 'entereditloggridview',
                    id: 'entereditloggridview_id',
                    title: '变更记录',
                    collapsible: true,
                    region: 'south',
                    margin: '1 0 0 0',
                    height: 200
                }
            );
        } else {
            _this.up().up().remove(Ext.getCmp('entereditloggridview_id'));
        }
    },

    btnFind: function () {
        Ext.getCmp('enter_grid_id').getStore().load({
            params: {
                name: Ext.getCmp('query_name_id').getValue(),
                nos: Ext.getCmp('query_nos_id').getValue(),
                buslicno: Ext.getCmp('query_buslicno_id').getValue(),
                listcode: Ext.getCmp('query_listcode_id').getValue()

            }
        });
    },

    btnReset: function (_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('enter_grid_id').getStore().load();
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


function win_close_ch() {
    Ext.getCmp('enterprise_ch_id').close();
}
