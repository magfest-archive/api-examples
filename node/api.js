const https = require('https');
var fs = require("fs");

var postData = JSON.stringify({jsonrpc: "2.0", method: "attendee.lookup", params: [5], id:(new Date).getTime()});
var options = {
  hostname: 'staging2.uber.magfest.org',
  port: 4444,
  path: '/jsonrpc/',
  method: 'POST',
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

