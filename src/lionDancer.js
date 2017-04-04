var makeLionDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this._originalTop = top; 
  this._originalLeft = left;
  this.$node.addClass('lion-dancer');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
  
makeLionDancer.prototype = Object.create(makeDancer.prototype);
makeLionDancer.prototype.constructor = makeLionDancer;

makeLionDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this)
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    var left = this._originalLeft; 
    // setTimeout(function(){this.$node.animate({left: '250px'})}, 1000);s
    //setTimeout(this.setPosition.bind(this, this._originalTop, left-100), 1000);
      
};

  //this.$node.effect("shake", { direction: }});
  // call the old version of step at the beginning of any call to this new version of step
  // makeDancer.prototype.step.call(this);
  // this.step(); 
  // this.setPosition(top, left+1);
  // this.step(); 
  // this.setPosition(top, left+1);
  // this.step(); 
  // this.setPosition(top, left-1);
  // this.step(); 
  // this.setPosition(top, left-1);