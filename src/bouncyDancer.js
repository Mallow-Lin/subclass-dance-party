var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer bouncy-dancer"></span>');

};
makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {

  var top = Math.random() * 800;
  var left = Math.random() * 1400;
  makeDancer.prototype.step.call(this);
  makeDancer.prototype.setPosition.call(this, top, left);
  // top
  // left
  // this.setPosition(top, left)
  this.$node.effect('bounce', {times: 1}, 100);
  // this.$node.animate({'left': this.left, 'top': this.top}, 300);
  // this.$node.css(styleSettings);
  //this.$node.slideToggle();
};

makeBouncyDancer.prototype.lineUp = function(top, left) {
  makeDancer.prototype.lineUp.call(this, top, left);
};