console.log('The karma-html2js-preprocessor is converting HTML to JS for injection into PhantomJS.');
document.body.innerHTML = __html__['index.template.html'];
console.log('Complete. The DOM is ready for testing in PhantomJS.');