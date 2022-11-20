var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer bouncy-dancer"></span>');
  this.bounce();

};
makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  this.$node.effect('bounce', {times: 1}, 100);

};

makeBouncyDancer.prototype.bounce = function() {
  this.$node.animate({'left': $('body').width() * Math.random(), 'top': $('body').height() * Math.random()}, 100);
};

makeBouncyDancer.prototype.lineUp = function() {
  this.$node.animate({
    'left': 800
  });
};