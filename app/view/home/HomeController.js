Ext.define('ExtJS5Explorer.view.home.HomeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home',
    control: {
        '#': {},
        'toolbar button': {
            click: 'onNavigationItemClick2'
        }
    }
});
