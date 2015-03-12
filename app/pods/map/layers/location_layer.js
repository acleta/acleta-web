import BaseLayer from './base';
/* global L */

export default BaseLayer.extend({
  enabled: true,
  show: function() {
    if (!navigator.geolocation) { return; }

    var setPosition = this.setPosition.bind(this);
    var onError = this.onError.bind(this);
    var options = {
      enableHighAccuracy: true, 
      maximumAge        : 30000, 
      timeout           : 27000
    };

    var watchID = navigator.geolocation.watchPosition(setPosition,onError,options);
    this.set('watchID',watchID);
  },
  setPosition: function(position) {
    var location = new L.LatLng(position.coords.latitude, position.coords.longitude);
    var accuracy = position.coords.accuracy;

    var marker = this.get('marker');

    if (!marker) {
      marker = L.userMarker(location, {
        accuracy:accuracy, 
        smallIcon:true
      });
      this.set('marker', marker);

      var map = this.get('map.map');
      marker.addTo(map);
      map.setView(location, 14, {
        animate: true
      });
    }

    marker.setLatLng(location);
    marker.setAccuracy(accuracy);
  },
  onError: function(error) {
    console.log(error);
  }
});

