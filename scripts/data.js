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
        console.log(parsed.requests[x]);
    }
    parsed = JSON.stringify(parsed);
    fs.writeFile('311data.json', parsed, function(err) {
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
