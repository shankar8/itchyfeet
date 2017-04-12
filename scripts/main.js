$(function(){

//scroll to top of page when refreshed
$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});



/*------------------------------------------------------------
------------------------------------------------------------*/






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













/*------------------------------------------------------------
------------------------------------------------------------*/


/*swipe events*/
(function($) {
  $.fn.swipeEvents = function() {
    return this.each(function() {

      var startX,
          startY,
          $this = $(this);

      $this.bind('touchstart', touchstart);

      function touchstart(event) {
        var touches = event.originalEvent.touches;
        if (touches && touches.length) {
          startX = touches[0].pageX;
          startY = touches[0].pageY;
          $this.bind('touchmove', touchmove);
          $this.bind('touchend', touchend);
        }
        event.preventDefault();
      }

      function touchmove(event) {
        var touches = event.originalEvent.touches;
        if (touches && touches.length) {
          var deltaX = startX - touches[0].pageX;
          var deltaY = startY - touches[0].pageY;

          if (deltaX >= 50) {
            $this.trigger("swipeLeft");
          }
          if (deltaX <= -50) {
            $this.trigger("swipeRight");
          }
          if (deltaY >= 50) {
            $this.trigger("swipeUp");
          }
          if (deltaY <= -50) {
            $this.trigger("swipeDown");
          }
          if (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50) {
            $this.unbind('touchmove', touchmove);
            $this.unbind('touchend', touchend);
          }
        }
        event.preventDefault();
      }

      function touchend(event) {
        $this.unbind('touchmove', touchmove);
        event.preventDefault();
      }

    });
  };
})(jQuery);



/*------------------------------------------------------------
------------------------------------------------------------*/


















/*------------------------------------------------------------
------------------------------------------------------------*/


var moveDirection;

var landing2Tl = new TimelineMax();
landing2Tl.to( '.landing2',0.8,{y:'-100%',ease: Power3.easeOut})
.to( '.landing h3',0.8,{y:'-100%',opacity: 0,ease: Power3.easeOut},0)
.to('.viewFrameBox',0.6,{
      top: "50%",
      left: "50%",
      y: "-50%",
      x: "-50%",
      width:"70%",
      height: "50%"
},0);
landing2Tl.pause();

var destinationTl = new TimelineMax();
destinationTl.to( '.destination',0.6,{y:'-100%', ease: Power3.easeOut},0.4)
.to( '.landing2 h3',0.6,{y:'-100%',opacity: 0,ease: Power3.easeOut},0)
.to('.viewFrameBox',0.6,{
      width:"25%",
      height: "80%"
},0.3);
destinationTl.pause();

var mapTl = new TimelineMax();
mapTl.to( '.destination h3',0.6,{x:'0',opacity: 0,ease: Power3.easeOut},0)
.to( '.map',0.6,{x:'100%',
      ease: Power3.easeOut,
      onStart: routeAnimate},0.4)
.to('.viewFrameBox',0.6,{
      width: 0.2*wHeight,
      height: 0.2*wHeight
},0);
mapTl.pause();

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
},0.3);
momentTl.pause();

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
},0.3);
memoryTl.pause();

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
.to( '.footer',0.8,{y:'-50%',ease: Power3.easeOut},0.2);
footerTl.pause();



///////////////////////////////////////////////////////////////////
var mapRevTl = new TimelineMax();
mapRevTl.to('.map',0.8,{x:'-100%',ease: Power3.easeOut});


var sectionRevTl = new TimelineMax();



function animateSection(animateActive,moveDirection){

      if(($(animateActive).attr("data-index"))<7){
            var nextClass =  $(animateActive).next().attr('class');
            var nextClassName = nextClass.substring(11,nextClass.length);
      }


      var activeClass = $(animateActive).attr('class');
      var className = activeClass.substring(11, activeClass.length-7);

      if(moveDirection === "down"){
            if(className === "landing"){
                  console.log("landing down")
            }else{
                  eval(className+"Tl").play();
                  console.log("notlanding down")
            }
      }else{
            if(className === "footer"){
                  console.log("footer up")
            }else{
                  eval(nextClassName+"Tl").reverse();
                  console.log("notfooter up")
            }
      }

      if($(".landing").hasClass('active')){
            $('.topBtn').removeClass('show');
      }else{
            $('.topBtn').addClass('show');
      }




}//end of animateSection






$('.topBtn').on('click',function(){

      var clickActive = $('.active').attr('class');
      var clickActiveClass = clickActive.substring(11, clickActive.length-7);
      // console.log(clickActiveClass);

      // var frameTl = new TimelineMax();
      // frameTl.to('.viewFrameBox',0.3,{
      //       top: "99%",
      //       left: "50%",
      //       y: "-50%",
      //       x: "-50%",
      //       width: "600",
      //       height: "2%"
      // },0);


      $('.sectionBox:not(.landing)').each(function(){
            var thisClass = $(this).attr('class');
            var thisClassName = thisClass.substring(11);
            // console.log(thisClassName);

            if(!$(this).hasClass('active')){
                  console.log(thisClass);
                  eval(thisClassName+"Tl").pause(0);
            }

            eval(clickActiveClass+"Tl").reverse();
      });

      $('.active:first').removeClass('active');
      $('.landing').addClass('active');


});













/*------------------------------------------------------------
------------------------------------------------------------*/












/*------------------------------------------------------------
------------------------------------------------------------*/

var moveDown = function(){
      var timeNow = new Date().getTime();
      // Cancel scroll if currently animating or within quiet period
      if(timeNow - lastAnimation < 1000) {
          event.preventDefault();
          return;
      }
      // console.log("movedown");

      moveDirection = 'down';
      // return moveDirection;


      if(($('.sectionBox.active').attr("data-index"))<7){
            $('.sectionBox.active').next().addClass('active');
            $('.active:first').removeClass('active');
      }



      var animateActive = $('.active');

      animateSection(animateActive, moveDirection);





      lastAnimation = timeNow;
}

var moveUp = function(){
      var timeNow = new Date().getTime();
      // Cancel scroll if currently animating or within quiet period
      if(timeNow - lastAnimation < 500 + 1000) {
          event.preventDefault();
          return;
      }
      // console.log("moveUp");

      moveDirection = 'up';
      // return moveDirection;


      if(($('.sectionBox.active').attr("data-index"))>1){
            $('.sectionBox.active').prev().addClass('active');
            $('.active:last').removeClass('active');
      }



      var animateActive = $('.active');

      animateSection(animateActive, moveDirection);


      lastAnimation = timeNow;
}
/*------------------------------------------------------------
------------------------------------------------------------*/



$('.sectionBox').swipeEvents().bind("swipeDown",  function(event){
  moveUp();
}).bind("swipeUp", function(event){
  moveDown();
});






/*scroll events*/
$(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
  event.preventDefault();
  var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
  if(!$("body").hasClass("disabled-onepage-scroll")) init_scroll(event, delta);
});



$(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
  event.preventDefault();
  var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
  init_scroll(event, delta);
});

var lastAnimation = 0;


    function init_scroll(event, delta) {
        deltaOfInterest = delta;

      //   var timeNow = new Date().getTime();
      //   // Cancel scroll if currently animating or within quiet period
      //   if(timeNow - lastAnimation < 500 + 1000) {
      //       event.preventDefault();
      //       return;
      //   }


        if (deltaOfInterest < 0) {
          moveDown();
        } else {
          moveUp();
        }
      //   lastAnimation = timeNow;
    }











/*keyboard*/

$(document).keydown(function(e) {
 var tag = e.target.tagName.toLowerCase();

 if (!$("body").hasClass("disabled-onepage-scroll")) {
    switch(e.which) {
      case 38:
        if (tag != 'input' && tag != 'textarea') moveUp();
      break;
      case 40:
        if (tag != 'input' && tag != 'textarea') moveDown();
      break;
      case 32: //spacebar
        if (tag != 'input' && tag != 'textarea') moveDown();
      break;
      case 33: //pageg up
        if (tag != 'input' && tag != 'textarea') moveUp();
      break;
      case 34: //page dwn
        if (tag != 'input' && tag != 'textarea') moveDown();
      break;
      case 36: //home

      break;
      case 35: //end

      break;
      default: return;
    }

 }

});// end keydown function



});//end window load function

/*------------------------------------------------------------
------------------------------------------------------------*/




























//
//
//
//
//
//
// $(function(){
//
// //scroll to top of page when refreshed
// $(window).on('beforeunload', function(){
//   $(window).scrollTop(0);
// });
//
// var
// wWidth = $(window).width(),
// wHeight = $(window).height();
//
//
// //using snap svg to create the viewFrame
// var paper = Snap('100%','100%');
// paper.addClass("viewFrameSvg");
//
// var viewFrame = paper.rect(0,0,'100%','100%');
//
// viewFrame.attr({
//       fill: 'none',
//       stroke: 'white',
//       strokeWidth: '20'
// });
//
// $('.viewFrameBox').append($(".viewFrameSvg"));
//
// console.log(viewFrame.node);
//
//
//
//
//
//
//
// //using snap svg to animate route on the map
// var route = Snap('#route');
//
// route.attr({strokeDasharray: 740,
// strokeDashoffset: 740});
//
// function routeAnimate(){
//       route.animate({strokeDashoffset: 0}, 600);
// }
//
//
//
//
//
//
//
//
//
//
//
//
// //stop scrolling while animating
//
// // left: 37, up: 38, right: 39, down: 40,
// // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
// var keys = {37: 1, 38: 1, 39: 1, 40: 1};
//
// function preventDefault(e) {
//   e = e || window.event;
//   if (e.preventDefault)
//       e.preventDefault();
//   e.returnValue = false;
// }
//
// function preventDefaultForScrollKeys(e) {
//     if (keys[e.keyCode]) {
//         preventDefault(e);
//         return false;
//     }
// }
//
// function disableScroll() {
//   if (window.addEventListener) // older FF
//       window.addEventListener('DOMMouseScroll', preventDefault, false);
//   window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove  = preventDefault; // mobile
//   document.onkeydown  = preventDefaultForScrollKeys;
// }
//
// function enableScroll() {
//     if (window.removeEventListener)
//         window.removeEventListener('DOMMouseScroll', preventDefault, false);
//     window.onmousewheel = document.onmousewheel = null;
//     window.onwheel = null;
//     window.ontouchmove = null;
//     document.onkeydown = null;
// }
//
//
// /*------------------------------------------------------------
// ------------------------------------------------------------*/
//
//
//
//
//
// //init controller
//
// var controller = new ScrollMagic.Controller();
//
//
// //////////////////////////  landing2 scene
//
// //landing2 timelineMax
// var landing2Tl = new TimelineMax();
// landing2Tl.to( '.landing2',0.8,{y:'-100%',ease: Power3.easeOut})
// .to( '.landing h3',0.8,{y:'-200',opacity: 0,
//       onStart:disableScroll, onComplete:enableScroll, ease: Power3.easeOut},0)
// .to('.viewFrameBox',0.6,{
//       top: "50%",
//       left: "50%",
//       y: "-50%",
//       x: "-50%",
//       width:"70%",
//       height: "50%"
// },0);
//
//
// //init landing2 Scene
// var landing2Scene = new ScrollMagic.Scene({
//       triggerElement: '.trigger2',
//       trggerHook: 1
// })
// .setTween(landing2Tl)
// // .addIndicators({
// //       name: 'Section Trigger',
// //       colorStart : 'pink'
// // })
// .addTo(controller);
//
//
//
// //////////////////////////  Destination scene
// //destination timelineMax
// var destinationTl = new TimelineMax();
// destinationTl.to( '.destination',0.6,{y:'-100%',
//       onStart:disableScroll, onComplete:enableScroll, ease: Power3.easeOut},0.4)
// .to( '.landing2 h3',0.6,{y:'-200',opacity: 0,ease: Power3.easeOut},0)
// .to('.viewFrameBox',0.6,{
//       width:"25%",
//       height: "80%"
// },0.3);
//
//
//
//
// //init landing2 Scene
// var destinationScene = new ScrollMagic.Scene({
//       triggerElement: '.trigger3',
//       trggerHook: 1
// })
// .setTween(destinationTl)
// // .addIndicators({
// //       name: 'Section Trigger',
// //       colorStart : 'pink'
// // })
// .addTo(controller);
//
//
//
//
//
//
// //////////////////////////  Map scene
// //map timelineMax
// var mapTl = new TimelineMax();
// mapTl.to( '.destination h3',0.6,{x:'0',opacity: 0,ease: Power3.easeOut},0)
// .to( '.map',0.6,{left:0,
//       ease: Power3.easeOut,
//       onStart: routeAnimate},0.4)
// .to('.viewFrameBox',0.6,{
//       width: 0.2*wHeight,
//       height: 0.2*wHeight
// },0);
//
//
// //init landing2 Scene
// var mapScene = new ScrollMagic.Scene({
//       triggerElement: '.trigger4',
//       trggerHook: 1
// })
// .setTween(mapTl)
// // .addIndicators({
// //       name: 'Section Trigger',
// //       colorStart : 'pink'
// // })
// .addTo(controller);
//
//
//
//
//
// //////////////////////////  moment scene
// //moment timelineMax
// var momentTl = new TimelineMax();
// momentTl.to( '.moment',0.6,{y:'-100%',ease: Power3.easeOut},0.4)
// .to( '.map h3',0.6,{y:'-200',opacity: 0,ease: Power3.easeOut},0)
// .to('.viewFrameBox',0.6,{
//       width:0.7*wHeight,
//       height: 0.7*wHeight
// },0.3)
// .to(viewFrame.node,0.6,{
//       fill: 'none',
//       stroke: 'black',
//       strokeWidth: '20'
// },0.3);
//
//
// //init landing2 Scene
// var momentScene = new ScrollMagic.Scene({
//       triggerElement: '.trigger5',
//       trggerHook: 1
// })
// .setTween(momentTl)
// // .addIndicators({
// //       name: 'Section Trigger',
// //       colorStart : 'pink'
// // })
// .addTo(controller);
//
//
//
//
//
// //////////////////////////  memory scene
// //memory timelineMax
// var memoryTl = new TimelineMax();
// memoryTl.to( '.memory',0.6,{y:'-100%',ease: Power3.easeOut},0.4)
// .to( '.moment h3',0.6,{y:'-200',opacity: 0,ease: Power3.easeOut},0)
// .to('.viewFrameBox',0.6,{
//       width: wWidth,
//       height: wHeight
// },0.3)
// .to(viewFrame.node,0.6,{
//       fill: 'none',
//       stroke: 'white',
//       strokeWidth: '20'
// },0.3);
//
//
// //init landing2 Scene
// var memoryScene = new ScrollMagic.Scene({
//       triggerElement: '.trigger6',
//       trggerHook: 1
// })
// .setTween(memoryTl)
// // .addIndicators({
// //       name: 'Section Trigger',
// //       colorStart : 'pink'
// // })
// .addTo(controller);
//
//
//
//
//
//
//
// //////////////////////////  footer scene
// //footer timelineMax
// var footerTl = new TimelineMax();
// footerTl.to('.viewFrameBox',0.8,{
//       top: "98%",
//       left: "50%",
//       y: "-50%",
//       x: "-50%",
//       width: wWidth,
//       height: "3%"
// })
// .to( '.memory',0.8,{y:'-150%',ease: Power3.easeOut},0.2)
// .to( '.footer',0.8,{y:'-50%',ease: Power3.easeOut},0.2)
// ;
//
//
// //init landing2 Scene
// var footerScene = new ScrollMagic.Scene({
//       triggerElement: '.trigger7',
//       trggerHook: 1
// })
// .setTween(footerTl)
// // .addIndicators({
// //       name: 'Section Trigger',
// //       colorStart : 'pink'
// // })
// .addTo(controller);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// });//end of page loading function
