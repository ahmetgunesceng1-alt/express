const http = require('http');
const assert = require('assert');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  assert.strictEqual(res.statusCode, 200);
  console.log('Test passed: Status code is 200');
  res.resume();
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.end();