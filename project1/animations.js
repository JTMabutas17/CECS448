var loadFile = function(event) {
    document.getElementById('progressBar').style.display = 'initial';
    start(0);
    
    var x = setTimeout(function() {
        
        document.getElementById('i').style.display = 'none';
        document.getElementById('output').style.display = 'initial';
        var image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
    }, 1100);
};

function start(al) {
     
    var bar = document.getElementById('progressBar');
    var status = document.getElementById('status');
    status.innerHTML = al + "%<br>";
    bar.value = al;
    al++;
    
    var sim = setTimeout(function() {
    
        start(al);
    }, 10);
    
    if (al == 100) {
      status.innerHTML = "100%<br>";
      status.innerHTML = "Image Uploaded<br>";
      bar.value = 100;
      clearTimeout(sim);
    }
};

function reloadpage(){
    alert("Account registered!")
    location.reload();
    return false;
}