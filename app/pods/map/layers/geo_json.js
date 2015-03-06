import Ember from 'ember';
import BaseLayer from './base';
import ajax from 'ic-ajax';
/* global google */

export default BaseLayer.extend({
  source: null,
  style: function () {
    return {};
  }.property(),
  show: function () {
    var mapLayer = new google.maps.Data();
    mapLayer.setStyle(this.get('style'));
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
        ajax(layer.get('source')).then(function (data) {
          layer.set('data',data);
          resolve(data);
        },function (error) {
          reject(error);
        });
      }
    });

    return promise;
  }
});
