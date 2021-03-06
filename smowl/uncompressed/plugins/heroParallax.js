
  ////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                            //
  //  Secuoyas Motion Wrapper Library - Secuoyas (c) 2015                                       //
  //  Plugin - heroParallax.js                                                                  //
  //                                                                                            //
  ////////////////////////////////////////////////////////////////////////////////////////////////


(function($$){

  /**
   * heroParallax
   * @param {float} ratio La velocidad de scroll
   * @param {float} duration La duración en % de scroll o px
   * @return {salObject} Devuelve un objeto SAL.
   */

  $$.fn.heroParallax = function(args) {

    // Console
    if (this.CONSOLE)
      console.log("-> heroParallax()");

    // Default values
    args = args || {};
    args.duration = args.duration || ($(this.el).innerHeight()) + "px";
    args.ratio = args.ratio || 0.2;

    var _this = this;
    var Trigger;

    // Selectores $jQuery
    $(this.el).each(function() {

      // Creamos el contenedor extra
      $(this).prepend('<div class="hero-parallax--back"></div>');

      // Obtenemos la imagen del contenedor parallax
      image = $(this).css("background-image");

      // Obtenemos el objeto del contenedor extra
      extra = $(this).children(".hero-parallax--back");

      // Aplicamos los estilos necesarios al contenedor parallax
      $(this).css({ "background-image": "none"});
      $(this).css({ "background-color": "transparent"});
      $(this).css({ "position": "relative"});
      $(this).css({ "overflow": "hidden"});
      $(this).css({ "z-index": 0});

      // Aplicamos los estilos necesarios al nuevo contenedor
      $(extra).css({ "background-image": image });
      $(extra).css({ "background-size": "cover" });
      $(extra).css({ "position": "absolute" });
      $(extra).css({ "z-index": "-1" });
      $(extra).css({ "left": "0" });
      $(extra).css({ "right": "0" });
      $(extra).css({ "top": "0" });
      $(extra).css({ "bottom": "0" });

      var ratio = $(extra).height()*args.ratio;

      // Llamamos a soa
      $$($(extra), _this.triggerel).soa(
        {
          "from": {"transform": "translate3d(0, 0, 0.001px)", ease: Power0.easeNone },
          "to": {"transform": "translate3d(0, "+ ratio +"px, 0.001px)", ease: Power0.easeNone },
        },
        args.duration,
        0,
        "onLeave",
        "1",
        true,
        false
      );

    });

    return this;

  };

}(smowl));
