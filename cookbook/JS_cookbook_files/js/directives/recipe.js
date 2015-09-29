app.directive("recipe", function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: "JS_cookbook_files/js/directives/recipe.html"
  };
});