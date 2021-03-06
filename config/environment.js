/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'acleta',
    podModulePrefix: 'acleta/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      defaultLocale: 'en'
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    mapbox: {
      key: 'pk.eyJ1Ijoic2FnbW9yIiwiYSI6Ilp1QmlLVEUifQ.BPt41UAlKaduMq1QIdmpag',
      mapID: 'sagmor.ld1p175h'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.googleAnalyticsTrackingId = 'UA-60597458-1'
  }

  if (process.env.CORDOVA) {
    ENV.CORDOVA = true;
    ENV.locationType = 'hash';
  }

  return ENV;
};
