// Karma configuration
// Generated on Thu Jan 11 2018 13:09:30 GMT-0600 (Central Standard Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['qunit'],


        // list of files / patterns to load in the browser
        files: [

            './index.template.html',
            './node_modules/jquery/dist/jquery.min.js',
            './public/vue.js',
            './node_modules/tether/dist/js/tether.js',
            './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
            './karma-shim.js',
            './public/client.js',
            './public/client-tests.js'
        ],


        // list of files / patterns to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.html': ['html2js']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec'],
        specReporter: {
            maxLogLines: 5,             // limit number of lines logged per test
            suppressErrorSummary: false, // do not print error summary
            suppressFailed: false,      // do not print information about failed tests
            suppressPassed: false,      // do not print information about passed tests
            suppressSkipped: false,      // do not print information about skipped tests
            showSpecTiming: true,      // print the time elapsed for each spec
            failFast: true              // test would finish with error when a first fail occurs. 
          },

        plugins: ['karma-qunit', 'karma-phantomjs-launcher', 'karma-html2js-preprocessor', 'karma-spec-reporter'],
        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}