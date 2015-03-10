import Ember from 'ember';

export default Ember.ObjectController.extend({
  status: function() {
    return this.get('model').properties.status;
  }.property('model'),
  statusKey: function() {
    return `bike_santiago.statuses.${ this.get('status').toLowerCase() }`
  }.property('status')
});

