
        // TweenMax.to(".loading-screen", 4, {
        //       delay: 6.6,
        //       top: "-110%",
        //       ease: Expo.easeInOut
        // });
  
        TweenMax.from(".name", 3, {
            delay: 1,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".contact", 3, {
            delay: 1.1,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".options", 3, {
            delay: 1.1,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".bottom-text", 3, {
            delay: 1.3,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".copyright", 3, {
            delay: 1.5,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.staggerFrom(".media ul li", 2, {
            delay: 1.3,
            opacity: 0,
            y: 20,
            ease: Power3.easeInOut
      }, 0.1);

      TweenMax.from(".menu", 3, {
            delay: 1.4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      // TweenMax.from(".p1", 3, {
      //       delay: 0.6,
      //       opacity: 0,
      //       y: 20,
      //       ease: Expo.easeInOut
      // });

      // TweenMax.from(".p2", 3, {
      //       delay: 0.8,
      //       opacity: 0,
      //       y: 20,
      //       ease: Expo.easeInOut
      // });

      TweenMax.from("#one", 3, {
            delay: 1,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".btnContact", 3, {
            delay: 1.3,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });
  
      // var t1 = new TimelineMax();

      // t1.from(".ringOne", 4, {
      //       delay: 0.4,
      //       opacity: 0,
      //       y:40,
      //       ease: Expo.easeInOut
      // }).from(".ringTwo", 4, {
      //       delay: 0.9,
      //       opacity: 0,
      //       y: 40,
      //       ease: Expo.easeInOut
      // }, "-=5").to(".ringOne", 4, {
      //       delay: 0.4,
      //       x: 40,
      //       ease: Expo.easeInOut
      // }).to(".ringTwo", 4, {
      //       delay: 0.9,
      //       x: 40,
      //       ease: Expo.easeInOut
      // },"-=5");

var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml7 .letter',
    translateY: ["0.7em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: function(el, i) {
      return 2500 + 50 * i;
    }
  });

//  ///////////////////////// TIME LINE /////////////////////////

const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box =>{
      for(i = 0; i < allRonds.length; i++){
            if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){
                  let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})
                  let scene = new ScrollMagic.Scene({
                        triggerElement: allRonds[i],
                        reverse: true
                  })
                  .setTween(tween)
                  .addIndicators()
                  .addTo(controller)
            }
      }
})
