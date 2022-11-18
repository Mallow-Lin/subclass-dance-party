var makeRickAstleyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="RickAstley-dancer"></span>');


};
makeRickAstleyDancer.prototype = Object.create(makeDancer.prototype);
makeRickAstleyDancer.prototype.constructor = makeRickAstleyDancer;

makeRickAstleyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.effect('slide', {times: 1}, 300);
};