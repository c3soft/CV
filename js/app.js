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
    // $('.nav-formation').on('click', function () {
    //       const page = $(this).attr('href'); // Page cible
    //       const speed = 350; // Durée de l'animation (en ms)
    //       $('html, body').animate({ scrollTop: $(page).offset().top }, speed); // Go
    //   });
    $('.nav-formation').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});


  });

