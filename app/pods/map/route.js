import Ember from 'ember';
import Map from './model';

export default Ember.Route.extend({
  model: function() {
    return Map.create();
  }
});

