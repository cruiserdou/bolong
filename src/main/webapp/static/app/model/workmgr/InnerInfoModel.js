/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.model.workmgr.InnerInfoModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'user_id'},
        {name: 'ruser_id'},
        {name: 'deadline'},
        {name: 'content'},
        {name: 'stat'},
        {name: 'rtdate'},
        {name: 'type'},
        {name: 'remark'},
        {name: 'user_name'}
    ]
});
