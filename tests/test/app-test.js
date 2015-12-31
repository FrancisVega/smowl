describe("App", function() {

  describe("Opacity Middle", function() {
    
    beforeEach(function() {

        // TODO: Usar ctrl.scrollTo() de scrollMagic
    });


    it("Opacity value at middle is 0.5", function(done) {
      window.smowlEase = "Power0.easeNone";

      // Smowl method
      $$('.box__shape--one').fadeIn();
      // Get window height
      var windowHeight = window.innerHeight;
      // Get element height
      var elementHeight = $('.box__shape--one').height();
      // Get element with jQuery
      var element = $('.box__shape--one');
      // Scroll
      $('body').scrollTop((windowHeight/2));
      window.setTimeout(function(){
        expect(element.prop('style').opacity).equal('0.5');
        done();
      }, 0);

    });
  });

});
