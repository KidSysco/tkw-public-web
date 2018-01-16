'use strict';
module.exports = function() {

    var express = require('express'),
        server = express(),
        bodyParser = require('body-parser'),
        port = 8080,
        Vue = require('vue'),
        renderer = require('vue-server-renderer').createRenderer({ template: require('fs').readFileSync('./index.template.html', 'utf-8') });

    // Enable this to simulate production mode.
    //process.env.NODE_ENV = 'production';

    // Set the port in Express to save it for later.
    server.set('port', (process.env.PORT || port));

    // Serve content from the public folder through the web root.
    server.use(express.static('public'));

    // create application/json parser 
    var jsonParser = bodyParser.json();

    // create application/x-www-form-urlencoded parser 
    var urlencodedParser = bodyParser.urlencoded({ extended: false });

    // support json encoded bodies
    server.use(bodyParser.json());

    // support encoded bodies
    server.use(bodyParser.urlencoded({ extended: true }));

    // *** Routes ***

    // Default Single Page Application Route
    server.get('/', (req, res) => {
        const app = new Vue({
                data: {

                },
                template: '<div><div id="qunit"></div><div id="qunit-fixture"></div></div>'
            }),
            context = {
                title: 'TKW Dev Mode',
                css: `<link rel="stylesheet" href="https://code.jquery.com/qunit/qunit-2.4.1.css">
                      <link rel="stylesheet" href="./site.css">`,
                javaScriptIncludes: `<script src="./vue.js"></script>
                 <script src="https://code.jquery.com/qunit/qunit-2.4.1.js"></script>`,
                unitTests: '<script src="./client-tests.js"></script>',
                applicationErrorMessage: ''

            };

        if (process.env.NODE_ENV === 'production') {
            context.title = 'The Known World';
            context.css = '<link rel="stylesheet" href="./site.css">';
            context.javaScriptIncludes = '<script src="https://cdn.jsdelivr.net/npm/vue"></script>';
            context.unitTests = '';
        }


        renderer.renderToString(app, context, (err, html) => {
            if (err) {
                res.status(500).end('Internal Server Error - ' + err + ' - ' + html);
                return;
            }

            res.end(html);
        });
    });

    // Handle the apply for access function by sending email to admins.
    server.post('/apply', function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ complete: true }));
    });

    // Redirect all other routes to root.
    server.get('*', function(req, res) {
        res.writeHead(302, {
            'Location': '/'
        });
        res.end();
    });

    server.listen(server.get('port'));
    return server.get('port');
}