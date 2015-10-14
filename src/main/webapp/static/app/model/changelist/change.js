/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.change', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'enterprise_id'},
        {name: 'changer_type'},
        {name: 'changer_id'},
        {name: 'changer_dt'},
        {name: 'changer_ip'},
        {name: 'field'},
        {name: 'field_name'},
        {name: 'c_before'},
        {name: 'c_after'}
    ]
    //belongsTo:'enterprise'
});





