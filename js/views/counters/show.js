define([
  'jquery',
  'underscore',
  'backbone',
  'models/counter',
  'text!templates/counters/counter.html'
], function($, _, Backbone, Counter, counterTemplate) {
  var CounterView = Backbone.View.extend({
    tagName:'div',
    render: function() {
      this.$el.append(_.template(counterTemplate, this.model));
      console.log('Counter rendered');
      return this;
    }
  });
  return CounterView;
});