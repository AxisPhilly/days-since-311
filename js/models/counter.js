define([
  'backbone'
], function(Backbone) {
  var CounterModel = Backbone.Model.extend({
    defaults: {
      count: 1
    }
  });

  return CounterModel;
});