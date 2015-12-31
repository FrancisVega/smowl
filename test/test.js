describe("Smowl Unit Tests", function(smowl) {

  // Timeout para que ocurra el scroll
  scrollTimeOut = 410;
  // Dejamos fijo el div #mocha para prevenir errores con el scroll
  $('#mocha').css({"position":"fixed", "left":0, "right":0});

  // Vamos con los plugins primero
  describe("Plugins", function() {

    // Before
    before(function() {
      console.log("Start test");

      // Smowl settings
      window.smowlEase = "Power0.easeNone";
      // Window Height
      windowHeight = window.innerHeight;

      // Creamte html elements
      baseContainerName = '.container';
      div1 = document.createElement('div');
      div2 = document.createElement('div');
      div3 = document.createElement('div');
      $(div1).addClass('space-top').appendTo($('body'));
      $(div2).addClass('container').appendTo($('body'));
      $(div3).addClass('space-bottom').appendTo($('body'));

      // Element
      $element = $(div2);
    });

    // After
    after(function() {
      console.log("End test");
    });


    //
    // fadeIn()
    //
    describe("core.plugin.fadeIn()", function() {
      before(function() {
        // Fade in!!
        smowlObject = $$(baseContainerName).fadeIn();
      });

      it("Opacity value at top scroll equal to 1", function(done) {
        $(div1).css({"min-height":0});
        window.setTimeout(function(){
          expect($element.prop('style').opacity).equal('1');
          done();
        }, scrollTimeOut);
      });

      it("Opacity value at bottom scroll equal to 0", function(done) {
        $(div1).css({"min-height":windowHeight/2});
        window.setTimeout(function(){
          expect($element.prop('style').opacity).equal('0.5');
          done();
        }, scrollTimeOut);
      });

      it("Opacity value at bottom scroll equal to 0", function(done) {
        $(div1).css({"min-height":windowHeight/3});
        window.setTimeout(function(){
          expect(Math.round($element.prop('style').opacity*1000)/1000).equal(0.667);
          done();
        }, scrollTimeOut);
      });
    });


    //
    // fadeOut()
    //
    describe("core.plugin.fadeOut()", function() {
      before(function() {
        // Fade in!!
        smowlObject = $$(baseContainerName).fadeOut();
      });

      it("Opacity value at top scroll equal to 1", function(done) {
        $(div1).css({"min-height":0});
        window.setTimeout(function(){
          expect($element.prop('style').opacity).equal('0');
          done();
        }, scrollTimeOut);
      });

      it("Opacity value at bottom scroll equal to 0", function(done) {
        $(div1).css({"min-height":windowHeight/2});
        window.setTimeout(function(){
          expect($element.prop('style').opacity).equal('0.5');
          done();
        }, scrollTimeOut);
      });

      it("Opacity value at bottom scroll equal to 0", function(done) {
        $(div1).css({"min-height":windowHeight/3});
        window.setTimeout(function(){
          expect(Math.round($element.prop('style').opacity*1000)/1000).equal(0.333);
          done();
        }, scrollTimeOut);
      });
    });









  });

});
