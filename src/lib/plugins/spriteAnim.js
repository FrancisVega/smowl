

  ////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                            //
  //  Secuoyas Animation Library - Secuoyas (c) 2015                                            //
  //  Plugin - spriteAnim.js                                                                    //
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
   * spriteAnim.js
   * @param {type} name Description
   * @return {sal}
   */

  $$.fn.spriteAnim = function(args) {

    // Valores por defecto
    args.duration    = typeof args.duration    !== 'undefined' ? args.duration: this.SETUP.duration;
    args.offset      = typeof args.offset      !== 'undefined' ? args.offset: this.SETUP.offset;
    args.triggerHook = typeof args.triggerHook !== 'undefined' ? args.triggerHook: this.SETUP.triggerHook;
    args.direction   = typeof args.direction   !== 'undefined' ? args.direction: "from";
    args.time        = typeof args.time        !== 'undefined' ? args.time: this.SETUP.time;
    args.reverse     = typeof args.reverse     !== 'undefined' ? args.reverse: this.SETUP.reverse;
    args.ease        = typeof args.ease        !== 'undefined' ? args.ease: this.SETUP.ease;
    args.delay       = typeof args.delay       !== 'undefined' ? args.delay: this.SETUP.delay;
    args.indicators  = typeof args.indicators  !== 'undefined' ? args.indicators: this.SETUP.delay;


    var _this = this;
    var trigger;
    var pinel;


    $(this.el).each(function(){

      var el = this;

      // Obtenemos el trigger
      trigger = $(el).closest(_this.triggerel)[0];

      // Pin element
      pinel = $(this).closest(_this.pinel)[0];

      var scene = new ScrollMagic.Scene( {
        triggerElement: trigger,
        duration: args.duration,
        reverse: args.reverse,
        offset: args.offset,
        triggerHook: args.triggerHook
      })

      .on("progress", function(e){
        // Añado el elemento a this.el
        this.el = el;
        var bgPos = -((e.progress*(args.frameCount-1)).toFixed(0))*args.frameWidth;
        $(el).css({"backgroundPosition": bgPos+"px 0"});
      })

      .addTo(_this.CONTROLLER)

      if (this.pinel != "undefined") {
        scene.setPin(this.pinel);
      }

    });

  }

}(sal));
