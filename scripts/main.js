$(function(){

//scroll to top of page when refreshed
$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

var
wWidth = $(window).width(),
wHeight = $(window).height();


//using snap svg to create the viewFrame
var paper = Snap('100%','100%');
paper.addClass("viewFrameSvg");

var viewFrame = paper.rect(0,0,'100%','100%');

viewFrame.attr({
      fill: 'none',
      stroke: 'white',
      strokeWidth: '20'
});

$('.viewFrameBox').append($(".viewFrameSvg"));

console.log(viewFrame.node);







//using snap svg to animate route on the map
var route = Snap('#route');

route.attr({strokeDasharray: 740,
strokeDashoffset: 740});

function routeAnimate(){
      route.animate({strokeDashoffset: 0}, 600);
}












//stop scrolling while animating

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}


/*------------------------------------------------------------
------------------------------------------------------------*/





//init controller

var controller = new ScrollMagic.Controller();


//////////////////////////  landing2 scene

//landing2 timelineMax
var landing2Tl = new TimelineMax();
landing2Tl.to( '.landing2',0.8,{y:'-100%',ease: Power3.easeOut})
.to( '.landing h3',0.8,{y:'-200',opacity: 0,
      onStart:disableScroll, onComplete:enableScroll, ease: Power3.easeOut},0)
.to('.viewFrameBox',0.6,{
      top: "50%",
      left: "50%",
      y: "-50%",
      x: "-50%",
      width:"70%",
      height: "50%"
},0);


//init landing2 Scene
var landing2Scene = new ScrollMagic.Scene({
      triggerElement: '.trigger2',
      trggerHook: 1
})
.setTween(landing2Tl)
// .addIndicators({
//       name: 'Section Trigger',
//       colorStart : 'pink'
// })
.addTo(controller);



//////////////////////////  Destination scene
//destination timelineMax
var destinationTl = new TimelineMax();
destinationTl.to( '.destination',0.6,{y:'-100%',
      onStart:disableScroll, onComplete:enableScroll, ease: Power3.easeOut},0.4)
.to( '.landing2 h3',0.6,{y:'-200',opacity: 0,ease: Power3.easeOut},0)
.to('.viewFrameBox',0.6,{
      width:"25%",
      height: "80%"
},0.3);




//init landing2 Scene
var destinationScene = new ScrollMagic.Scene({
      triggerElement: '.trigger3',
      trggerHook: 1
})
.setTween(destinationTl)
// .addIndicators({
//       name: 'Section Trigger',
//       colorStart : 'pink'
// })
.addTo(controller);






//////////////////////////  Map scene
//map timelineMax
var mapTl = new TimelineMax();
mapTl.to( '.destination h3',0.6,{x:'0',opacity: 0,ease: Power3.easeOut},0)
.to( '.map',0.6,{left:0,
      ease: Power3.easeOut,
      onStart: routeAnimate},0.4)
.to('.viewFrameBox',0.6,{
      width: 0.2*wHeight,
      height: 0.2*wHeight
},0);


//init landing2 Scene
var mapScene = new ScrollMagic.Scene({
      triggerElement: '.trigger4',
      trggerHook: 1
})
.setTween(mapTl)
// .addIndicators({
//       name: 'Section Trigger',
//       colorStart : 'pink'
// })
.addTo(controller);





//////////////////////////  moment scene
//moment timelineMax
var momentTl = new TimelineMax();
momentTl.to( '.moment',0.6,{y:'-100%',ease: Power3.easeOut},0.4)
.to( '.map h3',0.6,{y:'-200',opacity: 0,ease: Power3.easeOut},0)
.to('.viewFrameBox',0.6,{
      width:0.7*wHeight,
      height: 0.7*wHeight
},0.3)
.to(viewFrame.node,0.6,{
      fill: 'none',
      stroke: 'black',
      strokeWidth: '20'
},0.3)
;


//init landing2 Scene
var momentScene = new ScrollMagic.Scene({
      triggerElement: '.trigger5',
      trggerHook: 1
})
.setTween(momentTl)
// .addIndicators({
//       name: 'Section Trigger',
//       colorStart : 'pink'
// })
.addTo(controller);





//////////////////////////  memory scene
//memory timelineMax
var memoryTl = new TimelineMax();
memoryTl.to( '.memory',0.6,{y:'-100%',ease: Power3.easeOut},0.4)
.to( '.moment h3',0.6,{y:'-200',opacity: 0,ease: Power3.easeOut},0)
.to('.viewFrameBox',0.6,{
      width: wWidth,
      height: wHeight
},0.3)
.to(viewFrame.node,0.6,{
      fill: 'none',
      stroke: 'white',
      strokeWidth: '20'
},0.3)
;


//init landing2 Scene
var memoryScene = new ScrollMagic.Scene({
      triggerElement: '.trigger6',
      trggerHook: 1
})
.setTween(memoryTl)
// .addIndicators({
//       name: 'Section Trigger',
//       colorStart : 'pink'
// })
.addTo(controller);







//////////////////////////  footer scene
//footer timelineMax
var footerTl = new TimelineMax();
footerTl.to('.viewFrameBox',0.8,{
      top: "98%",
      left: "50%",
      y: "-50%",
      x: "-50%",
      width: wWidth,
      height: "3%"
})
.to( '.memory',0.8,{y:'-150%',ease: Power3.easeOut},0.2)
.to( '.footer',0.8,{y:'-50%',ease: Power3.easeOut},0.2)
;


//init landing2 Scene
var footerScene = new ScrollMagic.Scene({
      triggerElement: '.trigger7',
      trggerHook: 1
})
.setTween(footerTl)
// .addIndicators({
//       name: 'Section Trigger',
//       colorStart : 'pink'
// })
.addTo(controller);


















});//end of page loading function
