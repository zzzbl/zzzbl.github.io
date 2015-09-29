app.controller("MainController",  ['$scope', function($scope) {
     /* ['$scope', '$http', function($scope,$http) {$http.get('http://fs101.www.ex.ua/get/738865503613/7d67c224848d2118525bc6ef24bd8201/163941290/recipes.json').success(function(data){
$http.get('/js/recipes.json').success(function(data){
        $scope.recipes=data;
        ////http://www.ignatovych.com/json/recipessss.json
        XMLHttpRequest cannot load http://www.ignatovych.com/json/recipessss.json. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://127.0.0.1:49642' is therefore not allowed access///
        
    });*/
    $scope.recipes = [
        {
        name: "Pizza",
        date: "1283323623006",
        description: "Bake 15min, then serve. Blablablabla",
        version: 0,
        last: false
        },
        {
        name: "Pizza",
        date: "1288323623006",
        description: "Bake 10min, then serve. Blablablabla",
        version: 1,
        last: true
        },
        {
        name: "Quiche",
        date: "1188323623008",
        description: "Bake 25min, then serve. Blablablabla. Blablablabla",
        version: 0,
        last: true
        },
        {
        name: "Cake",
        date: "1429008364350",
        description: "Bake bluberries 25min, then serve. Blablablabla. Blablablabla",
        version: 0,
        last: true
        }  
     ];
    
    /*;
    $scope.show= function() {
        if (!unique) {
            $scope.recipe.hide();
        }
    }*/
    $scope.rectext = "";
    $scope.recname = "";
    $scope.leftname  = function() {return 20 - $scope.recname.length;};
    $scope.lefttext  = function() {return 100 - $scope.rectext.length;};
    $scope.clear = function() {
        $scope.rectext = "";
        $scope.recname = "";
    };
   /* $scope.save  = function() {
        alert("Recipe Saved");
    
    }; */   
    $scope.add = function() {
        $scope.recipes.push({name:$scope.recname, date:new Date(), description:$scope.rectext,version: 0, last: true});
        alert("Recipe Saved");
        $scope.rectext = "";
        $scope.recname = "";
    };
    $scope.modify = function() {
        $scope.recname = $scope.recipe.name;
        $scope.rectext = $scope.recipe.description;
    };
    if (window.localStorage) { // Only do this if the browser supports it
        localStorage.recipes = $scope.recipes;
    }
}]);