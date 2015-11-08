/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('app.Application', {
    extend: 'Ext.app.Application',
    
    name: 'app',

    stores: [
        // TODO: add global / shared stores here
    ],

    init: function(){

    },

    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('系统更新', '系统已更新, 重新载入?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
