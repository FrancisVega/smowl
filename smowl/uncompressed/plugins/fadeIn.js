
  ////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                            //
  //  Secuoyas Motion Wrapper Library - Secuoyas (c) 2015                                       //
  //  Plugin - fadeIn.js                                                                    //
  //                                                                                            //
  ////////////////////////////////////////////////////////////////////////////////////////////////


(function($$){

    /**
     * Anima un elemento desde 0 a 1.0
     * @param {object} args Objeto animación
     * @param {string} args.value Valor inicial para el fadeIn
     * @param {string} args.duration La duración en % de scroll o px
     * @param {number} args.offset Retardo de la animación con respecto al trigger
     * @param {string} args.triggerHook Posición del trigger de scrollmagic
     * @param {number} args.time Tiempo de la animaciónen caso de tener duración 0
     * @param {boolean} args.reverse Determina si la animación sucede también con el scroll reverso
     * @return {object} Devuelve un objeto smowl.
     * @example
     * // fade in an element with default values
     * $$(".myClass").fadeIn();
     *
     * // fade in an element with duration at 50$ and the trigger hook at center
     * $$(".myClass").fadeIn({"duration": "50%", triggerHook: "onCenter"});
     *
     * // fade in an element specifying the trigger element
     * $$(".myClass", ".trigger").fadeIn();
     */

  $$.fn.fadeIn = function(args) {

    // Console
    if (window.smowl_setup.console)
      console.log("-> fadeIn()");

    // Default values
    var args = args || {};

    // Llamamos a fade
    $$(this.el, this.triggerel, this.pinel)
      .fade({
        "from": 0,
        "to": 1,
        "duration": args.duration,
        "offset": args.offset,
        "triggerHook": args.triggerHook,
        "time": args.time,
        "reverse": args.reverse,
        "ease": args.ease,
        "indicators": args.indicators
      });

    return this;

  };

}(smowl));
