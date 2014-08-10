/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJS5Explorer.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    requires: [
        'Ext.MessageBox',
        'ExtJS5Explorer.view.*'
    ],
    /**
     * Handler for navigation item click events
     * @private
     * @param {Ext.button.Button} btn
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    onNavigationItemClick: function( btn, e, eOpts ) {
        this.redirectTo( btn.itemId );
    }
});
