var fs = require('fs');
var phl311 = require('./phl311');

var currentData = '../data/311data.json';

phl311.requests({}, function(resp) {
    var parsed = JSON.stringify(resp);
    fs.writeFile('311data.json', parsed, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });

    // Use this snip to get dates out of date_created
    // var last_req = resp.requests[0];
    // console.log(last_req.date_created);
    // var date = new Date(last_req.date_created*1000);
    // var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    // console.log(months[date.getMonth()] + ' ' + date.getDate());

    // If success, and date on 311 data is newer than JSON, add new JSON file
});
