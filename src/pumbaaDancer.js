var makePumbaaDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pumbaa-dancer');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
  
makePumbaaDancer.prototype = Object.create(makeDancer.prototype);
makePumbaaDancer.prototype.constructor = makePumbaaDancer;

makePumbaaDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  var left = this._originalLeft; 
    // setTimeout(function(){this.$node.animate({left: '250px'})}, 1000);
    //setTimeout(this.setPosition.bind(this, this._originalTop, left-100), 1000);    
};

makePumbaaDancer.prototype.dance = function() {
  this.$node.animate({left: '+=50px'});
  var context = this;
  setTimeout(function(){context.$node.animate({left: '-=50px'})}, 750);

};

makePumbaaDancer.prototype.danceBattle = function() {
  this.$node.animate({left: '750px'});
};