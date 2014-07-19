(function(){

    angular.module('cultureApp')
        .controller('addItemController',function($scope){

                $scope.name="";
                $scope.description="";
                $scope.points="";
                $scope.location="";
                $scope.category="";


            $scope.somethingPopulated = function(){

                var allTogether = $scope.name + $scope.description + $scope.points + $scope.locations +$scope.category;

                if ($scope.name.length > 0 | $scope.description.length > 0 |$scope.points.length > 0 | $scope.location.length > 0 | $scope.category.length > 0 )  {
                    return true;
                }
                return false;
            };
        });

})();

