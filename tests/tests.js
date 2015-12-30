var expect = chai.expect;

describe("Smowl.js unit tests", function() {

  describe("Constructor", function() {
    it("Can access to smowl about.autor property", function() {
      expect($$().typename).to.equal("smowl");
    });
  });

  describe("Plugin Access", function() {
    it("Can access to fadeIn()", function() {
      expect(typeof($$().fadeIn())).equal('object');
    });
    it("Can access to fadeOut()", function() {
      expect(typeof($$().fadeIn())).equal('object');
    });
    it("Can access to modParallax()", function() {
      expect(typeof($$().modParallax())).equal('object');
    });
    it("Can access to heroParallax()", function() {
      expect(typeof($$().heroParallax())).equal('object');
    });
    it("Can access to spriteAnim()", function() {
      expect(typeof($$().spriteAnim())).equal('object');
    });
  });

  describe("Core methods", function() {
    it("Se puede asignar la funcion core soa() al elemento y devuelve un objeto smowl", function() {
      var soa = $$('.box__shape--one').soa(
          { "from":{}, "to":{} }, "100%", 0, 'onEnter', 1, true, false
      );
      expect(soa.typename).equal('smowl');
    });
  });

  describe("Smowl Global vars", function() {
    it("Se puede asignar la funcion core soa() al elemento y devuelve un objeto smowl", function() {

      // Changue duration, for example
      window.smowlDuration = '70%';

      // Empty init
      $$();

      // Test global configuration
      expect(typeof($$) == 'function').to.be.true;
      expect(window.smowl_setup.duration  === '70%').to.be.true;
      expect(window.smowl_setup.offset  === 0).to.be.true;
      expect(window.smowl_setup.triggerHook === 'onEnter').to.be.true;
      expect(window.smowl_setup.time  === 1).to.be.true;
      expect(window.smowl_setup.reverse  === true).to.be.true;
      expect(window.smowl_setup.ease  === "Power0.easeNone").to.be.true;
      expect(window.smowl_setup.delay  === 0).to.be.true;
      expect(window.smowl_setup.frameDir === "x").to.be.true;
      expect(window.smowl_setup.indicators === false).to.be.true;
      expect(window.smowl_setup.console === false).to.be.true;

    });
  });
});
/*
QUnit.test( "Global setup tests", function( assert ) {

  // Changue duration, for example
  window.smowlDuration = '70%';

  // Empty init
  $$();

  // Test global configuration
  assert.ok( typeof($$) === 'function', "Passed!");
  assert.ok( window.smowl_setup.duration    === '70%',             "Smowl duration Passed!");
  assert.ok( window.smowl_setup.offset      === 0,                 "Smowl offset Passed!");
  assert.ok( window.smowl_setup.triggerHook === 'onEnter',         "Smowl triggerHook Passed!");
  assert.ok( window.smowl_setup.time        === 1,                 "Smowl time Passed!");
  assert.ok( window.smowl_setup.reverse     === true,              "Smowl reverse Passed!");
  assert.ok( window.smowl_setup.ease        === "Power0.easeNone", "Smowl triggerHook Passed!");
  assert.ok( window.smowl_setup.delay       === 0,                 "Smowl delay Passed!");
  assert.ok( window.smowl_setup.frameDir    === "x",               "Smowl frameDir Passed!");
  assert.ok( window.smowl_setup.indicators  === false,             "Smowl indicators Passed!");
  assert.ok( window.smowl_setup.console     === false,             "Smowl console Passed!");

});

QUnit.test( "fadeIn() Plugin tests", function( assert ) {

  // fadein()
  var fadeInBoxElement = ".box__shape--one";
  var fadeInBox = $$(fadeInBoxElement).fadeIn();

  assert.equal(fadeInBox.el, '.box__shape--one', "Element test passed!");
  assert.equal(fadeInBox.triggerel, '.box__shape--one', "Trigger element passed!");
  assert.equal(fadeInBox.penel, undefined, "Pin element passed!");
  assert.ok($(fadeInBoxElement).prop("style")["opacity"] !== '', "fadeIn opacity value passed!");
  assert.ok($(fadeInBoxElement).prop("style")["opacity"] <= 1, "fadeIn value is smaller than 1 passed!");
  assert.ok($(fadeInBoxElement).prop("style")["opacity"] >= 0, "fadeIn value is greater than 0 passed!");

  var fadeInBoxComplex = $$(fadeInBoxElement).fadeIn({
    "duration": "25%",
    "offset": 0,
    "triggerHook": "onEnter",
    "time": 1,
    "reverse": true,
    "indicators": true,
    "ease": "Power0.easeNone"
  });

});
*/
