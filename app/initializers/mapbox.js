import config from '../config/environment';
/* global L */

export default {
  name: "mapbox",
  initialize: function() {
    L.mapbox.accessToken = config.mapbox.key;
  }
};
