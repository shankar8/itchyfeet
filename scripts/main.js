$(function(){







});//close window scroll













// SCROLL MAGIC//

      //init ScrollMagic
<<<<<<< HEAD
      var controller = new ScrollMagic.Controller();

      //Build Scene

      var landingScene = new ScrollMagic.Scene({
            triggerElement: '.trigger1',
            duration: '50%',
            triggerHook: 0.9,
            reverse: true
=======
      /*var controller = new ScrollMagic.Controller();*/
/*
      //build a scene
      var ourScene = new ScrollMagic.Scene({
            triggerElement: '#landing h3',
            // duration: '50%',  //duration of trigger - 100% of viewport
            triggerHook: 0.9,  //ranges from 0 to 1
            reverse: false   //animation will only happens once..by default its true
      })
      .setClassToggle('#landing','change')//add class to #landing
      .addIndicators({
            name: 'landing scene',
            colorTrigger: 'red',
            // indent: 200,  //indents indicator
            colorStart: '#75C659',
            colorEnd: 'purple'
      })//add indicator plugin
      .addTo(controller);//linked to controller
*/
/*
      var pinLandingScene = new ScrollMagic.Scene({
            triggerElement: '#landing',
            triggerHook: 0,
            // duration: '200%'
>>>>>>> 85cf9e0ea51fbd405320425874e12e2d418b13ca
      })
      .setClassToggle('.landing','fade-in')
      .addIndicators({
            name: 'fade Scene',
            colorTrigger: 'pink',
            indent: 200,
            colorStart: 'orange',
            colorEnd: 'purple'
      })
      .addTo(controller);

<<<<<<< HEAD


      //pin each Section

      $(".sectionBox").each(function(){
            var sectionPin = new ScrollMagic.Scene({
                  triggerElement: this,
                  triggerHook: 0
            })
            .addIndicators({
                  name: 'section pin'
            })
            .setPin(this)
            .addTo(controller)
            ;
      })
=======
/*
      function fix_scroll() {
        var s = $(window).scrollTop();
        var fixedTitle = $('.landingImg');
        fixedTitle.css('position','absolute');
        fixedTitle.css('top',s + 'px');
      }fix_scroll();

      $(window).on('scroll',fix_scroll);

*/

>>>>>>> 85cf9e0ea51fbd405320425874e12e2d418b13ca




<<<<<<< HEAD
});
=======


      // loop through each element
      // $('.sectionBox').each(function(){
      //
      //       console.log(this);
      //
      //       var ourScene = new ScrollMagic.Scene({
      //             triggerElement: this.children[0],
      //             triggerHook : 0.9
      //       })
      //       .setClassToggle(this, 'change')
      //       .addIndicators({
      //             name: 'fade scene',
      //             colorTrigger: 'black',
      //             colorStart: 'green',
      //             colorEnd: 'purple'
      //       })
      //       .addTo(controller);
      // });
>>>>>>> 85cf9e0ea51fbd405320425874e12e2d418b13ca
