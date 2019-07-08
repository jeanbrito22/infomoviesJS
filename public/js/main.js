const infomovies = angular.module('infomovies', ['ngRoute', 'ngAnimate']);

infomovies.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    
    $routeProvider
        .when("/generos", {
            templateUrl: "views/generos.html",
            controller: "GenerosController"
        })
        .otherwise({
            redirectTo: "/generos"
        })
})