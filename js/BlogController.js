angular.module('blog').controller('blogController',function($scope){


    $scope.blogs=[
        {
            title:"My first blog",
            status:"published",
            datePublished:"07/08/2014",
            tags:{tag:"summer"},
            blogtext:"This is going to be a short post about the Beligian Soccer club."
        },
        {
            title:"My second blog",
            status:"published",
            datePublished:"07/14/2014",
            tags:{tag:"summer",tag: "boys"},
            blogtext:"This is going to be a longer post about the Mediteranian Soccer club."
        }];
});

