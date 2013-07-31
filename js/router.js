define([
  'underscore',
  'backbone',
  'collections/counters',
  'views/counters/list',
  'views/counters/show'
], function(_, Backbone, CounterCollection, CounterListView, CounterView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      "": 'index',
      '/:id': 'show'
    },
    index: function() {
      collection = new CounterCollection();
      var counterListView = new CounterListView({ collection: collection, el: $('#container') });
      collection.fetch({ success: counterListView.render()});
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