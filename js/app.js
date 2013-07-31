define([
  'underscore',
  'router'
], function(_, Router){
  var initialize = function(){
    Router.initialize();
  };
  return {
    initialize: initialize
  };
});

var app = app || {};

/*
  Pattern to create counters
*/
var sinceCounter = {
  count: function() {
      var currentTime = new Date();
      var entryDate = new Date(parseInt(this.entries[0]['date_created'])*1000);
      var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
      // console.log(entryDate);
      // console.log(parseInt(this.entries[0]['date_created']));
      return Math.round(Math.abs((currentTime.getTime() - entryDate.getTime())/(oneDay)));
  }
};

app.searchData = function(data, counter){
  console.log(counter);
  console.log(counter.terms);
  counter.entries = [];
  for (var obj in data.requests) {
    if(data.requests[obj].title.match(counter.terms)) {
      counter.entries.push(data.requests[obj]);
    }
  }
};

app.loadData = function(data, callback) {
    // I refuse to use jQuery just for AJAX!
  var r = new XMLHttpRequest();
  r.open("GET", data, true);
  r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return;
    // populate the counters with their data
    var data = JSON.parse(r.responseText);
    for(var counter in app.counters) {
      if(app.counters.hasOwnProperty(counter)){
        // Search the data for entries matching the terms
        app.searchData(data, app.counters[counter]);
        console.log(app.counters[counter].count());
      }
    }
    callback();
  };
  r.send({});
};

app.render = function() {
  // Render the counters on the page, loading templates, etc.
  //console.log(app.counters.catCounter.entries);
};


/*
  Initialization function for the app.
  To create a new counter, instantiate it here.
*/
app.init = function() {
  // Instantiate counters
  app.counters = {};

  app.counters.potholeCounter = Object.create(sinceCounter);
  app.counters.potholeCounter.terms = /pothole/i;

  app.counters.catCounter = Object.create(sinceCounter);
  app.counters.catCounter.terms = /\scat/i;

  app.loadData('/data/311data.json', function(){ app.render(); });
};

app.init();
