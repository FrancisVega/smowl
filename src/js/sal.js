

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


    /**
     * Constructor sal
     * @param {string} el Elemento (query) que vamos a animar
     * @param {string} triggerel Elemento que vamos a usar como trigger
     * @return {sal}
     * @constructor
     */

    sal = $$ = function(el, triggerel) {
        triggerel = typeof triggerel !== 'undefined' ? triggerel: el;
        return new SAL(el, triggerel);
    };


    /**
     * Main function
     * @param {string} el Elemento (query) que vamos a animar
     * @param {string} triggerel Elemento que vamos a usar como trigger
     * @return {sal}
     */

    var SAL = function(el, triggerel) {

        // About object
        this.about = {
            "name": "Secuoyas Animation Library",
            "autor": "Secuoyas",
            "version": "0.1"
        };

        // Globals
        this.CONTROLLER = new ScrollMagic.Controller();
        this.BROWSER_HEIGHT = $(window).height();
        this.BROWSER_WIDTH = $(window).width();

        // Elemento y trigger, aun en formato String
        this.el = el;
        this.triggerel = triggerel;

        /**
         * getData
         * @param {string} el Elemento (query) del que vamos a obtener los data-*
         * @return {string|int|float}
         */

        this.getData = function(el) {
            return $(el).data();
        }

        // Devolvemos SAL
        return this;

    };


    //   /\  _ .
    //  /~~\|_)|
    //      |

    sal.fn = SAL.prototype = {

        /**
         * SOA. Single Object animation.
         * Mueve un elemento utilizando un objeto Greensock
         * @param {object} gsobject Objeto Greensock que contiene la animación
         * @param {object} animationObject Objeto tipo Greensock para animar el elemento
         * @param {string} triggerHook Elemento que hará de trigger para scrollmagic
         */

        soa : function( gsobject, duration, offset, triggerHook ) {

            // Greensock animation
            var tween = TweenLite.from( this.el, 1, gsobject );

            // ScrollMagic scene
            var scene = new ScrollMagic.Scene( {
                triggerElement: $(this.el).closest(this.triggerel)[0],
                duration: duration,
                triggerHook: triggerHook
            })

            // Attachments
            .setTween(tween).addTo(this.CONTROLLER);

            return this;

        },


        /**
         * Move
         * Mueve un elemento en la coordenada dada
         * @param {float} value Valor desde el que hacemos la escala
         * @param {integer-string} duration Duración de la animación en %/px
         * @param {integer} offset Valor en px para el "retardo" de la animación
         * @param {string} triggerHook Elemento que hará de trigger para scrollmagic
         */

        move: function(coord, value, duration, offset, triggerHook) {

            duration = typeof duration !== 'undefined' ? duration: "100%";
            offset = typeof offset !== 'undefined' ? offset: 0;
            triggerHook = typeof triggerHook !== 'undefined' ? triggerHook: "onEnter";

            // TODO:
            // Por favor encontrar una solución a esta cha-pu-za
            var gsobject = {
                "x":{"x": value},
                "y":{"y": value},
                "z":{"z": value}
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
                        gsobject[coord],
                        duration,
                        offset,
                        triggerHook
                );

            });

            return this;
        },


        /**
         * Move Y
         * Mueve un elemento en la coordenada Y, este método es básicamente para probar el
         * como funciona el uso de otros métodos más "core", en concreto move()
         * @param {float} value Valor desde el que hacemos la escala
         * @param {integer-string} duration Duración de la animación en %/px
         * @param {integer} offset Valor en px para el "retardo" de la animación
         * @param {string} triggerHook Elemento que hará de trigger para scrollmagic
         */

        moveY : function(value, duration, offset, triggerHook) {

            duration = typeof duration !== 'undefined' ? duration: "100%";
            offset = typeof offset !== 'undefined' ? offset: 0;
            triggerHook = typeof triggerHook !== 'undefined' ? triggerHook: "onEnter";

            // Uso del método privado move()
            this.move("y", value, duration, offset, triggerHook);

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

        scale : function(value, duration, offset, triggerHook) {

            // Valores por defecto
            duration = typeof duration !== 'undefined' ? duration: "100%";
            offset = typeof offset !== 'undefined' ? offset: 0;
            triggerHook = typeof triggerHook !== 'undefined' ? triggerHook: "onEnter";

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
                        triggerHook
                );

            });

            return this;
        },


        /**
         * Fade In con SimpleObjectAnimation
         * @param {float} fromValue El valor desde el que se va a animar
         * @param {float} duration La duración en % de scroll o px
         * @return {salObject} Devuelve un objeto SAL.
         */

        fadeIn : function(duration, offset, triggerHook) {

            // Valores por defecto
            duration = typeof duration !== 'undefined' ? duration: "100%";
            offset = typeof offset !== 'undefined' ? offset: 0;
            triggerHook = typeof triggerHook !== 'undefined' ? triggerHook: "onEnter";

            // Loop por cada elementoSelectores $jQuery
            var _this = this;
            var trigger;

            // Loop entre elementos jQuery
            $(this.el).each(function() {

                // Obtenemos el trigger
                trigger = $(this).closest(_this.triggerel)[0];

                // Llamamos a soa
                $$(this, trigger).soa(
                        {"opacity":"0"},
                        duration,
                        offset,
                        triggerHook
                );

            });

            return this;

        },


        /**
         * Parallax
         * @param {float} ratio La velocidad de scroll
         * @param {float} duration La duración en % de scroll o px
         * @return {salObject} Devuelve un objeto SAL.
         */

        parallax: function(ratio, duration) {

            duration = typeof duration !== 'undefined' ? duration:
                this.BROWSER_HEIGHT + ($(this.el).innerHeight()) + "px";

            var _this = this;
            var Trigger;

            // Selectores $jQuery
            $(this.el).each(function() {

                Trigger = this.closest(_this.triggerel);

                // Creamos el contenedor extra
                $(this).prepend('<div class="hero-parallax--back"></div>');

                // Obtenemos la imagen del contenedor parallax
                image = $(this).css("background-image");

                // Obtenemos el objeto del contenedor extra
                extra = $(this).children(".hero-parallax--back");

                // Aplicamos los estilos necesarios al contenedor parallax
                $(this).css({ "background-image": "none"});
                $(this).css({ "position": "relative"});
                $(this).css({ "overflow": "hidden"});

                // Aplicamos los estilos necesarios al nuevo contenedor
                $(extra).css({ "background-image": image });
                $(extra).css({ "position": "absolute" });
                $(extra).css({ "z-index": "-1" });
                $(extra).css({ "left": "0" });
                $(extra).css({ "right": "0" });
                $(extra).css({ "top": "0" });
                $(extra).css({ "bottom": "0" });
                $(extra).css({ "height": (100 * ratio) + "%" });
                $(extra).css( {
                    "transform":
                        "translate3d( 0, " + -(100 - (100 / ((100 * ratio) / 100))) + "%, 0.001px"
                });

                // Timeline
                var TWEEN = TweenLite.to(
                        $(extra), 1,
                        {
                            css: { "transform": "translate3d(0, 0%, 0.001px)" },
                            scale: 1.2,
                            ease: Power0.easeNone
                        });

                // Scene
                var SCENE = new ScrollMagic.Scene({
                    triggerElement: Trigger,
                    duration: duration,
                    triggerHook: "onEnter"
                })

                // Attachments
                .setTween(TWEEN).addIndicators().addTo(_this.CONTROLLER);
           });

        },


        /**
         * Hero Parallax
         * @param {float} ratio La velocidad de scroll
         * @param {float} duration La duración en % de scroll o px
         * @return {salObject} Devuelve un objeto SAL.
         */

        heroParallax: function(ratio, duration) {

            var _this = this;
            var Trigger;

            // Selectores $jQuery
            $(this.el).each(function() {

                var Trigger = this.closest(_this.triggerel);

                // Creamos el contenedor extra
                $(this).prepend('<div class="hero-parallax--back"></div>');

                // Obtenemos la imagen del contenedor parallax
                image = $(this).css("background-image");

                // Obtenemos el objeto del contenedor extra
                extra = $(this).children(".hero-parallax--back");

                // Aplicamos los estilos necesarios al contenedor parallax
                $(this).css({ "background-image": "none"});
                $(this).css({ "position": "relative"});
                $(this).css({ "overflow": "hidden"});

                // Aplicamos los estilos necesarios al nuevo contenedor
                $(extra).css({ "background-image": image });
                $(extra).css({ "position": "absolute" });
                $(extra).css({ "z-index": "-1" });
                $(extra).css({ "left": "0" });
                $(extra).css({ "right": "0" });
                $(extra).css({ "top": "0" });
                $(extra).css({ "bottom": "0" });
                $(extra).css( {
                    "transform":
                        "translate3d( 0, 50%, 0.001px"
                });


                // Timeline
                var TWEEN = TweenLite.from(
                        $(extra), 4,
                        {
                            css: { "transform": "translate3d(0, 0, 0.001px)" },
                            ease: Power0.easeNone
                        });

                // Scene
                var SCENE = new ScrollMagic.Scene({
                    triggerElement: Trigger,
                    duration: duration,
                    triggerHook: "onLeave"
                })

                // Attachments
                .setTween(TWEEN).addIndicators().addTo(_this.CONTROLLER);

            });
        }
    }
})();
