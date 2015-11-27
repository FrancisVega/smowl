

  ////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                            //
  //  Secuoyas Animation Library - Secuoyas (c) 2015                                            //
  //  Plugin - appearIn.js                                                                      //
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


(function($$){

  /**
   * appearIn
   * @param {float} value Valor desde el que hacemos la entrada en Y.
   * @param {string} duration Valor de scroll en % o en px de la duración de la animación.
   * @param {integer} offset Valor en pixel para el "retardo" de la animación.
   * @param {string} triggerHook Elemento que hará de trigger para scrollmagic
   */

  $$.fn.appearIn = function(config) {

    // Si no se indica nada en el método los valores deben estar en el data-*
    config.duration    = typeof config.duration    !== 'undefined' ? config.duration:    this.getData(this.el).duration;
    config.offset      = typeof config.offset      !== 'undefined' ? config.offset:      this.getData(this.el).offset;
    config.triggerHook = typeof config.triggerHook !== 'undefined' ? config.triggerHook: this.getData(this.el).triggerHook;

            config.duration,
            config.offset,
            config.triggerHook,
            config.direction,
            config.time,
            config.reverse

    // Animamos
    $$(this.el, this.triggerel, this.pinel)
    .move({
      
    }
    config.axy,
    config.value,
    config.duration,
    config.offset,
    config.triggerHook
    );

    return this;

  };

}(sal));