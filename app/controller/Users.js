Ext.define('ExtJS5Explorer.controller.Users', {
    extend: 'ExtJS5Explorer.controller.Base',
    alias: 'controller.users',
    views: [
        'ExtJS5Explorer.view.user.*'
    ],
    init: function() {
        this.addRef([{
            ref: 'UserGrid',
            selector: 'grid'
        }]);
        this.callParent();
    },
    routes: {
        'users/:id': {
            action: 'onUserDetail',
            before: 'onBeforeUserDetail'
        },
        'users': {
            action: 'onUsers'
        }
    },
    /**
     * Handler for matched 'users' route
     * @private
     */
    onUsers: function() {
        this.addContentToCenterRegion({
            xtype: 'users'
        });
    },
    /**
     * Handler for matched 'users/:id' route
     * @private
     * @param {Number} id
     */
    onUserDetail: function( id ) {
        this.getUserGrid().fireEvent( 'selectuser', id );
    },
    /**
     * Before handler for matched 'users/:id' route
     * @private
     * @param {Number} id
     * @param {Object} action
     */
    onBeforeUserDetail: function( id, action ) {
        this.addContentToCenterRegion({
            xtype: 'users'
        });
        // check if record is in grid
        var record = this.getUserGrid().getStore().findRecord( 'id', id );
        if( record ) {
            action.resume();
        } 
        else {
            action.stop();
        }
    } 
});