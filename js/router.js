define([
  'jquery',
  'underscore',
  'backbone',
  'collections/counters',
  'views/counters/list',
  'views/counters/show'
], function($, _, Backbone, CounterCollection, CounterListView, CounterView) {
  var AppRouter = Backbone.Router.extend({
    initialize: function(){
      this.counters;
      $.getJSON('/parsedData.json', function(data) {
        this.counters = new CounterCollection(data);
        this.counterListView = new CounterListView({ collection: this.counters, el: '#container' });
        this.counterListView.render();
      });
    },
    routes: {
      "": 'index',
      '/:id': 'show'
    },
    index: function() {
      // var counterListView = new CounterListView({ collection: this.counters });
      // counterListView.render();
    },
    show: function() {
      var counterView  = new CounterView();
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