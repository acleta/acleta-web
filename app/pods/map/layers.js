import Ember from 'ember';
/* global require */
/* global requirejs */

// Inspired in https://github.com/ember-cli/ember-load-initializers/blob/master/ember-load-initializers.js
function initializeLayersWithMap(map) {
  var layerRegExp = new RegExp('^acleta/pods/map/layers/\\w+_layer');

  var layers = [];

  Ember.keys(requirejs._eak_seen).filter(function(key) {
    return layerRegExp.test(key);
  }).forEach(function(moduleName) {
    var module = require(moduleName, null, null, true);
    if (!module) { return; }

    var layer = module['default'].create({map:map});

    layers.push(layer);
  });

  return Ember.A(layers);
}

export default Ember.ArrayProxy.extend({
  map: null,
  init: function () {
    this._super();
    var layers = initializeLayersWithMap(this.get('map'));
    this.set('content', layers);
  }
});
