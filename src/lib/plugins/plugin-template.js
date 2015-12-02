
  ////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                            //
  //  Secuoyas Animation Library - Secuoyas (c) 2015                                            //
  //  Plugin - pluginName.js                                                                    //
  //                                                                                            //
  ////////////////////////////////////////////////////////////////////////////////////////////////


(function($$){

  /**
   * pluginName.js
   * @param {type} args Argumentos
   * @return {sal}
   */

  $$.fn.pluginName = function(args) {

    // Valores por defecto
    args = typeof args !== 'undefined' ? args: {};

    $$(this.el, this.triggerel, this.pinel)
      .move("x", value, duration, offset, triggerHook)
      .scale(1.25);

    return this;

  };

}(sal));
