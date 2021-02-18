function checkForm() {
     
    var success = true;

    var username = document.getElementById('username');
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var dateOfBirth = document.getElementById('dateOfBirth');

    var allElements = [username, firstName, lastName, password, confirmPassword, dateOfBirth];
    for(element in allElements) {
        if(element.value.length == 0) {
            element.value = "Input required";
            success = false;
        }
    }
};