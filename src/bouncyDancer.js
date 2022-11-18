var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer bouncy-dancer"></span>');

};
makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // top
  // left
  // this.setPosition(top, left)
  //this.$node.effect('bounce', {times: 4}, 200);
  // this.$node.css(styleSettings);
  this.$node.toggle();
};