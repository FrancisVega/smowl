
  ////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                        //
  //  Secuoyas Animation Library - Secuoyas (c) 2015                                        //
  //  Animation Configure File                                                              //
  //                                                                                        //
  ////////////////////////////////////////////////////////////////////////////////////////////


$(function () {

  // Globals
  CONSOLE = true;
  INDICATORS = true;

  // Valores por defecto
  SETUP = {
    "ease":"Power0.easeNone"
  };

  // Animación
  $$(".box", ".box", ".box").spriteAnim({
    "duration": "100%",
    "frameWidth": "384",
    "frameCount": "43",
    "triggerHook": "onCenter",
    "indicators": false,
    "frameDir": "x"
  });

  $$(".texto", ".texto")
  .fade({"triggerHook":"onEnter", "duration":"100%", "from":1.0, "to":0.25})
});
