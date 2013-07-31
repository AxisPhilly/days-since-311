define([
  'underscore',
  'models/counter',
  'router'
], function(_, Counter, Router){
  var initialize = function(){
    Router.initialize();
  };
  return {
    initialize: initialize
  };
});

