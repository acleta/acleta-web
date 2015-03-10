import Ember from 'ember';

export default Ember.Object.extend({
  map: null,
  enabled: false,
  init: function () {
    this._super();
  },
  initialize: function() {
    if (this.get('enabled')) {
      this.show();
    }
  },
  show: function () {
    console.log("Draw!", this);
  },
  hide: function () {
    console.log("Draw!", this);
  }
});
