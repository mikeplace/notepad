angular.module('cultureApp').directive('card',function(){
    return{
        restrict:'E',
        //template:"<h1>template found</h1>",
        templateUrl:"cultureCard.html",
        replace: 'true',
        scope: {
            name: '=',
            description: '=',
            points: '=',
            description: '=',
            category: '='
        }
    };
});



