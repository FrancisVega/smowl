
  ////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                            //
  //  Secuoyas Animation Library - Secuoyas (c) 2015                                            //
  //  Plugin - appearIn.js                                                                      //
  //                                                                                            //
  ////////////////////////////////////////////////////////////////////////////////////////////////


(function($$){

  /**
   * appearIn
   * @param {float} value Valor desde el que hacemos la entrada en Y.
   * @param {string} duration Valor de scroll en % o en px de la duración de la animación.
   * @param {integer} offset Valor en pixel para el "retardo" de la animación.
   * @param {string} triggerHook Elemento que hará de trigger para scrollmagic
   */

  $$.fn.appearIn = function(args) {

    // Valores por defecto
    $$SETUP.duration = typeof $$SETUP.duration !== 'undefined' ? $$SETUP.duration: "100%";
    $$SETUP.triggerHook = typeof $$SETUP.triggerHook !== 'undefined' ? $$SETUP.triggerHook: "onEnter";

    // Animamos
    $$(this.el, this.triggerel, this.pinel)
      .move({
        "axy":args.axy,
        "value":args.value,
        "duration":args.duration,
        "triggerHook":"onEnter"
      })
      .fadeIn({});

    return this;

  };

}(smowl));
