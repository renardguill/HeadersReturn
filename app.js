
const express = require('express')
const app = express()
var morgan = require('morgan')

const port = process.env.NODE_PORT || 3000;

app.use(morgan('combined'))

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(req.headers, null, 4));
})

app.listen(port, function () {
  console.log('HeadersReturn app listening on port ' + port);
  console.log('Stop with Ctrl+C');
})