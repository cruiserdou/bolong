/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.exportimport.ExportImportDetailView', {
    extend: 'Ext.panel.Panel',
    xtype: 'exportimportdetailview',

    scrollable: true,
    requires: [
        'app.view.workmgr.exportimport.ExportImportModel',
        'app.view.workmgr.exportimport.ExportImportController'
    ],

    controller: 'exportimportcontroller',
    viewModel: 'exportimportmodel',
    listeners: {
        afterrender: function (_this) {
            var data = {};
            _this.updateDetail(data);
        }
    },
    tpl: Ext.create('Ext.XTemplate', [
        '<div class="wrapper_div">' +
        '<div><span>企业名称</span><span>{name}</span></div>' +
        '<div><span>营业执照号码</span><span>{buslicno}</span></div>' +
        '<div><span>单位类别</span><span>{unit}</span></div>' +
        '<div><span>法定代表人</span><span>{legrep}</span></div>' +
        '<div><span>省</span><span>{province}</span></div>' +
        '<div><span>市</span><span>{city}</span></div>' +
        '<div><span>县</span><span>{county}</span></div>' +
        '<div><span>公司简介</span><span>{nos}</span></div>' +
        '<div><span>邮政编码</span><span>{postal}</span></div>' +
        '<div><span>企业性质</span><span>{nature}</span></div>' +
        '<div><span>注册资本（万）</span><span>{regcap}</span></div>' +
        '<div><span>营业期限自</span><span>{bustermfdt}</span></div>' +
        '<div><span>营业期限至</span><span>{bustremtdt}</span></div>' +
        '<div><span>注册日期</span><span>{regdt}</span></div>' +
        '<div><span>挂牌区域</span><span>{list_area}</span></div>' +
        '<div><span>挂牌代码</span><span>{listcode}</span></div>' +
        '<div><span>挂牌出资（元／元出资.股）</span><span>{listprice}</span></div>' +
        '<div><span>挂牌日期</span><span>{listdt}</span></div>' +
        '<div><span>推荐单位</span><span>{channels}</span></div>' +
        '<div><span>微信号</span><span>{webchat}</span></div>' +
        '<div><span>员工人数</span><span>{staffnum}</span></div>' +
        '<div><span>登记机关</span><span>{regist_organ}</span></div>' +
        '<div><span>行业一级分类</span><span>{indclass1}</span></div>' +
        '<div><span>证监会行业分类</span><span>{csrc_type1}</span></div>' +
        '<div><span>固定资产（初始）</span><span>{st_gd_assets}</span></div>' +
        '</div>'
    ]),
    updateDetail: function (data) {
        this.tpl.overwrite(this.body, data);
    },
    bind: {
        html: '{loremIpsum}'

    }
});
