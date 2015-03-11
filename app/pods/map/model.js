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
    L.mapbox.accessToken = 'pk.eyJ1Ijoic2FnbW9yIiwiYSI6Ilp1QmlLVEUifQ.BPt41UAlKaduMq1QIdmpag';
    var map = L.mapbox.map(view.get('mapElement'), 'sagmor.ld1p175h', {
      zoomControl: false
    });
    map.setView([-33.448, -70.624],13);
    new L.Control.Zoom({ position: 'bottomleft' }).addTo(map);

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

