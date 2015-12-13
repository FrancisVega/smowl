
  ////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                        //
  //  Secuoyas MOtion Wrapper Library - Secuoyas (c) 2015                                   //
  //  Animation Configure File                                                              //
  //                                                                                        //
  ////////////////////////////////////////////////////////////////////////////////////////////


$(function () {

  window.smowl_setup = {
    "triggerHook": 1,
    "console": true,
    "indicators": true,
  };

  // Animación
  //$$(".box", ".box", ".box").spriteAnim({
    //"duration": "100%",
    //"frameWidth": "384",
    //"frameCount": "43",
    //"triggerHook": "onCenter",
    //"indicators": false,
    //"frameDir": "x"
  //});


  // fadein()
  $$(".box__shape--one").fadeIn();

  // fadeOut()
  $$(".box__shape--two").fadeOut();

  // fade()
  $$(".box__shape--three").fade({ "from":0.2, "to":0.8 });

  // scale()
  $$(".box__shape--four", ".box__trigger").scale({"axy":"all", "from":1, "to":2});

  $$(".hero").heroParallax();
  $$(".mod").modParallax({"ratio":3});
  // soa: function( gsobject, duration, offset, triggerHook, time, reverse, indicators, from, to ) {
});
