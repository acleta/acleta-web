import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition: function(reason) {
      this.controllerFor('navigation').hide();
    }
  }
});
