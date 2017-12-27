var func = 'function';

QUnit.test("JavaScript Library Status", function(assert) {
    var isBootStrapModalEnabled = (typeof $().modal == func),
        isjQueryEnabled = (typeof jQuery != 'undefined'),
        isVueEnabled = (typeof Vue) === func;

    assert.ok(true, 'qUnit is installed and running.');
    assert.equal(isBootStrapModalEnabled, true, 'jQuery is installed and running. Version ' + $.fn.jquery);
    assert.equal(isjQueryEnabled, true, 'The Bootstrap Modal code is installed and running.');
    assert.equal(isVueEnabled, true, 'Vue.js is installed and running.');
});

QUnit.test("applicationForm Vue Object", function(assert) {
    var isAppFormVueReady = (typeof applicationForm) === 'object';

    assert.equal(isAppFormVueReady, true, 'applicationForm Vue object is ready.');
});

QUnit.test("applicationForm Vue Object Members", function(assert) {
    var emailValidationMethodReady = (typeof applicationForm.getIsValidEmail) === func,
        nameValidationMethodReady = (typeof applicationForm.getIsValidName) === func,
        applyMethodReady = (typeof applicationForm.apply) === func;

    assert.equal(applicationForm.name, '', 'applicationForm.name is ready.');
    assert.equal(applicationForm.email, '', 'applicationForm.email is ready.');
    assert.equal(emailValidationMethodReady, true, 'applicationForm.isValidEmail() method is ready.');
    assert.equal(nameValidationMethodReady, true, 'applicationForm.isValidName() method is ready.');
    assert.equal(applyMethodReady, true, 'applicationForm.apply() method is ready.');
});

QUnit.test("Application Unit Tests", function(assert) {
    var done,
        openAppFormLink = $('#OpenApplicationFormLink');

    openAppFormLink.trigger($.Event('click'));

    assert.equal($('#ApplicationModal').hasClass('show'), true, 'The modal is showing after clicking the #OpenApplicationFormLink button.');


});