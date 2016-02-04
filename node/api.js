var rpc = require('node-json-rpc');

var options = {
  // int port of rpc server, default 5080 for http or 5433 for https
  port: 4444,
  // string domain name or ip of rpc server, default '127.0.0.1'
  host: 'staging2.uber.magfest.org',
  // string with default path, default '/'
  path: '/jsonrpc',
  // boolean false to turn rpc checks off, default true
  strict: true
};

// Create a server object with options
var client = new rpc.Client(options);

client.call(
  {"jsonrpc": "2.0", "method": "attendee.lookup", "params": [5], "id": 0},
  // {"jsonrpc": "2.0", "method": "myMethod", "params": [1,2], "id": 0},
  function (err, res) {
    // Did it all work ?
    if (err) { console.log(err); }
    else { console.log(res); }
  }
);

  key: fs.readFileSync('../magdev-client.key'),
  cert: fs.readFileSync('../magdev-client.crt'),
  headers: { 'Content-Length': postData.length, 'Content-Type': "application/json" }
};


var req = https.request(options, function (res) {
  console.log("STATUS: " + res.statusCode);
  console.log("HEADERS: " + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log("BODY: " + chunk);
  });
  res.on('end', function () {
    console.log('No more data in response.')
  })
});

req.on('error', function (e) {
  console.log("problem with request: " + e.message);
});

req.write(postData);
req.end();

