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

app.searchData = function(data, terms){
  return ['testing'];
};

app.loadData = function(data, callback) {
    // I refuse to use jQuery just for AJAX!
  var r = new XMLHttpRequest();
  r.open("GET", data, true);
  r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return;
    console.log(JSON.parse(r.responseText));
    // populate the counters with their data
    var data = JSON.parse(r.responseText);
    for(var counter in app.counters) {
      if(app.counters.hasOwnProperty(counter)){
        // Search the data for entries matching the terms
        var entries = app.searchData(data, counter.terms);
        app.counters[counter].entries = entries;
        console.log(app.counters[counter]);
        console.log(entries);
      }
    }
    callback();
  };
  r.send({});
};

app.render = function() {
  // Render the counters on the page, loading templates, etc.
  console.log(app.counters.potholeCounter.entries);
};


/*
  Initialization function for the app.
  To create a new counter, instantiate it here.
*/
app.init = function() {
  // Instantiate counters
  app.counters = {};
  app.counters.potholeCounter = Object.create(sinceCounter, { terms: ['pothole'] });
  app.loadData('/311data.json', function(){ app.render(); });
};

app.init();
