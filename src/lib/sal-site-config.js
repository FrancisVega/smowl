
  ////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                        //
  //  Secuoyas Animation Library - Secuoyas (c) 2015                                        //
  //  Animation Configure File                                                              //
  //                                                                                        //
  ////////////////////////////////////////////////////////////////////////////////////////////


$(function () {

  // Globals
  $$CONSOLE_LOG = false;
  $$INDICATORS = false;

  // Valores por defecto
  $$SETUP = {
    "ease":"Power0.easeNone"
  }

  // Animación
  $$(".box", ".box", ".box").spriteAnim({
    "duration": "100%",
    "frameWidth": "384",
    "frameCount": "43",
    "triggerHook": "onCenter",
    "indicators": true,
    "frameDir": "x"
  });

});
