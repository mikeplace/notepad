angular.module('cultureApp').directive('card',function(){
    return{
        restrict:'E',
        //template:"<h1>template found</h1>",
        templateUrl:'culture-card.html',
        replace: 'true',
        scope: {
            name: '=',
            description: '=',
            points: '=',
            location: '=',
            category: '='
        },
        link: function($scope, $elem, $attr) {
            $scope.pointsText="Cultural Points: ";
            if($attr.suggested === "true") {
                $scope.pointsText="Suggested Points: ";
            }
        }
    };
});

