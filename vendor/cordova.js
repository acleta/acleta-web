(function() {
  function inject(script) {
    var tag = document.createElement('script');
    tag.src = script

    var location = document.getElementsByTagName('script')[0];
    location.parentNode.insertBefore(tag, location);
  }

  inject('cordova.js');
  inject('cordova_plugins.js');
})(document)
