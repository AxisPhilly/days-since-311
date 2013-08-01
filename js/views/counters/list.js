define([
  'jquery',
  'underscore',
  'backbone',
  'collections/counters',
  'views/counters/show'
], function($, _, Backbone, CounterCollection, CounterView) {
  var CounterListView = Backbone.View.extend({
    render: function() {
      this.collection.each(function(counter) {
        this.$el.append(new CounterView({ model: counter, el: '#container' }).render());
      }, this);
      console.log('Collection rendered!');
    }
  });
  return CounterListView;
});