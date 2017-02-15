$(function(){

//init controller

var controller = new ScrollMagic.Controller();


//////////////////////////  landing2 scene

//landing2 timelineMax
var landing2Tl = new TimelineMax();
landing2Tl.to( '.landing2',0.6,{y:'-100%',ease: Power3.easeOut},0.4);


//init landing2 Scene
var landing2Scene = new ScrollMagic.Scene({
      triggerElement: '.trigger2',
      trggerHook: 1
})
.setTween(landing2Tl)
.addIndicators({
      name: 'Section Trigger',
      colorStart : 'pink'
})
.addTo(controller);



//////////////////////////  Destination scene
//destination timelineMax
var destinationTl = new TimelineMax();
destinationTl.to( '.destination',0.6,{y:'-100%',ease: Power3.easeOut},0.4);


//init landing2 Scene
var destinationScene = new ScrollMagic.Scene({
      triggerElement: '.trigger3',
      trggerHook: 1
})
.setTween(destinationTl)
.addIndicators({
      name: 'Section Trigger',
      colorStart : 'pink'
})
.addTo(controller);





//////////////////////////  moment scene
//moment timelineMax
var momentTl = new TimelineMax();
momentTl.to( '.moment',0.6,{y:'-100%',ease: Power3.easeOut},0.4);


//init landing2 Scene
var momentScene = new ScrollMagic.Scene({
      triggerElement: '.trigger4',
      trggerHook: 1
})
.setTween(momentTl)
.addIndicators({
      name: 'Section Trigger',
      colorStart : 'pink'
})
.addTo(controller);





//////////////////////////  memory scene
//memory timelineMax
var memoryTl = new TimelineMax();
memoryTl.to( '.memory',0.6,{y:'-100%',ease: Power3.easeOut},0.4);


//init landing2 Scene
var memoryScene = new ScrollMagic.Scene({
      triggerElement: '.trigger5',
      trggerHook: 1
})
.setTween(memoryTl)
.addIndicators({
      name: 'Section Trigger',
      colorStart : 'pink'
})
.addTo(controller);







});//end of page loading function
