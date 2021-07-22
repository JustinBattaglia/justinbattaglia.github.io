//var navbar = document.querySelector('nav').style.backgroundColor = "#00d4ff";

var navbar = document.querySelector('nav');

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20 ) {
        navbar.classList.add("nav-colored");
        navbar.classList.remove("nav-transparent");
    } 
    else {
        navbar.classList.add("nav-transparent");
        navbar.classList.remove("nav-colored");
    }
};