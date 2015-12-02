
  ////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                            //
  //  Secuoyas Animation Library - Secuoyas (c) 2015                                            //
  //  Plugin - landIn.js                                                                        //
  //                                                                                            //
  ////////////////////////////////////////////////////////////////////////////////////////////////


(function($$){

  /**
   * landIn
   * @param {float} ratio Ratio de desplazamiento 1 = 100% 0.5 = 50%
   * @return {sal}
   */

  $$.fn.landIn = function(value, duration, offset, triggerHook) {

    // Si no se indica nada en el método los valores deben estar en el data-*
    args.duration    = typeof args.duration    !== 'undefined' ? args.duration: this.getData(this.el).duration;
    args.offset      = typeof args.offset      !== 'undefined' ? args.offset: this.getData(this.el).offset;
    args.triggerHook = typeof args.triggerHook !== 'undefined' ? args.triggerHook: this.getData(this.el).triggerHook;

    // Animamos
    $$(this.el, this.triggerel)
      .moveY(args.value, args.duration, args.offset, args.triggerHook)
      .scale(1.25);

    return this;

  };

}(sal));
