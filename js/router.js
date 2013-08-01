define([
  'jquery',
  'underscore',
  'backbone',
  'collections/counters',
  'views/counters/list',
  'views/counters/show',
  'json!parsedData.json'
], function($, _, Backbone, CounterCollection, CounterListView, CounterView, objects) {
  var AppRouter = Backbone.Router.extend({
    initialize: function(){
      this.counters = new CounterCollection(object);
    },
    routes: {
      "": 'index',
      '/:id': 'show'
    },
    index: function() {
      console.log(this.counters);
      var counterListView = new CounterListView({ collection: this.counters });
      counterListView.render();
    },
    show: function() {
      var counterView  = new CounterView({ model: this.counters.get(id) });
      counterView.render();
    }
  });

  var initialize = function(){
    var appRouter = new AppRouter();
    Backbone.history.start({ pushState: true });
  };

  return {
    initialize: initialize
  };
});