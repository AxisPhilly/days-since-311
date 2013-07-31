define([
  'jquery',
  'underscore',
  'backbone',
  'collections/counters',
  'text!templates/counters/list.html'
], function($, _, Backbone, CounterCollection, counterListTemplate) {
  var CounterListView = Backbone.View.extend({
    el: $('#app-container'),
    initialize: function() {
      this.collection = new CounterCollection();
      this.collection.add({ terms: 'cat' });
      var compiledTemplate = _.template(counterListTemplate, { counters: this.collection.models });
      this.$el.append( compiledTemplate );
    }
  });
  return CounterListView;
});