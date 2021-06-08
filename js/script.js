$(document).ready(function () {
  $('.nav .container .menu-icon').click(function () { 
    $('.nav .container ul').toggleClass('menu-show');
  });
  $('.nav .container ul li a').click(function () {
    $('.nav .container ul').removeClass('menu-show');
  });

  $('.landing').click(function () {
    $('.nav .container ul').removeClass('menu-show');
  });


});