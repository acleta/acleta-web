import BaseLayer from './base';
/* global google */

export default BaseLayer.extend({
  source: null,
  show: function () {
    var mapLayer = new google.maps.Data();
    this.set('mapLayer', mapLayer);
    var map = this.get('map').get('map');
    mapLayer.setMap(map);

    this.fetchData().then(function (geoJSON) {
      mapLayer.addGeoJson(geoJSON);
    });
  },
  fetchData: function () {
    var layer = this;
    var promise = new Ember.RSVP.Promise(function(resolve, reject){
      var data = layer.get('data');
      if (data) {
        resolve(data);
      } else {
        reject();
      }
    });

    return promise;
  }
});
