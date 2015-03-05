import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['map'],
  didInsertElement: function () {
    this.get('controller').initialize(this);
  }
});
