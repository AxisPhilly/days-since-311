var app = app || {};

// Load JSON into a readable variable.

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

var potholeCounter = new SinceCounter({terms: 'pothole'});