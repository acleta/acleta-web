import Ember from 'ember';
import Layers from './layers';
/* global L */

export default Ember.Object.extend({
  map: null,
  init: function() {
    this._super();
    this.set('layers', Layers.create({map: this}));
  },
  initialize: function (view) {
    var map = L.map(view.get('mapElement'));
    map.setView([-33.448, -70.624],13);
    L.tileLayer('https://{s}.tiles.mapbox.com/v3/sagmor.ld1p175h/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(map);

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

