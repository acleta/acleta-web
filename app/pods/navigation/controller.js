import Ember from 'ember';
import config from 'acleta/config/environment';

export default Ember.Controller.extend({
  active: false,
  navigationEnabled: config.environment === 'development',
  actions: {
    toggleSideNav: function() {
      this.toggleProperty('active');
    }
  },
  hide: function() {
    this.set('active', false);
  }
});
