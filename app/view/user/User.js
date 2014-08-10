Ext.define('ExtJS5Explorer.view.user.User',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.users',
    requires: [
        'Ext.grid.Panel'
    ],
    controller: 'user',
    viewModel: {
        type: 'user'
    },
    items: [
        {
            xtype: 'grid',
            title: 'User List',
            store: {
                fields: [ 'id', 'name', 'age', 'favcolor', 'bio' ],
                data: [
                    { id: 1, name: 'Joel Watson', favcolor: 'green', age:33, bio:'I like to play guitar, dream philosophy, and watch others play video games' },
                    { id: 2, name: 'Jason Watson', favcolor: 'blue', age:33, bio:'I like to play drums, blog about theology, and quote Nacho Libre in the place of normal conversation' },
                    { id: 3, name: 'Jared Watson', favcolor: 'black', age: 25, bio:'I like to play video games, watch movies, and listen to people screaming over the top of guitars' } 
                ]
            },
            columns: {
                items: [
                    {
                        text: 'ID',
                        dataIndex: 'id'
                    },
                    {
                        text: 'Name',
                        dataIndex: 'name',
                        flex: 1
                    }
                ]
            },
            listeners: {
                itemclick: 'onItemClick',
                selectuser: 'onSelectUser'
            }
        },
        {
            xtype: 'panel',
            title: 'User Detail',
            itemId: 'detail',
            tpl: Ext.create('Ext.XTemplate', 
                '<table cellpadding="10">',
                    '<tr>',
                        '<td width="80">Name:</td>',
                        '<td>{name}</td>',
                    '</tr>',
                    '<tr>',
                        '<td>Age:</td>',
                        '<td>{age}</td>',
                    '</tr>',
                    '<tr>',
                        '<td>Fav Color:</td>',
                        '<td>{favcolor}</td>',
                    '</tr>',
                    '<tr>',
                        '<td colspan="2">{bio}</td>',
                    '</tr>',
                '</table>'
            )
        }
    ]
});