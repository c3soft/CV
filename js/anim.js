TweenMax.from(".name", 3, {
      delay: 1,
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

TweenMax.from(".btnContact", 3, {
      delay: 1.3,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});
  
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
