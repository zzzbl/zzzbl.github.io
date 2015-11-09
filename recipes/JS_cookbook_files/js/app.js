var app=angular.module("CookBook",["xeditable"]);
app.run(function(editableOptions) {
  editableOptions.theme = 'default'; // bootstrap3 theme. Can be also 'bs3', 'bs2', 'default'
});
