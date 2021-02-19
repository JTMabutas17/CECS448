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
    if(success) {
        alert("You have successfully submitted this form.");
        location.reload();
        return false;
    }
    else alert("Enter required fields.");
};

Image.prototype.load = function(url){
    var thisImg = this;
    var xmlHTTP = new XMLHttpRequest();
    xmlHTTP.open('GET', url, true);
    xmlHTTP.responseType = 'arraybuffer';
    xmlHTTP.onload = function(e) {
        var blob = new Blob([this.response]);
        thisImg.src = window.URL.createObjectURL(blob);
    };
    xmlHTTP.onprogress = function(e) {
        if ( e.lengthComputable )
            thisImg.completedPercentage = parseInt( ( e.loaded / e.total) * 100 );
        document.getElementById('progressBar').value = thisImg.completedPercentage;
        document.getElementById('status').innerHTML = thisImg.completedPercentage+"%<br>";
    };
    xmlHTTP.onloadstart = function() {
        thisImg.completedPercentage = 0;
        document.getElementById('progressBar').value = thisImg.completedPercentage;
        document.getElementById('status').innerHTML = thisImg.completedPercentage+"%<br>";
    };
    xmlHTTP.onloadend = function(){
        thisImg.completedPercentage == 100;
        document.getElementById('status').innerHTML = "Image Uploaded<br>";
    };
    xmlHTTP.send();
};

function upload(event){  
    Image.prototype.completedPercentage = 0;
    document.getElementById('progressBar').style.display = 'initial';

    var img = document.getElementById('output');
    img.src = URL.createObjectURL(event.target.files[0]);
    img.load(img.src);

    document.getElementById('i').style.display = 'none';
    document.getElementById('output').style.display = 'initial';
};

// var loadFile = function(event) {
//     document.getElementById('progressBar').style.display = 'initial';
//     start(0);
    
//     var x = setTimeout(function() {
        
//         document.getElementById('i').style.display = 'none';
//         document.getElementById('output').style.display = 'initial';
//         var image = document.getElementById('output');
//         image.src = URL.createObjectURL(event.target.files[0]);
//     }, 1100);
// };

// function start(al) {
     
//     var bar = document.getElementById('progressBar');
//     var status = document.getElementById('status');
//     status.innerHTML = al + "%<br>";
//     bar.value = al;
//     al++;
    
//     var sim = setTimeout(function() {
    
//         start(al);
//     }, 10);
    
//     if (al == 100) {
//       status.innerHTML = "100%<br>";
//       status.innerHTML = "Image Uploaded<br>";
//       bar.value = 100;
//       clearTimeout(sim);
//     }
// };