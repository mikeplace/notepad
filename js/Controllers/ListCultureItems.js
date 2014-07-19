angular.module('cultureApp').controller('ListCultureItems',function($scope,$location){


    $scope.addnewItem = function(){
        $location.path("/addItem");
    };

    $scope.cultureItems =[
        {
            name:"Attended mosque",
            appliesTo:"non-muslims",
            description:"Attended and participated in a religous ceremony in a mosque",
            culturalValue:"20",
            location:"Istanbul",
            category:"Religious"
        },
        {
            name:"Observed bodies being burned",
            appliesTo:"non-hindus",
            description:"Viewed dead bodies being burned by their families",
            culturalValue:"65",
            location:"Kathmandu",
            category:"Religious"
        },
        {
            name:"Had dinner with a family who doesn't speak my language",
            appliesTo:"Everyone",
            description:"Attended a dinner with a Syrian family who only speaks Arabic",
            culturalValue:"20",
            location:"Istanbul",
            category:"language"
        }
    ];
});

