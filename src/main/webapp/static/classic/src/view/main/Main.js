/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    id: 'main_window',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'app.view.main.TreeListModel',
        'app.view.main.List',
        'app.view.main.TreeListController',
        'app.view.main.MainController',
        'app.view.main.MainModel',

        'app.view.query.enter.EnterInfoView',
        'app.view.query.serviceq.ServiceQView',
        'app.view.query.investorq.InvestorQView',
        'app.view.query.govq.GovQView',
        'app.view.query.refi.RefiQView',
        'app.view.query.rehr.RehrQView',
        'app.view.query.retr.RetrQView',

        'app.view.maintain.entermt.EnterMtView',
        'app.view.maintain.govmt.GovMtView',
        'app.view.maintain.investormt.InvestorMtView',
        'app.view.maintain.servicemt.ServiceMtView',
        'app.view.maintain.refi.RefiView',
        'app.view.maintain.rehr.RehrView',
        'app.view.maintain.retr.RetrView',

        'app.view.statis.EnterStatis',
        'app.view.statis.ServiceStatis',
        'app.view.statis.InvestorStatis',
        'app.view.statis.GovStatis',
        'app.view.statis.demand.FsDmStatis',
        'app.view.statis.demand.TrainDmStatis',
        'app.view.statis.demand.HrDmStatis',

        'app.view.workmgr.FinService',
        'app.view.workmgr.InnerInfo',
        'app.view.workmgr.msg.MsgView',
        'app.view.workmgr.maintaininfo.MaintaininfoView',
        'app.view.workmgr.maintainplan.MaintainplanView',
        'app.view.workmgr.refimosf.RefimosfView',
        'app.view.workmgr.exportimport.ExportImportView',

        'app.view.system.log.LoginLog',
        'app.view.system.user.UserView',
        'app.view.system.role.RoleView',
        'app.view.system.menu.MenuView',
        'app.view.system.sysdict.SysdictView',
        'app.view.system.act.ActView',
        'app.view.system.secb.SecBView',
        'app.view.system.sec.SecView'
    ],

    //title: '甘肃中小企业信息管理系统',
    controller: 'tree-list',
    viewModel: {
        type: 'tree-list'
    },
    ui: 'navigation',

    layout: 'border',
    //header: {
    //    items: [{
    //        xtype: 'button',
    //        text: '设置',
    //        menu: [{
    //            text: 'Single Expand',
    //            checked: true,
    //            handler: 'onToggleConfig',
    //            config: 'singleExpand'
    //        }]
    //    }, {
    //
    //        xtype: 'button',
    //        iconCls: 'x-fa fa-power-off',
    //        text: '注销',
    //        enableToggle: true,
    //        toggleHandler: 'onLogout'
    //    }]
    //},

    items: [{
        region: 'center',
        id:'center-panel-id',
        bodyPadding: 12,
        layout: 'fit',
        items: [{
            xtype: 'tabpanel',
            id: 'mTabpanel',
            hidden: true,
            items: [{
                xtype: 'enterinfoview',
                listeners: {
                    afterrender: 'onLogin'
                }
            }]
        }]
    }]
});
