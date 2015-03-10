import DataSetLayer from './data_set';
import iconMarker from './icon_marker';

export default DataSetLayer.extend({
  enabled: false,
  id: 'shops/santiago',
  pointToLayer: function (feature, location) {
    return iconMarker('gear', location);
  }
});
