Ext.define('ExtJS5Explorer.view.user.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',
    /**
     * Handles select event of grid
     * @private
     * @param {Ext.view.View} view
     * @param {Ext.data.Model} record
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    onItemClick: function( view, record, item, index, e, eOpts ) {
        this.redirectTo( 'users/' + record.get( 'id' ) );
    },
    /**
     * Handles selectuser event of grid
     * @private
     * @param {Number} id
     */
    onSelectUser: function( id ) {
        var grid = this.getView().down( 'grid' ),
            store = grid.getStore(),
            record = store.findRecord( 'id', id );
        // if we have the record
        if( record ) {
            grid.getSelectionModel().select( record );
            this.getView().down( '#detail' ).update( record.getData() );
        }
    }
});
