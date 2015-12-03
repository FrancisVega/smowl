
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
  .fadeOut({"triggerHook":"onEnter", "duration":"40%"})
  .fadeIn ({"triggerHook":0.4, "duration":"40%"});

});
