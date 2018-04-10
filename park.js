const Dinosaur = require('./dinosaur.js');

const Park = function() {
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeDinoByType = function(type) {
  this.enclosure = this.enclosure.filter(dinosaur => dinosaur.type != type);
}

Park.prototype.getDinosaursWithHighOffsprings = function() {
  return this.enclosure.filter(dinosaur => dinosaur.numberOfOffspring > 2);
}

Park.prototype.getNumberOfDinosAfterTime = function(year) {
  let offspringPerYear = 0;
  for(const dino of this.enclosure) {
    offspringPerYear += dino.numberOfOffspring;
  }

  return (offspringPerYear*year)+this.enclosure.length;

}

module.exports = Park;
