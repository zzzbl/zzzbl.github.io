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
   /* $scope.recipes = [
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
     ];*/
    });} else {
    console.log("we are not at null");
      $scope.recipes = JSON.parse(localStorage.getItem('recipearr'));
    console.log($scope.recipes);
      //console.log('retrievedObject: ', JSON.parse(retrievedObject));
     }
    /*
    
    /*;
    $scope.show= function() {
        if (!unique) {
            $scope.recipe.hide();
        }
    }*/
    //$scope.recipes = JSON.parse(localStorage.getItem('recipearr'));
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
        /*$http.post('JS_cookbook_files/js/recipessss.json',$scope.recipes ).
  success(function(data, status, headers, config) {
            console.log("YES post");
            console.log(data);

            
  }).
  error(function(data, status, headers, config) {
        console.log("NO post");
  });*/
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
   /* $scope.removeitem = function(info) { 
        var index = $scope.recipes.indexOf(info);
        removeItem(info);
        /*$scope.recipes.splice(index, 1);*/
      /*   colsole.log("just removed item");
        localStorage.setItem('recipearr', JSON.stringify($scope.recipes));
    };*/
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