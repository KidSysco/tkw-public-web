// The karma-html2js-preprocessor will convert HTML to JS and inject it as a javascript tag into 
// the Karma test page. The primary reason for this shim, is to copy the HTML that was encoded
// in JS over to the Karma test page so that tests may be run against the DOM.

console.log('Populating Karma test page DOM with index.template.html...');

document.body.innerHTML = __html__['index.template.html'];

console.log('Complete! index.template.html has been copied to the Karma test page DOM and is ready for testing.');