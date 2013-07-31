define([
 'underscore',
 'backbone',
 'models/counter'
], function(_, Backbone, CounterModel) {
  var CounterCollection = Backbone.Collection.extend({
    model: CounterModel
  });
  return CounterCollection;
});