app.controller("MainController", ['$scope', '$http', function($scope, $http) {
if (localStorage.getItem("recipearr") === null) {
  console.log("we are at null");
  
$http.get('JS_cookbook_files/js/recipessss.json').success(function(data){
    /*console.log(data);
    $scope.recipes = [];*/    
    $scope.recipes=data;
        console.log("YES");
    }).
error(function(data) {
    console.log("NO");
    });} else {
    console.log("we are not at null");
      $scope.recipes = JSON.parse(localStorage.getItem('recipearr'));
    console.log($scope.recipes);
    }
   
    $scope.rectext = "";
    $scope.recname = "";
    $scope.leftname  = function() {return 20 - $scope.recname.length;};
    $scope.lefttext  = function() {return 100 - $scope.rectext.length;};
    $scope.clear = function() {
        $scope.rectext = "";
        $scope.recname = "";
    };
   
    $scope.add = function() {
        $scope.recipes.push({name:$scope.recname, date:new Date(), description:$scope.rectext,version: 0, last: true});
        alert("Recipe Saved");
        $scope.rectext = "";
        $scope.recname = "";

		console.log("before the setItem");
        localStorage.setItem('recipearr', JSON.stringify($scope.recipes));
        console.log("after setItem");
        var recipearr = JSON.parse(localStorage.getItem('recipearr'));
        console.log("localstorage in work:");
        console.log(recipearr);
    };
    $scope.modify = function() {
        $scope.recname = $scope.recipe.name;
        $scope.rectext = $scope.recipe.description;
    };

    $scope.removeitem = function(smth) {
        colsole.log("just removed item");
    //this.item is the item clicked from the ng-repeat
        var idx = $scope.recipes.indexOf(this.smth);
        if(idx !== -1) {
        $scope.recipes.splice(idx,1);
        };
        localStorage.setItem('recipearr', JSON.stringify($scope.recipes));
        recipearr = JSON.parse(localStorage.getItem('recipearr'));
    };
}]);