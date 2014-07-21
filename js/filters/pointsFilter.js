var app = angular.module('cultureApp');

app.filter('pointsFilter',function(){
    return function(input){
        return input + ' Points!'
    }
});