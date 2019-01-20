var saying = 'home sweet home ';
var msg = '<h2>number of characters</h2><p>' + saying.length + '</p>';

msg += '<h2>char at #12</h2><p>' +  saying.charAt(12) + '</p>';
msg += '<h2>first occurrence of phrase \'ee\'</h2><p>' + saying.indexOf('ee') + '</p>';
msg += '<h2>last occurrence of \'e\'</h2><p>' + saying.lastIndexOf('e') + '</p>';

msg += '<h2>chars 8-14</h2><p>' + saying.substring(8,14); + '</p>';
msg += '<h2>replace method</h2></p>' + saying.replace('home', 'house'); + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;