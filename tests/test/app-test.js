describe("Smowl Unit Tests", function() {

  describe("Plugins", function() {

    scrollTimeOut = 40;

    beforeEach(function() {
      // Element
      element = '.box__shape--one';
      $element = $(element);
      // Smowl settings
      window.smowlEase = "Power0.easeNone";
      // Window Height
      windowHeight = window.innerHeight;
      // Element height
      $element.height();
    });

    after(function() {
      $('body').scrollTop(0);
    })

    describe("core.plugin.fadeIn()", function() {
      beforeEach(function() {
        // Fade in!!
        $$(element).fadeIn();
      });
      it("Opacity value at 0 scroll equal to 0", function(done) {
        $('body').scrollTop(0);
        window.setTimeout(function(){
          expect($element.prop('style').opacity).equal('0');
          done();
        }, scrollTimeOut );
      });
      it("Opacity value at 1/4 equal to 0.25", function(done) {
        $('body').scrollTop((windowHeight/4));
        window.setTimeout(function(){
          expect((Math.round($element.prop('style').opacity*100)/100)).equal(0.25);
          done();
        }, scrollTimeOut);
      });
      it("Opacity value at 1/3 equal to 0.333", function(done) {
        $('body').scrollTop((windowHeight/3));
        window.setTimeout(function(){
          expect((Math.round($element.prop('style').opacity*1000)/1000)).equal(0.333);
          done();
        }, scrollTimeOut);
      });
      it("Opacity value at mid scroll equal to 0.5", function(done) {
        $('body').scrollTop((windowHeight/2));
        window.setTimeout(function(){
          expect($element.prop('style').opacity).equal('0.5');
          done();
        }, scrollTimeOut);
      });
      it("Opacity value at top scroll equal to 1", function(done) {
        $('body').scrollTop((windowHeight));
        window.setTimeout(function(){
          expect($element.prop('style').opacity).equal('1');
          done();
        }, scrollTimeOut);
      });

    });
  });

});
