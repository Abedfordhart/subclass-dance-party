$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(), // top
      $("body").width() * Math.random(), // left
      Math.random() * 1000 // time between Steps 
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    console.log(dancers)
  });

  $('.lineUpButton').on('click', function(event) {
    // set a point on y-axis where all dancers are lining up to
    // for each dancer:
        // calculate the distance that the dancer needs to move
        // call animate function, which is located in dancer superclass 
    for (var i=0; i<window.dancers.length; i++){
      window.dancers[i].lineUp();
    }
    // var linePos = 400;
    // for(var i = 0; i < window.dancers.length; i++) {
    //   var moveDistance = window.dancers[i]._originalTop - linePos;
    //   window.dancers[i].lineUp(moveDistance);
    // }
  });

  $('.danceButton').on('click', function(event) {
    //iterate through dancer array
      //call .dance on each item in array
    for (var i = 0; i<window.dancers.length; i++) {
     window.dancers[i].dance();
    }
  });

  $('.danceBattle').on('click', function(event) {
    for (var i = 0; i<window.dancers.length; i++) {
      window.dancers[i].danceBattle();
    }
  });

});

