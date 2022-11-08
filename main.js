var header = document.getElementById('header-title');

header.style.border = '2px solid black';
var addItem = document.getElementById('add-items');
addItem.style.color = 'green';
addItem.innerHTML = '<strong>Add Items</strong>'


var items = document.getElementsByClassName('list-group-item');

    items[2].style.backgroundColor = 'green';

    for(var i = 0; i < items.length; i++)
    {
        items[i].style.fontWeight = 'bold';
    }