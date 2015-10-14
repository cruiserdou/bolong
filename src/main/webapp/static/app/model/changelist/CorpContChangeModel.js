/**
 * Created by jj on 14-6-19.
 */
Ext.define('app.model.changelist.CorpContChangeModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'cont_corp_id'},
        {name: 'changer_id'},
        {name: 'changer_dt'},
        {name: 'changer_ip'},
        {name: 'field'},
        {name: 'c_before'},
        {name: 'c_after'},
        {name: 'field_name'},
        {name: 'cont_id'}
    ]
});






