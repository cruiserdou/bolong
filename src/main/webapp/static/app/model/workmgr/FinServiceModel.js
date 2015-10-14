/**
 * Created by xwq on 15-9-03.
 */
Ext.define('app.model.workmgr.FinServiceModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'corp_name'},
        {name: 'mos_id'},
        {name: 'mos_corp_id'},
        {name: 'mos_cots'},
        {name: 'mos_amounts'},
        {name: 'mos_mop'},
        {name: 'mos_rop'}
    ]
});
