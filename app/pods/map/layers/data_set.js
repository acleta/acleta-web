import GeoJSONLayer from './geo_json';

export default GeoJSONLayer.extend({
  id: null,
  source: function () {
    return `https://data.acleta.cl/${ this.get('id') }.geojson`;
  }.property('id')
});

