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
      this.collection = new CounterCollection();
      //this.collection.fetch();
      var compiledTemplate = _.template(counterListTemplate, { counters: this.collection.models });
      this.$el.append( compiledTemplate );
      console.log('Collection rendered');
    }
  });
  return CounterListView;
});