var code = angular.module("code", ["ngRoute"]);
code.controller("CodeController", function($scope) {

  doNews();
  $scope.$parent.whichPage("code");
})
