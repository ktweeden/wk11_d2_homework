const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function() {
  let dinosaur;

  beforeEach(function() {
    dinosaur = new Dinosaur('Tyrannosaurus', 2);
  });

  it('should have a type', function() {
    const result = dinosaur.type;
    assert.strictEqual(result, 'Tyrannosaurus');
  });

  it('should have an offspring number', function() {
    const result = dinosaur.numberOfOffspring;
    assert.strictEqual(result, 2);
  });

});
