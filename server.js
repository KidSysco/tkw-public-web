'use strict';

var express = require('express'),
    app = module.exports = express();

app.use(express.static('public'))
app.listen(8080);

console.log('Listening on port 8080');