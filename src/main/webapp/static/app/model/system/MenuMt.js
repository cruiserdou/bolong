/**
 * Created by jj on 14-6-19.
 */
Ext.define('app.model.system.MenuMt', {
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
