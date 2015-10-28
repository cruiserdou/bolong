/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.secb.SecBDetailView', {
    extend: 'Ext.tree.Panel',

    requires: [
        'Ext.data.TreeStore'
    ],
    xtype: 'secbdetailview',

    rootVisible: false,
    useArrows: true,
    width: 280,
    bufferedRenderer: false,
    animate: true,

    initComponent: function () {
        Ext.apply(this, {
            store: new Ext.data.TreeStore({
                proxy: {
                    type: 'ajax',
                    url: '/bolong/static/resources/check-nodes.json'
                },
                sorters: [{
                    property: 'leaf',
                    direction: 'ASC'
                }, {
                    property: 'text',
                    direction: 'ASC'
                }]
            }),
            tbar: [{
                text: '保存',
                scope: this,
                handler: this.onCheckedNodesClick
            }]
        });
        this.callParent();
    },

    onCheckedNodesClick: function () {
        var records = this.getView().getChecked(),
            names = [];

        Ext.Array.each(records, function (rec) {
            names.push(rec.get('text'));
        });

        Ext.MessageBox.show({
            title: 'Selected Nodes',
            msg: names.join('<br />'),
            icon: Ext.MessageBox.INFO
        });
    }
});
