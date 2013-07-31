define([
  'underscore',
  'backbone',
  'views/counters/list',
  'views/counters/show'
], function(_, Backbone, CounterListView, CounterView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '/test': 'showCounters',
      '/:id': 'showCounter'
    }
  });

  var initialize = function(){
    var appRouter = new AppRouter();

    appRouter.on('showCounters', function() {
      var counterListView = new CounterListView();
      counterListView.render();
    });

    appRouter.on('showCounter', function() {
      var counterView  = new CounterView();
      counterView.render();
    });

    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});