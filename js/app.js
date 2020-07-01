$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".opaque-navbar").addClass("opaque");
  } else {
    $(".opaque-navbar").removeClass("opaque");
  }
});

//  FONDUE HOME
function Parallax() {
  scrollPos = $(this).scrollTop();
  $(".intro, .header, .home").css({
    opacity: 1 - scrollPos / 1000
  });
  if (scrollPos > 1000) {
    $(".intro").css({});
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    Parallax();
  });
});


$(document).ready(function () {
  $('.nav-school').on('click', function () { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 2250; // Durée de l'animation (en ms)
    $('html, body').animate({
      scrollTop: $(page).offset().top
    }, speed); // Go
    return false;
  });
  $('.nav-job').on('click', function () {
    var page = $(this).attr('href');
    var speed = 2250;
    $('html, body').animate({
      scrollTop: $(page).offset().top
    }, speed);
    return false;
  });
  $('.nav-skills').on('click', function () {
    var page = $(this).attr('href');
    var speed = 2250;
    $('html, body').animate({
      scrollTop: $(page).offset().top
    }, speed);
    return false;
  });
  $('.nav-contact').on('click', function () {
    var page = $(this).attr('href');
    var speed = 2250;
    $('html, body').animate({
      scrollTop: $(page).offset().top
    }, speed);
    return false;
  });

  // $('.btnContactDirect').on('click', function () {
  //   var page = $(this).attr('href');
  //   var speed = 750;
  //   $('html, body').animate({
  //     scrollTop: $(page).offset().top
  //   }, speed);
  //   return false;
  // });

});