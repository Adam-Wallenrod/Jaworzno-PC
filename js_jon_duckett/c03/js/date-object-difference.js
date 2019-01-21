var today = new Date();
var year = today.getFullYear();
var est = new Date('Apr 6, 1987, 16:56:55');

var difference = today.getTime() - est.getTime();

difference = (difference/(1000*60*60*24*365));

var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years of experience ';
