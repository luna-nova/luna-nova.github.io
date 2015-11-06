var portfolio = angular.module("portfolio", ["ngRoute"])
  .config(["$routeProvider", function ($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: "partials/home.html"
    })
    .when("/music", {
      templateUrl: "partials/music.html"
    });
  }]);

portfolio.controller("MainController", function($scope) {

});
