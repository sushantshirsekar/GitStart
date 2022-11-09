var header = document.getElementById('header-title');

header.style.border = '2px solid black';
var addItem = document.getElementById('add-items');
addItem.style.color = 'green';
addItem.innerHTML = '<strong>Add Items</strong>'


// var items = document.getElementsByClassName('list-group-item');

//     items[2].style.backgroundColor = 'red';

//     for(var i = 0; i < items.length; i++)
//     {
//         items[i].style.fontWeight = 'bold';
//     }

// let x = document.getElementsByClassName('list-group-item');

// x[0].style.backgroundColor = 'maroon';

// let y = document.getElementsByTagName('li');

// y[0].style.color = 'yellow';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.opacity = '0';

let thirdItem = document.querySelectorAll('li');
thirdItem[2].style.color = 'green';

let oddItems = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0; i < oddItems.length; i++)
{
    oddItems[i].style.backgroundColor = 'green';
}