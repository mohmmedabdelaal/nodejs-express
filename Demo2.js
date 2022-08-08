const http = require('http');

const server = http.createServer((req, res) => {
  res.write('the new world is beginning');
  res.end();
});

server.listen(3000);
