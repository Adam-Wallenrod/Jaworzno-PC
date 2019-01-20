var originalNumber = 87.1234567;

var msg = '<h2>Original number</h2><p>' + originalNumber + '</p>';
msg += '<h2>three digits after decimal point</h2><p>' +  originalNumber.toFixed(3) + '<p>';
msg += '<h2>three digits</h2><p>' +  originalNumber.toPrecision(3) + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;