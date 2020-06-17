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
//

  $(document).ready(function () {
    $(window).scroll(function () {
      Parallax();
    });
  });
  
  // hover links to black //
  
  // $(window).scroll(function () {
  //   var height = $(window).scrollTop();
  //   if (height > 200) {
  //     $(".switch-text").hover(
  //       function () {
  //         $(this).css("color", "#000");
  //       },
  //       function () {
  //         $(this).css("color", "#9d9d9d");
  //       }
  //     );
  //   } else {
  //     $(".switch-text").hover(
  //       function () {
  //         $(this).css("color", "#FFF");
  //       },
  //       function () {
  //         $(this).css("color", "#9d9d9d");
  //       }
  //     );
  //   }
  // });
  
  
  $(document).ready(function () {
    // ********************** ACCUEIL Vers question 1
    $('#menu-formation').on('click', function () {
      //  if ($('#inputInfo1').val() != '' && $('#inputInfo2').val() != '') {
        //  $('.scrollTo2').attr('href', '#question3');
        //   $('.scrollTo').css({ cursor: 'pointer' });
          //------------------------------------------------
          const page = $(this).attr('href'); // Page cible
          const speed = 350; // Durée de l'animation (en ms)
          $('html, body').animate({ scrollTop: $(page).offset().top }, speed); // Go
       // }
    
        // if ($('#question1').val() == '') {
        //   $('.scrollTo1').attr('href', '#question1');
        //   $('.scrollTo').css({ cursor: 'wait' });
        //   //-----------------------------------------------
        //   const page = $(this).attr('href'); // Page cible
        //   const speed = 750; // Durée de l'animation (en ms)
        //   $('html, body').animate({ scrollTop: $(page).offset().top }, speed); // Go
        // }
      });
  })

