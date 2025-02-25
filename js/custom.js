/**************************************

    File Name: custom.js
    Template Name: Initiative
    Created By: HTML.Design
    http://themeforest.net/user/wpdestek

**************************************/

(function($) {
    "use strict";
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
    jQuery('.dmtop').click(function(){
        jQuery('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });
    $(document).ready(function() {
        setTimeout(function(){
            $('body').addClass('loaded');
        }, 3000);
    });
    $(document).ready(function() {
        $('#nav-expander').on('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
        $('#nav-close').on('click', function(e) {
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });
    });
})(jQuery);

$(function () {
    $(document).scroll(function () {
      var $nav = $(".bg-inverse");
      var $img= $(".example");
      console.log($img)
      $nav.toggleClass('scrolled', $(this).scrollTop() > $img.height()-50);
    });
  });