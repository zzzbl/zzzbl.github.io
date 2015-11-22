app.controller("MainController", ['$scope', '$http', function($scope, $http) {
	if (localStorage.getItem("recipearr") === null ||localStorage.getItem("recipearr")==[]) {  
		$http.get('JS_cookbook_files/js/recipess.json').success(function(data){ 
			$scope.recipes=data;
    	}).
		error(function(data) {
			console.log("http get doesn't work");
    	});} else {
      		$scope.recipes = JSON.parse(localStorage.getItem('recipearr'));
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
        localStorage.setItem('recipearr', JSON.stringify($scope.recipes));
        var recipearr = JSON.parse(localStorage.getItem('recipearr'));
    };
	
    $scope.removeitem = function(smth) {
		var array_of_use = $scope.recipes;
		var idx  = smth;
		array_of_use.splice(idx,1);
		
        localStorage.setItem('recipearr', JSON.stringify(array_of_use));
        $scope.recipes = JSON.parse(localStorage.getItem('recipearr'));
	};
	
	var edit_show_var = false;
	
	$scope.edititem = function(idx) {
		edit_show_var = true;
	    var edit_recipe = angular.copy($scope.recipes[idx]); // as the "=" provides a link to an object, which causes a circle error.
		$scope.recname = edit_recipe.name;
		$scope.rectext = edit_recipe.description;
		
		$scope.save_edit = function() {
			if(edit_recipe.name!==$scope.recname || edit_recipe.description!==$scope.rectext) {
				
				if($scope.recipes[idx].oldver == undefined || $scope.recipes[idx].oldver == "") {
					$scope.recipes[idx].oldver = [];
				}
				$scope.recipes[idx].oldver.unshift(edit_recipe); //add to the 1st place. so older versions
				$scope.recipes[idx].name = $scope.recname;
				$scope.recipes[idx].description = $scope.rectext;
				$scope.recipes[idx].date = Date();
				$scope.clear();
				
				localStorage.setItem('recipearr', JSON.stringify($scope.recipes));
				$scope.recipes = JSON.parse(localStorage.getItem('recipearr'));				
				
			} else { $scope.clear();}
			
			edit_show_var = false;	
			}
	}
	
	$scope.oldrecipes=[];
	
	$scope.viewmodif = function(idx) {
		$scope.oldrecipes[idx] = $scope.recipes[idx].oldver;
	}
	
	$scope.edit_show  = function() {return edit_show_var;};
	
}]);
/*by O.Ignatovych*/

