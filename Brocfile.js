/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// Mapbox
app.import("bower_components/mapbox.js/mapbox.js");
app.import("bower_components/mapbox.js/mapbox.css");
app.import("bower_components/mapbox.js/images/icons-000000@2x.png", { destDir: "assets/images" });
app.import("bower_components/mapbox.js/images/icons.svg", { destDir: "assets/images" });
app.import("bower_components/mapbox.js/images/layers.png", { destDir: "assets/images" });
app.import("bower_components/mapbox.js/images/marker-icon.png", { destDir: "assets/images" });
app.import("bower_components/mapbox.js/images/icons-ffffff@2x.png", { destDir: "assets/images" });
app.import("bower_components/mapbox.js/images/layers-2x.png", { destDir: "assets/images" });
app.import("bower_components/mapbox.js/images/marker-icon-2x.png", { destDir: "assets/images" });
app.import("bower_components/mapbox.js/images/marker-shadow.png", { destDir: "assets/images" });

// Font Awesome
app.import("bower_components/font-awesome/css/font-awesome.css");
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.eot", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.svg", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.ttf", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.woff", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.woff2", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/FontAwesome.otf", { destDir: "fonts" });

// Materialize
app.import("bower_components/materialize/font/material-design-icons/Material-Design-Icons.eot", { destDir: "fonts" });
app.import("bower_components/materialize/font/material-design-icons/Material-Design-Icons.svg", { destDir: "fonts" });
app.import("bower_components/materialize/font/material-design-icons/Material-Design-Icons.ttf", { destDir: "fonts" });
app.import("bower_components/materialize/font/material-design-icons/Material-Design-Icons.woff", { destDir: "fonts" });
app.import("bower_components/materialize/font/roboto/Roboto-Bold.ttf", { destDir: "fonts" });
app.import("bower_components/materialize/font/roboto/Roboto-Light.ttf", { destDir: "fonts" });
app.import("bower_components/materialize/font/roboto/Roboto-Medium.ttf", { destDir: "fonts" });
app.import("bower_components/materialize/font/roboto/Roboto-Regular.ttf", { destDir: "fonts" });
app.import("bower_components/materialize/font/roboto/Roboto-Thin.ttf", { destDir: "fonts" });

// Fork ribbon
app.import("bower_components/github-fork-ribbon-css/gh-fork-ribbon.css");

// ember-google-analytics
app.import("bower_components/ember-google-analytics/ember-google-analytics.js");

// leaflet-usermarker
app.import("bower_components/leaflet-usermarker/src/leaflet.usermarker.js");
app.import("bower_components/leaflet-usermarker/src/leaflet.usermarker.css");
app.import("bower_components/leaflet-usermarker/src/img/bluedot.png", { destDir: "assets/img" });

// Cordova
if (process.env.CORDOVA) {
  app.import("vendor/cordova.js");
}

module.exports = app.toTree();
