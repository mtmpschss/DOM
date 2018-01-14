  'use strict';
var secondLink = document.getElementsByTagName("a")[1];

function alarm(e){  
    e.preventDefault();
    console.log("Kliknieto link")
    console.log(e.type)
}

//secondLink.onclick = alarm;

//secondLink.addEventListener('Click', alarm);
//secondLink.removeEventListener('click', alarm);

var mainHeader = document.getElementById("main-header");

function zmianaRozmiaru(e) {
    if(e.type == "mouseover") {
        mainHeader.style.fontSize = "70px";        
    } else {
        mainHeader.style.fontSize = "inherit";
    }
}

mainHeader.addEventListener("mouseover", zmianaRozmiaru);
mainHeader.addEventListener("mouseout", zmianaRozmiaru);


document.getElementById("exampleDiv").addEventListener ('click', function(e) {
    e.preventDefault();
    console.log("Kliknięto w div!");
});

document.getElementById("exampleLink").addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Kliknięto w link!");
});

