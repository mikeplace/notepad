angular.module('writer').directive('funButton',function(){
    return{
        restrict:'E',
        template:"<button type='button'>Click me</button>",
        replace: 'true'
    };
});