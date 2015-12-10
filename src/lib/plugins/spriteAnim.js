
  ////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                            //
  //  Secuoyas Motion Wrapper Library - Secuoyas (c) 2015                                       //
  //  Plugin - spriteAnim.js                                                                    //
  //                                                                                            //
  ////////////////////////////////////////////////////////////////////////////////////////////////


(function($$){

  /**
   * spriteAnim.js
   * @param {type} name Description
   * @param {string} args.duration Description
   * @param {string} args.offset Description
   * @param {string} args.triggerHook Description
   * @param {string} args.frameDir Description
   * @param {string} args.ram Description
   * @param {bool} args.reverse Description
   * @param {string} args.ease Description
   * @param {string} args.delay Description
   * @param {bool} args.indicators Description
   * @return {sal}
   */

  $$.fn.spriteAnim = function(args) {

    // Valores por defecto
    args             = typeof args             !== 'undefined' ? args: {};
    args.duration    = typeof args.duration    !== 'undefined' ? args.duration: this.SETUP.duration;
    args.offset      = typeof args.offset      !== 'undefined' ? args.offset: this.SETUP.offset;
    args.triggerHook = typeof args.triggerHook !== 'undefined' ? args.triggerHook: this.SETUP.triggerHook;
    args.frameDir    = typeof args.frameDir    !== 'undefined' ? args.frameDir: this.SETUP.frameDir;
    args.time        = typeof args.time        !== 'undefined' ? args.time: this.SETUP.time;
    args.reverse     = typeof args.reverse     !== 'undefined' ? args.reverse: this.SETUP.reverse;
    args.ease        = typeof args.ease        !== 'undefined' ? args.ease: this.SETUP.ease;
    args.delay       = typeof args.delay       !== 'undefined' ? args.delay: this.SETUP.delay;
    args.indicators  = typeof args.indicators  !== 'undefined' ? args.indicators: this.SETUP.indicators;

    var _this = this;
    var trigger;
    var pinel;

    $(this.el).each(function(){

      var el = this;

      // Obtenemos el trigger
      trigger = $(el).closest(_this.triggerel)[0];

      // Pin element
      pinel = $(this).closest(_this.pinel)[0];

      // New Scene
      $$(trigger, trigger, pinel).scene({
        "duration": args.duration,
        "offset": args.offset,
        "triggerHook": args.triggerHook,
        "direction": args.direction,
        "reverse": args.reverse,
        "indicators": args.indicators
      })
      .on("progress", function(e){
        var bgPos = -((e.progress*(args.frameCount-1)).toFixed(0))*args.frameWidth;
        var bgAxy = "backgroundPosition"+args.frameDir.toUpperCase();
        if (args.frameDir == "x") {
          $(el).css({"backgroundPositionX": bgPos+"px"});
        } else if(args.frameDir == "y") {
          $(el).css({"backgroundPositionY": bgPos+"px"});
        }
      });

    });

    return this;

  };

}(sal));
