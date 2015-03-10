import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var map = this.modelFor('map');
    var layer = map.layer('services/bike-santiago');

    return layer.find(params.station_id);
  },
  serialize: function(feature) {
    // this will make the URL `/posts/12`
    return { station_id: feature.properties.id };
  }
});

