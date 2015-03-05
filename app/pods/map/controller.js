import Ember from 'ember';

export default Ember.Controller.extend({
  initialize: function (view) {
    this.get('model').initialize(view);
  }
});
