import DataSetLayer from './data_set';
// import marker from './marker';

export default DataSetLayer.extend({
  enabled: true,
  id: 'services/bike-santiago',
  pointToLayer: function (feature, location) {
    var icon = L.divIcon({
      className: 'marker-bike-santiago',
      html : `
        <span class="fa-stack">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-bicycle fa-inverse fa-stack-1x"></i>
        </span>
      `
    });
    var marker = new L.Marker(location, {icon: icon});
    return marker;
    // return marker('bike-santiago', location);
  }
});

