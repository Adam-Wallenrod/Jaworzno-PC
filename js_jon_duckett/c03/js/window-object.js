var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p>';
msg += '<p>height:' + window.innerHeight + '</p>';

msg += '<h2>History</h2><p>elements: ' + window.history.length + '</p>';

msg += '<h2>Screen</h2><p>width: ' + window.screen.width + '</p>';
msg += '<p>height: ' + window.screen.height + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;

alert('Current web page: ' + window.location);

