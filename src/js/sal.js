

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

    sal = $$ = function(el, triggerel) {
        triggerel = typeof triggerel !== 'undefined' ? triggerel: el;
        return new SAL(el, triggerel);
    };


    /**
     * Sal
     * @param {string} el Elemento (query) que vamos a animar
     * @param {string} triggerel Elemento (query) que vamos a usar como trigger
     * @return {sal}
     */

    var SAL = function(el, triggerel) {

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

        // Elemento y trigger, aun en formato String
        this.el = el;
        this.triggerel = triggerel;

        /**
         * Obtiene un objeto JSON con las etiquetas data y los valores del elemento
         * @param {string} el Elemento (query) del que vamos a obtener los data
         * @return {json}
         */

        this.getData = function(el) {
            return $(el).data();
        }

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

        soa: function( gsobject, duration, offset, triggerHook, direction, time, reverse) {

            var greenSockCompound = {
                "el": this.el,
                "time": time,
                "gsobject": gsobject
            }

            // Greensock animation
            var tween;
            if (direction == "from") {
                tween = TweenLite.from(
                        greenSockCompound["el"],
                        greenSockCompound["time"],
                        greenSockCompound["gsobject"]
                );
            } else {
                tween = TweenLite.to(
                        greenSockCompound["el"],
                        greenSockCompound["time"],
                        greenSockCompound["gsobject"]
                );
            }

            console.log(reverse);

            // ScrollMagic scene
            var scene = new ScrollMagic.Scene( {
                triggerElement: $(this.el).closest(this.triggerel)[0],
                duration: duration,
                reverse: reverse,
                offset: offset,
                triggerHook: triggerHook
            })

            // Attachments
            //.setTween(tween).addIndicators().addTo(this.CONTROLLER);
            .setTween(tween).addTo(this.CONTROLLER);

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

        move: function(
          axy, value, duration, offset, triggerHook, direction, time, reverse, ease, delay
        ) {

            duration = typeof duration !== 'undefined' ? duration: "100%";
            offset = typeof offset !== 'undefined' ? offset: 0;
            triggerHook = typeof triggerHook !== 'undefined' ? triggerHook: "onEnter";
            direction = typeof direction !== 'undefined' ? direction: "from";
            time = typeof time !== 'undefined' ? time: "1";
            reverse = typeof reverse !== 'undefined' ? reverse: true;

            // TODO:
            // Por favor encontrar una solución a esta cha-pu-za
            var gsobject = {
                "x":{ "x": value, ease: ease, delay: delay },
                "y":{ "y": value, ease: ease, delay: delay },
                "z":{ "z": value, ease: ease, delay: delay }
            }

            // Objeto GreenSock
            var smobject = {
                triggerElement: $(this.el).closest(this.triggerel)[0],
                duration: duration,
                triggerHook: triggerHook
            }

            var _this = this;
            var trigger;

            $(this.el).each(function() {

                // Obtenemos el trigger
                trigger = $(this).closest(_this.triggerel)[0];

                // Llamamos a soa
                $$(this, trigger).soa(
                        gsobject[axy],
                        duration,
                        offset,
                        triggerHook,
                        direction,
                        time,
                        reverse
                );

            });

            return this;
        },


        /**
         * Scale
         * @param {float} fromValue Valor desde el que hacemos la escala
         * @param {integer-string} duration Valor de scroll en % o en px de la duración de la
         * animación
         * @param {integer} offset Valor en px para el "retardo" de la animación
         * @retunr {sal}
         */

        scale : function(axy, value, duration, offset, triggerHook, direction, time, reverse) {

            // Valores por defecto
            duration = typeof duration !== 'undefined' ? duration: "100%";
            offset = typeof offset !== 'undefined' ? offset: 0;
            triggerHook = typeof triggerHook !== 'undefined' ? triggerHook: "onEnter";
            direction = typeof direction !== 'undefined' ? direction: "from";
            time = typeof time !== 'undefined' ? time: 1;
            reverse = typeof reverse !== 'undefined' ? reverse: true;

            var _this = this;
            var trigger;

            // Loop entre elementos jQuery
            $(this.el).each(function() {

                // Obtenemos el trigger
                trigger = $(this).closest(_this.triggerel)[0];

                // Llamamos a soa
                $$(this, trigger).soa(
                        {"scale": value},
                        duration,
                        offset,
                        triggerHook,
                        direction,
                        time,
                        reverse
                );

            });

            return this;
        },


        /**
         * Fade con SimpleObjectAnimation
         * @private
         * @param {float} duration El valor desde el que se va a animar
         * @param {float} duration La duración en % de scroll o px
         * @return {salObject} Devuelve un objeto SAL.
         */

        fade: function(value, duration, offset, triggerHook, direction, time, reverse) {

            if (duration == 0) {
                reverse = false;
            }

            // Loop por cada elementoSelectores $jQuery
            var _this = this;
            var trigger;

            // Loop entre elementos jQuery
            $(this.el).each(function() {

                // Obtenemos el trigger
                trigger = $(this).closest(_this.triggerel)[0];

                // Llamamos a soa
                $$(this, trigger).soa(
                        {"opacity": value},
                        duration,
                        offset,
                        triggerHook,
                        direction,
                        time,
                        reverse
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

        fadeOut: function(duration, offset, triggerHook, time, reverse) {

            // Valores por defecto
            duration = typeof duration !== 'undefined' ? duration: "100%";
            offset = typeof offset !== 'undefined' ? offset: 0;
            triggerHook = typeof triggerHook !== 'undefined' ? triggerHook: "onEnter";
            time = typeof time !== 'undefined' ? time: 1;
            revesre = typeof revesre !== 'undefined' ? revesre: true;

            $$(this.el, this.triggerel)
                .fade("0", duration, offset, triggerHook, "to", time, reverse);

            return this;

        },

        /**
         * Anima un elemento hacia opacidad uno
         * @private
         * @param {string} duration La duración en % de scroll o px
         * @param {number} offset Retardo de la animación con respecto al trigger
         * @param {string} triggerHook Posición del trigger de scrollmagic
         * @param {number} time Tiempo de la animaciónen caso de tener duración 0
         * @param {bool} reverse Determina si la animación sucede también con el scroll reverso
         * @return {bool} Devuelve un objeto SAL.
         */

        fadeIn: function(duration, offset, triggerHook, time, reverse) {

            // Valores por defecto
            duration = typeof duration !== 'undefined' ? duration: "100%";
            offset = typeof offset !== 'undefined' ? offset: 0;
            triggerHook = typeof triggerHook !== 'undefined' ? triggerHook: "onEnter";
            time = typeof time !== 'undefined' ? time: 1;
            reverse = typeof reverse !== 'undefined' ? reverse: true;


            $$(this.el, this.triggerel)
                .fade("0", duration, offset, triggerHook, "from", time, reverse);

            return this;

        },

    }
})();
