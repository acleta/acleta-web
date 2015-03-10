import Ember from 'ember';
import BaseLayer from './base';
import ajax from 'ic-ajax';
/* global L */

export default BaseLayer.extend({
  source: null,
  style: null,
  onEachFeature: null,
  pointToLayer: null,
  show: function () {
    var layer = this.get('layer');
    if (!layer) {
      layer = L.geoJson(null, {
        style: this.style,
        onEachFeature: this.onEachFeature,
        pointToLayer: this.pointToLayer ? this.pointToLayer.bind(this) : null
      });
      this.set('layer', layer);
      this.fetchData().then(function (geoJSON) {
        layer.addData(geoJSON);
      });
    }

    var map = this.get('map').get('map');
    layer.addTo(map);
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
