

    ////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                        //
    //  Secuoyas Animation Library - Secuoyas (c) 2015                                        //
    //  Plugin - landIn.js                                                                    //
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
         * landIn
         * @param {float} ratio Ratio de desplazamiento 1 = 100% 0.5 = 50%
         * @return {sal}
         */

        $$.fn.landIn = function() {

            // Pasamos por todos los elementos
            $(this.el).each(function() {

                // Obtenemos los datos del tag data-*
                var ratio = $$(this).getData(this).ratio;
                var duration = $$(this).getData(this).duration;

                // Ponemos valores por defecto en caso que no existan en el data-*
                ratio = typeof ratio !== 'undefined' ? ratio: 1.1;
                duration = typeof duration !== 'undefined' ? duration: "50%";

                // Animamos
                //$$(this).fadeIn(duration).scale(ratio, duration);
                $$(this).soa( {"scale":2}));
            })

            return this;
        };

    }(sal));
});
