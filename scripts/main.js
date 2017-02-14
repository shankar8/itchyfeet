$(function(){





//init scrollmagic controller
var controller = new ScrollMagic.Controller();

//section pinning for each section

$('.sectionBox').each(function(){

      //init page navigation scene
      var navScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0
      })
      .setPin(this,{pushFollowers: false})
      .addTo(controller)
      .addIndicators({
            name: 'section pin',
            colorStart: 'orange'
      });





});












});
