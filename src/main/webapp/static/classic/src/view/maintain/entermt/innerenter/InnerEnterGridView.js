/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.entermt.innerenter.InnerEnterGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'innerentergridview',
    bodyStyle: 'margin: 0 2px',
    columnLines: true,
    requires: [
        'app.store.corpall.CorpAllStore',
        //'app.view.enter.EnterInfoController',
        'app.view.maintain.entermt.innerenter.InnerEnterController',
        'Ext.grid.filters.Filters',

        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.toolbar.Paging'
    ],
    controller: 'innerentercontroller',
    listeners: {
        //itemclick: 'itemclick',
        itemdblclick:'itemdblclick'
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
        {text: '法定代表人', width: 90, dataIndex: 'legrep'},
        {text: '省', width: 120, dataIndex: 'province', hidden: true},
        {text: '市', width: 60, dataIndex: 'city'},
        {text: '县', width: 120, dataIndex: 'county', hidden: true},
        {text: '公司简称', width: 120, dataIndex: 'nos', hidden: true},
        {text: '邮政编码', width: 120, dataIndex: 'postal', hidden: true},
        {text: '企业性质', width: 120, dataIndex: 'nature', hidden: true},
        {text: '注册资本（万元）', width: 160, dataIndex: 'regcap'},
        {text: '营业期限自', width: 120, dataIndex: 'bustermfdt', hidden: true},
        {text: '营业期限至', width: 120, dataIndex: 'bustremtdt', hidden: true},
        {text: '注册日期', width: 120, dataIndex: 'regdt'},
        {text: '挂牌区域', width: 120, dataIndex: 'list_area', hidden: true},
        {text: '挂牌代码', width: 120, dataIndex: 'listcode', hidden: true},
        {text: '挂牌出资（元/元出资.股）', width: 120, dataIndex: 'listprice', hidden: true},
        {text: '挂牌日期', width: 120, dataIndex: 'listdt', hidden: true},
        {text: '推荐单位', width: 120, dataIndex: 'channels', hidden: true},
        {text: '微信号', width: 120, dataIndex: 'webchat', hidden: true},
        {text: '员工人数', width: 90, dataIndex: 'staffnum'},
        {text: '登记机关', width: 120, dataIndex: 'regist_organ'},
        {text: '注册地址', width: 120, dataIndex: 'regaddr', hidden: true},
        {text: '办公地址', width: 120, dataIndex: 'offaddr', hidden: true},
        {text: '经营范围', width: 120, dataIndex: 'scope', hidden: true},
        {text: '主营业务', width: 120, dataIndex: 'mbus', hidden: true},
        {text: '企业简介', width: 120, dataIndex: 'eprofile', hidden: true},
        {text: '企业照片资料', width: 120, dataIndex: 'phoinf', hidden: true},
        {text: '备注', width: 120, dataIndex: 'remark', hidden: true},
        {text: '行业一级分类', width: 120, dataIndex: 'indclass1'},
        {text: '行业二级分类', width: 120, dataIndex: 'indclass2', hidden: true},
        {text: '行业三级分类', width: 120, dataIndex: 'indclass3', hidden: true},
        {text: '行业四级分类', width: 120, dataIndex: 'indclass4', hidden: true},
        {text: '证监会行业分类', width: 120, dataIndex: 'csrc_type1'},
        {text: '证监会行业分类2', width: 120, dataIndex: 'csrc_type2', hidden: true},
        {text: '证监会行业分类3', width: 120, dataIndex: 'csrc_type3', hidden: true},
        {text: '证监会行业分类4', width: 120, dataIndex: 'csrc_type4', hidden: true},
        {text: '一般企业', width: 120, dataIndex: 'type_enterp', hidden: true},
        {text: '服务机构', width: 120, dataIndex: 'type_server', hidden: true},
        {text: '投资人', width: 120, dataIndex: 'type_investors', hidden: true},
        {text: '政府机构', width: 120, dataIndex: 'type_govermt', hidden: true},
        {text: '融资需求', width: 120, dataIndex: 'demand_rz', hidden: true},
        {text: '培训需求', width: 120, dataIndex: 'demand_px', hidden: true},
        {text: '人力需求', width: 120, dataIndex: 'demand_rl', hidden: true},
        {text: '录入时间', width: 120, dataIndex: 'inputdt', hidden: true},
        {text: '法人联系人表ID', width: 120, dataIndex: 'cont_id', hidden: true},
        {text: '企业ID', width: 120, dataIndex: 'cont_corp_id', hidden: true},
        {text: '姓名', width: 120, dataIndex: 'cont_name', hidden: true},
        {text: '职务', width: 120, dataIndex: 'cont_psotion', hidden: true},
        {text: '证件类型', width: 120, dataIndex: 'cont_edoctype', hidden: true},
        {text: '证件号码', width: 120, dataIndex: 'cont_edocnum', hidden: true},
        {text: '手机号码', width: 120, dataIndex: 'cont_ephone', hidden: true},
        {text: '传真', width: 120, dataIndex: 'cont_efax', hidden: true},
        {text: 'E-mail', width: 120, dataIndex: 'cont_eemail', hidden: true},
        {text: 'QQ', width: 120, dataIndex: 'cont_eqq', hidden: true},
        {text: '个人微信号', width: 120, dataIndex: 'cont_webchat', hidden: true},
        {text: '联系人固话', width: 120, dataIndex: 'cont_tel', hidden: true},
        {text: '备注（个人）', width: 120, dataIndex: 'cont_bz', hidden: true},
        {text: '财务ID', width: 120, dataIndex: 'finid', hidden: true},
        {text: '企业ID', width: 120, dataIndex: 'fin_corp_id', hidden: true},
        {text: '时间(初始)', width: 120, dataIndex: 'start_time', hidden: true},
        {text: '时间end', width: 120, dataIndex: 'end_time', hidden: true},
        {text: '货币资金(初始)', width: 120, dataIndex: 'st_money_fund', hidden: true},
        {text: '货币资金end', width: 120, dataIndex: 'end_money_fund', hidden: true},
        {text: '交易性金融资产(初始)', width: 120, dataIndex: 'st_jyxjr_assets', hidden: true},
        {text: '交易性金融资产end', width: 120, dataIndex: 'end_jyxjr_assets', hidden: true},
        {text: '应收票据(初始)', width: 120, dataIndex: 'st_ys_bill', hidden: true},
        {text: '应收票据end', width: 120, dataIndex: 'end_ys_bill', hidden: true},
        {text: '应收账款(初始)', width: 120, dataIndex: 'st_ys_account', hidden: true},
        {text: '应收账款end', width: 120, dataIndex: 'end_ys_account', hidden: true},
        {text: '预付款项(初始)', width: 120, dataIndex: 'st_yf_money', hidden: true},
        {text: '预付款项end', width: 120, dataIndex: 'end_yf_money', hidden: true},
        {text: '应收利息(初始)', width: 120, dataIndex: 'st_ys_interest', hidden: true},
        {text: '应收利息end', width: 120, dataIndex: 'end_ys_interest', hidden: true},
        {text: '应收股利(初始)', width: 120, dataIndex: 'st_ys_dividends', hidden: true},
        {text: '应收股利end', width: 120, dataIndex: 'end_ys_dividends', hidden: true},
        {text: '其他应收款(初始)', width: 120, dataIndex: 'st_other_ys_money', hidden: true},
        {text: '其他应收款end', width: 120, dataIndex: 'end_other_ys_money', hidden: true},
        {text: '存货(初始)', width: 120, dataIndex: 'st_inventory', hidden: true},
        {text: '存货end', width: 120, dataIndex: 'end_inventory', hidden: true},
        {text: '一年内到期的非流动资产(初始)', width: 120, dataIndex: 'st_ynndq_no_assets', hidden: true},
        {text: '一年内到期的非流动资产end', width: 120, dataIndex: 'end_ynndq_no_assets', hidden: true},
        {text: '其他流动资产(初始)', width: 120, dataIndex: 'st_other_assets', hidden: true},
        {text: '其他流动资产end', width: 120, dataIndex: 'end_other_assets', hidden: true},
        {text: '流动资产合计(初始)', width: 120, dataIndex: 'st_hj_assets', hidden: true},
        {text: '流动资产合计end', width: 120, dataIndex: 'end_hj_assets', hidden: true},
        {text: '可供出售金融资产(初始)', width: 120, dataIndex: 'st_kgcs_assets', hidden: true},
        {text: '可供出售金融资产end', width: 120, dataIndex: 'end_kgcs_assets', hidden: true},
        {text: '持有至到期投资(初始)', width: 120, dataIndex: 'st_cyzdq_investment', hidden: true},
        {text: '持有至到期投资end', width: 120, dataIndex: 'end_cyzdq_investment', hidden: true},
        {text: '长期应收款(初始)', width: 120, dataIndex: 'st_long_ys_money', hidden: true},
        {text: '长期应收款end', width: 120, dataIndex: 'end_long_ys_money', hidden: true},
        {text: '长期股权投资(初始)', width: 120, dataIndex: 'st_long_gq_investment', hidden: true},
        {text: '长期股权投资end', width: 120, dataIndex: 'end_long_gq_investment', hidden: true},
        {text: '投资性房地产(初始)', width: 120, dataIndex: 'st_invest_house', hidden: true},
        {text: '投资性房地产end', width: 120, dataIndex: 'end_invest_house', hidden: true},
        {text: '固定资产(初始)', width: 120, dataIndex: 'st_gd_assets'},
        {text: '固定资产end', width: 120, dataIndex: 'end_gd_assets', hidden: true},
        {text: '减：累计折旧(初始)', width: 120, dataIndex: 'st_accu_deprec', hidden: true},
        {text: '减：累计折旧end', width: 120, dataIndex: 'end_accu_deprec', hidden: true},
        {text: '固定资产净值(初始)', width: 120, dataIndex: 'st_gd_assets_jz', hidden: true},
        {text: '固定资产净值end', width: 120, dataIndex: 'end_gd_assets_jz', hidden: true},
        {text: '减：固定资产减值准备(初始)', width: 120, dataIndex: 'st_gd_assets_ready', hidden: true},
        {text: '减：固定资产减值准备end', width: 120, dataIndex: 'end_gd_assets_ready', hidden: true},
        {text: '固定资产净额(初始)', width: 120, dataIndex: 'st_gd_assets_je', hidden: true},
        {text: '固定资产净额end', width: 120, dataIndex: 'end_gd_assets_je', hidden: true},
        {text: '在建工程(初始)', width: 120, dataIndex: 'st_now_project', hidden: true},
        {text: '在建工程end', width: 120, dataIndex: 'end_now_project', hidden: true},
        {text: '工程物资(初始)', width: 120, dataIndex: 'st_project_material', hidden: true},
        {text: '工程物资end', width: 120, dataIndex: 'end_project_material', hidden: true},
        {text: '固定资产清理(初始)', width: 120, dataIndex: 'st_gd_assets_ql', hidden: true},
        {text: '固定资产清理end', width: 120, dataIndex: 'end_gd_assets_ql', hidden: true},
        {text: '生产性生物投资(初始)', width: 120, dataIndex: 'st_scx_investment', hidden: true},
        {text: '生产性生物投资end', width: 120, dataIndex: 'end_scx_investment', hidden: true},
        {text: '无形资产(初始)', width: 120, dataIndex: 'st_wx_assets', hidden: true},
        {text: '无形资产end', width: 120, dataIndex: 'end_wx_assets', hidden: true},
        {text: '商誉(初始)', width: 120, dataIndex: 'st_goodwill', hidden: true},
        {text: '商誉end', width: 120, dataIndex: 'end_goodwill', hidden: true},
        {text: '长期待摊费用(初始)', width: 120, dataIndex: 'st_cqdt_cost', hidden: true},
        {text: '长期待摊费用end', width: 120, dataIndex: 'end_cqdt_cost', hidden: true},
        {text: '递延所得税资产(初始)', width: 120, dataIndex: 'st_dysds_assets', hidden: true},
        {text: '递延所得税资产end', width: 120, dataIndex: 'end_dysds_assets', hidden: true},
        {text: '其他非流动资产(初始)', width: 120, dataIndex: 'st_other_no_assets', hidden: true},
        {text: '其他非流动资产end', width: 120, dataIndex: 'end_other_no_assets', hidden: true},
        {text: '非流动资产合计(初始)', width: 120, dataIndex: 'st_hj_no_asset', hidden: true},
        {text: '非流动资产合计end', width: 120, dataIndex: 'end_hj_no_asset', hidden: true},
        {text: '资产总计(初始)', width: 120, dataIndex: 'st_hj_total_asset'},
        {text: '资产总计end', width: 120, dataIndex: 'end_hj_total_asset', hidden: true},
        {text: '短期借款(初始)', width: 120, dataIndex: 'st_short_borrow', hidden: true},
        {text: '短期借款end', width: 120, dataIndex: 'end_short_borrow', hidden: true},
        {text: '交易性金融负债(初始)', width: 120, dataIndex: 'st_jyx_finance_fz', hidden: true},
        {text: '交易性金融负债end', width: 120, dataIndex: 'end_jyx_finance_fz', hidden: true},
        {text: '应付票据(初始)', width: 120, dataIndex: 'st_yf_bill', hidden: true},
        {text: '应付票据end', width: 120, dataIndex: 'end_yf_bill', hidden: true},
        {text: '应付账款(初始)', width: 120, dataIndex: 'st_yf_account', hidden: true},
        {text: '应付账款end', width: 120, dataIndex: 'end_yf_account', hidden: true},
        {text: '预收款项(初始)', width: 120, dataIndex: 'st_ys_money', hidden: true},
        {text: '预收款项end', width: 120, dataIndex: 'end_ys_money', hidden: true},
        {text: '应付职工薪酬(初始)', width: 120, dataIndex: 'st_yf_staff_pay', hidden: true},
        {text: '应付职工薪酬end', width: 120, dataIndex: 'end_yf_staff_pay', hidden: true},
        {text: '应交税费(初始)', width: 120, dataIndex: 'st_yj_tax', hidden: true},
        {text: '应交税费end', width: 120, dataIndex: 'end_yj_tax', hidden: true},
        {text: '应付利息(初始)', width: 120, dataIndex: 'st_yf_interest', hidden: true},
        {text: '应付利息end', width: 120, dataIndex: 'end_yf_interest', hidden: true},
        {text: '应付股利(初始)', width: 120, dataIndex: 'st_yf_dividends', hidden: true},
        {text: '应付股利end', width: 120, dataIndex: 'end_yf_dividends', hidden: true},
        {text: '其他应付款(初始)', width: 120, dataIndex: 'st_other_yf_money', hidden: true},
        {text: '其他应付款end', width: 120, dataIndex: 'end_other_yf_money', hidden: true},
        {text: '一年内到期的非流动负债(初始)', width: 120, dataIndex: 'st_ynndq_no_fz', hidden: true},
        {text: '一年内到期的非流动负债end', width: 120, dataIndex: 'end_ynndq_no_fz', hidden: true},
        {text: '其他流动负债(初始)', width: 120, dataIndex: 'st_other_fz', hidden: true},
        {text: '其他流动负债end', width: 120, dataIndex: 'end_other_fz', hidden: true},
        {text: '流动负债合计(初始)', width: 120, dataIndex: 'st_hj_fz', hidden: true},
        {text: '流动负债合计end', width: 120, dataIndex: 'end_hj_fz', hidden: true},
        {text: '长期借款(初始)', width: 120, dataIndex: 'st_long_borrow', hidden: true},
        {text: '长期借款end', width: 120, dataIndex: 'end_long_borrow', hidden: true},
        {text: '应付债券(初始)', width: 120, dataIndex: 'st_yf_bond', hidden: true},
        {text: '应付债券end', width: 120, dataIndex: 'end_yf_bond', hidden: true},
        {text: '长期应付款(初始)', width: 120, dataIndex: 'st_long_yf_money', hidden: true},
        {text: '长期应付款end', width: 120, dataIndex: 'end_long_yf_money', hidden: true},
        {text: '专项应付款(初始)', width: 120, dataIndex: 'st_zx_yf_money', hidden: true},
        {text: '专项应付款end', width: 120, dataIndex: 'end_zx_yf_money', hidden: true},
        {text: '预计负债(初始)', width: 120, dataIndex: 'st_yj_fz', hidden: true},
        {text: '预计负债end', width: 120, dataIndex: 'end_yj_fz', hidden: true},
        {text: '递延所得税负债(初始)', width: 120, dataIndex: 'st_dysds_fz', hidden: true},
        {text: '递延所得税负债end', width: 120, dataIndex: 'end_dysds_fz', hidden: true},
        {text: '其他非流动负债(初始)', width: 120, dataIndex: 'st_other_no_fz', hidden: true},
        {text: '其他非流动负债end', width: 120, dataIndex: 'end_other_no_fz', hidden: true},
        {text: '非流动负债合计(初始)', width: 120, dataIndex: 'st_hj_no_fz', hidden: true},
        {text: '非流动负债合计end', width: 120, dataIndex: 'end_hj_no_fz', hidden: true},
        {text: '负债合计(初始)', width: 120, dataIndex: 'st_hj_total_fz', hidden: true},
        {text: '负债合计end', width: 120, dataIndex: 'end_hj_total_fz', hidden: true},
        {text: '实收资本（或股本）(初始)', width: 120, dataIndex: 'st_paid_assets'},
        {text: '实收资本（或股本）end', width: 120, dataIndex: 'end_paid_assets', hidden: true},
        {text: '资本公积(初始)', width: 120, dataIndex: 'st_zb_reserve', hidden: true},
        {text: '资本公积end', width: 120, dataIndex: 'end_zb_reserve', hidden: true},
        {text: '减：库存股(初始)', width: 120, dataIndex: 'st_kc_stock', hidden: true},
        {text: '减：库存股end', width: 120, dataIndex: 'end_kc_stock', hidden: true},
        {text: '专项储备(初始)', width: 120, dataIndex: 'st_zx_reserve', hidden: true},
        {text: '专项储备end', width: 120, dataIndex: 'end_zx_reserve', hidden: true},
        {text: '盈余公积(初始)', width: 120, dataIndex: 'st_yy_reserve', hidden: true},
        {text: '盈余公积end', width: 120, dataIndex: 'end_yy_reserve', hidden: true},
        {text: '未分配利润(初始)', width: 120, dataIndex: 'st_wfp_profit', hidden: true},
        {text: '未分配利润end', width: 120, dataIndex: 'end_wfp_profit', hidden: true},
        {text: '所有者权益合计(初始)', width: 120, dataIndex: 'st_hj_owner_right', hidden: true},
        {text: '所有者权益合计end', width: 120, dataIndex: 'end_hj_owner_right', hidden: true},
        {text: '负债和所有者权益合计(初始)', width: 120, dataIndex: 'st_hj_fz_owner_right', hidden: true},
        {text: '负债和所有者权益合计end', width: 120, dataIndex: 'end_hj_fz_owner_right', hidden: true},
        {text: '企业维护信息ID', width: 120, dataIndex: 'mai_id', hidden: true},
        {text: '企业ID', width: 120, dataIndex: 'mai_corp_id', hidden: true},
        {text: '更新人', width: 120, dataIndex: 'mai_changer_id', hidden: true},
        {text: '更新日期', width: 120, dataIndex: 'mai_changer_dt', hidden: true},
        {text: '更新单位', width: 120, dataIndex: 'mai_changer_dept', hidden: true},
        {text: '推荐日期', width: 120, dataIndex: 'mai_recomdt', hidden: true},
        {text: '托管状态', width: 120, dataIndex: 'mai_trusteeship', hidden: true},
        {text: '挂牌状态', width: 120, dataIndex: 'mai_listst', hidden: true},
        {text: '企业等级', width: 120, dataIndex: 'mai_eclass', hidden: true},
        {text: '企业维护状态', width: 120, dataIndex: 'mai_maintain', hidden: true},
        {text: '所属后备库', width: 120, dataIndex: 'mai_reserve', hidden: true},
        {text: '企业接待人', width: 120, dataIndex: 'mai_emaint', hidden: true},
        {text: '部门', width: 120, dataIndex: 'mai_dept', hidden: true},
        {text: '职务', width: 120, dataIndex: 'mai_post', hidden: true},
        {text: '固定电话', width: 120, dataIndex: 'mai_tel', hidden: true},
        {text: '手机', width: 120, dataIndex: 'mai_phone', hidden: true},
        {text: '传真', width: 120, dataIndex: 'mai_fax', hidden: true},
        {text: 'E-mail', width: 120, dataIndex: 'mai_email', hidden: true},
        {text: 'QQ', width: 120, dataIndex: 'mai_qq', hidden: true},
        {text: '微信号', width: 120, dataIndex: 'mai_webchat', hidden: true},
        {text: '联系人备注', width: 120, dataIndex: 'mai_bz', hidden: true},
        {text: '服务机构ID', width: 120, dataIndex: 'srv_id', hidden: true},
        {text: '企业ID', width: 120, dataIndex: 'srv_corp_id', hidden: true},
        {text: '服务机构名称', width: 120, dataIndex: 'srv_name', hidden: true},
        {text: '服务机构类别', width: 120, dataIndex: 'srv_type', hidden: true},
        {text: '业务内容', width: 120, dataIndex: 'srv_content', hidden: true},
        {text: '级别', width: 120, dataIndex: 'srv_levels', hidden: true},
        {text: '专属领域', width: 120, dataIndex: 'srv_domain', hidden: true},
        {text: '惩罚记录', width: 120, dataIndex: 'srv_penalty', hidden: true},
        {text: '专审委员', width: 120, dataIndex: 'srv_examiner', hidden: true},
        {text: '兼任职务', width: 120, dataIndex: 'srv_post', hidden: true},
        {text: '简介', width: 120, dataIndex: 'srv_descs', hidden: true},
        {text: '备注 ', width: 120, dataIndex: 'srv_remark', hidden: true},
        {text: '政府部门ID', width: 120, dataIndex: 'gov_id', hidden: true},
        {text: '企业ID', width: 120, dataIndex: 'gov_corp_id', hidden: true},
        {text: '单位名称', width: 120, dataIndex: 'gov_domain', hidden: true},
        {text: '处/室', width: 120, dataIndex: 'gov_office', hidden: true},
        {text: '职能介绍', width: 120, dataIndex: 'gov_desc', hidden: true},
        {text: '联系人', width: 120, dataIndex: 'gov_contact', hidden: true},
        {text: '职务', width: 120, dataIndex: 'gov_psotion', hidden: true},
        {text: '证件类型', width: 120, dataIndex: 'gov_doctype', hidden: true},
        {text: '证件号码', width: 120, dataIndex: 'gov_docnum', hidden: true},
        {text: '手机号码', width: 120, dataIndex: 'gov_phone', hidden: true},
        {text: '传真', width: 120, dataIndex: 'gov_fax', hidden: true},
        {text: 'E-mail', width: 120, dataIndex: 'gov_email', hidden: true},
        {text: 'QQ', width: 120, dataIndex: 'gov_qq', hidden: true},
        {text: '个人微信号', width: 120, dataIndex: 'gov_webchat', hidden: true},
        {text: '固定电话', width: 120, dataIndex: 'gov_tel', hidden: true},
        {text: '备注', width: 120, dataIndex: 'gov_remark', hidden: true},
        {text: '投资人ID', width: 120, dataIndex: 'inv_id', hidden: true},
        {text: '企业ID', width: 120, dataIndex: 'inv_corp_id', hidden: true},
        {text: '投资领域', width: 120, dataIndex: 'inv_domain', hidden: true},
        {text: '证监会行业分类1', width: 120, dataIndex: 'inv_csrc_type1', hidden: true},
        {text: '证监会行业分类2', width: 120, dataIndex: 'inv_csrc_type2', hidden: true},
        {text: '证监会行业分类3', width: 120, dataIndex: 'inv_csrc_type3', hidden: true},
        {text: '证监会行业分类4', width: 120, dataIndex: 'inv_csrc_type4', hidden: true},
        {text: '行业一级分类', width: 120, dataIndex: 'inv_indclass1', hidden: true},
        {text: '行业二级分类', width: 120, dataIndex: 'inv_indclass2', hidden: true},
        {text: '行业三级分类', width: 120, dataIndex: 'inv_indclass3', hidden: true},
        {text: '行业四级分类', width: 120, dataIndex: 'inv_indclass4', hidden: true},
        {text: '联系人', width: 120, dataIndex: 'inv_contact', hidden: true},
        {text: '职务', width: 120, dataIndex: 'inv_psotion', hidden: true},
        {text: '证件类型', width: 120, dataIndex: 'inv_doctype', hidden: true},
        {text: '证件号码', width: 120, dataIndex: 'inv_docnum', hidden: true},
        {text: '手机号码', width: 120, dataIndex: 'inv_phone', hidden: true},
        {text: '传真', width: 120, dataIndex: 'inv_fax', hidden: true},
        {text: 'E-mail', width: 120, dataIndex: 'inv_email', hidden: true},
        {text: 'QQ', width: 120, dataIndex: 'inv_qq', hidden: true},
        {text: '个人微信号', width: 120, dataIndex: 'inv_webchat', hidden: true},
        {text: '固定电话', width: 120, dataIndex: 'inv_tel', hidden: true},
        {text: '备注', width: 120, dataIndex: 'inv_remark', hidden: true},
        {text: '融资需求ID', width: 120, dataIndex: 'refi_id'},
        {text: '企业ID', width: 120, dataIndex: 'refi_corp_id', hidden: true},
        {text: '融资金额', width: 120, dataIndex: 'refi_amounts', hidden: true},
        {text: '融资用途', width: 120, dataIndex: 'refi_use', hidden: true},
        {text: '股份融资/债券融资', width: 120, dataIndex: 'refi_financ', hidden: true},
        {text: '偿付保障', width: 120, dataIndex: 'refi_security', hidden: true},
        {text: '可接受成本（%/年）', width: 120, dataIndex: 'refi_acc_cost', hidden: true},
        {text: '融资期限', width: 120, dataIndex: 'refi_deadline', hidden: true},
        {text: '融资用途详细说明', width: 120, dataIndex: 'refi_desc', hidden: true},
        {text: '人力资源需求ID', width: 120, dataIndex: 'rehr_id', hidden: true},
        {text: '企业ID', width: 120, dataIndex: 'rehr_corp_id', hidden: true},
        {text: '需求职位', width: 120, dataIndex: 'rehr_post', hidden: true},
        {text: '职位人数', width: 120, dataIndex: 'rehr_num', hidden: true},
        {text: '职位薪金', width: 120, dataIndex: 'rehr_salary', hidden: true},
        {text: '性别要求', width: 120, dataIndex: 'rehr_sex_req', hidden: true},
        {text: '年龄要求', width: 120, dataIndex: 'rehr_age_req', hidden: true},
        {text: '经验要求', width: 120, dataIndex: 'rehr_requests', hidden: true},
        {text: '培训需求ID', width: 120, dataIndex: 'retra_id', hidden: true},
        {text: '企业ID', width: 120, dataIndex: 'retra_corp_id', hidden: true},
        {text: '培训方式', width: 120, dataIndex: 'retra_mode', hidden: true},
        {text: '培训内容', width: 120, dataIndex: 'retra_content', hidden: true},
        {text: '可接受成本', width: 120, dataIndex: 'retra_acc_cost', hidden: true},
        {text: '有效时间', width: 120, dataIndex: 'retra_dt', hidden: true},
        {text: '详细要求', width: 120, dataIndex: 'retra_requests', hidden: true}
    ],

    viewConfig: {
        trackOver: true,
        stripeRows: true
    },

    initComponent: function () {
        var store = Ext.create('Ext.data.Store', {
            extend: 'Ext.data.Store',
            model: 'app.model.corpall.CorpAll',
            alias: 'store.corpallstore',
            pageSize: 50,
            proxy: {
                type: 'ajax',
                actionMethods: {
                    read: 'POST'
                },
                api: {
                    read: '/bolong/corplist'
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


