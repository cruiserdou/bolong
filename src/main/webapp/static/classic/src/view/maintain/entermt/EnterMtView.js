/**
 * This view is an example list of people.
 */
function showa(){
    Ext.create('Ext.window.Window', {
        title: '添加企业信息',
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
            xtype: 'entermtaddcorp'
        }, {
            html: '<ul class="menu_list">' +
            '<li><a href="#" id="add_corp_base_id">基本信息</a></li>' +
            '<li><a href="#" id="add_corp_contact_id">法定代表人</a></li>' +
            '<li><a href="#" id="add_corp_ind_id">国民经济行业分类</a></li>' +
            '<li><a href="#" id="add_corp_csrc_id">证监会行业分类</a></li>' +
            '<li><a href="#" id="add_corp_mai_id">企业维护信息</a></li>' +
            '<li><a href="#" id="add_corp_fin_id">企业财务信息</a></li>' +
            '<li><a href="#" id="add_corp_service_id">服务机构信息</a></li>' +
            '<li><a href="#" id="add_corp_investor_id">投资人信息</a></li>' +
            '<li><a href="#" id="add_corp_gov_id">政府部门信息</a></li>' +
            '<li><a href="#" id="add_corp_refi_id">融资需求</a></li>' +
            '<li><a href="#" id="add_corp_retra_id">培训需求</a></li>' +
            '<li><a href="#" id="add_corp_rehr_id">人力资源需求</a></li>' +
            '</ul>',
            flex: 1
        }],
        buttonAlign: 'center',
        buttons: [{
            text: '保存',
            handler: function(){
                var form = Ext.getCmp('corp_add_form_id').getForm();
                if (form.isValid()){
                    form.submit({
                        url: '/bolong/add_corp_form',
                        waitMsg: '正在保存数据...',
                        success: function(form, action){
                            Ext.Msg.alert("成功", "数据保存成功!");
                        },
                        failure: function(form, action){
                            Ext.Msg.alert("失败", "数据保存失败!");
                        }
                    });
                }
            }
        }, {
            text: '重置',
            handler: function(){
                Ext.getCmp('corp_add_form_id').getForm().reset();
            }
        }]
    }).show(Ext.get('a_add_href'));
}

function showb(){
    Ext.create('innerenterview', {maximized: true}).show(Ext.get('a_dis_href'));
}

var work_plan_tpl = [
    '<div id="enter_mgr" style="padding: 1.6em;">',
    '<div><a id="a_add_href" href="#" onclick="showa()">新增企业</a></div>',
    '<div><a id="a_dis_href" href="#" onclick="showb()">已入库企业</a></div>',
    '</div>'
];

Ext.define('app.view.maintain.entermt.EnterMtView', {
    extend: 'Ext.panel.Panel',
    xtype: 'entermtview',
    id: 'entermtview_id',
    closable: true,
    requires: [
        'app.view.maintain.entermt.innerenter.InnerEnterView',
        'app.view.maintain.entermt.EnterMtAddCorp',
        'app.view.maintain.entermt.innerenter.EnterApplyView'
    ],
    viewModel: 'main',
    layout: 'fit',

    initComponent: function () {
        this.items = [
            {
                xtype: 'panel',
                id: 'enterprisef_panel',
                html: '<div>数据丢失，联系管理员！</div>',
                listeners: {
                    afterrender: function (_this) {
                        var data = {};
                        _this.updateDetail(data);
                    }
                },
                tpl: Ext.create('Ext.XTemplate', work_plan_tpl),
                updateDetail: function (data) {
                    this.tpl.overwrite(this.body, data);
                }
            }
        ]
        this.callParent(arguments);
    }






    //bodyPadding: 160,
    //items: {
    //    xtype: 'panel',
    //    layout: {
    //        type: 'table',
    //        columns: 2,
    //        tdAttrs: {style: 'padding: 10px;'}
    //    },
    //
    //    items: [{
    //        xtype: 'button',
    //        id: 'add_enter_btn_id',
    //        text: '新增企业',
    //        scale: 'large',
    //        margin: '0 60 0 0',
    //        iconAlign: 'top',
    //        handler: function () {
    //            //win_enterapplyview.show();
    //
    //            Ext.create('Ext.window.Window', {
    //                title: '添加企业信息',
    //                height: 700,
    //                width: 1200,
    //                modal: true,
    //                closeAction: 'destroy',
    //                autoDestroy: true,
    //                layout: {
    //                    type: 'hbox',
    //                    pack: 'start',
    //                    align: 'stretch'
    //                },
    //                items: [{
    //                    xtype: 'entermtaddcorp'
    //                }, {
    //                    html: '<ul class="menu_list">' +
    //                    '<li><a href="#" id="add_corp_base_id">基本信息</a></li>' +
    //                    '<li><a href="#" id="add_corp_contact_id">法定代表人</a></li>' +
    //                    '<li><a href="#" id="add_corp_ind_id">国民经济行业分类</a></li>' +
    //                    '<li><a href="#" id="add_corp_csrc_id">证监会行业分类</a></li>' +
    //                    '<li><a href="#" id="add_corp_mai_id">企业维护信息</a></li>' +
    //                    '<li><a href="#" id="add_corp_fin_id">企业财务信息</a></li>' +
    //                    '<li><a href="#" id="add_corp_service_id">服务机构信息</a></li>' +
    //                    '<li><a href="#" id="add_corp_investor_id">投资人信息</a></li>' +
    //                    '<li><a href="#" id="add_corp_gov_id">政府部门信息</a></li>' +
    //                    '<li><a href="#" id="add_corp_refi_id">融资需求</a></li>' +
    //                    '<li><a href="#" id="add_corp_retra_id">培训需求</a></li>' +
    //                    '<li><a href="#" id="add_corp_rehr_id">人力资源需求</a></li>' +
    //                    '</ul>',
    //                    flex: 1
    //                }],
    //                buttonAlign: 'center',
    //                buttons: [{
    //                    text: '保存',
    //                    handler: function(){
    //                        var form = Ext.getCmp('corp_add_form_id').getForm();
    //                        if (form.isValid()){
    //                            form.submit({
    //                                url: '/bolong/add_corp_form',
    //                                waitMsg: '正在保存数据...',
    //                                success: function(form, action){
    //                                    Ext.Msg.alert("成功", "数据保存成功!");
    //                                },
    //                                failure: function(form, action){
    //                                    Ext.Msg.alert("失败", "数据保存失败!");
    //                                }
    //                            });
    //                        }
    //                    }
    //                }, {
    //                    text: '重置',
    //                    handler: function(){
    //                        Ext.getCmp('corp_add_form_id').getForm().reset();
    //                    }
    //                }]
    //            }).show(Ext.get('add_enter_btn_id'));
    //        }
    //    }, {
    //        xtype: 'button',
    //        id: 'innerenterview_id',
    //        text: '已入库企业',
    //        scale: 'large',
    //        iconAlign: 'top',
    //        handler: function () {
    //            Ext.create('innerenterview', {maximized: true}).show();
    //        }
    //    }]
    //}
});
