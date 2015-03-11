import Ember from 'ember';
import Layers from './layers';
import config from '../../config/environment';
/* global L */

export default Ember.Object.extend({
  map: null,
  init: function() {
    this._super();
    this.set('layers', Layers.create({map: this}));
  },
  initialize: function (view) {
    var map = L.mapbox.map(view.get('mapElement'), config.mapbox.mapID, {
      zoomControl: false
    });
    map.setView([-33.448, -70.624],13);
    if (!config.CORDOVA) {
      new L.Control.Zoom({ position: 'bottomleft' }).addTo(map);
    }

    this.set('view',view);
    this.set('map',map);
    this.get('layers').initialize();
  },
  layer: function(id) {
    return this.get('layers').findBy('id',id);
  },
  transitionToRoute: function() {
    // Hack to handle transitions
    var controller = this.get('view.controller');
    controller.transitionToRoute.apply(controller, arguments);
  }
});

