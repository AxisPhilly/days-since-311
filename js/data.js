var fs = require('fs');
var phl311 = require('./phl311');

var currentData = '../data/311data.json';

phl311.requests({}, function(resp) {
    var parsed = JSON.stringify(resp);
    parsed = JSON.parse(parsed);
    //console.log(parsed);
    for(var x=0; x < parsed.requests.length; x++) {
        delete parsed.requests[x].space_id;
        delete parsed.requests[x].score;
        delete parsed.requests[x].count_comments;
        delete parsed.requests[x].count_followers;
        //console.log(parsed.requests[x]);
    }
    parsed = JSON.stringify(parsed);
    fs.writeFile('311data.json', parsed, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });

    var sinceCounter = {
      count: function() {
          var currentTime = new Date();
          var entryDate = new Date(parseInt(this.entries[0]['date_created'], 10)*1000);
          var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
          // console.log(entryDate);
          // console.log(parseInt(this.entries[0]['date_created']));
          return Math.round(Math.abs((currentTime.getTime() - entryDate.getTime())/(oneDay)));
      }
    };

    var searchData = function(data, counter){
      //console.log(counter);
      //console.log(counter.terms);
      counter.entries = [];
      var data = JSON.parse(data);
      for (var obj in data.requests) {
        if(data.requests[obj].title.match(counter.terms)) {
          counter.entries.push(data.requests[obj]);
        }
      }
    };

    var loadData = function(data) {
      // I refuse to use jQuery just for AJAX!
        for(var counter in counters) {
          if(counters.hasOwnProperty(counter)){
            // Search the data for entries matching the terms
            searchData(data, counters[counter]);
            //console.log(counters[counter]);
          }
        }
    };

    var counters = [];

    counters[0] = Object.create(sinceCounter);
    counters[0].terms = /\scat/i;
    counters[0].title = "Cat incidents";

    counters[1] = Object.create(sinceCounter);
    counters[1].terms = /pothole/i;
    counters[1].title = "Potholes";

    loadData(parsed);

    fs.writeFile('parsedData.json', JSON.stringify(counters), function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });

    // send that file to s3

    // Write today's date to the file as last_updated property so we have something
    // to compare to current file.

    // Use this snip to get dates out of date_created
    // var last_req = resp.requests[0];
    // console.log(last_req.date_created);
    // var date = new Date(last_req.date_created*1000);
    // var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    // console.log(months[date.getMonth()] + ' ' + date.getDate());

    // If success, and date on 311 data is newer than JSON, add new JSON file
});
