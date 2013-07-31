define([
  'router',
  'collections/counters'
], function(Router, Collections){
  var initialize = function(){
    Router.initialize();
    cats = new Collections();
  };
  return {
    initialize: initialize
  };
});

