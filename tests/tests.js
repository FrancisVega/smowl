/*
 * smowl generic tests
 */
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

/*
 * fadeIn tests
 */
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

});
