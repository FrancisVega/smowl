

  ////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                            //
  //   _ _ |  . _                                                                               //
  //  _\(_||. |_\                                                                               //
  //                                                                                            //
  //  Secuoyas Animation Library - Secuoyas (c) 2015                                            //
  //  sal.js v0.3                                                                               //
  //                                                                                            //
  ////////////////////////////////////////////////////////////////////////////////////////////////


  /*
  the mit license (mit)

  copyright (c) 2015 Secuoyas

  permission is hereby granted, free of charge, to any person obtaining a copy of this
  software and associated documentation files (the "software"), to deal in the software without
  restriction, including without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the software, and to permit persons to whom the
  software is furnished to do so, subject to the following conditions:

  the above copyright notice and this permission notice shall be included in all copies or
  substantial portions of the software.

  the software is provided "as is", without warranty of any kind, express or implied,
  including but not limited to the warranties of merchantability, fitness for a particular
  purpose and noninfringement. in no event shall the authors or copyright holders be liable for
  any claim, damages or other liability, whether in an action of contract, tort or
  otherwise, arising from, out of or in connection with the software or the use or other
  dealings in the software.
  */


var sal, $$;

(function () {


  /*
   * Constructor sal
   */

  sal = $$ = function(el, triggerel, pinel) {
    triggerel = typeof triggerel !== 'undefined' ? triggerel: el;
    pinel   = typeof pinel   !== 'undefined' ? pinel:   "undefined"
    return new SAL(el, triggerel, pinel);
  };


  /**
   * Sal
   * @param {string} el Elemento (query) que vamos a animar
   * @param {string} triggerel Elemento (query) que vamos a usar como trigger
   * @return {sal}
   */

  var SAL = function(el, triggerel, pinel) {

    // Globals
    this.CONTROLLER = new ScrollMagic.Controller();
    this.BROWSER_HEIGHT = $(window).height();
    this.BROWSER_WIDTH = $(window).width();

    // DEBUGGIN
    $$SETUP.INDICATORS = typeof $$SETUP.INDICATORS !== 'undefined' ? $$SETUP.INDICATORS: false;
    $$SETUP.CONSOLE_LOG = typeof $$SETUP.CONSOLE_LOG !== 'undefined' ? $$SETUP.CONSOLE_LOG: false;

    this.INDICATORS = $$INDICATORS;
    this.CONSOLE_LOG = $$CONSOLE_LOG;

    // Valores por defecto globales
    $$SETUP.duration = typeof $$SETUP.duration !== 'undefined' ? $$SETUP.duration: "0";
    $$SETUP.offset = typeof $$SETUP.offset !== 'undefined' ? $$SETUP.offset: "0";
    $$SETUP.triggerHook = typeof $$SETUP.triggerHook !== 'undefined' ? $$SETUP.triggerHook: "onEnter";
    $$SETUP.direction = typeof $$SETUP.direction !== 'undefined' ? $$SETUP.direction: "from";
    $$SETUP.time = typeof $$SETUP.time !== 'undefined' ? $$SETUP.time: "1";
    $$SETUP.reverse = typeof $$SETUP.reverse !== 'undefined' ? $$SETUP.reverse: true;
    $$SETUP.ease = typeof $$SETUP.ease !== 'undefined' ? $$SETUP.ease: "Power0.easeNone";
    $$SETUP.delay = typeof $$SETUP.delay !== 'undefined' ? $$SETUP.delay: "0";

    this.SETUP = {
      "duration": $$SETUP.duration,
      "offset": $$SETUP.offset,
      "triggerHook": $$SETUP.triggerHook,
      "direction": $$SETUP.direction,
      "time": $$SETUP.time,
      "reverse": $$SETUP.reverse,
      "ease": $$SETUP.ease,
      "delay": $$SETUP.delay,
    }

    // Elemento y trigger, aun en formato String
    this.el = el;
    this.triggerel = triggerel;
    this.pinel = pinel;

    /**
     * Obtiene un objeto JSON con las etiquetas data y los valores del elemento
     * @param {string} el Elemento (query) del que vamos a obtener los data
     * @return {json}
     */

    this.getData = function(el) {
      return $(el).data();
    };

    return this;

  };


  //   /\  _ .
  //  /~~\|_)|
  //    |
  //
  // TODO: Unificar el ratio de modParallax y HeroParallax

  sal.fn = SAL.prototype = {

    /**
     * Single Object animation.
     * Mueve un elemento utilizando un objeto Greensock.
     * @private
     * @param {object} gsobject Objeto Greensock que contiene la animación
     * @param {string} duration Duración de la animación en %/px
     * @param {number} offset Valor en px para el "retardo" de la animación
     * @param {string} triggerHook Elemento que hará de trigger para scrollmagic
     * @example
     * Devuelve bla bla bla
     * $$(".myClass").soa({"x":"-200px"});
     * @return {sal-object}
     */

    soa: function(
                 gsobject, duration, offset, triggerHook, direction, time, reverse, indicators) {

      // Console
      if (this.CONSOLE_LOG)
        console.log("-> soa()");

      var greenSockCompound = {
        "el": this.el,
        "time": time,
        "gsobject": gsobject
      };

      // Greensock animation
      var tween;
      if (direction == "from") {
        tween = TweenLite.from(
          greenSockCompound.el,
          greenSockCompound.time,
          greenSockCompound.gsobject
        );
      } else {
        tween = TweenLite.to(
          greenSockCompound.el,
          greenSockCompound.time,
          greenSockCompound.gsobject
        );
      }

      // ScrollMagic scene
      var scene = new ScrollMagic.Scene( {
        triggerElement: $(this.el).closest(this.triggerel)[0],
        duration: duration,
        reverse: reverse,
        offset: offset,
        triggerHook: triggerHook
      })

      // Attachments
      .setTween(tween).addTo(this.CONTROLLER);

      if (this.pinel != "undefined") {
        scene.setPin(this.pinel);
      }

      if (this.INDICATORS || indicators) {
        scene.addIndicators();
      }

      return this;

    },

    rotate: function(args) {
      // Console
      if (this.CONSOLE_LOG)
        console.log("-> rotate()");

      args.duration    = typeof args.duration    !== 'undefined' ? args.duration: this.SETUP.duration;
      args.offset      = typeof args.offset      !== 'undefined' ? args.offset: this.SETUP.offset;
      args.triggerHook = typeof args.triggerHook !== 'undefined' ? args.triggerHook: this.SETUP.triggerHook;
      args.direction   = typeof args.direction   !== 'undefined' ? args.direction: this.SETUP.direction;
      args.time        = typeof args.time        !== 'undefined' ? args.time: this.SETUP.time;
      args.reverse     = typeof args.reverse     !== 'undefined' ? args.reverse: this.SETUP.reverse;
      args.ease        = typeof args.ease        !== 'undefined' ? args.ease: this.SETUP.ease;
      args.delay       = typeof args.delay       !== 'undefined' ? args.delay: this.SETUP.delay;
      args.origin      = typeof args.origin      !== 'undefined' ? args.origin: this.SETUP.delay;

      var _this = this;
      var trigger;

      $(this.el).each(function() {

        // Obtenemos el trigger
        trigger = $(this).closest(_this.triggerel)[0];

        // Obtenemos el pinel
        pinel = $(this).closest(_this.pinel)[0];

        // Llamamos a soa
        $$(this, trigger, pinel).soa(
          {"rotation":args.value, transformOrigin: args.origin, ease: args.ease, delay: args.delay},
          args.duration,
          args.offset,
          args.triggerHook,
          args.direction,
          args.time,
          args.reverse,
          args.indicators
        );

      });

      return this;


    },

    /**
     * Fade con SimpleObjectAnimation
     * @param {float} duration El valor desde el que se va a animar
     * @param {float} duration La duración en % de scroll o px
     * @return {salObject} Devuelve un objeto SAL.
     */

    fade: function(value, duration, offset, triggerHook, direction, time, reverse, indicators) {

      // Console
      if (this.CONSOLE_LOG)
        console.log("-> fade()");

      if (duration === 0) {
        reverse = false;
      }

      // Loop por cada elementoSelectores $jQuery
      var _this = this;
      var trigger;
      var pinel;

      // Loop entre elementos jQuery
      $(this.el).each(function() {

        // Obtenemos el trigger
        trigger = $(this).closest(_this.triggerel)[0];

        // Obtenemos el pinel
        pinel = $(this).closest(_this.pinel)[0];

        // Llamamos a soa
        $$(this, trigger, pinel).soa(
          {"opacity": value},
          duration,
          offset,
          triggerHook,
          direction,
          time,
          reverse,
          indicators
        );

      });

      return this;

    },


    /**
     * Mueve un elemento en la coordenada dada
     * @param {object} args Argumentos en formato 'object notation'
     * @param {string} args.coord Coordenada que se va a animar "x", "y", "z", "all"
     * @param {string} args.value Valor la coordenada
     * @param {string} [args.duration="100%"] Duración de la animación en %/px
     * @param {string} [args.offset="0"] Valor en px para el "retardo" de la animación
     * @param {string} [args.triggerHook="onEnter"] Posición del trigger de ScrollMagic
     * @param {string} [args.direction="from"] Dirección de la animación, from o to
     * @param {string} [args.time="1"] Timepo de animación cuando duration = 0
     * @param {bool} [args.reverse=true] True si la animación sucede con el scroll inverso
     * @param {string} [args.ease="Power0.easeNone"] Curva de la animación
     * @param {string} [args.delay="0"] Retardo de la animación cuando duration = 0
     * @return {sal-object}
     */

    move: function(args) {

      // Console
      if (this.CONSOLE_LOG)
        console.log("-> move()");

      args.duration    = typeof args.duration    !== 'undefined' ? args.duration: this.SETUP.duration;
      args.offset      = typeof args.offset      !== 'undefined' ? args.offset: this.SETUP.offset;
      args.triggerHook = typeof args.triggerHook !== 'undefined' ? args.triggerHook: this.SETUP.triggerHook;
      args.direction   = typeof args.direction   !== 'undefined' ? args.direction: this.SETUP.direction;
      args.time        = typeof args.time        !== 'undefined' ? args.time: this.SETUP.time;
      args.reverse     = typeof args.reverse     !== 'undefined' ? args.reverse: this.SETUP.reverse;
      args.ease        = typeof args.ease        !== 'undefined' ? args.ease: this.SETUP.ease;
      args.delay       = typeof args.delay       !== 'undefined' ? args.delay: this.SETUP.delay;

      // TODO:
      // Por favor encontrar una solución a esta cha-pu-za
      var gsobject = {
        "x":{ "x": args.value, ease: args.ease, delay: args.delay },
        "y":{ "y": args.value, ease: args.ease, delay: args.delay },
        "z":{ "z": args.value, ease: args.ease, delay: args.delay }
      };

      var _this = this;
      var trigger;

      $(this.el).each(function() {

        // Obtenemos el trigger
        trigger = $(this).closest(_this.triggerel)[0];

        // Obtenemos el pinel
        pinel = $(this).closest(_this.pinel)[0];

        // Llamamos a soa
        $$(this, trigger, pinel).soa(
          gsobject[args.axy],
          args.duration,
          args.offset,
          args.triggerHook,
          args.direction,
          args.time,
          args.reverse
        );

      });

      return this;
    },


    /**
     * Scale
     * @param {object} args
     * @param {number} args.value Valor desde el que hacemos la escala.
     * @param {string} args.axy Coordebada de escala, x, y, z o all.
     * @param {string} args.duration Valor de scroll en % o en px de la duración de la animación.
     * @param {number} args.offset Valor en px para el "retardo" de la animación.
     * @param {string} args.direction Dirección de la animación, from o to.
     * @param {string} args.time Tiempo de animación en caso de que duration sea 0.
     * @param {string} args.reverse Determina si existe animación con el scroll inverso.
     * @param {string} args.ease Curva de animación.
     * @param {string} args.delay Delay de la animación si duración es 0.
     * @retunr {sal}
     */

    scale: function(args) {

      // Console
      if (this.CONSOLE_LOG)
        console.log("-> scale()");

      // Valores por defecto
      args.duration    = typeof args.duration    !== 'undefined' ? args.duration: this.SETUP.duration;
      args.offset      = typeof args.offset      !== 'undefined' ? args.offset: this.SETUP.offset;
      args.triggerHook = typeof args.triggerHook !== 'undefined' ? args.triggerHook: this.SETUP.triggerHook;
      args.direction   = typeof args.direction   !== 'undefined' ? args.direction: this.SETUP.direction;
      args.time        = typeof args.time        !== 'undefined' ? args.time: this.SETUP.time;
      args.reverse     = typeof args.reverse     !== 'undefined' ? args.reverse: this.SETUP.reverse;
      args.ease        = typeof args.ease        !== 'undefined' ? args.ease: this.SETUP.ease;
      args.delay       = typeof args.delay       !== 'undefined' ? args.delay: this.SETUP.delay;

      // TODO:
      // Por favor encontrar una solución a esta cha-pu-za
      var gsobject = {
        "x":   { "scaleX": args.value, ease: args.ease, delay: args.delay },
        "y":   { "scaleY": args.value, ease: args.ease, delay: args.delay },
        "z":   { "scaleZ": args.value, ease: args.ease, delay: args.delay },
        "all": { "scale":  args.value, ease: args.ease, delay: args.delay }
      };

      var _this = this;
      var trigger;

      // Loop entre elementos jQuery
      $(this.el).each(function() {

        // Obtenemos el trigger
        trigger = $(this).closest(_this.triggerel)[0];

        // Obtenemos el pinel
        pinel = $(this).closest(_this.pinel)[0];

        // Llamamos a soa
        $$(this, trigger, pinel).soa(
          gsobject[args.axy],
          args.duration,
          args.offset,
          args.triggerHook,
          args.direction,
          args.time,
          args.reverse
        );

      });

      return this;

    },


    /**
     * Anima un elemento hacia opacidad cero
     * @private
     * @param {string} duration La duración en % de scroll o px
     * @param {number} offset Retardo de la animación con respecto al trigger
     * @param {string} triggerHook Posición del trigger de scrollmagic
     * @param {number} time Tiempo de la animaciónen caso de tener duración 0
     * @param {bool} reverse Determina si la animación sucede también con el scroll reverso
     * @return {bool} Devuelve un objeto SAL.
     */

    fadeOut: function(args) {

      // Console
      if (this.CONSOLE_LOG)
        console.log("-> fadeOut()");

      // Valores por defecto
      args.value       = typeof args.value       !== 'undefined' ? args.value: "0"
      args.duration    = typeof args.duration    !== 'undefined' ? args.duration: this.SETUP.duration;
      args.offset      = typeof args.offset      !== 'undefined' ? args.offset: this.SETUP.offset;
      args.triggerHook = typeof args.triggerHook !== 'undefined' ? args.triggerHook: this.SETUP.triggerHook;
      args.direction   = typeof args.direction   !== 'undefined' ? args.direction: "to";
      args.time        = typeof args.time        !== 'undefined' ? args.time: this.SETUP.time;
      args.reverse     = typeof args.reverse     !== 'undefined' ? args.reverse: this.SETUP.reverse;
      args.ease        = typeof args.ease        !== 'undefined' ? args.ease: this.SETUP.ease;
      args.delay       = typeof args.delay       !== 'undefined' ? args.delay: this.SETUP.delay;

      // Llamamos a fade
      $$(this.el, this.triggerel, this.pinel)
        .fade(
            args.value,
            args.duration,
            args.offset,
            args.triggerHook,
            args.direction,
            args.time,
            args.reverse,
            args.indicators
        );

      return this;

    },

    /**
     * Anima un elemento hacia opacidad uno
     * @param {object} args Objeto animación
     * @param {string} args.value Valor inicial para el fadeIn
     * @param {string} args.duration La duración en % de scroll o px
     * @param {number} args.offset Retardo de la animación con respecto al trigger
     * @param {string} args.triggerHook Posición del trigger de scrollmagic
     * @param {number} args.time Tiempo de la animaciónen caso de tener duración 0
     * @param {bool} args.reverse Determina si la animación sucede también con el scroll reverso
     * @return {bool} Devuelve un objeto SAL.
     */

    fadeIn: function(args) {

      // Console
      if (this.CONSOLE_LOG)
        console.log("-> fadeIn()");

      // Valores por defecto
      args.value       = typeof args.value       !== 'undefined' ? args.value: "0"
      args.duration    = typeof args.duration    !== 'undefined' ? args.duration: this.SETUP.duration;
      args.offset      = typeof args.offset      !== 'undefined' ? args.offset: this.SETUP.offset;
      args.triggerHook = typeof args.triggerHook !== 'undefined' ? args.triggerHook: this.SETUP.triggerHook;
      args.direction   = typeof args.direction   !== 'undefined' ? args.direction: "from";
      args.time        = typeof args.time        !== 'undefined' ? args.time: this.SETUP.time;
      args.reverse     = typeof args.reverse     !== 'undefined' ? args.reverse: this.SETUP.reverse;
      args.ease        = typeof args.ease        !== 'undefined' ? args.ease: this.SETUP.ease;
      args.delay       = typeof args.delay       !== 'undefined' ? args.delay: this.SETUP.delay;

      // Llamamos a fade
      $$(this.el, this.triggerel, this.pinel)
        .fade(
            args.value,
            args.duration,
            args.offset,
            args.triggerHook,
            args.direction,
            args.time,
            args.reverse,
            args.indicators
        );

      return this;

    },

  };

})();
