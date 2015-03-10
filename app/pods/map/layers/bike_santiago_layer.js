import DataSetLayer from './data_set';
/* global L */
// import marker from './marker';

export default DataSetLayer.extend({
  enabled: true,
  id: 'services/bike-santiago',
  pointToLayer: function (feature, location) {
    var status = feature.properties.status;
    var icon = L.divIcon({
      className: 'marker-bike-santiago status-'+status.toLowerCase(),
      html : `
        <span class="fa-stack">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-bicycle fa-inverse fa-stack-1x"></i>
        </span>
      `
    });
    var marker = new L.Marker(location, {
      icon: icon,
      clickable: true
    });

    var layer = this;
    marker.on('click', function() {
      layer.get('map').transitionToRoute('features.bike-santiago', feature);
    });
    return marker;
    // return marker('bike-santiago', location);
  },
  find: function(id) {
    return this.fetchData().then(function(data) {
      var station = data.features.findBy('properties.id', parseInt(id));
      return station;
    });
  }
});

