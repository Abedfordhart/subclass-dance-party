var makeLionDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('lion-dancer');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
  
makeLionDancer.prototype = Object.create(makeDancer.prototype);
makeLionDancer.prototype.constructor = makeLionDancer;

makeLionDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.   
};

makeLionDancer.prototype.dance = function() {
    this.$node.addClass('flipped');
    var context = this;
    setTimeout(function(){context.$node.removeClass('flipped')}, 750);
};

makeLionDancer.prototype.danceBattle = function() {
  this.$node.animate({left: '250px'});
};

// continuous dancing  
    // var context = this;

    // setInterval(function(){
    //   this.$node.addClass('flipped');
    //   setTimeout(function(){context.$node.removeClass('flipped')}, 500);
    // }, 1000);