import Ember from 'ember';
import Layers from './layers';
/* global google */

export default Ember.Object.extend({
  map: null,

  initialize: function (view) {
    var mapOptions = {
      zoom: 13,
      center: { lat: -33.448, lng: -70.624},
      mapTypeControl: false,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
      }
    };
    var map = new google.maps.Map(view.get('element'), mapOptions);

    this.set('view',view);
    this.set('map',map);
    this.set('layers', Layers.create({map: this}));
  }
});

