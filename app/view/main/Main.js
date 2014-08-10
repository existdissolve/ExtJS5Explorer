/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJS5Explorer.view.main.Main', {
    extend: 'Ext.container.Container',
    alias: 'widget.main',
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    layout: {
        type: 'border'
    },
    items: [
        {
            xtype: 'panel',
            region: 'north',
            cls: 'titlebar',
            bind: {
                title: '{name}'
            }
        },
        {
            xtype: 'menu',
            region: 'west',
            floating:false,
            width: 250,
            split: true,
            vertical: true,
            items: [
                {
                    text: 'Getting Started',
                    itemId: 'gettingstarted',
                    glyph: 0xf00c,
                    listeners: {
                        click: 'onNavigationItemClick'
                    }
                },
                {
                    text: 'Users Grid',
                    itemId: 'users',
                    glyph: 0xf0c0,
                    listeners: {
                        click: 'onNavigationItemClick'
                    }
                }
            ]
        },
        {
            region: 'center',
            xtype: 'container',
            layout: 'fit',
            itemId: 'center'
        }
    ]
});
