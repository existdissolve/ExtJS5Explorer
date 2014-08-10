Ext.define('ExtJS5Explorer.view.gettingstarted.GettingStarted',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.gettingstarted',
    controller: 'gettingstarted',
    viewModel: {
        type: 'gettingstarted'
    },
    bind: {
        title: '{title}'
    },
    bodyPadding: 10,
    html: 'Hello, World!!'
});