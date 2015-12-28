
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
    args = args || {};
    args.duration = args.duration || this.SETUP.duration;
    args.offset = args.offset || this.SETUP.offset;
    args.triggerHook = args.triggerHook || this.SETUP.triggerHook;
    args.frameDir = args.frameDir || this.SETUP.frameDir;
    args.time = args.time || this.SETUP.time;
    args.reverse = args.reverse || this.SETUP.reverse;
    args.ease = args.ease || this.SETUP.ease;
    args.delay = args.delay || this.SETUP.delay;
    args.indicators  = args.indicators  || this.SETUP.indicators;

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

}(smowl));
