let ws = new WebSocket('wss://llum-socket-0a49bd0cf178.herokuapp.com:443');

let counter = 0.5;

let YesButton = document.querySelector('.YesButton');
YesButton.addEventListener('click', () => {
    counter += 0.1;

    if (counter >= 1) {
        counter = 0.5;
    }

    ws.send(JSON.stringify({ 'yes': counter.toFixed(1), 'no': counter.toFixed(1) }));
}, false);

let NoButton = document.querySelector('.NoButton');
NoButton.addEventListener('click', () => {
    counter -= 0.1;

    if (counter < 0) {
        counter = 0.5;
    }

    ws.send(JSON.stringify({ 'yes': counter.toFixed(1), 'no': counter.toFixed(1) }));
}, false);


ws.addEventListener('open', (event) => {
    console.log('Socket connection open');
    ws.send('pong');
});


ws.addEventListener('message', (message) => {
    console.log(message);
});

ws.addEventListener('error', (error) => {
    console.error('websocket closed')
});

ws.addEventListener('close', (event) => {
    console.log('websocket closed')
});