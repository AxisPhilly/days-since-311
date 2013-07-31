define([
  'jquery',
  'underscore',
  'backbone',
  'collections/counters',
  'text!templates/counters/list.html'
], function($, _, Backbone, CounterCollection, counterListTemplate) {
  var CounterListView = Backbone.View.extend({
    el: $('#container'),
    render: function() {
      _.each(this.collection, function(counter) {
        // iterate through the collection
        // render single views
        var compiledTemplate = _.template(counterListTemplate, counter.toJSON());
        this.$el.append( compiledTemplate );
      }, this);
      console.log('Collection rendered');
    }
  });
  return CounterListView;
});