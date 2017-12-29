// Handles the click event on links in the navbar to close the mobile menu if it is in use.
$(document).on('click', '.navbar-collapse', function(e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});

// Handles the hidden event on the BootStrap modal.
$(document).on('hidden.bs.modal', function() {
    applicationForm.isApplicationSent = false;
});

// The Vue Model for submitting a Application Form to Play.
var applicationForm = new Vue({
    el: '#ApplicationModal',
    data: {
        name: '',
        email: '',
        isValidEmail: true,
        isValidName: true,
        isApplicationSent: false,
        isApplicationSuccessfull: false,
        isFetchingData: false,
        applicationErrorMessage: ''
    },
    methods: {
        getIsValidEmail: function() {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.isValidEmail = re.test(this.email.toLowerCase()) ? true : false;
            return this.isValidEmail;
        },
        getIsValidName: function() {
            this.isValidName = (this.name.length > 0);
            return this.isValidName;
        },
        apply: function() {
            var formData = {
                "name": applicationForm.name,
                "email": applicationForm.email
            };

            if (this.getIsValidName() && this.getIsValidEmail()) {
                this.isFetchingData = true;
                $.ajax({
                    url: '/apply',
                    dataType: "json",
                    method: "POST",
                    data: JSON.stringify(formData),
                    success: function(data) {
                        setTimeout(function(){
                            applicationForm.isFetchingData = false;
                            applicationForm.isApplicationSent = true;
                            applicationForm.isApplicationSuccessfull = true;
                        }, 3400);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        applicationForm.isFetchingData = false;
                        applicationForm.isApplicationSent = true;
                        applicationForm.isApplicationSuccessfull = false;

                        applicationForm.applicationErrorMessage = textStatus + " " + errorThrown;
                    }
                });
            } else {
                this.isApplicationSent = false;
                return false;
            }
        }
    }
});