$(function(){




      //init ScrollMagic
      var controller = new ScrollMagic.Controller();

      //Build Scene

      var landingScene = new ScrollMagic.Scene({
            triggerElement: '.trigger1',
            duration: '50%',
            triggerHook: 0.9,
            reverse: true
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




});
