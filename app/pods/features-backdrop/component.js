import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['features-backdrop'],
  click: function() {
    this.sendAction();
  }
});

