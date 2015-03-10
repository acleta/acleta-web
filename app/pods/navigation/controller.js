import Ember from 'ember';

export default Ember.Controller.extend({
  active: false,
  actions: {
    toggleSideNav: function() {
      this.toggleProperty('active');
    }
  },
  hide: function() {
    this.set('active', false);
  }
});
