import GeoJSONLayer from './geo_json';
import RoutesData from './bike_routes_data';

export default GeoJSONLayer.extend({
  enabled: true,
  data: RoutesData
});
