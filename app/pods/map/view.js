import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['map-container'],
  mapElement: function() {
    return this.$('.map')[0];
  }.property('element'),
  didInsertElement: function () {
    this.get('controller').initialize(this);
  }
});
