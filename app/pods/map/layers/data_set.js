import GeoJSONLayer from './geo_json';

export default GeoJSONLayer.extend({
  id: null,
  source: function () {
    return `https://acleta-proxy.herokuapp.com/${ this.get('id') }.geojson`;
  }.property('id')
});

