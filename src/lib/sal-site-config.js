
  ////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                        //
  //  Secuoyas Animation Library - Secuoyas (c) 2015                                        //
  //  Animation Configure File                                                              //
  //                                                                                        //
  ////////////////////////////////////////////////////////////////////////////////////////////


$(function () {

  window.ssetup = {
    "triggerHook": 0.432
  }


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
  //$$(".box__shape--one").fadeIn();

  // fadeOut()
  //$$(".box__shape--two").fadeOut();

  // fade()
  //$$(".box__shape--three").fade({ "from":0, "to":0.2 })

  // scale()
  //$$(".box__shape--four", ".box__trigger")

    $$(".box__shape--four", ".box__trigger").scale({"axy":"all", "from":1, "to":2});

  // soa: function( gsobject, duration, offset, triggerHook, time, reverse, indicators, from, to ) {
});
