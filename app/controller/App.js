Ext.define('ExtJS5Explorer.controller.App', {
    extend: 'ExtJS5Explorer.controller.Base',
    alias: 'controller.app',
    views: [
        'ExtJS5Explorer.view.main.Main'
    ],
    routes: {
        'home': {
            action: 'onHome'
        },
        'gettingstarted': {
            action: 'onGettingStarted',
            before: 'onBeforeGettingStarted'
        }
    },
    /**************************************
        ROUTING HANDLERS
    **************************************/
    /**
     * 'Before' handler for matched 'gettingstarted' route
     * @private
     */
    onBeforeGettingStarted: function( action ) {
        var me = this;
        Ext.Msg.confirm( 'Attention', 'Are you sure you want to continue (action is paused...)', function( id ) {
            // if yes, continue redirect
            if( id=='yes' ) {
                action.resume();
            }
            // if no, stop action and redirect to home
            else {
                // stop action
                action.stop();
                me.redirectTo( 'home' );
            }
        });
    },
    /**
     * Handler for matched 'gettingstarted' route
     * @private
     */
    onGettingStarted: function() {
        this.addContentToCenterRegion({
            xtype: 'gettingstarted'
        });
    },
    /**
     * Handler for matched 'home' route
     * @private
     */
    onHome: function() {
        this.addContentToCenterRegion({
            xtype: 'home'
        });
    }
});