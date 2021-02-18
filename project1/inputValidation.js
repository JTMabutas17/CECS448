function checkForm() {
    var success = true;

    var username = document.getElementById('username');
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var dateOfBirth = document.getElementById('dateOfBirth');

    var usernameLabel = document.getElementById('usernameLabel');
    var firstNameLabel = document.getElementById('firstNameLabel');
    var lastNameLabel = document.getElementById('lastNameLabel');
    var passwordLabel = document.getElementById('passwordLabel');
    var confirmPasswordLabel = document.getElementById('confirmPasswordLabel');
    var dateOfBirthLabel = document.getElementById('dateOfBirthLabel');


    var allInputs = [username, firstName, lastName, password, confirmPassword, dateOfBirth];
    var allLabels = [usernameLabel, firstNameLabel, lastNameLabel, passwordLabel, confirmPasswordLabel, dateOfBirthLabel];
    for(var i = 0; i < allInputs.length; i++) {
        allLabels[i].style.color = "black";
        if(allInputs[i].value.length == 0) {
            allLabels[i].style.color = "red";
            success = false;
        }
    }
    if(success) alert("You have successfully submitted this form.");
    else alert("Enter required fields.");
};