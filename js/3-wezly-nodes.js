'use strict';


var pierwszyDiv = document.getElementById("parFirst");
// lub: var pierwszyDiv = document.querySelector("#parFirst");

var rodzicDiva = pierwszyDiv.parentElement;
//console.log(rodzicDiva);

var dzieciDiva = pierwszyDiv.lastChild;
//console.log(dzieciDiva);

var rodzenstwoNastepne = pierwszyDiv.nextElementSibling;
//console.log(rodzenstwoNastepne);

var rodzenstwoPoprzednie = pierwszyDiv.previousElementSibling;
//console.log(rodzenstwoPoprzednie);



var dzieciElementu = pierwszyDiv.childNodes;

dzieciElementu.forEach(function(element)
                          {console.log("nodeType:" + element.nodeType)});



/*var dzieciElementu2 = pierwszyDiv.children;
for(var i=0; i<dzieciElementu2.length; i++) {
    console.log(dzieciElementu2[i]);
}*/