
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

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });



function moveHam() {
    var ham = document.getElementsByClassName("hamburger")[0]
    var nav = document.getElementsByClassName("nav-content")[0]
    
    if (ham.classList.contains("closed")) {
        ham.classList.remove("closed");
        ham.classList.add("open");
        nav.style.top = "0px";
    } else {
        ham.classList.remove("open");
        ham.classList.add("closed");
        nav.style.top = "-100px";
    }
}
//for (let i = 0; i < maxSlide; i++) {
//    console.log(slideArray[i]);
//}