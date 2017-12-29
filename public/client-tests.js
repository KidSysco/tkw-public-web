var func = 'function',
    click = $.Event('click');

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

    assert.equal(applicationForm.getIsValidName(), false, 'applicationForm.getIsValidName() method returned false validating a blank name.');
    assert.equal(applicationForm.getIsValidEmail(), false, 'applicationForm.getIsValidEmail() method returned false validating a blank email.');

    applicationForm.name = 'Ryan';
    applicationForm.email = 'kidsysco@hotmail.com';
    assert.equal(applicationForm.getIsValidName(), true, 'applicationForm.getIsValidName() method returned true validating a valid name.');
    assert.equal(applicationForm.getIsValidEmail(), true, 'applicationForm.getIsValidEmail() method returned true validating a valid email.');

    applicationForm.name = '';
    applicationForm.email = '';
});

QUnit.test("Application UI Unit Tests", function(assert) {
    var done,
        openAppFormLink = $('#OpenApplicationFormLink'),
        appFormModal = $('#ApplicationModal');

    openAppFormLink.trigger(click);
    assert.equal(appFormModal.hasClass('show'), true, 'The modal is showing after clicking the #OpenApplicationFormLink button.');

    appFormModal.trigger(click);
    assert.equal(appFormModal.hasClass('show'), false, 'The modal is hidden after clicking outside the modal window.');

    openAppFormLink.trigger(click);
    assert.equal(appFormModal.hasClass('show'), true, 'The modal is showing after clicking the #OpenApplicationFormLink button.');

    $('#ModalClose').trigger(click);
    assert.equal(appFormModal.hasClass('show'), false, 'The modal is hidden after clicking modal close button.');

    openAppFormLink.trigger(click);
    assert.equal(appFormModal.hasClass('show'), true, 'The modal is showing after clicking the #OpenApplicationFormLink button.');

    $('#ModalCloseIcon').trigger(click);
    assert.equal(appFormModal.hasClass('show'), false, 'The modal is hidden after clicking modal close icon in the header.');


});