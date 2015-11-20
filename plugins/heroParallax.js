

    ////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                        //
    //  Secuoyas Animation Library - Secuoyas (c) 2015                                        //
    //  Plugin - heroParallax.js                                                              //
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


$(function () {
    (function($$){

        /**
         * heroParallax.js
         * @param {string} ratio El ratio de "parallax" de la imagen en %
         * @return {salObject} Devuelve un objeto SAL.
         */

        $$.fn.heroParallax = function(ratio) {

            var extra, image;

            $(this.el).each(function() {

                $(this).prepend('<div class="hero-parallax--back"></div>');
                image = $(this).css("background-image");
                extra = $(this).children(".hero-parallax--back");
                $(this).css({ "background-image": "none"});

                // Set some styles..
                $(extra).css({ "background-image": image });
                $(extra).css({ "z-index": "-1" });
                $(extra).css( { "transform": "translate(0, "+ ratio +")" });

                //$$(".hero-parallax--back").parallax();
                $$(extra[0], this).parallax();

            })

            return this;
        };

    }(sal));

});
