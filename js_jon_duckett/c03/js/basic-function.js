var msg = 'Subscribe to our newsletter!';

function updateMessage(message) {
    var el = document.getElementById('message');
    el.textContent = message;
}

updateMessage(msg);