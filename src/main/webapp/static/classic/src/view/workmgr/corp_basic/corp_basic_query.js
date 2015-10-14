/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.corp_basic.corp_basic_query', {
    extend: 'Ext.form.Panel',
    xtype: 'corp_basic_queryf',

    layout: {
        type: 'table',
        columns: 3,
        tableAttrs: {
            style: {
                width: '100%'
            }
        },
        tdAttrs: {
            valign: 'top'
        }
    },

    bodyPadding: 10,
    defaults: {
        bodyPadding: '15 20',
        border: true
    },


    items: [
        {
            xtype: 'textfield',
            anchor: '-5',
            fieldLabel: '公司名称',
            id: 'query_basic_name_id',
            name: 'name'
        },
        {
            xtype: 'textfield',
            anchor: '-5',
            fieldLabel: '公司简称',
            id: 'query_basic_nos_id',
            name: 'nos'
        },
        {
            xtype: 'button',
            text: '查找',
            listeners: {
                click: function () {
                    //var store = Ext.getCmp('corp_basic_grid_id').getStore();
                    Ext.getCmp('corp_basic_grid_id').getStore().load({
                        params: {
                            name: Ext.getCmp('query_basic_name_id').getValue(),
                            nos: Ext.getCmp('query_basic_nos_id').getValue(),
                            buslicno: Ext.getCmp('query_basic_buslicno_id').getValue(),
                            listcode: Ext.getCmp('query_basic_listcode_id').getValue()
                        }
                    });
                } 
            }
        },
        {
            xtype: 'textfield',
            anchor: '-5',
            fieldLabel: '营业执照号码',
            id: 'query_basic_buslicno_id',
            name: 'buslicno'
        },
        {
            xtype: 'textfield',
            anchor: '-5',
            fieldLabel: '挂牌代码',
            id: 'query_basic_listcode_id',
            name: 'listcode'
        },
        {
            xtype: 'button',
            text: '重置',
            listeners: {
                click: function (_this) {
                    _this.up('form').getForm().reset();
                    Ext.getCmp('grid_corp_basic').getStore().load();
                }
            }
        }
    ]
});
