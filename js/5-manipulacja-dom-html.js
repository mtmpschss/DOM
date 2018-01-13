'use strict';

var mainHeader = document.querySelector("h1");
mainHeader.innerHTML = "Nowa treść nagłówka";


var pobierzTresc = mainHeader.innerHTML;
//console.log(pobierzTresc);

var link = document.querySelectorAll("a")[0];
link.href = "#";
link.className = "nowa-klasa";


mainHeader.style.color = "#11aa22";