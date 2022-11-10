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
let evenItems = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < oddItems.length; i++)
{
    oddItems[i].style.backgroundColor = '#90EE90';
    oddItems[i].style.color = '#FFFFE0';
    evenItems[i].style.backgroundColor = '#FFFFE0';
    evenItems[i].style.color = '#90EE90';
}

let itemList = document.querySelector('#items');
itemList.parentElement.style.backgroundColor = '#f4f4f4';

//lastElementChild
let last = document.querySelector('#items');
last.lastElementChild.style.backgroundColor = '#ccc';
console.log(last.lastChild);

//firstElementChild
let first = document.querySelector('#items');
last.firstElementChild.style.backgroundColor = '#ADD8E6';
console.log(last.firstChild);

//nextSibling
let s = document.querySelector('#sibling');
console.log(s.nextSibling);
s.nextElementSibling.style.color = 'blue';

//previousSibling
console.log(s.previousSibling);
s.previousElementSibling.style.color = 'violet';

// createChild
let newDiv = document.createElement('div');
newDiv.className = 'hellodiv';
newDiv.id = 'div-id';
newDiv.setAttribute('title', 'hellothere!');

let newDivText = document.createTextNode('I am Sushant');

newDiv.appendChild(newDivText);
console.log(newDiv);
newDiv.style.color = 'red';
newDiv.style.fontSize = '30px';
newDiv.style.fontWeight = 'bold';

var insert1 = document.querySelector('#parent');
var insert2 = document.querySelector('#sibling');

insert1.insertBefore(newDiv, insert2);







