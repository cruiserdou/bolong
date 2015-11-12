/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.corp_basic.corp_basic_grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'corp_basic_gridf',
    id:'corp_basic_grid_id',
    bodyStyle: 'margin: 0 2px',
    columnLines: true,
    requires: [
        'app.store.corpall.CorpBase',
        'Ext.grid.filters.Filters',
        'app.model.corpall.CorpBase',

        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.toolbar.Paging'
    ],
    listeners: {
        itemdblclick: function(this_, record_){
            Ext.getCmp('corp_name_id').setValue(record_.data["name"]);
            Ext.getCmp('corp_id').setValue(record_.data["id"]);

            Ext.getCmp('corp_listcode_id').setValue(record_.data["listcode"]);
            Ext.getCmp('corp_province_id').setValue(record_.data["province"]);
            Ext.getCmp('corp_city_id').setValue(record_.data["city"]);
            Ext.getCmp('corp_county_id').setValue(record_.data["county"]);

            Ext.getCmp('corp_find_window').close();

        }
    },

    selModel: {
        type: 'spreadsheet',
        // Disables sorting by header click, though it will be still available via menu
        columnSelect: true,
        checkboxSelect: true,
        pruneRemoved: false,
        extensible: 'y'
    },

    columns: [
        {text: '企业ID', width: 120, dataIndex: 'id', hidden: true},
        {
            text: '企业名称',
            width: 230,
            sortable: true,
            dataIndex: 'name',
            groupable: false
        },
        {
            text: '营业执照号码',
            width: 230,
            sortable: true,
            dataIndex: 'buslicno',
            groupable: false
        },
        {text: '单位类别', width: 220, dataIndex: 'unit'},
        {text: '法定代表人', width: 90, dataIndex: 'legrep', hidden: true},
        {text: '省', width: 120, dataIndex: 'province', hidden: true},
        {text: '市', width: 60, dataIndex: 'city', hidden: true},
        {text: '县', width: 120, dataIndex: 'county', hidden: true},
        {text: '公司简称', width: 120, dataIndex: 'nos', hidden: true},
        {text: '邮政编码', width: 120, dataIndex: 'postal', hidden: true},
        {text: '企业性质', width: 120, dataIndex: 'nature', hidden: true},
        {text: '注册资本（万元）', width: 160, dataIndex: 'regcap', hidden: true},
        {text: '营业期限自', width: 120, dataIndex: 'bustermfdt', hidden: true},
        {text: '营业期限至', width: 120, dataIndex: 'bustremtdt', hidden: true},
        {text: '注册日期', width: 120, dataIndex: 'regdt', hidden: true},
        {text: '挂牌区域', width: 120, dataIndex: 'list_area', hidden: true},
        {text: '挂牌代码', width: 120, dataIndex: 'listcode', hidden: true},
        {text: '挂牌出资（元/元出资.股）', width: 120, dataIndex: 'listprice', hidden: true},
        {text: '挂牌日期', width: 120, dataIndex: 'listdt', hidden: true},
        {text: '推荐单位', width: 120, dataIndex: 'channels', hidden: true},
        {text: '微信号', width: 120, dataIndex: 'webchat', hidden: true},
        {text: '员工人数', width: 90, dataIndex: 'staffnum', hidden: true},
        {text: '登记机关', width: 120, dataIndex: 'regist_organ', hidden: true},
        {text: '注册地址', width: 120, dataIndex: 'regaddr', hidden: true},
        {text: '办公地址', width: 120, dataIndex: 'offaddr', hidden: true},
        {text: '经营范围', width: 120, dataIndex: 'scope', hidden: true},
        {text: '主营业务', width: 120, dataIndex: 'mbus', hidden: true},
        {text: '企业简介', width: 120, dataIndex: 'eprofile', hidden: true},
        {text: '企业照片资料', width: 120, dataIndex: 'phoinf', hidden: true},
        {text: '备注', width: 120, dataIndex: 'remark', hidden: true},
        {text: '行业一级分类', width: 120, dataIndex: 'indclass1', hidden: true},
        {text: '行业二级分类', width: 120, dataIndex: 'indclass2', hidden: true},
        {text: '行业三级分类', width: 120, dataIndex: 'indclass3', hidden: true},
        {text: '行业四级分类', width: 120, dataIndex: 'indclass4', hidden: true},
        {text: '证监会行业分类', width: 120, dataIndex: 'csrc_type1', hidden: true},
        {text: '证监会行业分类2', width: 120, dataIndex: 'csrc_type2', hidden: true},
        {text: '一般企业', width: 120, dataIndex: 'type_enterp', hidden: true},
        {text: '服务机构', width: 120, dataIndex: 'type_server', hidden: true},
        {text: '投资人', width: 120, dataIndex: 'type_investors', hidden: true},
        {text: '政府机构', width: 120, dataIndex: 'type_govermt', hidden: true},
        {text: '融资需求', width: 120, dataIndex: 'demand_rz', hidden: true},
        {text: '培训需求', width: 120, dataIndex: 'demand_px', hidden: true},
        {text: '人力需求', width: 120, dataIndex: 'demand_rl', hidden: true},
        {text: '录入时间', width: 120, dataIndex: 'inputdt', hidden: true}

    ],

    viewConfig: {
        trackOver: true,
        stripeRows: true
    },

    initComponent: function () {
        var store = Ext.create('Ext.data.Store', {
            extend: 'Ext.data.Store',
            model:  'app.model.corpall.CorpBase',
            alias: 'store.corpbasestore',
            pageSize: 50,
            proxy: {
                type: 'ajax',
                actionMethods: {
                    read: 'POST'
                },
                api: {
                    read: '/bolong/corpbaselist'
                },
                reader: {
                    type: 'json',
                    totalProperty: 'total',
                    rootProperty: 'list'
                }
            }
        });
        Ext.apply(this, {
            store: store,
            bbar: Ext.create('Ext.PagingToolbar', {
                store: store,
                displayInfo: true,
                displayMsg: '显示第 {0} - {1} 共 {2}',
                emptyMsg: "无数据显示"
            })
        });
        this.callParent();
    }
});
