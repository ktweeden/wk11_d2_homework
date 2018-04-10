const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur;

  beforeEach(function() {
    park = new Park();
    dinosaurT = new Dinosaur('Tyrannosaurus', 1);
    dinosaurV = new Dinosaur('Velociraptor', 4);
  });

  it('should have an empty enclosure', function() {
    const result = park.enclosure;
    assert.deepStrictEqual(result, []);
  });

  it('should be able to add a dinosaur', function() {
    park.addDinosaur(dinosaurT);
    const result = park.enclosure[0];
    assert.strictEqual(result, dinosaurT);
  });

  it('should be able to remove dino by type', function() {
    park.addDinosaur(dinosaurT);
    park.addDinosaur(dinosaurT);
    park.addDinosaur(dinosaurV);
    park.addDinosaur(dinosaurT);
    park.removeDinoByType('Tyrannosaurus');
    const result = park.enclosure;
    assert.deepStrictEqual(result, [dinosaurV]);
  });

  it('should return dinos with offspring counts higher than 2', function() {
    park.addDinosaur(dinosaurT);
    park.addDinosaur(dinosaurT);
    park.addDinosaur(dinosaurV);
    park.addDinosaur(dinosaurV);
    const result = park.getDinosaursWithHighOffsprings();
    assert.deepStrictEqual(result, [dinosaurV, dinosaurV]);
  });

  describe('Dinosaur growth', function() {
    it('should calculate growth after one year with 1 dino', function() {
      park.addDinosaur(dinosaurV);
      const result = park.getNumberOfDinosAfterTime(1);
      assert.strictEqual(result, 5);
    });

    it('should calculate growth after two years with 1 dinos', function() {
      park.addDinosaur(dinosaurV);
      const result = park.getNumberOfDinosAfterTime(2);
      assert.strictEqual(result, 9);
    });

    it('should calculate growth after two years with 2 dinos', function() {
      park.addDinosaur(dinosaurV);
      park.addDinosaur(dinosaurV);
      const result = park.getNumberOfDinosAfterTime(2);
      assert.strictEqual(result, 18);
    });

  });
});
