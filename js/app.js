/* Template Name: Devazo - Landing
   Author: Themesdesign
   Version: 1.0.0
   Created: Sep 2019
   File Description: Main JS file of the template
*/
//Start spinner function 
function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('.page', true);
    setVisible('#loading', false);
  });
  //end spinner function 
  function AddClass(){
    var navToggle =   document.getElementById('navbar-toggler');
      
    }
    var navToggle =   document.getElementById('navbar-toggler');
    if(navToggle){
        navToggle.addEventListener('click', function(){
           this.classList.toggle('navbar-togglerClose');
      });
    }
    var navclose = document.querySelector('.navbar-togglerClose');
    if( navclose){
        navclose.addEventListener('click', function(){
          document.getElementById('nav').classList.remove('show');
      });
    }

(function ($) {

    'use strict';
    
    // STICKY
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
    });

    // SmoothLink
    $('.navbar-nav a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // scrollspy
    $("#navbarCollapse").scrollspy({
        offset: 70
    });

})(jQuery)