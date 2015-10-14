/**
 * Created by dou on 15-9-5.
 */
Ext.define('app.view.main.TreeListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.tree-list',
    formulas: {
        selectionText: function (get) {
            var selection = get('treelist.selection');
            if (selection) {
                var itype = selection.getData().itype;
                if (itype != 'entermtview') {
                    var itemId = selection.getData().itype + '_id';
                    var tabItem = Ext.getCmp(itemId);
                    if (!tabItem && selection.getData().itype != 'nleaf') {
                        tabItem = Ext.getCmp('mTabpanel').add(
                            {
                                xtype: selection.getData().itype,
                                id: itemId,
                                title: selection.getData().text
                                //iconCls: selection.getData().iconCls
                            }
                        );
                    }
                    Ext.getCmp('mTabpanel').setActiveTab(tabItem);
                } else {
                    var itemId = selection.getData().itype + '_id';
                    var tabItem = Ext.getCmp(itemId);
                    if (!tabItem && selection.getData().itype != 'nleaf') {
                        tabItem = Ext.getCmp('mTabpanel').add(
                            {
                                xtype: selection.getData().itype,
                                id: itemId,
                                title: selection.getData().text
                                //iconCls: selection.getData().iconCls
                            }
                        );
                    }
                    Ext.getCmp('mTabpanel').setActiveTab(tabItem);
                }

                return 'Selected: ';
            } else {
                return 'No node selected';
            }
        }
    },

    stores: {
        navItems: {
            type: 'tree',
            root: {
                expanded: true,
                children: [
                    {
                        text: '信息查询',
                        expanded: true,
                        itype: 'nleaf',
                        children: [{
                            text: '企业信息查询',
                            itype: 'enterinfoview',
                            leaf: true
                        }, {
                            text: '服务机构查询',
                            itype: 'serviceqview',
                            leaf: true
                        }, {
                            text: '投资人查询',
                            itype: 'investorqview',
                            leaf: true
                        }, {
                            text: '政府部门信息查询',
                            itype: 'govqview',
                            leaf: true
                        }, {
                            text: '需求查询',
                            itype: 'nleaf',
                            children: [{
                                text: '融资需求查询',
                                itype: 'refiqview',
                                leaf: true
                            }, {
                                text: '培训需求查询',
                                itype: 'retrqview',
                                leaf: true
                            }, {
                                text: '人力资源需求查询',
                                itype: 'rehrqview',
                                leaf: true
                            }]
                        }]
                    }, {
                        text: '信息管理',
                        expanded: true,
                        itype: 'nleaf',
                        children: [{
                            text: '企业信息管理',
                            itype: 'entermtview',
                            leaf: true
                        }, {
                            text: '服务机构管理',
                            itype: 'servicemtview',
                            leaf: true
                        }, {
                            text: '投资人管理',
                            itype: 'investormtview',
                            leaf: true
                        }, {
                            text: '政府部门信息管理',
                            itype: 'govmtview',
                            leaf: true
                        }, {
                            text: '需求管理',
                            itype: 'nleaf',
                            children: [{
                                text: '融资需求管理',
                                itype: 'refiview',
                                leaf: true
                            }, {
                                text: '培训需求管理',
                                itype: 'retrview',
                                leaf: true
                            }, {
                                text: '人力资源需求管理',
                                itype: 'rehrview',
                                leaf: true
                            }]
                        }]
                    }, {
                        text: '信息统计',
                        expanded: false,
                        itype: 'nleaf',
                        children: [{
                            text: '企业信息统计',
                            itype: 'enterstatis',
                            leaf: true
                        }, {
                            text: '服务机构统计',
                            itype: 'servicestatis',
                            leaf: true
                        }, {
                            text: '投资人统计',
                            itype: 'investorstatis',
                            leaf: true
                        }, {
                            text: '政府部门信息统计',
                            itype: 'govstatis',
                            leaf: true
                        }, {
                            text: '需求统计',
                            itype: 'nleaf',
                            children: [{
                                text: '融资需求统计',
                                itype: 'fsdmstatis',
                                leaf: true
                            }, {
                                text: '培训需求统计',
                                itype: 'traindmstatis',
                                leaf: true
                            }, {
                                text: '人力资源需求统计',
                                itype: 'hrdmstatis',
                                leaf: true
                            }]
                        }]
                    }, {
                        text: '工作管家',
                        expanded: false,
                        itype: 'nleaf',
                        children: [{
                            text: '企业维护',
                            itype: 'nleaf',
                            children: [{
                                text: '维护计划',
                                itype: 'maintainplanview',
                                leaf: true
                            }, {
                                text: '维护信息',
                                itype: 'maintaininfoview',
                                leaf: true
                            }]
                        }, {
                            text: '融资服务',
                            itype: 'refimosfview',
                            leaf: true
                        }, {
                            text: '导入导出',
                            itype: 'exportimportview',
                            leaf: true
                        }, {
                            text: '站内信息',
                            itype: 'msgview',
                            leaf: true
                        }]
                    }

                    , {
                        text: '安全管理',
                        expanded: false,
                        itype: 'nleaf',
                        children: [{
                            text: '用户',
                            itype: 'userview',
                            leaf: true
                        }, {
                            text: '菜单',
                            itype: 'menuview',
                            leaf: true
                        }, {
                            text: '角色',
                            itype: 'roleview',
                            leaf: true
                        }, {
                            text: '操作',
                            itype: 'actview',
                            leaf: true
                        }, {
                            text: '权限',
                            itype: 'secview',
                            leaf: true
                        }, {
                            text: '系统字典',
                            itype: 'sysdictview',
                            leaf: true
                        }, {
                            text: '登录日志',
                            itype: 'loginlog',
                            leaf: true
                        }]
                    }]
            }
        }
    }
});
