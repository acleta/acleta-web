import DataSetLayer from './data_set';
import iconMarker from './icon_marker';

export default DataSetLayer.extend({
  enabled: true,
  id: 'services/bike-santiago',
  pointToLayer: function (feature, location) {
    return iconMarker('bicycle', location);
  }
});

