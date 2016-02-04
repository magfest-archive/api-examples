/* TODO DOESNT WORK, need to get this info in there
  key: fs.readFileSync('../magdev-client.key'),
  cert: fs.readFileSync('../magdev-client.crt'),*/

var rpc = require('node-json-rpc');

var options = {
  port: 4444,
  host: 'staging2.uber.magfest.org',
  path: '/jsonrpc',
  strict: true
};

// Create a server object with options
var client = new rpc.Client(options);

client.call(
  {"jsonrpc": "2.0", "method": "attendee.lookup", "params": [5], "id": 0},
  function (err, res) {
    // Did it all work ?
    if (err) { console.log(err); }
    else { console.log(res); }
  }
);
