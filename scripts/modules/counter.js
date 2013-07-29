define({
  count: function() {
    var currentTime = new Date();
    var entryDate = new Date(parseInt(this.entries[0]['date_created'])*1000);
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    // console.log(entryDate);
    // console.log(parseInt(this.entries[0]['date_created']));
    return Math.round(Math.abs((currentTime.getTime() - entryDate.getTime())/(oneDay)));
  }
});