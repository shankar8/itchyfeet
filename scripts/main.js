$(function(){

var lastScroll = 0;
var windowHeight = $(window).height();

$(".landing").addClass("focusBox");


/*disable and enable scroll*/

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









/*start window scroll events*/
$(window).on("scroll", function(){

/* up and down functions*/
      function goDown(){

            if(!$(".sectionBox.focusBox").is(":last-child")){
                  disableScroll();
                  $(function () {
                        $(".sectionBox.focusBox").next().animate({
                                    top: 0
                              }, {
                                    duration: 500,
                                    queue: false,
                                    complete: function(){
                                          console.log("kakaka");
                                          $(this).addClass("focusBox");
                                          $(".sectionBox.focusBox").first().removeClass("focusBox");
                                          enableScroll();
                                    }
                        });

                  });
            }

      } //end goDown function



      function goUp(){

            if(!$(".sectionBox.focusBox").is(":first-child")){
                  disableScroll();
                  $(function () {
                        $(".sectionBox.focusBox").animate({
                                    top: (windowHeight)
                              }, {
                                    duration: 500,
                                    queue: false,
                                    complete: function(){
                                          console.log("lalala");
                                          $(this).prev().addClass("focusBox");
                                          $(this).removeClass("focusBox");
                                          enableScroll();
                                    }
                        });
                  });
            }

      }


/*figuring out up or down scroll*/
      var wScroll = $(window).scrollTop();
      console.log(wScroll);
      if(wScroll>lastScroll){
            console.log("down");
            goDown();
      }else{
            console.log("up");
            goUp();
      }
      lastScroll = wScroll;









});//close window scroll















//animate to particular section
/*
      var landing2Top = $(".landing2").offset().top;
      console.log(landing2Top);

      $(window).scroll(function(){
            var wScroll = $(window).scrollTop();
            console.log(wScroll);



            if ( (wScroll>10) && (wScroll<20) ){
                  console.log("jaja");
                  $('html, body').animate({scrollTop: landing2Top},800);
                  return false;
            }

      })
*/
/*
      var lastScrollTop = 0;
      $(".sectionBox.landing").addClass("focusBox");

      var windowHeight = $(window).height();
      var sectionBoxHeight = $(".landing2").height();

      console.log(windowHeight);
      console.log(sectionBoxHeight);

*/
      //test page scrolling
/*
      $(window).scroll(function(){
            var wScroll = $(window).scrollTop();

            //Adding class focusBox to active section

            $(".sectionBox").each(function(){

                  var boxTop = $(this).offset().top,
                  boxHeight = $(this).height(),
                  boxBottom = boxTop + boxHeight;

                  if( (wScroll >= boxTop) && (wScroll < boxBottom )){
                        $(this).addClass("focusBox");
                  }else{
                        $(this).removeClass("focusBox");
                  }
            });








      });*/

///////////////////////////////////////////////
/*Scroll just once*/
/*
$(document).on("scroll",function(){
*/

      /*------------------------------------------------------*/
      // up dowm animation on scroll
/*
      function goDown(){
            console.log("down");
            $(window).scrollTop(0);
            disableScroll();
            $(".sectionBox").animate({
                  top: -(windowHeight)
            }, 200, function(){
                  console.log("lalala");
                  enableScroll();

            });
            //console.log(nextBox);
            //console.log(nextBoxTop);
            //$('html, body').animate({scrollTop: nextBoxTop},300, function(){
            //      enableScroll();
            //});
            return false;
      }

      function goUp(){
            console.log("up");
            disableScroll();

            //var prevBox = $(".sectionBox.focusBox").prev();
            //var prevBoxTop = prevBox.offset().top;
            //console.log(prevBox);
            //console.log(prevBoxTop);
            //$('html, body').animate({scrollTop: prevBoxTop},300, function(){
            //      enableScroll();
            //});
            return false;
      }
*/
      /*---------------------------------------------------------------------*/



      //Scrolling based on mouse movement
/*      var st = $(this).scrollTop();
      if (st > lastScrollTop){
            $(document).off('scroll');
            console.log("stop");
            console.log("down");
            $(window).scrollTop(0);
            disableScroll();
            $(".sectionBox").animate({
                  top: -(windowHeight)
            }, 200);
            //return false;
            //goDown();
         // downscroll code
      } else {
            goUp();
         // upscroll code
      }
      lastScrollTop = st;

});
*/
/* function(){
      console.log("lalala");
      enableScroll();
}*/






/*--------------------------------------------------------*/
//stop scroll while animating


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
/*var keys = {37: 1, 38: 1, 39: 1, 40: 1};

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
*/


/*---------------------------------------------------------*/





/*------------------------------------------------------*/
// up dowm animation on scroll
/*
      function goDown(){
            console.log("down");
            disableScroll();
            var nextBox = $(".sectionBox.focusBox").next();
            var nextBoxTop = nextBox.offset().top;
            //console.log(nextBox);
            //console.log(nextBoxTop);
            $('html, body').animate({scrollTop: nextBoxTop},300, function(){
                  enableScroll();
            });
            return false;
      }

      function goUp(){
            console.log("up");
            disableScroll();
            var prevBox = $(".sectionBox.focusBox").prev();
            var prevBoxTop = prevBox.offset().top;
            //console.log(prevBox);
            //console.log(prevBoxTop);
            $('html, body').animate({scrollTop: prevBoxTop},300, function(){
                  enableScroll();
            });
            return false;
      }
*/
/*---------------------------------------------------------------------*/

      //Scrolling based on mouse movement
/*      var lastScrollTop = 0;
      $(window).scroll(function(event){
         var st = $(this).scrollTop();
         if (st > lastScrollTop){
               goDown();
             // downscroll code
         } else {
               goUp();
            // upscroll code
         }
         lastScrollTop = st;
      });

*/





// SCROLL MAGIC//

      //init ScrollMagic
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
      })
      .addIndicators({
            name: 'landing scene',
            colorTrigger: 'red',
            // indent: 200,  //indents indicator
            colorStart: '#75C659',
            colorEnd: 'purple'
      })//add indicator plugin
      .setPin('.landingImg')
      .addTo(controller);

/*
      function fix_scroll() {
        var s = $(window).scrollTop();
        var fixedTitle = $('.landingImg');
        fixedTitle.css('position','absolute');
        fixedTitle.css('top',s + 'px');
      }fix_scroll();

      $(window).on('scroll',fix_scroll);

*/







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



/*
      $(".main").onepage_scroll({
         sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
         easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                          // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
         animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
         pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
         updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
         beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
         afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
         loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
         keyboard: true,                  // You can activate the keyboard controls
         responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                          // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                          // the browser's width is less than 600, the fallback will kick in.
         direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
      });
*/








});
