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
  var currentData;

  // I refuse to use jQuery just for AJAX!
  var r = new XMLHttpRequest();
  r.open("GET", '/311data.json', true);
  r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return;
    console.log(JSON.parse(r.responseText));
  };
  r.send({});

  // Instantiate counters
  var potholeCounter = Object.create(sinceCounter, { terms: ['pothole'] });
};

app.init();
