angular.module('cultureApp',["ngRoute"])

.config(function($routeProvider) {
    $routeProvider
        .when("/main", {
            templateUrl: "view.html"
        })
        .when("/addItem", {
            templateUrl: "addItem.html"
        })
        .otherwise({
            redirectTo: "/main"
        })
});