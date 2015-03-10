import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('map', {path: '/'}, function() {
    this.resource('features', function() {
      this.route('about');
      this.resource('features.bike-santiago', {path:'/bike-santiago/:station_id'})
    });
  });
});

export default Router;
