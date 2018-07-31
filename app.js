
const express = require('express')
const app = express()

const port = process.env.NODE_PORT || 3000;

app.get('/', function (req, res) {
  res.send(JSON.stringify(req.headers, null, 4))
})

app.listen(port, function () {
  console.log('HeadersReturn app listening on port ' + port)
})