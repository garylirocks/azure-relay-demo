const WebSocket = require('hyco-ws');
const { get_connection_info } = require('./util')

const { ns, path, keyrule, key } = get_connection_info();

var wss = WebSocket.createRelayedServer(
    {
        server: WebSocket.createRelayListenUri(ns, path),
        token: WebSocket.createRelayToken('http://' + ns, keyrule, key)
    },
    function (ws) {
        console.log('connection accepted');
        ws.onmessage = function (event) {
            console.log(event.data);
        };
        ws.on('close', function () {
            console.log('connection closed');
        });
    });

console.log('listening');

wss.on('error', function (err) {
    console.log('error' + err);
});