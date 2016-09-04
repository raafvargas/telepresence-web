var express = require('express'),
  app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 5000);

console.log('app running on ' + (process.env.PORT || 5000))