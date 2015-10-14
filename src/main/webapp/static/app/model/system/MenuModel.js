Ext.define('app.model.system.MenuModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'text'},
        {name: 'leaf'},
        {name: 'parent_id'},
        {name: 'itype'},
        {name: 'root'},
        {name: 'iconcls'},
        {name: 'remark'}
    ]
});
