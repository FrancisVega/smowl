

    ////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                        //
    //   _ _ |  . _                                                                           //
    //  _\(_||. |_\                                                                           //
    //                                                                                        //
    //  Secuoyas Animation Library - Secuoyas (c) 2015                                        //
    //  Core - sal.js                                                                         //
    //                                                                                        //
    ////////////////////////////////////////////////////////////////////////////////////////////


    /*
    the mit license (mit)

    copyright (c) 2015 Secuoyas

    permission is hereby granted, free of charge, to any person obtaining a copy of this
    software and associated documentation files (the "software"), to deal in the software
    without restriction, including without limitation the rights to use, copy, modify, merge,
    publish, distribute, sublicense, and/or sell copies of the software, and to permit persons
    to whom the software is furnished to do so, subject to the following conditions:

    the above copyright notice and this permission notice shall be included in all copies or
    substantial portions of the software.

    the software is provided "as is", without warranty of any kind, express or implied,
    including but not limited to the warranties of merchantability, fitness for a particular
    purpose and noninfringement. in no event shall the authors or copyright holders be liable
    for any claim, damages or other liability, whether in an action of contract, tort or
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
        pinel     = typeof pinel     !== 'undefined' ? pinel:     "undefined"
        return new SAL(el, triggerel, pinel);
    };


    /**
     * Sal
     * @param {string} el Elemento (query) que vamos a animar
     * @param {string} triggerel Elemento (query) que vamos a usar como trigger
     * @return {sal}
     */

    var SAL = function(el, triggerel, pinel) {

        // About object
        this.about = {
            "name": "Secuoyas Animation Library",
            "autor": "Secuoyas",
            "version": "0.21"
        };

        // Globals
        this.CONTROLLER = new ScrollMagic.Controller();
        this.BROWSER_HEIGHT = $(window).height();
        this.BROWSER_WIDTH = $(window).width();
        this.INDICATORS = false;
        this.CONSOLE = true;

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
    //      |
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

        soa: function( gsobject, duration, offset, triggerHook, direction, time, reverse, indicators) {

            // Console
            if (this.CONSOLE)
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
                console.log("-> Hay Pin");
                scene.setPin(this.pinel);
            }

            if (this.INDICATORS || indicators) {
                scene.addIndicators();
            }

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
            if (this.CONSOLE)
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
         * @param {string} coord Coordenada que se va a animar "x", "y", "z"
         * @param {float} value Valor la coordenada
         * @param {string} duration Duración de la animación en %/px
         * @param {number} offset Valor en px para el "retardo" de la animación
         * @param {string} [triggerHook="onEnter"] Posición del trigger de ScrollMagic
         * @param {string} [direction="from"] Dirección de la animación, from o to
         * @return {sal-object}
         */

        move: function(config) {

            // Console
            if (this.CONSOLE)
                console.log("-> move()");

            config.duration    = typeof config.duration    !== 'undefined' ? config.duration:    "100%";
            config.offset      = typeof config.offset      !== 'undefined' ? config.offset:      0;
            config.triggerHook = typeof config.triggerHook !== 'undefined' ? config.triggerHook: "onEnter";
            config.direction   = typeof config.direction   !== 'undefined' ? config.direction:   "from";
            config.time        = typeof config.time        !== 'undefined' ? config.time:        "1";
            config.reverse     = typeof config.reverse     !== 'undefined' ? config.reverse:     true;
            config.ease        = typeof config.ease        !== 'undefined' ? config.ease:        "Power0.easeNone";
            config.delay       = typeof config.delay       !== 'undefined' ? config.delay:       "0";

            // TODO:
            // Por favor encontrar una solución a esta cha-pu-za
            var gsobject = {
                "x":{ "x": config.value, ease: config.ease, delay: config.delay },
                "y":{ "y": config.value, ease: config.ease, delay: config.delay },
                "z":{ "z": config.value, ease: config.ease, delay: config.delay }
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
                        gsobject[config.axy],
                        config.duration,
                        config.offset,
                        config.triggerHook,
                        config.direction,
                        config.time,
                        config.reverse
                );

            });

            return this;
        },


        /**
         * Scale
         * @param {object} config
         * @param {number} config.value Valor desde el que hacemos la escala.
         * @param {string} config.axy Coordebada de escala, x, y, z o all.
         * @param {string} config.duration Valor de scroll en % o en px de la duración de la animación.
         * @param {number} config.offset Valor en px para el "retardo" de la animación.
         * @param {string} config.direction Dirección de la animación, from o to.
         * @param {string} config.time Tiempo de animación en caso de que duration sea 0.
         * @param {string} config.reverse Determina si existe animación con el scroll inverso.
         * @param {string} config.ease Curva de animación.
         * @param {string} config.delay Delay de la animación si duración es 0.
         * @retunr {sal}
         */

        scale: function(config) {

            // Console
            if (this.CONSOLE)
                console.log("-> scale()");

            // Valores por defecto
            config.duration    = typeof config.duration    !== 'undefined' ? config.duration:    "100%";
            config.offset      = typeof config.offset      !== 'undefined' ? config.offset:      0;
            config.triggerHook = typeof config.triggerHook !== 'undefined' ? config.triggerHook: "onEnter";
            config.direction   = typeof config.direction   !== 'undefined' ? config.direction:   "from";
            config.time        = typeof config.time        !== 'undefined' ? config.time:        1;
            config.reverse     = typeof config.reverse     !== 'undefined' ? config.reverse:     true;
            config.ease        = typeof config.ease        !== 'undefined' ? config.ease:        "Power0.easeNone";
            config.delay       = typeof config.delay       !== 'undefined' ? config.delay:       "0";

            // TODO:
            // Por favor encontrar una solución a esta cha-pu-za
            var gsobject = {
                "x":{ "scaleX": config.value, ease: config.ease, delay: config.delay },
                "y":{ "scaleY": config.value, ease: config.ease, delay: config.delay },
                "z":{ "scaleZ": config.value, ease: config.ease, delay: config.delay },
                "all":{ "scale": config.value, ease: config.ease, delay: config.delay }
            };

            console.log(gsobject[config.axy]);

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
                        gsobject[config.axy],
                        config.duration,
                        config.offset,
                        config.triggerHook,
                        config.direction,
                        config.time,
                        config.reverse
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

        fadeOut: function(config) {

            // Console
            if (this.CONSOLE)
                console.log("-> fadeOut()");

            // Valores por defecto
            config.value       = typeof config.value       !== 'undefined' ? config.value:       "0"
            config.duration    = typeof config.duration    !== 'undefined' ? config.duration:    "100%";
            config.offset      = typeof config.offset      !== 'undefined' ? config.offset:      "0";
            config.triggerHook = typeof config.triggerHook !== 'undefined' ? config.triggerHook: "onEnter";
            config.direction   = typeof config.direction   !== 'undefined' ? config.direction:   "tj";
            config.time        = typeof config.time        !== 'undefined' ? config.time:        "1";
            config.reverse     = typeof config.reverse     !== 'undefined' ? config.reverse:     true;

            // Llamamos a fade
            $$(this.el, this.triggerel, this.pinel)
                .fade(
                        config.value,
                        config.duration,
                        config.offset,
                        config.triggerHook,
                        config.direction,
                        config.time,
                        config.reverse,
                        config.indicators
                );

            return this;

        },

        /**
         * Anima un elemento hacia opacidad uno
         * @param {object} config Objeto animación
         * @param {string} config.value Valor inicial para el fadeIn
         * @param {string} config.duration La duración en % de scroll o px
         * @param {number} config.offset Retardo de la animación con respecto al trigger
         * @param {string} config.triggerHook Posición del trigger de scrollmagic
         * @param {number} config.time Tiempo de la animaciónen caso de tener duración 0
         * @param {bool} config.reverse Determina si la animación sucede también con el scroll reverso
         * @return {bool} Devuelve un objeto SAL.
         */

        fadeIn: function(config) {

            // Console
            if (this.CONSOLE)
                console.log("-> fadeIn()");

            // Valores por defecto
            config.value       = typeof config.value       !== 'undefined' ? config.value:       "0"
            config.duration    = typeof config.duration    !== 'undefined' ? config.duration:    "100%";
            config.offset      = typeof config.offset      !== 'undefined' ? config.offset:      "0";
            config.triggerHook = typeof config.triggerHook !== 'undefined' ? config.triggerHook: "onEnter";
            config.direction   = typeof config.direction   !== 'undefined' ? config.direction:   "from";
            config.time        = typeof config.time        !== 'undefined' ? config.time:        "1";
            config.reverse     = typeof config.reverse     !== 'undefined' ? config.reverse:     true;
            config.indicators  = typeof config.indicators  !== 'undefined' ? config.indicators:  false;

            // Llamamos a fade
            $$(this.el, this.triggerel, this.pinel)
                .fade(
                        config.value,
                        config.duration,
                        config.offset,
                        config.triggerHook,
                        config.direction,
                        config.time,
                        config.reverse,
                        config.indicators
                );

            return this;

        },

    };

})();
