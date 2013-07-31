define([
  'underscore',
  'backbone',
  'views/counters/list',
  'views/counters/show'
], function(_, Backbone, CounterListView, CounterView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      "": 'index',
      '/:id': 'show'
    },
    index: function() {
      var counterListView = new CounterListView();
      counterListView.render();
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