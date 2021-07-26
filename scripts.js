
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

var $elem = $('.html');
var $elem2 = $('.css');
var $elem3 = $('.php');
var $elem4 = $('.javascript');
var $elem5 = $('.wordpress');
var in_view = new Waypoint.Inview({
    element: $elem5[0],
    element: $elem4[0],
    element: $elem3[0],
    element: $elem2[0],
    element: $elem[0],
    enter: function() {
        $elem.addClass('start-html');
        $elem2.addClass('start-css');
        $elem3.addClass('start-php');
        $elem4.addClass('start-javascript');
        $elem5.addClass('start-wordpress');
    },
    exit: function() {
        $elem.removeClass('start-html');
        $elem2.removeClass('start-css');
        $elem3.removeClass('start-php');
        $elem4.removeClass('start-javascript');
        $elem5.removeClass('start-wordpress');
    }
});