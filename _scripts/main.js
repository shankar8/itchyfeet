$(function(){

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



/*
      //init ScrollMagic
      var controller = new ScrollMagic.Controller();

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


      var pinLandingScene = new ScrollMagic.Scene({
            triggerElement: '#landing',
            triggerHook: 0,
            // duration: '30%'
      })
      .setPin('.landingImg')
      .addTo(controller);


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

});
