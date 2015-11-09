app.controller("CreateController", function($scope) {
    $scope.rectext = "";
    $scope.recname = "";
    $scope.leftname  = function() {return 20 - $scope.recname.length;};
    $scope.lefttext  = function() {return 100 - $scope.rectext.length;};
    $scope.clear = function() {
        $scope.rectext = "";
        $scope.recname = "";
    };
    $scope.save  = function() {
        alert("Recipe Saved");
    
    };
});