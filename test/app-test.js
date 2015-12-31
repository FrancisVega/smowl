describe("Smowl Unit Tests", function(smowl) {

  // Timeout para que ocurra el scroll
  scrollTimeOut = 110;
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
      $(div1).addClass('space').css({"min-height":"100vh"}).appendTo($('body'));
      $(div2).addClass('container').appendTo($('body'));
      $(div3).addClass('space').css({"min-height":"100vh"}).appendTo($('body'));

      // Element
      $element = $(div2);
    });

    // After
    after(function() {
      $(div1).remove();
      $(div2).remove();
      $(div3).remove();
      console.log("End test");
    });

    // fadeIn()
    describe("core.plugin.fadeIn()", function() {
      before(function() {
        // Fade in!!
        smowlObject = $$(baseContainerName).fadeIn();
      });
      it("Opacity value at 0 scroll equal to 0", function(done) {
        $('body').scrollTop(0);
        window.setTimeout(function(){
          expect($element.prop('style').opacity).equal('0');
          done();
        }, scrollTimeOut );
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

  describe("FadeOutPlugin", function() {
    before(function() {
      console.log("Start test 2");

      // Smowl settings
      window.smowlEase = "Power0.easeNone";
      // Window Height
      windowHeight = window.innerHeight;

      // Creamte html elements
      baseContainerName = '.container';
      div1 = document.createElement('div');
      div2 = document.createElement('div');
      div3 = document.createElement('div');
      $(div1).addClass('space').css({"min-height":"100vh"}).appendTo($('body'));
      $(div2).addClass('container').appendTo($('body'));
      $(div3).addClass('space').css({"min-height":"100vh"}).appendTo($('body'));

      $(div2).append('p').html('texto')

      // Element
      $element = $(div2);
    });

    // After
    after(function() {
      /*
       *$(div1).remove();
       *$(div2).remove();
       *$(div3).remove();
       */
      console.log("End test");
    });

    describe("", function() {
      before(function() {
        // Fade out!!
        //$$(baseContainerName).fadeOut();
      });
      /*
       *it("Opacity value at mid scroll equal to 0.5", function(done) {
       *  $('body').scrollTop(windowHeight/2);
       *  window.setTimeout(function(){
       *    expect($('.container').prop('style').opacity).equal('0.5');
       *    done();
       *  }, scrollTimeOut);
       *});
       */
    });
  });


});
