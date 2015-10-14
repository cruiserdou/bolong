/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.model.system.ActModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'roleid'},
        {name: 'treeid'},
        {name: 'parentid'},
        {name: 'rolename'},
        {name: 'text'}
    ]
});
