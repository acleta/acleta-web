import GeoJSONLayer from './geo_json';

export default GeoJSONLayer.extend({
  id: null,
  source: function () {
    return `https://raw.githubusercontent.com/acleta/acleta-datasets/master/${ this.get('id') }.geojson`;
  }.property('id')
});

