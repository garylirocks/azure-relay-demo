const WebSocket = require('hyco-ws');
const { get_connection_info } = require('./util')

const { ns, path, keyrule, key } = get_connection_info();

const readline = require('readline')
    .createInterface({
        input: process.stdin,
        output: process.stdout
    });;

WebSocket.relayedConnect(
    WebSocket.createRelaySendUri(ns, path),
    WebSocket.createRelayToken('http://' + ns, keyrule, key),
    function (wss) {
        readline.on('line', (input) => {
            wss.send(input, null);
        });

        console.log('Started client interval.');
        wss.on('close', function () {
            console.log('stopping client interval');
            process.exit();
        });
    }
);