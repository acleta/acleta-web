import Ember from 'ember';
import Layers from './layers';
/* global L */

export default Ember.Object.extend({
  map: null,

  initialize: function (view) {
    // var mapOptions = {
    //   zoom: 13,
    //   center: { lat: -33.448, lng: -70.624},
    //   mapTypeControl: false,
    //   zoomControl: true,
    //   zoomControlOptions: {
    //     style: google.maps.ZoomControlStyle.SMALL
    //   }
    // };
    var map = L.map(view.get('element'));
    map.setView([-33.448, -70.624],13);
    L.tileLayer('https://{s}.tiles.mapbox.com/v3/sagmor.ld1p175h/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(map);

    this.set('view',view);
    this.set('map',map);
    this.set('layers', Layers.create({map: this}));
  }
});

