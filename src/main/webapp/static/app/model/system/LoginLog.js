/**
 * Created by jj on 14-6-19.
 */
Ext.define('app.model.system.LoginLog', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'login_log_id'},
        {name: 'user_id'},
        {name: 'ip'},
        {name: 'login_datetime'}
    ]
});
