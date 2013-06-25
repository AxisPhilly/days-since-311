var app = app || {};

// Load JSON into a readable variable.

/*
  Factory to create counters
*/
function SinceCounter() {
  this.events = [];
  this.findEvents = function() {
    //parse JSON and populate the events array
    return false;
  };
  this.count = function() {
      var currentTime = new Date();
      return currentTime - events[0]['time'];
  };
}

/*
  Initialization function for the app.
  To create a new counter, instantiate it here.
*/
app.init = function() {
  var potholeCounter = new SinceCounter({terms: 'pothole'});
};

app.init();
