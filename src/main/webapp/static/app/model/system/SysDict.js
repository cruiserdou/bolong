/**
 * Created by jj on 14-6-19.
 */
Ext.define('app.model.system.SysDict', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'field'},
        {name: 'fieldnm'},
        {name: 'fieldval'},
        {name: 'fieldvaldis'},
        {name: 'remark'}
    ]
});
