/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('app.view.system.secb.SecBModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.checktree',
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
                            checked: true,
                            leaf: true
                        }, {
                            text: '服务机构查询',
                            itype: 'serviceqview',
                            checked: true,
                            leaf: true
                        }, {
                            text: '投资人查询',
                            itype: 'investorqview',
                            checked: true,
                            leaf: true
                        }, {
                            text: '政府部门信息查询',
                            itype: 'govqview',
                            checked: true,
                            leaf: true
                        }]
                    }

                ]
            }
        }
    }
});
