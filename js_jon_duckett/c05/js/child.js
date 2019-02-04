var  startItem = document.getElementsByTagName('ul')[0];

console.log('startItem: ', startItem[0]);
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

console.log('firstItem: ', firstItem);
console.log('lastItem: ', lastItem);

firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');

