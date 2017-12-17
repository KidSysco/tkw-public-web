'use strict';

var express = require('express'),
    app = module.exports = express(),
    webServerPort = 8080;

app.set('port', (process.env.PORT || webServerPort))

app.use(express.static('public'));
//app.get('/', (req, res) => res.send('Hello World!'));
app.listen(app.get('port'));

console.log('Listening on port ' + webServerPort);
