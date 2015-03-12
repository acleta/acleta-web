export default {
  name: "i18n",
  initialize: function(container, application) {
    var locale = navigator.language.split("-")[0];
    application.set('locale', locale);
  }
};
