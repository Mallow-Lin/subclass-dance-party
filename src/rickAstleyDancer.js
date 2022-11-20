var makeRickAstleyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer RickAstley-dancer"></span>');
  this.shake();

};
makeRickAstleyDancer.prototype = Object.create(makeDancer.prototype);
makeRickAstleyDancer.prototype.constructor = makeRickAstleyDancer;

makeRickAstleyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.effect('shake', {times: 1}, 100);
};

makeRickAstleyDancer.prototype.shake = function() {
  var top = $('body').height() * Math.random(); //Math.random();
  var left = $('body').width() * Math.random();
  makeDancer.prototype.setPosition.call(this, top, left);
};

// makeRickAstleyDancer.prototype.lineUp = function(top, left) {
//   this.$node.animate({'left': left, 'top': top});
// };

makeRickAstleyDancer.prototype.lineUp = function() {
  // makeDancer.prototype.lineUp.call(this);
  // this.$node.toggle(true);
  this.$node.animate({
    'left': 1500
  });
};