
  ////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                        //
  //  Secuoyas Animation Library - Secuoyas (c) 2015                                        //
  //  Animation Configure File                                                              //
  //                                                                                        //
  ////////////////////////////////////////////////////////////////////////////////////////////


$(function () {


  // Globals
  //$$INDICATORS = false;
  $$CONSOLE_LOG = false;
  $$INDICATORS = false;

  // Valores por defecto
  $$SETUP = {
    "ease":"Power0.easeNone"
  }

  $$(".box", ".box", ".box").spriteAnim({
    "duration": "100%",
    "frameWidth": "384",
    "frameCount": "43",
    "triggerHook": "onCenter",
    "indicators": true,
    "frameDir": "x"
  });

  // Animacion
/*
 *  $$(".box", ".trigger-box").progress(
 *
 *      {"duration": "100%", "triggerHook": "onCenter"},
 *
 *      function(e) {
 *        // Scroll progress
 *        var p = e.progress;
 *
 *        // Config animación
 *        var nFrames = 12;
 *        var widthFrame = 104;
 *
 *        // Calcula el background position
 *        var bp = (-(p*(nFrames-1)).toFixed(0))*widthFrame;
 *
 *        // Aplicamos el background positino calculado
 *        $(this.el).css({'backgroundPosition':''+ bp +'px 0'});
 *      }
 *
 *  );
 */

/*
 *  $$(".ratm__title", ".ratm__title")
 *    .fadeIn({ "reverse": false, "duration": "50%", "triggerHook": "onCenter", "time": "2", "indicators": false })
 *    .move({ "reverse": false, "duration": "20%", "triggerHook": "onCenter", "axy": "y", "value": "-80px" });
 *
 *  $$(".a").fadeOut({"reverse": false, "duration": "50%", "indicators": false});
 *  $$(".b").fadeIn( {"reverse": false, "duration": "100%", "triggerHook": 0.6, "indicators": false});
 *
 *
 *  $$(".ratm__title").appearIn({"axy":"x", "value":"-100px", "duration":"50%"})
 *
 *    $$(".box", ".trigger-box")
 *    .move({ "axy":"x", "value":"100px", "triggerHook": "onEnter"})
 *    .scale({ "ease":"Power4.easeIn", "axy":"all", "value":"0", "direction":"to", "triggerHook": "onEnter"})
 *    .rotate({ "ease":"Power4.easeOut", "value":"-360", "triggerHook": "onEnter"})
 *    .fadeOut({ "triggerHook": "onEnter"})
 *
 *
 */
});
