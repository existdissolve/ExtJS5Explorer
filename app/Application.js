/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('ExtJS5Explorer.Application', {
    extend: 'Ext.app.Application',
    name: 'ExtJS5Explorer',
    defaultToken : 'home',
    controllers: [
        'App',
        'Users'
    ],
    init: function() {
        Ext.setGlyphFontFamily( 'FontAwesome' );
    },
    launch: function () {
        
    }
});
