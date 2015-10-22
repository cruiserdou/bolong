/**
 * This view is an example list of people.
 */
Ext.define('app.view.main.List', {
    extend: 'Ext.tree.Panel',
    xtype: 'maintree',

    rootVisible: false,

    initComponent: function() {
        var store = Ext.create('Ext.data.TreeStore', {
            root: {
                expanded: true,
                children: [
                    { text: 'detention', leaf: true },
                    { text: 'homework', expanded: true, children: [
                        { text: 'book report', leaf: true },
                        { text: 'algebra', leaf: true}]
                    },
                    { text: 'buy lottery tickets', leaf: true }
                ]
            }
        });
        this.store = store;


        this.callParent();
    }
});
