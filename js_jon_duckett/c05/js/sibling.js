var  startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

console.log('prevItem: ', prevItem);
console.log('nextItem: ', nextItem);

prevItem.className = 'complete';
nextItem.clasName = 'cool';