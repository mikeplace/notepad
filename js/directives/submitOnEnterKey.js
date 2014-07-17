angular.module('blog').directive('noEnter',function(){
    return{
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('keydown', function (event) {

                if(event.keyCode === 13) {
                    alert("don't press enter here");
                    return false;
                }
            });
        }
    }
 });