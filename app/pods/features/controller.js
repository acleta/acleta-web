import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    hide: function() {
      this.transitionToRoute('map');
    }
  }
});
