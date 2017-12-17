'use strict';

var express = require('express'),
    app = module.exports = express(),
    webServerPort = 5000;

app.use(express.static('public'));
//app.get('/', (req, res) => res.send('Hello World!'));
app.listen(webServerPort);

console.log('Listening on port ' + webServerPort);
