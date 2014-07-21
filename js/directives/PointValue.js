angular.module('cultureApp').directive('pointValue',function(){
    return{
        restrict: 'A',
        controller:function($scope){
            //allow backspace, arrow keys, and number keys
            var allowedKeys= [8,9,13,37,38,39,40,48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105];

            $scope.isNumberOrArrowKey = function(keycode){

            //      alert(allowedKeys.indexOf(keycode));
                if (allowedKeys.indexOf(keycode) != -1) {

                    return true;
                }
                else{
                   // alert('key not allowed');
                    return false;
                }
            };
        },
        link: function (scope, element, attrs) {
            element.on('keydown', function (event) {

                if(!scope.isNumberOrArrowKey(event.keyCode)) {
                    event.preventDefault();
                    //alert("key not valid here");
                    return false;
                }
            });
        }
    }
 });