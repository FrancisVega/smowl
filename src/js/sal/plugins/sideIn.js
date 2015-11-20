

    ////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                        //
    //  Secuoyas Animation Library - Secuoyas (c) 2015                                        //
    //  Plugin - sideIn.js                                                                    //
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
         * sideIn
         * @param {float} fromValue Valor desde el que hacemos la entrada en Y.
         * @param {string} duration Valor de scroll en % o en px de la duración de la animación.
         * @param {integer} offset Valor en pixel para el "retardo" de la animación.
         */

        $$.fn.sideIn = function(side) {

            // Pasamos por todos los elementos
            $(this.el).each(function() {

                // Seleccionamos un multiplicador según el lado
                var sides = { "left":1, "right":-1 }

                // Obtenemos los datos del tag data-*
                var amount = $$(this).getData(this).amount;
                var duration = $$(this).getData(this).duration;

                // Valor por defecto
                amount = typeof amount !== 'undefined' ? amount: "100";

                // Animamos
                $$(this).moveX(amount*sides[side]+"px", duration);

            })

            return this;
        };

    }(sal));
});
