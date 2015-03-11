import Ember from 'ember';
import config from '../../config/environment';

export default Ember.View.extend({
  cordova: true || config.CORDOVA,
  classNameBindings: ['cordova'],
  initialize: function (view) {
    this.get('model').initialize(view);
  }
});

