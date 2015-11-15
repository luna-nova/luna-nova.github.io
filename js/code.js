var code = angular.module("code", ["ngRoute"]);
code.controller("CodeController", function($scope) {

  $scope.$parent.whichPage("code");
  doNews();

})
