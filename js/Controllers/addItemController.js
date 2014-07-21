(function(){

    angular.module('cultureApp')
        .controller('addItemController',function($scope,$location,voteUp){

                $scope.name="";
                $scope.description="";
                $scope.points="";
                $scope.location="";
                $scope.category="";


            $scope.somethingPopulated = function(){

                var allTogether = $scope.name + $scope.description + $scope.points + $scope.location +$scope.category;

                if ($scope.name.length > 0 | $scope.description.length > 0 |$scope.points.length > 0 | $scope.location.length > 0 | $scope.category.length > 0 )  {
                    return true;
                }
                return false;
            };

            $scope.addItem = function(form){

                alert(voteUp.sayHello());
                if (form.$valid){


                    $location.path("/main");


                }

            }
        });

})();

