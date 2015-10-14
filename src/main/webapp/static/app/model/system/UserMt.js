/**
 * Created by jj on 14-6-19.
 */
Ext.define('app.model.system.UserMt', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'account'},
        {name: 'password'},
        {name: 'sex'},
        {name: 'name'},
        {name: 'phone'},
        {name: 'address'},
        {name: 'deptid'},
        {name: 'img'},
        {name: 'nos'},
        {name: 'lastip'},
        {name: 'remark'}
    ]
});


