var makeRickAstleyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="RickAstley-dancer"></span>');


};
makeRickAstleyDancer.prototype = Object.create(makeDancer.prototype);
makeRickAstleyDancer.prototype.constructor = makeRickAstleyDancer;

makeRickAstleyDancer.prototype.step = function() {

  // this.$node.animate({'left': Math.random() * 850}, 3000);
  var top = this.top; //Math.random();
  var left = $('body').width() * Math.random(); //('body').width() * Math.random();
  makeDancer.prototype.step.call(this);
  makeDancer.prototype.setPosition.call(this, top, left);
  // this.setPosition(top, left);
  this.$node.effect('shake', {times: 4}, 300);
};

makeRickAstleyDancer.prototype.lineUp = function(top, left) {
  this.$node.animate({'left': left, 'top': top});
};