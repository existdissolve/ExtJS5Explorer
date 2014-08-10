Ext.define('ExtJS5Explorer.view.home.Home', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.home',
    controller: 'home',
    viewModel: {
        type: 'home'
    },
    bind: {
        title: '{title}'
    },
    bodyPadding:10,
    html: 'This is our main content area :)'
});