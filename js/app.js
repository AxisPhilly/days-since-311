var app = app || {};

/*
  Pattern to create counters
*/
var sinceCounter = {
  events: [],
  findEvents: function() {
    //parse JSON and populate the events array
    return false;
  },
  count: function() {
      var currentTime = new Date();
      return currentTime - events[0]['time'];
  }
};

/*
  Initialization function for the app.
  To create a new counter, instantiate it here.
*/
app.init = function() {
  // Load JSON into a readable variable.
  // Instantiate counters
  var potholeCounter = Object.create(sinceCounter, { terms: ['pothole'] });
};

app.init();
