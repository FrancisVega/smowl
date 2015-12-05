
  ////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                        //
  //  Secuoyas Animation Library - Secuoyas (c) 2015                                        //
  //  Animation Configure File                                                              //
  //                                                                                        //
  ////////////////////////////////////////////////////////////////////////////////////////////


$(function () {

  // Globals
  CONSOLE = false;
  INDICATORS = true;

  // Valores por defecto
  SETUP = {
    "ease":"Power0.easeNone"
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
  //$$(".box__shape--one").fadeIn();

  // fadeOut()
  //$$(".box__shape--two").fadeOut();

  // fade()
  //$$(".box__shape--three").fade({ "from":0, "to":0.2 })

  // scale()
  //$$(".box__shape--four", ".box__trigger")
  $$(".box__shape--four")
    .scale({"axy":"y", "from":0, "to":2})

});
